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
    image: "assets/images/cases/cleaning/lv/0002_01.webp",

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
    image: "assets/images/cases/cleaning/coach/0001_01.webp",

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
      "assets/images/cases/Colour/Coach/0005_03.webp",

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
      "assets/images/cases/Colour/Others/0006_04.webp",

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
      "assets/images/cases/Colour/Others/0007_00.webp",
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
      "assets/images/cases/Colour/Others/0008_01.webp",
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
  "brand": "Others",
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
}

};








