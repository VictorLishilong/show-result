# P429 肾间质炎症分割

[打开汇报页面](https://victorlishilong.github.io/show-result/p429/) · [项目仓库](https://github.com/VictorLishilong/wsi_kidney) · [汇总指标](metrics.json)

原开发验证划分为 100 例训练、24 例验证。阳性完整 ROI 宏 Dice 为 **0.6956**，宏召回率 **74.0%**。模型匹配到 149 个标注病灶中的 **124 个**。

| 示例 | Dice | 高清图 |
| --- | ---: | --- |
| 01 · 高重叠 | 0.9187 | [原始 ROI](roi/roi-01-rgb.webp) · [人工标注](roi/roi-01-annotation.webp) · [P429 预测](roi/roi-01-prediction.webp) |
| 02 · 范围漏分 | 0.3396 | [原始 ROI](roi/roi-02-rgb.webp) · [人工标注](roi/roi-02-annotation.webp) · [P429 预测](roi/roi-02-prediction.webp) |
| 03 · 预测范围偏大 | 0.4855 | [原始 ROI](roi/roi-03-rgb.webp) · [人工标注](roi/roi-03-annotation.webp) · [P429 预测](roi/roi-03-prediction.webp) |
| 04 · 漏分与误分并存 | 0.3967 | [原始 ROI](roi/roi-04-rgb.webp) · [人工标注](roi/roi-04-annotation.webp) · [P429 预测](roi/roi-04-prediction.webp) |
