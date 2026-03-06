/* ==================================================
   Case Registry – Single Source of Truth
   ================================================== */

const CASES = {
  /* ---------- Case 0001 ---------- */
  "0001": {
    brand: "LV",
    service: {
      en: "Cleaning",
      zh: "清洗"
    },
    image: ["assets/images/cases/cleaning/lv/0002_01.webp"],

    title: {
      en: "LV Bag Cleaning",
      zh: "LV 包包清洗护理"
    },

    desc: {
      en: "Gentle cleaning to remove discoloration while preserving the original leather texture.",
      zh: "采用温和清洗方式，去除变色问题，同时保留皮革原有质感。"
    }
  },

  /* ---------- Case 0002 ---------- */
  "0002": {
    brand: "Coach",
    service: {
      en: "Cleaning",
      zh: "清洗"
    },
    image: ["assets/images/cases/cleaning/coach/0001_01.webp"],

    title: {
      en: "Coach Bag Cleaning",
      zh: "Coach 包包清洗护理"
    },

    desc: {
      en: "Careful cleaning performed to refresh the appearance without damaging the leather.",
      zh: "在不伤害皮革的前提下进行细致清洗，使外观焕然一新。"
    }
  },

  /* ---------- Case 0003 (Others / Prada) ---------- */
  "0003": {
    brand: "MCM",
    service: {
      en: "Cleaning",
      zh: "清洗"
    },
    images: ["assets/images/cases/cleaning/others/0003_01.webp"],

    title: {
      en: "MCM Bag Cleaning",
      zh: "MCM 包包清洗护理"
    },

    desc: {
      en: "Professional cleaning carried out on a MCM bag with visible signs of wear.",
      zh: "针对有明显使用痕迹的 MCM 包进行专业清洗护理。"
    }
  },

   /* ---------- Case 0004 (Others / Prada) ---------- */
  "0004": {
    brand: "Prada",
    service: {
      en: "Cleaning",
      zh: "清洗"
    },
    images: ["assets/images/cases/cleaning/others/0004_00.webp",
     "assets/images/cases/cleaning/others/0004_01.webp",
     "assets/images/cases/cleaning/others/0004_02.webp",
     "assets/images/cases/cleaning/others/0004_03.webp"],

    title: {
      en: "Prada Bag Cleaning",
      zh: "Prada 包包清洗护理"
    },

    desc: {
      en: "Professional cleaning carried out on a Prada bag with visible signs of wear.",
      zh: "针对有明显使用痕迹的 Prada 包进行专业清洗护理。"
    }
  },

    /* ---------- Case 0005 (Others / Prada) ---------- */
  "0005": {
    brand: "Coach",
    service: {
      en: "Colour",
      zh: "补色"
    },
    images: [
      "assets/images/cases/Colour/Coach/0005_00.webp",
      "assets/images/cases/Colour/Coach/0005_01.webp",
      "assets/images/cases/Colour/Coach/0005_02.webp",
      "assets/images/cases/Colour/Coach/0005_03.webp"

    ],

    title: {
      en: "Coach Bag Colour Restore",
      zh: "Coach 包包补色"
    },

    desc: {
      en: "Original colour had faded unevenly due to wear and exposure.The surface was carefully cleaned and colour-corrected to restore depth and consistency while preserving the original leather texture.",
      zh: "因日常使用与环境影响，包身颜色出现不均匀褪色。经过细致清洁与补色处理，在保留原有皮质纹理的前提下，恢复整体色泽与层次。"
    }
  },

   /* ---------- Case 0006 (Others / Braun Buffel) ---------- */
  "0006": {
    brand: "Braun Buffel",
    service: {
      en: "Colour",
      zh: "补色"
    },
    images: [
      "assets/images/cases/Colour/Others/0006_00.webp",
      "assets/images/cases/Colour/Others/0006_01.webp",
      "assets/images/cases/Colour/Others/0006_02.webp",
      "assets/images/cases/Colour/Others/0006_03.webp",
      "assets/images/cases/Colour/Others/0006_04.webp"

    ],

    title: {
      en: "Braun Buffel Bag Colour Restore",
      zh: "Braun Buffel 包包补色"
    },

    desc: {
      en: "Original colour had faded unevenly due to wear and exposure.The surface was carefully cleaned and colour-corrected to restore depth and consistency while preserving the original leather texture.",
      zh: "因日常使用与环境影响，包身颜色出现不均匀褪色。经过细致清洁与补色处理，在保留原有皮质纹理的前提下，恢复整体色泽与层次。"
    }
  },

  "0007": {
    brand: "Others",
    service: {
      en: "Colour",
      zh: "补色"
    },
    images: [
      "assets/images/cases/Colour/Others/0007_00.webp"
    ],

    title: {
      en: "Pink Bag Colour Restore",
      zh: "粉色包包补色"
    },

    desc: {
      en: "The handle showed visible colour wear and small marks from regular use. Localised colour touch-up was carried out to even out the tone while maintaining the original leather texture.",
      zh: "手柄部位因日常使用出现明显褪色与细小痕迹。通过局部补色处理，使颜色更均匀，同时保留原有皮革质感。"
    }
  },

  "0008": {
    brand: "MCM",
    service: {
      en: "Colour",
      zh: "补色"
    },
    images: [
      "assets/images/cases/Colour/Others/0008_00.webp",
      "assets/images/cases/Colour/Others/0008_01.webp"
    ],

    title: {
      en: "MCM Colour Restore",
      zh: "MCM 包包补色"
    },

    desc: {
      en: "Minor colour wear and surface marks were visible around the corner and seam areas. Targeted colour touch-up was applied to improve tone consistency while preserving the original leather grain.",
      zh: "包包边角与缝线处可见轻微褪色及表面使用痕迹。通过局部补色处理，改善颜色一致性，同时保留原有皮革纹理。"
    }
  },

  "0009": {
    "brand": "Gucci",
    "service": {
      "en": "Colour Touch-up",
      "zh": "补色"
    },
    "images": [
      "assets/images/cases/Colour/Others/0009_00.webp"
    
    ],
    "title": {
      "en": "Gucci GG Marmont Colour Restore",
      "zh": "Gucci 包包补色"
    },
    "desc": {
      "en": "Colour shading developed over time from regular use. Subtle colour touch-up helped refine the appearance without changing the original character.",
      "zh": "因长期使用，包身侧边颜色出现暗沉与不均匀的色差。通过补色处理改善整体色调平衡，使包包在不改变原有质感的情况下，继续保持良好的使用观感。"
    }
    },

    "0010": {
    "brand": "",
    "service": {
      "en": "Colour Touch-up",
      "zh": "局部补色"
    },
    "images": [
      "assets/images/cases/Colour/Others/0010_00.webp",
      "assets/images/cases/Colour/Others/0010_01.webp"
    ],
    "title": {
      "en": "Colour Touch-Up",
      "zh": "包包局部补色"
    },
    "desc": {
      "en": "High-contact areas naturally show signs of wear over time.\nThrough targeted colour touch-up, the visual impact of colour loss can be softened, allowing the bag to continue being used with a more refined appearance.",
      "zh": "日常使用下，高接触部位会逐渐产生色泽损耗。\n经针对性的局部补色修复，使视觉磨损感减弱，让包包维持更协调的使用状态。"
    }
  },

  "0011": {
    "brand": "Others",
    "service": {
      "en": "Edge Oil",
      "zh": "边油修复"
    },
    "images": [
      "assets/images/cases/EdgeOil/Others/0011_00.webp",
      "assets/images/cases/EdgeOil/Others/0011_01.webp"
    ],
    "title": {
      "en": "Bag Edge Oil Repair",
      "zh": "包包边油修复"
    },
    "desc": {
      "en": "Edge oil deterioration is a common form of wear over time. While many believe it requires full replacement, targeted repair can often address the affected areas.\nWith controlled refinishing, the visual impact of cracks and peeling can be significantly reduced, allowing the structure to remain intact.",
      "zh": "长期使用下，边油部位容易产生龟裂与磨损。许多人认为此类问题无法修复，只能更换。\n事实上，透过专业修复技术，可对原有结构进行修整，降低损耗痕迹的可见度，维持整体外观协调。"
    }
  },

"0012": {
    "brand": "LV",
    "service": {
      "en": "Cleaning",
      "zh": "清洗"
    },
    "images": [
      "assets/images/cases/cleaning/0012_00.webp"
    ],
    "title": {
      "en": "LV Bag Cleaning Service",
      "zh": "LV 包包清洗护理"
    },
    "desc": {
      "en": "Over time, contaminants accumulate within fabric weaves, causing subtle discoloration. Moving away from harsh mechanical friction, Ianne Atelier utilizes a controlled suspension method to lift particles without weakening delicate fibers. This process is designed to refine the interior’s condition, improving the overall aesthetic while respecting the natural aging process of the material.",
      "zh": "随时间推移，污垢会积聚在织物经纬之间导致变色。区别于粗放的机械摩擦，Ianne Atelier 采用受控的悬浮清洁法，在不削弱纤维韧性的前提下分离杂质。该工艺旨在优化内衬的现有状态，在改善整体美感的同时，尊重材质在自然使用过程中的演变。"
    }
  },
  "0013": {
    "brand": "LV",
    "service": {
      "en": "Edge Oil",
      "zh": "边油修复"
    },
    "images": [
      "assets/images/cases/EdgeOil/lv/0013_00.webp"
    ],
    "title": {
      "en": "LV Bag Edge Oil Repair",
      "zh": "LV 包包边油修复"
    },
    "desc": {
      "en": "Edge oil deterioration, typically seen as cracking or peeling, is a natural result of structural flexing and environmental exposure over time. At Ianne Atelier, we focus on mitigating these signs of wear through a controlled refinishing process. This targeted approach significantly reduces the visual gap and stabilizes the edge to prevent further fraying, improving the bag’s aesthetic while respecting its authentic history.",
      "zh": "边油开裂或脱落是由于包身结构的长期弯折与环境影响产生的自然老化现象。Ianne Atelier 主张通过受控的重涂工艺，针对性地淡化磨损痕迹。我们的修复方案旨在显著缩小视觉上的陈旧差距，并在不破坏原有结构的前提下，稳固边缘以防止基底进一步磨损，在改善质感的同时延续奢侈品的陪伴价值。"
    }
  },
  "0014": {
    "brand": "Coach",
    "service": {
      "en": "Cleaning",
      "zh": "清洗"
    },
    "images": [
      "assets/images/cases/cleaning/coach/0014_00.webp",
      "assets/images/cases/cleaning/coach/0014_01.webp",
      "assets/images/cases/cleaning/coach/0014_02.webp"
    ],
    "title": {
      "en": "Coach Bag Cleaning Service",
      "zh": "Coach 包包清洗护理"
    },
    "desc": {
      "en": "Years of use lead to inevitable lipid accumulation and oxidation within zipper tapes. While natural aging cannot be fully reversed, Ianne Atelier focuses on mitigating these effects through a controlled cleansing process. By lifting the majority of embedded particles, we significantly reduce the visual gap caused by years of wear, refreshing the bag’s overall aesthetic while maintaining the structural integrity of the fibers.",
      "zh": "针对拉链布因长年接触油脂而产生的氧化现象，Ianne Atelier 主张理性的修复而非破坏性翻新。通过受控的清洁工艺，我们致力于最大限度地淡化顽固污垢并缩小视觉上的陈旧差距。在保护纤维结构的前提下，显著提升包包的整体整洁度，让您的爱物重焕体面的质感，延续其陪伴价值。"
    }
  },
  "0015": {
    "brand": "Coach",
    "service": {
      "en": "Edge Oil",
      "zh": "边油修复"
    },
    "images": [
      "assets/images/cases/EdgeOil/0015_00.webp",
      "assets/images/cases/EdgeOil/0015_01.webp",
      "assets/images/cases/EdgeOil/0015_02.webp"
    ],
    "title": {
      "en": "Coach Edge Oil Repair",
      "zh": "Coach 包包边油修复"
    },
    "desc": {
      "en": "Years of dynamic movement naturally lead to the gradual fragmentation of the bag’s edge sealant. Rather than attempting an artificial \"reset,\" Ianne Atelier employs a calibrated manual intervention to alleviate the visual disruption of cracks and peeling. By layering subtle, high-fidelity finishes, we curb the aesthetic deviation caused by age, ensuring the piece retains its dignified character while remaining resilient for the journey ahead.",
      "zh": "边缘涂层的碎裂与剥落，是包身在长期动态使用下产生的物理应力痕迹。Ianne Atelier 拒绝生硬的“格式化”翻新，转而采用一种精密校准的手工干预，旨在淡化这些磨损带来的视觉干扰。通过细腻的层叠处理，我们有效收敛了因老化产生的质感差距，在尊重物件使用痕迹的同时，赋予其更稳固、含蓄的现代观感。"
    }
  },
  "0016": {
    "brand": "longchamp",
    "service": {
      "en": "Colour Touch-up",
      "zh": "局部补色"
    },
    "images": [
      "assets/images/cases/Colour/0016_00.webp",
      "assets/images/cases/Colour/0016_01.webp",
      "assets/images/cases/Colour/0016_02.webp",
      "assets/images/cases/Colour/0016_03.webp",
      "assets/images/cases/Colour/0016_04.webp",
      "assets/images/cases/Colour/0016_05.webp"
    ],
    "title": {
      "en": "LongChamp Colour Touch-Up",
      "zh": "LongChamp 包包局部补色"
    },
    "desc": {
      "en": "Frequent handling and surface friction often lead to localized pigment erosion and lipid-induced darkening, particularly at high-stress corner areas. At Ianne Atelier, we address these visual irregularities through precision-calibrated colour integration. Rather than a heavy coating, our technique blends seamlessly with the leather’s natural grain, effectively subduing the prominence of scuffs and stains. The result is a revitalized exterior where signs of previous wear become virtually imperceptible to the naked eye.",
      "zh": "频繁的触碰与物理磨擦，常导致皮革角位产生色素剥落与油脂淤积产生的暗沉。Ianne Atelier 拒绝生硬的覆盖，转而采用精密校准的色彩整合方案。通过对色调与光泽的微观调配，我们致力于收敛并淡化那些突兀的磨损点。这种干预让原本发黑、受损的纤维重新回归整体色序，使岁月留下的痕迹在视觉上趋于“隐形”，找回属于手袋的平衡美感。"
    }
  },
  "0017": {
    "brand": "Coach",
    "service": {
      "en": "Strap Renewal",
      "zh": "手提袋换新"
    },
    "images": [
      "assets/images/cases/Others/0017_00.webp"
    ],
    "title": {
      "en": "Coach Strap Replacement",
      "zh": "Coach 手提袋换新"
    },
    "desc": {
      "en": "When leather fibers reach a state of advanced degradation, traditional restoration may yield diminishing returns. This case illustrates a calculated component replacement where the fatigued original strap is retired in favor of a high-fidelity new element. By integrating a fresh, resilient strap, Ianne Atelier ensures the bag’s load-bearing integrity is secured, providing a seamless aesthetic continuity that outlasts superficial repairs.",
      "zh": "当皮革纤维进入深度降解状态，常规修复的边际效应将显著降低。本案例展示了针对性部件更换的必要性——在评估修复价值后，我们推荐以高品质的新件替代已疲劳的旧手提带。Ianne Atelier 通过这种物理更替，彻底解决了断裂风险并重塑了负重结构的稳固性，让您的爱包在审美与功能性上获得更长效的生命力。"
    }
  },
  "0018": {
    "brand": "Burberry",
    "service": {
      "en": "Repair & Restore",
      "zh": "修补修复"
    },
    "images": [
      "assets/images/cases/Others/0018_00.webp",
      "assets/images/cases/Others/0018_01.webp",
      "assets/images/cases/Others/0018_02.webp"
    ],
    "title": {
      "en": "Burberry Repair & Restore",
      "zh": "Burberry 修补修复"
    },
    "desc": {
      "en": "Throughout a bag’s lifespan, surface abrasions and deep scratches are inevitable by-products of a life well-lived. Ianne Atelier focuses on softening these tactile interruptions by meticulously layering pigments to match the leather's unique depth. Our goal is to subdue the visual noise of exposed fibers, ensuring your Burberry piece regains its refined composure. It’s not about erasing the past, but about smoothing the path for the landscapes yet to be seen.",
      "zh": "在长久的陪伴中，包包难免会留下擦痕与划伤，这些是生活留下的痕迹。Ianne Atelier 的介入并非为了粉饰太平，而是通过细腻的层叠补色工艺，让露白的伤痕重新没入原本的红色基调中。我们致力于抚平这些突兀的视觉断层，让受损部位与包身重新达成光泽上的默契。这种修补赋予了包包更得体的姿态，陪您走过更长的旅途，看更多的风景。"
    }
  },
  "0019": {
    "brand": "New Balance",
    "service": {
      "en": "Cleaning",
      "zh": "清洗"
    },
    "images": [
      "assets/images/cases/ShoeCleaning/0019_00.webp",
      "assets/images/cases/ShoeCleaning/0019_01.webp",
      "assets/images/cases/ShoeCleaning/0019_02.webp",
      "assets/images/cases/ShoeCleaning/0019_03.webp",
      "assets/images/cases/ShoeCleaning/0019_04.webp",
      "assets/images/cases/ShoeCleaning/0019_05.webp"
    ],
    "title": {
      "en": "New Balance Shoe Cleaning",
      "zh": "New balance 鞋子清洗"
    },
    "desc": {
      "en": "Daily wear often results in a dual challenge: the progressive yellowing of rubber midsoles and the accumulation of environmental particulates within the suede nap. Ianne Atelier addresses these issues through a specialized dual-action process. We focus on brightening oxidized soles while utilizing pH-balanced agents to lift the \"haze\" from the upper, effectively softening the hardened texture. This treatment reduces the visual fatigue of the shoe, allowing the original tones to emerge with renewed clarity and suppleness.",
      "zh": "运动鞋的日常损耗往往表现为两方面：橡胶中底的自然氧化发黄，以及麂皮纤维因吸附灰尘而导致的色彩暗沉。Ianne Atelier 采用针对性的双重护理方案。通过去黄增白工艺改善鞋底的视觉陈旧感，并配合温和的乳化技术剥离深层污垢，驱散鞋面的灰蒙感。我们的目标是在不损伤结构的前提下，重新找回色彩的明亮度并唤醒纤维的柔软触感，让陪伴您的鞋履重现利落、洁净的质感"
    }
  }

};








