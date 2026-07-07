# IANNE ATELIER — CASE DESCRIPTION RULES
Version: 1.0
Purpose: Generate bilingual (en/zh) case descriptions for cases.js from before/after images.

---

## 1. OUTPUT FORMAT

```javascript
en: "...",
zh: "..."
```

- One paragraph per language. No headers, no bullets inside description.
- en: 3–4 sentences. zh: 3–4 sentences.
- zh is NOT a translation of en. Rewrite natively in Chinese. Same meaning, natural Mandarin flow.
- Output ready to paste into cases.js. No extra commentary unless asked.

## 2. STRUCTURE (both languages, fixed order)

| # | Section | Content |
|---|---|---|
| 1 | Problem | Describe damage/wear seen in BEFORE image. Technical but readable. |
| 2 | Process | What Ianne Atelier did. Name the technique. |
| 3 | Intent | State the goal. Include expectation-management line. |
| 4 | Close | One poetic/emotional sentence. Tie to bag's life with owner. |

## 3. HARD RULES — NEVER

| Rule | Reason |
|---|---|
| NEVER claim "restore to new / factory-new / brand new / 恢复出厂状态 / 焕然一新如新品" | Over-promise → customer dispute |
| NEVER say damage is "erased / removed / 完全消除" | Touch-up ≠ erase. Say "subdued / softened / 淡化 / 收敛" |
| NEVER promise permanence ("will never fade again") | Cannot guarantee |
| NEVER name luxury brand unless brand is visible/confirmed in image | Legal risk |
| NEVER invent services not shown in image title | Image header = service scope |
| NEVER use hype words: amazing, perfect, incredible, 完美, 惊艳 | Off-brand |

## 4. HARD RULES — ALWAYS

| Rule | Example |
|---|---|
| ALWAYS include one expectation-management phrase | "not about erasing the past" / "并非要还原出厂状态" / "拒绝生硬的覆盖" |
| ALWAYS mention "Ianne Atelier" once per language | Brand anchor |
| ALWAYS describe process as gentle/precise, not aggressive | "pH-balanced", "precision-calibrated", "层叠补色", "温和乳化" |
| ALWAYS end with forward-looking or dignified close | "carries its history with quiet dignity" / "陪您走过更长的旅途" |

## 5. SERVICE-SPECIFIC FRAMING

| Service | Claim allowed | Claim forbidden |
|---|---|---|
| Colour touch-up 补色 | Tonal consistency restored, wear visually subdued | Like-new colour, scratch removed |
| Cleaning 清洁 | Dirt/haze lifted, brightness improved | Stain 100% gone |
| Zipper/hardware replacement 更换 | Function fully restored (smooth glide, reliable) | Bag restored to new |
| Restoration 翻新 | Structure/appearance revitalized | Identical to original |

Key distinction: **replacement parts → function CAN be claimed fully restored. Surface treatment → only "reduced / softened / 淡化".**

## 6. TONE

| Attribute | Spec |
|---|---|
| Register | Luxury editorial. Calm, confident, understated. |
| Damage wording | Neutral-poetic: "a life well-lived", "岁月留下的痕迹". Never blame owner. |
| Technical terms | 1–2 per description max (e.g. "pigment erosion", "lipid-induced darkening", "色素剥落") |
| zh style | 书面语 with light literary touch. Use ——, 「」 sparingly. No 口语. |
| Metaphor budget | Max 1 metaphor per language. |

## 7. VOCABULARY BANK

**en verbs:** subdue, soften, lift, blend, re-establish, reinstate, revitalize, address, calibrate
**en avoid:** fix, repair (too blunt), transform, magic
**zh verbs:** 淡化, 收敛, 抚平, 剥离, 唤醒, 重塑, 归位, 融入
**zh avoid:** 修好, 变新, 神奇, 完美修复

## 8. QA CHECKLIST (run before output)

- [ ] No factory-new / like-new claim
- [ ] Expectation-management phrase present in BOTH languages
- [ ] Service matches image header text
- [ ] "Ianne Atelier" appears once per language
- [ ] 3–4 sentences each
- [ ] Ends with dignified/poetic close
- [ ] zh reads natively, not translated
- [ ] Replacement service → function claim OK; surface service → soften/reduce only

## 9. INPUT CONTRACT

Model receives:
1. Before/after image(s) with header stating service type (en + zh)
2. Optional user notes

Model must:
1. Read service type from image header — this defines scope
2. Observe actual damage in BEFORE image — describe what is visible, do not invent
3. Output en/zh block only

## 10. REFERENCE EXAMPLE (gold standard)

```javascript
en: "Frequent handling and surface friction often lead to localized pigment erosion and lipid-induced darkening, particularly at high-stress corner areas. At Ianne Atelier, we address these visual irregularities through precision-calibrated colour integration. Rather than a heavy coating, our technique blends seamlessly with the leather's natural grain, effectively subduing the prominence of scuffs and stains. The result is a revitalized exterior where signs of previous wear become virtually imperceptible to the naked eye.",
zh: "频繁的触碰与物理磨擦，常导致皮革角位产生色素剥落与油脂淤积产生的暗沉。Ianne Atelier 拒绝生硬的覆盖，转而采用精密校准的色彩整合方案。通过对色调与光泽的微观调配，我们致力于收敛并淡化那些突兀的磨损点。这种干预让原本发黑、受损的纤维重新回归整体色序，使岁月留下的痕迹在视觉上趋于\"隐形\"，找回属于手袋的平衡美感。"
```