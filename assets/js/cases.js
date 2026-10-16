/* ==================================================
   Case Registry – Single Source of Truth
   ================================================== */

const CASES = {
  "0001": {
    brand: "LV",
    service: { en: "Cleaning", zh: "清洗" },
    images: [
      "https://pub-cb39ce8f1e9548d2a5935c9f21e20a35.r2.dev/cases/0001_01.webp",
      "https://pub-cb39ce8f1e9548d2a5935c9f21e20a35.r2.dev/cases/0001_02.webp"
    ],
    title: { en: "LV Bag Cleaning", zh: "LV 包包清洗护理" },
    desc: {
      en: "Gentle cleaning to remove discoloration while preserving the original leather texture.",
      zh: "采用温和清洗方式，去除变色问题，同时保留皮革原有质感。"
    }
  },

  "0002": {
    brand: "Coach",
    service: { en: "Cleaning", zh: "清洗" },
    images: [
      "https://pub-cb39ce8f1e9548d2a5935c9f21e20a35.r2.dev/cases/0002_01.webp"
    ],
    title: { en: "Coach Bag Cleaning", zh: "Coach 包包清洗护理" },
    desc: {
      en: "Careful cleaning performed to refresh the appearance without damaging the leather.",
      zh: "在不伤害皮革的前提下进行细致清洗，使外观焕然一新。"
    }
  },

  "0003": {
    brand: "MCM",
    service: { en: "Cleaning", zh: "清洗" },
    images: [
      "https://pub-cb39ce8f1e9548d2a5935c9f21e20a35.r2.dev/cases/0003_01.webp"
    ],
    title: { en: "MCM Bag Cleaning", zh: "MCM 包包清洗护理" },
    desc: {
      en: "Professional cleaning carried out on a MCM bag with visible signs of wear.",
      zh: "针对有明显使用痕迹的 MCM 包进行专业清洗护理。"
    }
  },

  "0004": {
    brand: "Prada",
    service: { en: "Cleaning", zh: "清洗" },
    images: [
      "https://pub-cb39ce8f1e9548d2a5935c9f21e20a35.r2.dev/cases/0004_00.webp",
      "https://pub-cb39ce8f1e9548d2a5935c9f21e20a35.r2.dev/cases/0004_01.webp",
      "https://pub-cb39ce8f1e9548d2a5935c9f21e20a35.r2.dev/cases/0004_02.webp",
      "https://pub-cb39ce8f1e9548d2a5935c9f21e20a35.r2.dev/cases/0004_03.webp"
    ],
    title: { en: "Prada Bag Cleaning", zh: "Prada 包包清洗护理" },
    desc: {
      en: "Professional cleaning carried out on a Prada bag with visible signs of wear.",
      zh: "针对有明显使用痕迹的 Prada 包进行专业清洗护理。"
    }
  },

  "0005": {
    brand: "Coach",
    service: { en: "Colour Restore", zh: "补色" },
    images: [
      "https://pub-cb39ce8f1e9548d2a5935c9f21e20a35.r2.dev/cases/0005_00.webp",
      "https://pub-cb39ce8f1e9548d2a5935c9f21e20a35.r2.dev/cases/0005_01.webp",
      "https://pub-cb39ce8f1e9548d2a5935c9f21e20a35.r2.dev/cases/0005_02.webp",
      "https://pub-cb39ce8f1e9548d2a5935c9f21e20a35.r2.dev/cases/0005_03.webp"
    ],
    title: { en: "Coach Bag Colour Restore", zh: "Coach 包包补色" },
    desc: {
      en: "Original colour had faded unevenly due to wear and exposure. The surface was carefully cleaned and colour-corrected to restore depth and consistency while preserving the original leather texture.",
      zh: "因日常使用与环境影响，包身颜色出现不均匀褪色。经过细致清洁与补色处理，在保留原有皮质纹理的前提下，恢复整体色泽与层次。"
    }
  },

  "0006": {
    brand: "Braun Buffel",
    service: { en: "Colour Restore", zh: "补色" },
    images: [
      "https://pub-cb39ce8f1e9548d2a5935c9f21e20a35.r2.dev/cases/0006_00.webp",
      "https://pub-cb39ce8f1e9548d2a5935c9f21e20a35.r2.dev/cases/0006_01.webp",
      "https://pub-cb39ce8f1e9548d2a5935c9f21e20a35.r2.dev/cases/0006_02.webp",
      "https://pub-cb39ce8f1e9548d2a5935c9f21e20a35.r2.dev/cases/0006_03.webp",
      "https://pub-cb39ce8f1e9548d2a5935c9f21e20a35.r2.dev/cases/0006_04.webp"
    ],
    title: { en: "Braun Buffel Bag Colour Touch-up", zh: "Braun Buffel 包包局部补色" },
    desc: {
      en: "Everyday friction had left pale scuffs across the black leather of this Braun Buffel bag, most visible beside the embossed logo and along the base corners, where abrasion had worn through to lighter fibres. Ianne Atelier blended a matched black pigment into each worn area in thin layers, keeping the leather's natural grain and the crispness of the logo intact. This is not about erasing every mark, but softening the wear until the surface reads as one even tone. The bag returns poised and understated, ready for daily duty.",
      zh: "日常摩擦让这只 Braun Buffel 包的黑色皮面留下浅白擦痕，尤以压印标志旁与底部包角最为明显，磨损处已露出较浅的皮层纤维。Ianne Atelier 以调配相符的黑色色料，薄层多次融入每一处磨损，同时保留皮革天然的纹理与标志压印的清晰轮廓。我们并非要抹去每一道痕迹，而是淡化磨损，让整体皮面重新归于均匀一致。这只包以沉稳、内敛的姿态，继续陪伴您的日常。"
    }
  },

  "0007": {
    brand: "Others",
    service: { en: "Colour Restore", zh: "补色" },
    images: [
      "https://pub-cb39ce8f1e9548d2a5935c9f21e20a35.r2.dev/cases/0007_00.webp"
    ],
    title: { en: "Pink Bag Colour Restore", zh: "粉色包包补色" },
    desc: {
      en: "The handle showed visible colour wear and small marks from regular use. Localised colour touch-up was carried out to even out the tone while maintaining the original leather texture.",
      zh: "手柄部位因日常使用出现明显褪色与细小痕迹。通过局部补色处理，使颜色更均匀，同时保留原有皮革质感。"
    }
  },

  "0008": {
    brand: "MCM",
    service: { en: "Colour Restore", zh: "补色" },
    images: [
      "https://pub-cb39ce8f1e9548d2a5935c9f21e20a35.r2.dev/cases/0008_00.webp",
      "https://pub-cb39ce8f1e9548d2a5935c9f21e20a35.r2.dev/cases/0008_01.webp"
    ],
    title: { en: "MCM Colour Restore", zh: "MCM 包包补色" },
    desc: {
      en: "Minor colour wear and surface marks were visible around the corner and seam areas. Targeted colour touch-up was applied to improve tone consistency while preserving the original leather grain.",
      zh: "包包边角与缝线处可见轻微褪色及表面使用痕迹。通过局部补色处理，改善颜色一致性，同时保留原有皮革纹理。"
    }
  },

  "0009": {
    brand: "Gucci",
    service: { en: "Colour Touch-up", zh: "局部补色" },
    images: [
      "https://pub-cb39ce8f1e9548d2a5935c9f21e20a35.r2.dev/cases/0009_00.webp"
    ],
    title: { en: "Gucci GG Marmont Colour Restore", zh: "Gucci 包包补色" },
    desc: {
      en: "Colour shading developed over time from regular use. Subtle colour touch-up helped refine the appearance without changing the original character.",
      zh: "因长期使用，包身侧边颜色出现暗沉与不均匀的色差。通过补色处理改善整体色调平衡，使包包在不改变原有质感的情况下，继续保持良好的使用观感。"
    }
  },

  "0010": {
    brand: "Others",
    service: { en: "Colour Touch-up", zh: "局部补色" },
    images: [
      "https://pub-cb39ce8f1e9548d2a5935c9f21e20a35.r2.dev/cases/0010_00.webp",
      "https://pub-cb39ce8f1e9548d2a5935c9f21e20a35.r2.dev/cases/0010_01.webp"
    ],
    title: { en: "Colour Touch-Up", zh: "包包局部补色" },
    desc: {
      en: "High-contact areas naturally show signs of wear over time. Through targeted colour touch-up, the visual impact of colour loss can be softened, allowing the bag to continue being used with a more refined appearance.",
      zh: "日常使用下，高接触部位会逐渐产生色泽损耗。经针对性的局部补色修复，使视觉磨损感减弱，让包包维持更协调的使用状态。"
    }
  },

  "0011": {
    brand: "Others",
    service: { en: "Edge Oil", zh: "边油修复" },
    images: [
      "https://pub-cb39ce8f1e9548d2a5935c9f21e20a35.r2.dev/cases/0011_00.webp",
      "https://pub-cb39ce8f1e9548d2a5935c9f21e20a35.r2.dev/cases/0011_01.webp"
    ],
    title: { en: "Bag Edge Oil Repair", zh: "包包边油修复" },
    desc: {
      en: "Edge oil deterioration is a common form of wear over time. While many believe it requires full replacement, targeted repair can often address the affected areas. With controlled refinishing, the visual impact of cracks and peeling can be significantly reduced, allowing the structure to remain intact.",
      zh: "长期使用下，边油部位容易产生龟裂与磨损。许多人认为此类问题无法修复，只能更换。事实上，透过专业修复技术，可对原有结构进行修整，降低损耗痕迹的可见度，维持整体外观协调。"
    }
  },

  "0012": {
    brand: "LV",
    service: { en: "Cleaning", zh: "清洗" },
    images: [
      "https://pub-cb39ce8f1e9548d2a5935c9f21e20a35.r2.dev/cases/0012_00.webp"
    ],
    title: { en: "LV Bag Cleaning Service", zh: "LV 包包清洗护理" },
    desc: {
      en: "Over time, contaminants accumulate within fabric weaves, causing subtle discoloration. Moving away from harsh mechanical friction, Ianne Atelier utilizes a controlled suspension method to lift particles without weakening delicate fibers. This process is designed to refine the interior's condition, improving the overall aesthetic while respecting the natural aging process of the material.",
      zh: "随时间推移，污垢会积聚在织物经纬之间导致变色。区别于粗放的机械摩擦，Ianne Atelier 采用受控的悬浮清洁法，在不削弱纤维韧性的前提下分离杂质。该工艺旨在优化内衬的现有状态，在改善整体美感的同时，尊重材质在自然使用过程中的演变。"
    }
  },

  "0013": {
    brand: "LV",
    service: { en: "Edge Oil", zh: "边油修复" },
    images: [
      "https://pub-cb39ce8f1e9548d2a5935c9f21e20a35.r2.dev/cases/0013_00.webp"
    ],
    title: { en: "LV Bag Edge Oil Repair", zh: "LV 包包边油修复" },
    desc: {
      en: "Edge oil deterioration, typically seen as cracking or peeling, is a natural result of structural flexing and environmental exposure over time. At Ianne Atelier, we focus on mitigating these signs of wear through a controlled refinishing process. This targeted approach significantly reduces the visual gap and stabilizes the edge to prevent further fraying, improving the bag's aesthetic while respecting its authentic history.",
      zh: "边油开裂或脱落是由于包身结构的长期弯折与环境影响产生的自然老化现象。Ianne Atelier 主张通过受控的重涂工艺，针对性地淡化磨损痕迹。我们的修复方案旨在显著缩小视觉上的陈旧差距，并在不破坏原有结构的前提下，稳固边缘以防止基底进一步磨损，在改善质感的同时延续奢侈品的陪伴价值。"
    }
  },

  "0014": {
    brand: "Coach",
    service: { en: "Cleaning", zh: "清洗" },
    images: [
      "https://pub-cb39ce8f1e9548d2a5935c9f21e20a35.r2.dev/cases/0014_00.webp",
      "https://pub-cb39ce8f1e9548d2a5935c9f21e20a35.r2.dev/cases/0014_01.webp",
      "https://pub-cb39ce8f1e9548d2a5935c9f21e20a35.r2.dev/cases/0014_02.webp"
    ],
    title: { en: "Coach Bag Cleaning Service", zh: "Coach 包包清洗护理" },
    desc: {
      en: "Years of use lead to inevitable lipid accumulation and oxidation within zipper tapes. While natural aging cannot be fully reversed, Ianne Atelier focuses on mitigating these effects through a controlled cleansing process. By lifting the majority of embedded particles, we significantly reduce the visual gap caused by years of wear, refreshing the bag's overall aesthetic while maintaining the structural integrity of the fibers.",
      zh: "针对拉链布因长年接触油脂而产生的氧化现象，Ianne Atelier 主张理性的修复而非破坏性翻新。通过受控的清洁工艺，我们致力于最大限度地淡化顽固污垢并缩小视觉上的陈旧差距。在保护纤维结构的前提下，显著提升包包的整体整洁度，让您的爱物重焕体面的质感，延续其陪伴价值。"
    }
  },

  "0015": {
    brand: "Coach",
    service: { en: "Edge Oil", zh: "边油修复" },
    images: [
      "https://pub-cb39ce8f1e9548d2a5935c9f21e20a35.r2.dev/cases/0015_00.webp",
      "https://pub-cb39ce8f1e9548d2a5935c9f21e20a35.r2.dev/cases/0015_01.webp",
      "https://pub-cb39ce8f1e9548d2a5935c9f21e20a35.r2.dev/cases/0015_02.webp"
    ],
    title: { en: "Coach Edge Oil Repair", zh: "Coach 包包边油修复" },
    desc: {
      en: "Years of dynamic movement naturally lead to the gradual fragmentation of the bag's edge sealant. Rather than attempting an artificial \"reset,\" Ianne Atelier employs a calibrated manual intervention to alleviate the visual disruption of cracks and peeling. By layering subtle, high-fidelity finishes, we curb the aesthetic deviation caused by age, ensuring the piece retains its dignified character while remaining resilient for the journey ahead.",
      zh: "边缘涂层的碎裂与剥落，是包身在长期动态使用下产生的物理应力痕迹。Ianne Atelier 拒绝生硬的\"格式化\"翻新，转而采用一种精密校准的手工干预，旨在淡化这些磨损带来的视觉干扰。通过细腻的层叠处理，我们有效收敛了因老化产生的质感差距，在尊重物件使用痕迹的同时，赋予其更稳固、含蓄的现代观感。"
    }
  },

  "0016": {
    brand: "Longchamp",
    service: { en: "Colour Touch-up", zh: "局部补色" },
    images: [
      "https://pub-cb39ce8f1e9548d2a5935c9f21e20a35.r2.dev/cases/0016_00.webp",
      "https://pub-cb39ce8f1e9548d2a5935c9f21e20a35.r2.dev/cases/0016_01.webp",
      "https://pub-cb39ce8f1e9548d2a5935c9f21e20a35.r2.dev/cases/0016_02.webp",
      "https://pub-cb39ce8f1e9548d2a5935c9f21e20a35.r2.dev/cases/0016_03.webp",
      "https://pub-cb39ce8f1e9548d2a5935c9f21e20a35.r2.dev/cases/0016_04.webp",
      "https://pub-cb39ce8f1e9548d2a5935c9f21e20a35.r2.dev/cases/0016_05.webp"
    ],
    title: { en: "LongChamp Colour Touch-Up", zh: "LongChamp 包包局部补色" },
    desc: {
      en: "Frequent handling and surface friction often lead to localized pigment erosion and lipid-induced darkening, particularly at high-stress corner areas. At Ianne Atelier, we address these visual irregularities through precision-calibrated colour integration. Rather than a heavy coating, our technique blends seamlessly with the leather's natural grain, effectively subduing the prominence of scuffs and stains. The result is a revitalized exterior where signs of previous wear become virtually imperceptible to the naked eye.",
      zh: "频繁的触碰与物理磨擦，常导致皮革角位产生色素剥落与油脂淤积产生的暗沉。Ianne Atelier 拒绝生硬的覆盖，转而采用精密校准的色彩整合方案。通过对色调与光泽的微观调配，我们致力于收敛并淡化那些突兀的磨损点。这种干预让原本发黑、受损的纤维重新回归整体色序，使岁月留下的痕迹在视觉上趋于\"隐形\"，找回属于手袋的平衡美感。"
    }
  },

  "0017": {
    brand: "Coach",
    service: { en: "Strap Renewal", zh: "手提袋换新" },
    images: [
      "https://pub-cb39ce8f1e9548d2a5935c9f21e20a35.r2.dev/cases/0017_00.webp"
    ],
    title: { en: "Coach Strap Replacement", zh: "Coach 手提袋换新" },
    desc: {
      en: "When leather fibers reach a state of advanced degradation, traditional restoration may yield diminishing returns. This case illustrates a calculated component replacement where the fatigued original strap is retired in favor of a high-fidelity new element. By integrating a fresh, resilient strap, Ianne Atelier ensures the bag's load-bearing integrity is secured, providing a seamless aesthetic continuity that outlasts superficial repairs.",
      zh: "当皮革纤维进入深度降解状态，常规修复的边际效应将显著降低。本案例展示了针对性部件更换的必要性——在评估修复价值后，我们推荐以高品质的新件替代已疲劳的旧手提带。Ianne Atelier 通过这种物理更替，彻底解决了断裂风险并重塑了负重结构的稳固性，让您的爱包在审美与功能性上获得更长效的生命力。"
    }
  },

  "0018": {
    brand: "Burberry",
    service: { en: "Repair & Restore", zh: "修补修复" },
    images: [
      "https://pub-cb39ce8f1e9548d2a5935c9f21e20a35.r2.dev/cases/0018_00.webp",
      "https://pub-cb39ce8f1e9548d2a5935c9f21e20a35.r2.dev/cases/0018_01.webp",
      "https://pub-cb39ce8f1e9548d2a5935c9f21e20a35.r2.dev/cases/0018_02.webp"
    ],
    title: { en: "Burberry Repair & Restore", zh: "Burberry 修补修复" },
    desc: {
      en: "Throughout a bag's lifespan, surface abrasions and deep scratches are inevitable by-products of a life well-lived. Ianne Atelier focuses on softening these tactile interruptions by meticulously layering pigments to match the leather's unique depth. Our goal is to subdue the visual noise of exposed fibers, ensuring your Burberry piece regains its refined composure. It's not about erasing the past, but about smoothing the path for the landscapes yet to be seen.",
      zh: "在长久的陪伴中，包包难免会留下擦痕与划伤，这些是生活留下的痕迹。Ianne Atelier 的介入并非为了粉饰太平，而是通过细腻的层叠补色工艺，让露白的伤痕重新没入原本的红色基调中。我们致力于抚平这些突兀的视觉断层，让受损部位与包身重新达成光泽上的默契。这种修补赋予了包包更得体的姿态，陪您走过更长的旅途，看更多的风景。"
    }
  },

  "0019": {
    brand: "New Balance",
    service: { en: "Shoe Cleaning", zh: "鞋子清洗" },
    images: [
      "https://pub-cb39ce8f1e9548d2a5935c9f21e20a35.r2.dev/cases/0019_00.webp",
      "https://pub-cb39ce8f1e9548d2a5935c9f21e20a35.r2.dev/cases/0019_01.webp",
      "https://pub-cb39ce8f1e9548d2a5935c9f21e20a35.r2.dev/cases/0019_02.webp",
      "https://pub-cb39ce8f1e9548d2a5935c9f21e20a35.r2.dev/cases/0019_03.webp",
      "https://pub-cb39ce8f1e9548d2a5935c9f21e20a35.r2.dev/cases/0019_04.webp",
      "https://pub-cb39ce8f1e9548d2a5935c9f21e20a35.r2.dev/cases/0019_05.webp"
    ],
    title: { en: "New Balance Shoe Cleaning", zh: "New balance 鞋子清洗" },
    desc: {
      en: "Daily wear often results in a dual challenge: the progressive yellowing of rubber midsoles and the accumulation of environmental particulates within the suede nap. Ianne Atelier addresses these issues through a specialized dual-action process. We focus on brightening oxidized soles while utilizing pH-balanced agents to lift the \"haze\" from the upper, effectively softening the hardened texture. This treatment reduces the visual fatigue of the shoe, allowing the original tones to emerge with renewed clarity and suppleness.",
      zh: "运动鞋的日常损耗往往表现为两方面：橡胶中底的自然氧化发黄，以及麂皮纤维因吸附灰尘而导致的色彩暗沉。Ianne Atelier 采用针对性的双重护理方案。通过去黄增白工艺改善鞋底的视觉陈旧感，并配合温和的乳化技术剥离深层污垢，驱散鞋面的灰蒙感。我们的目标是在不损伤结构的前提下，重新找回色彩的明亮度并唤醒纤维的柔软触感，让陪伴您的鞋履重现利落、洁净的质感"
    }
  },

  "0020": {
    brand: "Others",
    service: { en: "Colour Touch-up", zh: "局部补色" },
    images: [
      "https://pub-cb39ce8f1e9548d2a5935c9f21e20a35.r2.dev/cases/0020_01.webp",
      "https://pub-cb39ce8f1e9548d2a5935c9f21e20a35.r2.dev/cases/0020_02.webp",
      "https://pub-cb39ce8f1e9548d2a5935c9f21e20a35.r2.dev/cases/0020_03.webp",
      "https://pub-cb39ce8f1e9548d2a5935c9f21e20a35.r2.dev/cases/0020_04.webp"
    ],
    title: { en: "Leather Handbag Colour Touch-up", zh: "皮革手袋局部补色" },
    desc: {
      en: "Prolonged use gradually strips black leather of its density — surface fibres lighten into a grey haze, while fine scratches and dust build-up dull the once-uniform finish. Ianne Atelier addresses this through methodical colour saturation, deep-cleansing the embedded residue before re-layering pigment to reduce the visual gap left by wear. The intent is not to recreate a factory finish, but to bring the faded areas back into tonal agreement with the rest of the bag — a composed, evenly saturated black that carries its history with quiet dignity.",
      zh: "黑色皮革在长期使用后，色彩密度会逐渐流失——表层纤维泛灰起雾，细微刮痕与积尘让原本统一的色泽变得斑驳黯淡。Ianne Atelier 先深层清理嵌入纤维的污垢，再以层叠补色收窄磨损留下的视觉落差。我们并非要还原出厂状态，而是让褪色的部位重新融入包身的整体色序，呈现沉稳、均匀的黑色质感——岁月的痕迹依然存在，只是不再喧宾夺主。"
    }
  },

  "0021": {
    brand: "Others",
    service: { en: "Repair & Restore", zh: "修补修复" },
    images: [
      "https://pub-cb39ce8f1e9548d2a5935c9f21e20a35.r2.dev/cases/0021_01.webp"
    ],
    title: { en: "Leather Bag Repair & Restore", zh: "皮革包包修补修复" },
    desc: {
      en: "A worn zipper is often the first component to surrender — teeth misalign, the slider loses grip, and the daily ritual of opening and closing turns into friction. Ianne Atelier replaces the failing track entirely, fitting a new zipper matched in gauge and hardware tone, then re-stitching along the original seam lines to preserve the bag's structure. The intent is simple: return the closure to the smooth, reliable glide it was built to deliver, so the bag can quietly resume its duty without hesitation at every open and close.",
      zh: "拉链往往是包包最先失守的部件——链齿错位、拉头松脱，每一次开合都变得迟滞卡顿。Ianne Atelier 将整条失效的拉链拆除更换，选用规格与五金色调相匹配的新链，并沿原有车线重新缝合，保留包身原本的结构。我们的目标很直接：让开合恢复应有的顺滑与可靠，使包包重新胜任日常的每一次取放，不再有迟疑。"
    }
  },

  "0022": {
    brand: "Viv' Run by Roger Vivier",
    service: { en: "Shoe Cleaning", zh: "鞋子清洗" },
    images: [
      "https://pub-cb39ce8f1e9548d2a5935c9f21e20a35.r2.dev/cases/0022_01.webp",
      "https://pub-cb39ce8f1e9548d2a5935c9f21e20a35.r2.dev/cases/0022_02.png"
    ],
    title: { en: "Roger Vivier Viv' Run Sneaker Cleaning", zh: "Roger Vivier Viv' Run 运动鞋清洗" },
    desc: {
      en: "Environmental exposure and regular use have led to noticeable yellowing and particulate accumulation within the intricate mesh fabric of these shoes. At Ianne Atelier, we utilized a gentle, precision-calibrated cleaning extraction to lift embedded dirt without compromising the delicate structural integrity or embellishments. While this process is not about erasing the past or achieving a factory-new state, it effectively revitalizes the fabric's brightness and subdues overall discoloration. The footwear now carries its history with quiet dignity, prepared for the journeys ahead.",
      zh: "日常的穿着与环境接触，使鞋面精细的网眼织物中积聚了明显的灰尘与泛黄痕迹。Ianne Atelier 采用温和的深层提取技术，在不损伤脆弱网面与水钻饰件的前提下，安全地剥离纤维深处的污垢。这次深层清洁并非要还原出厂状态，而是致力于最大程度地唤醒材质的明亮度，让岁月累积的暗沉自然收敛。褪去疲惫的痕迹后，这双鞋履将以更加优雅从容的姿态，陪您走过更长的旅途。"
    }
  },

  "0023": {
    brand: "Chanel",
    service: { en: "Colour Touch-up", zh: "局部补色" },
    images: [
      "https://pub-cb39ce8f1e9548d2a5935c9f21e20a35.r2.dev/cases/0023_01.png",
      "https://pub-cb39ce8f1e9548d2a5935c9f21e20a35.r2.dev/cases/0023_02.png",
      "https://pub-cb39ce8f1e9548d2a5935c9f21e20a35.r2.dev/cases/0023_03.png",
      "https://pub-cb39ce8f1e9548d2a5935c9f21e20a35.r2.dev/cases/0023_04.png",
      "https://pub-cb39ce8f1e9548d2a5935c9f21e20a35.r2.dev/cases/0023_05.png",
      "https://pub-cb39ce8f1e9548d2a5935c9f21e20a35.r2.dev/cases/0023_06.png"
    ],
    title: { en: "Chanel Colour Touch-up", zh: "Chanel 局部补色" },
    desc: {
      en: "Continuous friction and daily handling have caused localized pigment erosion, scuffing, and visible discoloration along the delicate piping and quilted surfaces of this Chanel piece. At Ianne Atelier, we addressed these visual irregularities through a precision-calibrated colour touch-up, meticulously blending the pigment to match the surrounding leather. While this delicate surface treatment is not about erasing the past or achieving a factory-new state, it effectively subdues the prominence of wear and reinstates overall tonal consistency. The handbag now carries its history with quiet dignity, elegantly prepared for its continued journey.",
      zh: "频繁的日常使用与边缘摩擦，使得这只 Chanel 手袋的绲边及绗缝表面出现了局部色素剥落与明显的泛黄暗沉。Ianne Atelier 采用层叠补色技法，以精准调配的色彩细致修饰受损区域，使其与原有皮面自然融合。此项服务并非要生硬地还原出厂状态，而是旨在最大程度地淡化磨损痕迹，收敛视觉上的色差与突兀感。经过温和的修护，这只包袋带着岁月留下的温柔底蕴，继续陪您优雅前行。"    }
  },

  "0024": {
    brand: "Chanel",
    service: { en: "Colour Touch-up", zh: "局部补色" },
    images: [
      "https://pub-cb39ce8f1e9548d2a5935c9f21e20a35.r2.dev/cases/0024_01.webp",
      "https://pub-cb39ce8f1e9548d2a5935c9f21e20a35.r2.dev/cases/0024_02.webp",
      "https://pub-cb39ce8f1e9548d2a5935c9f21e20a35.r2.dev/cases/0024_03.webp",
      "https://pub-cb39ce8f1e9548d2a5935c9f21e20a35.r2.dev/cases/0024_04.webp",
      "https://pub-cb39ce8f1e9548d2a5935c9f21e20a35.r2.dev/cases/0024_05.webp",
      "https://pub-cb39ce8f1e9548d2a5935c9f21e20a35.r2.dev/cases/0024_06.webp"
    ],
    title: { en: "Chanel La Pausa Runway Lifesaver Ring Bag Colour Touch-up", zh: "Chanel La Pausa Runway Lifesaver Ring Bag 局部补色" },
        desc: {
      en: "The ivory calfskin of this Chanel lifesaver ring bag had gathered grey scuffs, dark specks and grime along its curved panels, with soiling settling into the seam lines and around the chain eyelets. Ianne Atelier cleansed each surface before layering a precisely matched ivory tone, working carefully around the embroidered lettering and hardware. This is not about erasing every trace of wear, but softening the marks so the pale leather reads clean and even again. The ring bag returns light and luminous, ready for its next outing.",
      zh: "这只 Chanel 救生圈包的象牙白小牛皮，在弧形皮面上积累了灰色擦痕、细小黑点与污渍，缝线与链孔周围也沉积了明显的尘垢。Ianne Atelier 先逐面清洁，再以精准调配的象牙白色层层补色，并细致避开刺绣字母与五金。我们并非要抹去所有使用痕迹，而是淡化瑕疵，让浅色皮面重新呈现洁净、均匀的质感。这只包以轻盈、明亮的姿态，准备好下一次出行。"
    }
  },

  "0025": {
    brand: "Nike",
    service: { en: "Shoe Cleaning", zh: "鞋子清洗" },
    images: [
      "https://pub-cb39ce8f1e9548d2a5935c9f21e20a35.r2.dev/cases/0025_01.webp",
      "https://pub-cb39ce8f1e9548d2a5935c9f21e20a35.r2.dev/cases/0025_02.webp",
      "https://pub-cb39ce8f1e9548d2a5935c9f21e20a35.r2.dev/cases/0025_03.webp",
      "https://pub-cb39ce8f1e9548d2a5935c9f21e20a35.r2.dev/cases/0025_04.webp",
      "https://pub-cb39ce8f1e9548d2a5935c9f21e20a35.r2.dev/cases/0025_05.webp",
      "https://pub-cb39ce8f1e9548d2a5935c9f21e20a35.r2.dev/cases/0025_06.webp"
    ],
    title: { en: "Nike Air Force 1 PLT.AF.ORM Sneaker Cleaning", zh: "Nike Air Force 1 PLT.AF.ORM 运动鞋清洗" },
    desc: {
      en: "Daily wear and environmental exposure have caused significant yellowing and particulate accumulation across the leather surfaces and soles of these sneakers. At Ianne Atelier, we employed a precision-calibrated cleaning process to carefully lift embedded stains and address the widespread discoloration. While this service is not about erasing the past or achieving a factory-new state, it effectively revitalizes the material's brightness and restores a cleaner, more uniform appearance. The sneakers now carry their history with quiet dignity, ready for the adventures that lie ahead.",
      zh: "频繁的穿着与日常环境的侵蚀，导致这双运动鞋的皮革表面及鞋底出现了明显的泛黄与污渍沉淀。Ianne Atelier 采用精细校准的清洁技法，深层剥离纤维间的尘垢，从而有效缓解了材质的暗沉与色泽不均。此项服务并非要完全抹去使用的印记或试图还原出厂状态，而是致力于唤醒材质的洁净感，让岁月累积的痕迹自然收敛。经过专业的养护，这双鞋履将以更加清爽的姿态，陪您走过更长的旅途。"
    }
  },

  "0026": {
    brand: "New Balance",
    service: { en: "Shoe Cleaning", zh: "鞋子清洗" },
    images: [
      "https://pub-cb39ce8f1e9548d2a5935c9f21e20a35.r2.dev/cases/0026_01.webp",
      "https://pub-cb39ce8f1e9548d2a5935c9f21e20a35.r2.dev/cases/0026_02.webp",
      "https://pub-cb39ce8f1e9548d2a5935c9f21e20a35.r2.dev/cases/0026_03.webp",
      "https://pub-cb39ce8f1e9548d2a5935c9f21e20a35.r2.dev/cases/0026_04.webp",
      "https://pub-cb39ce8f1e9548d2a5935c9f21e20a35.r2.dev/cases/0026_05.webp"
    ],
    title: { en: "New Balance 991 Suede Sneaker Cleaning", zh: "New Balance 991 麂皮运动鞋清洗" },
    desc: {
      en: "Daily wear has settled fine dust into the suede nap of this New Balance 991, with grey speckling and grime gathering along the midsole and outsole edge. Ianne Atelier lifted the embedded particulates with a pH-balanced suede cleanse and soft-bristle work, keeping the nap soft and full. The midsole retains its warm, age-earned cream tone — this is not about an out-of-box finish, but a cleaner, more even pair. It carries its character forward, ready for the miles ahead.",
      zh: "日常穿着让细尘沉入这双 New Balance 991 的麂皮绒面，中底与鞋底边缘也积聚了灰点与污垢。Ianne Atelier 以 pH 平衡的麂皮清洁配合软毛细刷，温和剥离纤维深处的尘垢，保留绒面的蓬松质感。中底随岁月沉淀的暖米色会自然保留——我们并非要还原出厂状态，而是让整双鞋重回洁净、均匀。经过护理，它将继续陪伴您丈量未来的每一段路途。"
    }
  },

   "0027": {
    brand: "Adidas",
    service: { en: "Shoe Cleaning", zh: "鞋子清洗" },
    images: [
      "https://pub-cb39ce8f1e9548d2a5935c9f21e20a35.r2.dev/cases/0027_01.webp",
      "https://pub-cb39ce8f1e9548d2a5935c9f21e20a35.r2.dev/cases/0027_02.webp",
      "https://pub-cb39ce8f1e9548d2a5935c9f21e20a35.r2.dev/cases/0027_03.webp",
      "https://pub-cb39ce8f1e9548d2a5935c9f21e20a35.r2.dev/cases/0027_04.webp"
    ],
    title: { en: "Adidas Superstar Sneaker Cleaning", zh: "Adidas Superstar 运动鞋清洗" },
    desc: {
      en: "Daily wear has drawn grey grime into the rubber cupsole of this Adidas Superstar, dulling the laces and leaving a light film across the cream leather. Ianne Atelier lifted the embedded dirt with a gentle leather cleanse and targeted sidewall scrubbing, preserving the upper's finish. Natural creasing remains — this is not about a factory-new pair, but a brighter, cleaner silhouette. The Superstar returns with its character intact, ready for the road ahead.",
      zh: "日常穿着让这双 Adidas Superstar 的橡胶鞋边积满灰黑污垢，鞋带黯淡，米色皮面也蒙上一层细尘。Ianne Atelier 以温和的皮面清洁配合鞋边针对性刷洗，剥离嵌入纹理的污渍，同时保留皮面原有光泽。鞋面的自然折痕会如实保留——我们并非要还原出厂状态，而是让整体重回洁净明亮。这双 Superstar 以更清爽的姿态，继续伴您踏出每一步。"
    }
  },

  "0028": {
    brand: "Nike",
    service: { en: "Shoe Cleaning", zh: "鞋子清洗" },
    images: [
      "https://pub-cb39ce8f1e9548d2a5935c9f21e20a35.r2.dev/cases/0028_01.webp",
      "https://pub-cb39ce8f1e9548d2a5935c9f21e20a35.r2.dev/cases/0028_02.webp",
      "https://pub-cb39ce8f1e9548d2a5935c9f21e20a35.r2.dev/cases/0028_03.webp",
      "https://pub-cb39ce8f1e9548d2a5935c9f21e20a35.r2.dev/cases/0028_04.webp"
    ],
    title: { en: "Air Jordan 1 Low Sneaker Cleaning", zh: "Air Jordan 1 Low 运动鞋清洗" },
    desc: {
      en: "Daily wear has clouded the white midsole of this Air Jordan 1 Low with grime and dark speckling, settling deep into its textured sidewall. Ianne Atelier lifted the embedded dirt through targeted sidewall scrubbing and a gentle cleanse across the leather panels, leaving the upper's finish undisturbed. This is not about a factory-new pair, but a crisper contrast where each colour block reads cleanly again. The pair returns sharp and composed, ready for its next run.",
      zh: "日常穿着让这双 Air Jordan 1 Low 的白色中底蒙上一层灰垢与黑点，尘埃更沉积在鞋边的纹理之间。Ianne Atelier 以鞋边针对性刷洗配合温和的皮面清洁，剥离深层污渍，同时保留鞋面原有的质感。我们并非要还原出厂状态，而是让灰、黑、红三色的层次重新分明。这双鞋以利落、清爽的姿态，准备迎接下一段旅程。"
    }
  },

    "0029": {
    brand: "Puma",
    service: { en: "Shoe Cleaning", zh: "鞋子清洗" },
    images: [
      "https://pub-cb39ce8f1e9548d2a5935c9f21e20a35.r2.dev/cases/0029_01.webp",
      "https://pub-cb39ce8f1e9548d2a5935c9f21e20a35.r2.dev/cases/0029_02.webp",
      "https://pub-cb39ce8f1e9548d2a5935c9f21e20a35.r2.dev/cases/0029_03.webp",
      "https://pub-cb39ce8f1e9548d2a5935c9f21e20a35.r2.dev/cases/0029_04.webp",
      "https://pub-cb39ce8f1e9548d2a5935c9f21e20a35.r2.dev/cases/0029_05.webp"
    ],
    title: { en: "Puma Cali Dream Sneaker Cleaning", zh: "Puma Cali Dream 运动鞋清洗" },
    desc: {
      en: "Daily wear has dulled the white leather of this Puma Cali Dream to a grey cast, with grime settling heavily along the stepped platform sole and toe area. Ianne Atelier worked the tiered sidewall with detailed brushing and a gentle leather cleanse across the upper, lifting embedded dirt while preserving the grain. This is not about a factory-new pair — the sole keeps a soft off-white tone — but a clear contrast against the black Formstrip once more. The pair steps out clean and composed again.",
      zh: "日常穿着让这双 Puma Cali Dream 的白色皮面泛起灰调，阶梯式厚底与鞋头处更积聚了明显的污垢。Ianne Atelier 以细致刷洗处理层叠的鞋边纹路，并以温和的皮面清洁剥离深层尘垢，同时保留皮革原有的纹理。我们并非要还原出厂状态——鞋底会保留柔和的米白色调——而是让白色鞋身与黑色 Formstrip 的对比重新清晰。这双鞋以洁净、从容的姿态，再次出发。"
    }
  },

    "0030": {
    brand: "Skechers",
    service: { en: "Shoe Cleaning", zh: "鞋子清洗" },
    images: [
      "https://pub-cb39ce8f1e9548d2a5935c9f21e20a35.r2.dev/cases/0030_01.webp",
      "https://pub-cb39ce8f1e9548d2a5935c9f21e20a35.r2.dev/cases/0030_02.webp",
      "https://pub-cb39ce8f1e9548d2a5935c9f21e20a35.r2.dev/cases/0030_03.webp",
      "https://pub-cb39ce8f1e9548d2a5935c9f21e20a35.r2.dev/cases/0030_04.webp",
      "https://pub-cb39ce8f1e9548d2a5935c9f21e20a35.r2.dev/cases/0030_05.webp",
      "https://pub-cb39ce8f1e9548d2a5935c9f21e20a35.r2.dev/cases/0030_06.webp"
    ],

    title: { en: "Skechers Chunky Sneaker Cleaning", zh: "Skechers 老爹鞋清洗" },
    desc: {
      en: "Daily wear has left a grey film across the sculpted white midsole of this Skechers chunky sneaker, with dust settling into its deep contours and mesh panels. Ianne Atelier worked through each curve of the sole with detailed brushing and lifted embedded dirt from the mesh using a gentle cleanse, preserving the vivid red, blue and yellow accents. This is not about a factory-new pair, but a cleaner base that lets every colour stand out again. The pair returns bright and ready for the next adventure.",
      zh: "日常穿着让这双 Skechers 老爹鞋的白色立体中底蒙上一层灰膜，尘垢更沉积在弧形纹路与网面之间。Ianne Atelier 以细致刷洗逐一处理鞋底的每道曲线，并以温和清洁剥离网布深处的污渍，保留红、蓝、黄配色的鲜明层次。我们并非要还原出厂状态，而是让洁净的白色底座重新衬托出每一抹色彩。这双鞋以明亮、轻快的姿态，再次陪您出行。"
    }
  },

    "0031": {
    brand: "LV",
    service: { en: "Repair & Restore", zh: "修补修复" },
    images: [
      "https://pub-cb39ce8f1e9548d2a5935c9f21e20a35.r2.dev/cases/0031_01.webp",
      "https://pub-cb39ce8f1e9548d2a5935c9f21e20a35.r2.dev/cases/0031_02.webp",
      "https://pub-cb39ce8f1e9548d2a5935c9f21e20a35.r2.dev/cases/0031_03.webp",
      "https://pub-cb39ce8f1e9548d2a5935c9f21e20a35.r2.dev/cases/0031_04.webp"
    ],
    title: { en: "LV Neverfull Full Vachetta Replacement", zh: "LV Neverfull 全套植鞣革更换" },
    desc: {
      en: "Years of handling had darkened this LV Neverfull's vachetta to a deep, uneven patina, with cracks along the top trim, worn handles and missing side laces. Ianne Atelier replaced the full set of natural vachetta — trim, handles, tabs and side laces — stitched to follow the original construction. This is not about making the bag new: the Monogram canvas keeps its history, and the fresh leather will warm to honey with sunlight and use. The Neverfull returns sound and complete, ready to begin its patina anew.",
      zh: "多年的使用让这只 LV Neverfull 的植鞣革变成深沉不均的焦糖色，包口滚边出现裂痕，提手磨损，侧边抽绳也已缺失。Ianne Atelier 为其更换整套天然植鞣革——包口滚边、提手、皮扣与侧边抽绳，并依循原有结构细致缝制。我们并非要还原出厂状态：老花帆布保留着岁月的印记，而新换的植鞣革也将在阳光与日常使用中，慢慢氧化成温润的蜜糖色。这只 Neverfull 重新变得完整、稳固，开始书写属于它的新一段岁月。"
    }
  },
  
    "0032": {
    brand: "LV",
    service: { en: "Colour Touch-up", zh: "局部补色" },
    images: [
      "https://pub-cb39ce8f1e9548d2a5935c9f21e20a35.r2.dev/cases/0032_01.webp",
      "https://pub-cb39ce8f1e9548d2a5935c9f21e20a35.r2.dev/cases/0032_02.webp",
      "https://pub-cb39ce8f1e9548d2a5935c9f21e20a35.r2.dev/cases/0032_03.webp",
      "https://pub-cb39ce8f1e9548d2a5935c9f21e20a35.r2.dev/cases/0032_04.webp",
      "https://pub-cb39ce8f1e9548d2a5935c9f21e20a35.r2.dev/cases/0032_05.webp",
      "https://pub-cb39ce8f1e9548d2a5935c9f21e20a35.r2.dev/cases/0032_06.webp",
      "https://pub-cb39ce8f1e9548d2a5935c9f21e20a35.r2.dev/cases/0032_07.webp"
    ],
        title: { en: "LV Monogram Handbag Colour Touch-up", zh: "LV 老花手袋局部补色" },
    desc: {
      en: "Water exposure and handling had left the vachetta trim of this LV Monogram handbag marked with dark tide-lines across its studded base and uneven, streaked tones along the top band. Ianne Atelier evened the leather through layered colour touch-up, blending pigment into the natural honey patina so each panel reads as one. This is not about erasing the bag's past — the leather keeps its aged warmth, with water marks softened rather than removed. The bag returns composed and harmonious, its history worn with grace.",
      zh: "水渍与长期使用，让这只 LV 老花手袋的植鞣革底部留下深色水痕，包口皮边也出现深浅不一的斑驳色差。Ianne Atelier 以层叠补色技法，将色料细致融入天然的蜜糖色氧化层，使各处皮面重新归于一致。我们并非要抹去岁月的痕迹——皮革依然保有温润的老化色泽，水痕是被淡化而非消除。这只手袋以沉稳、和谐的姿态，继续承载属于它的故事。"
    }
  }
};