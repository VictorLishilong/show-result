# P429 肾间质炎症分割

[打开汇报页面](https://victorlishilong.github.io/show-result/) · [项目仓库](https://github.com/VictorLishilong/wsi_kidney) · [汇总指标](metrics.json)

原始划分为 **100 例训练、24 例开发验证、5 例独立保留测试**。24 例开发验证中有 23 例炎症阳性和 1 例炎症阴性。阳性完整 ROI 的 Macro Dice **0.6956** 和 Macro Recall **74.0%** 均按 23 例阳性病例等权平均。模型匹配到 149 个验证标注病灶中的 **124 个**。

### 开发验证集的 4 个 ROI 示例

| 示例 | Dice | 高清图 |
| --- | ---: | --- |
| 01 · 高重叠 | 0.9187 | [原始 ROI](roi/roi-01-rgb.webp) · [人工标注](roi/roi-01-annotation.webp) · [P429 预测](roi/roi-01-prediction.webp) |
| 02 · 范围漏分 | 0.3396 | [原始 ROI](roi/roi-02-rgb.webp) · [人工标注](roi/roi-02-annotation.webp) · [P429 预测](roi/roi-02-prediction.webp) |
| 03 · 预测范围偏大 | 0.4855 | [原始 ROI](roi/roi-03-rgb.webp) · [人工标注](roi/roi-03-annotation.webp) · [P429 预测](roi/roi-03-prediction.webp) |
| 04 · 漏分与误分并存 | 0.3967 | [原始 ROI](roi/roi-04-rgb.webp) · [人工标注](roi/roi-04-annotation.webp) · [P429 预测](roi/roi-04-prediction.webp) |

### 独立保留测试的 5 个 ROI

展示全部 5 例的原图、人工标注和冻结 P429 的预测。

| 病例 | 高清图 |
| --- | --- |
| 01 | [原始 ROI](test5/test-01-rgb.webp) · [人工标注](test5/test-01-annotation.webp) · [P429 预测](test5/test-01-prediction.webp) |
| 02 | [原始 ROI](test5/test-02-rgb.webp) · [人工标注](test5/test-02-annotation.webp) · [P429 预测](test5/test-02-prediction.webp) |
| 03 | [原始 ROI](test5/test-03-rgb.webp) · [人工标注](test5/test-03-annotation.webp) · [P429 预测](test5/test-03-prediction.webp) |
| 04 | [原始 ROI](test5/test-04-rgb.webp) · [人工标注](test5/test-04-annotation.webp) · [P429 预测](test5/test-04-prediction.webp) |
| 05 | [原始 ROI](test5/test-05-rgb.webp) · [人工标注](test5/test-05-annotation.webp) · [P429 预测](test5/test-05-prediction.webp) |
