# P429 肾间质炎症分割

[打开汇报页面](https://victorlishilong.github.io/show-result/p429/) · [项目仓库](https://github.com/VictorLishilong/wsi_kidney) · [汇总指标](metrics.json)

原始划分为 **100 例训练、24 例开发验证、5 例独立保留测试**。24 例开发验证中有 23 例炎症阳性和 1 例炎症阴性。阳性完整 ROI 宏 Dice **0.6956** 和宏召回率 **74.0%** 均按 23 例阳性病例等权平均。模型匹配到 149 个验证标注病灶中的 **124 个**。

本页刊载的 4 个 ROI 是开发验证集展示示例。P429 的 5 例独立测试结果尚未发布，此前发布的 5 例结果对应 P10。

| 示例 | Dice | 高清图 |
| --- | ---: | --- |
| 01 · 高重叠 | 0.9187 | [原始 ROI](roi/roi-01-rgb.webp) · [人工标注](roi/roi-01-annotation.webp) · [P429 预测](roi/roi-01-prediction.webp) |
| 02 · 范围漏分 | 0.3396 | [原始 ROI](roi/roi-02-rgb.webp) · [人工标注](roi/roi-02-annotation.webp) · [P429 预测](roi/roi-02-prediction.webp) |
| 03 · 预测范围偏大 | 0.4855 | [原始 ROI](roi/roi-03-rgb.webp) · [人工标注](roi/roi-03-annotation.webp) · [P429 预测](roi/roi-03-prediction.webp) |
| 04 · 漏分与误分并存 | 0.3967 | [原始 ROI](roi/roi-04-rgb.webp) · [人工标注](roi/roi-04-annotation.webp) · [P429 预测](roi/roi-04-prediction.webp) |
