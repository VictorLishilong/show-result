"use strict";

const views = ["rgb", "annotation", "prediction"];
const params = new URLSearchParams(location.search);
const status = document.querySelector("#status");
const caseSelect = document.querySelector("#case");
const buttons = [...document.querySelectorAll("button[data-view]")];
const scale = document.querySelector("#scale");
let active = views.includes(params.get("view")) ? params.get("view") : "rgb";

async function init() {
    const response = await fetch("zoom/cases.json");
    if (!response.ok) {
        throw new Error("病例列表加载失败");
    }
    const cases = await response.json();
    const chosen = params.get("case");
    const id = Object.hasOwn(cases, chosen) ? chosen : "test-01";
    const detail = cases[id];
    const base = "zoom/" + id + "/";
    const isTest = id.startsWith("test-");
    document.querySelector("#back").href = isTest ? "../#held-out" : "../#examples";
    for (const name of Object.keys(cases).sort()) {
        const group = name.startsWith("test-") ? "保留测试" : "开发验证";
        caseSelect.add(new Option(group + " " + name.slice(-2), name));
    }
    caseSelect.value = id;
    caseSelect.disabled = false;
    caseSelect.addEventListener("change", () => {
        const next = new URLSearchParams({ case: caseSelect.value, view: active });
        location.search = next.toString();
    });
    document.querySelector("#attribution").textContent =
        `滚动或双指缩放，拖动查看细节。图像最高分辨率 ${detail.microns_per_pixel.toFixed(3)} µm/px，叠层沿用原评估网格。`;
    const storedTiles = Object.fromEntries(
        Object.entries(detail.tiles).map(([level, names]) => [level, new Set(names)])
    );
    const viewer = OpenSeadragon({
        id: "canvas",
        showNavigationControl: false,
        showNavigator: true,
        navigatorPosition: "TOP_RIGHT",
        crossOriginPolicy: false,
        maxZoomPixelRatio: 2,
        tileSources: {
            width: detail.width,
            height: detail.height,
            tileSize: detail.tile_size,
            tileOverlap: 0,
            minLevel: detail.min_level,
            maxLevel: detail.max_level,
            tileExists(level, x, y) {
                return storedTiles[level]?.has(x + "_" + y) ?? false;
            },
            getTileUrl(level, x, y) {
                return base + level + "/" + x + "_" + y + ".webp";
            }
        }
    });

    const mask = document.createElement("img");
    mask.alt = "";
    mask.setAttribute("aria-hidden", "true");
    mask.style.pointerEvents = "none";
    mask.style.visibility = "hidden";
    mask.style.imageRendering = "pixelated";
    function applyView(view) {
        active = view;
        mask.style.visibility = "hidden";
        if (view !== "rgb") {
            mask.onload = () => {
                if (active === view) mask.style.visibility = "visible";
            };
            mask.src = base + view + ".png";
            if (mask.complete && mask.naturalWidth > 0) mask.style.visibility = "visible";
        }
        for (const button of buttons) {
            button.setAttribute("aria-pressed", String(button.dataset.view === view));
        }
        history.replaceState(null, "", "?" + new URLSearchParams({ case: id, view }));
    }
    function updateScale() {
        const ratio = viewer.viewport.viewportToImageZoom(viewer.viewport.getZoom());
        const pixels = microns => microns * ratio / detail.microns_per_pixel;
        const choices = [2000, 1000, 500, 200, 100, 50, 20, 10, 5];
        const value = choices.find(x => pixels(x) <= 120) ?? 5;
        document.querySelector("#scale-bar").style.width = pixels(value) + "px";
        document.querySelector("#scale-text").textContent = value + " µm";
    }
    viewer.addOnceHandler("open", () => {
        viewer.addOverlay({
            element: mask,
            location: new OpenSeadragon.Rect(0, 0, 1, detail.height / detail.width),
            checkResize: false,
        });
        for (const button of buttons) {
            button.disabled = false;
            button.addEventListener("click", () => applyView(button.dataset.view));
        }
        const actions = {
            "zoom-out": () => viewer.viewport.zoomBy(0.7),
            home: () => viewer.viewport.goHome(),
            "zoom-in": () => viewer.viewport.zoomBy(1.43)
        };
        for (const [id, action] of Object.entries(actions)) {
            const control = document.getElementById(id);
            control.disabled = false;
            control.addEventListener("click", () => {
                action();
                viewer.viewport.applyConstraints();
            });
        }
        applyView(active);
        scale.hidden = false;
        updateScale();
        status.textContent = "";
    });
    viewer.addHandler("update-viewport", updateScale);
    viewer.addHandler("open-failed", () => {
        status.textContent = "切片加载失败，请刷新页面重试。";
    });
}

init().catch(error => {
    status.textContent = "高清图加载失败，请刷新页面重试。";
    console.error(error);
});
