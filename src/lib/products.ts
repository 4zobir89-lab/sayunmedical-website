export interface Product {
  slug: string;
  nameAr: string;
  nameEn: string;
  brand: string;
  categorySlug: string;
  descriptionAr: string;
  descriptionEn: string;
  featuresAr: string[];
  featuresEn: string[];
  images: string[];
}

export interface Category {
  slug: string;
  nameAr: string;
  nameEn: string;
  brand: string;
  image: string;
  productCount: number;
}

function g(slug: string, file: string) {
  return `/images/gallery/${slug}/${file}`;
}

export const categories: Category[] = [
  { slug: "medical-imaging", nameAr: "التصوير الطبي", nameEn: "Medical Imaging", brand: "Mindray", image: g("medical_imaging_system", "1.jpg"), productCount: 5 },
  { slug: "patient-monitoring", nameAr: "أجهزة المراقبة", nameEn: "Patient Monitoring", brand: "Mindray", image: g("patient_monitoring_systems", "1.jpg"), productCount: 8 },
  { slug: "x-ray", nameAr: "أنظمة الأشعة", nameEn: "X-Ray Systems", brand: "JPI", image: g("x_ray", "1.jpg"), productCount: 4 },
  { slug: "anesthesia", nameAr: "التخدير والتنفس", nameEn: "Anesthesia & Ventilators", brand: "Mindray", image: g("anesthesia_machines", "1.jpg"), productCount: 6 },
  { slug: "surgical-lights", nameAr: "الأضواء الجراحية", nameEn: "Surgical Lights & Tables", brand: "Mindray", image: g("surgical_lights_and_operating_tables", "1.jpg"), productCount: 10 },
  { slug: "furniture", nameAr: "الأثاث الطبي", nameEn: "Medical Furniture", brand: "Various", image: g("furniture", "hospital_bed/1.jpg"), productCount: 15 },
  { slug: "dental", nameAr: "وحدة الأسنان", nameEn: "Dental Unit", brand: "Various", image: g("dental_unit", "1.jpg"), productCount: 6 },
  { slug: "sterilizer", nameAr: "المعقمات", nameEn: "Sterilizers", brand: "Various", image: g("sterilizer", "1.jpg"), productCount: 4 },
  { slug: "incubator", nameAr: "الحاضنات والمدافئ", nameEn: "Incubators & Warmers", brand: "Various", image: g("incubator_and_warmer", "1.jpg"), productCount: 3 },
  { slug: "electronic", nameAr: "الأجهزة الإلكترونية", nameEn: "Electronic Apparatus", brand: "Various", image: g("electronic_apparatus", "1.jpg"), productCount: 8 },
  { slug: "infusion-pumps", nameAr: "مضخات الحقن", nameEn: "Infusion Pumps", brand: "Mindray", image: g("infusion_pumps", "1.jpg"), productCount: 6 },
];

export const products: Product[] = [
  ...categories.map((c) => ({
    slug: c.slug,
    nameAr: c.nameAr,
    nameEn: c.nameEn,
    brand: c.brand,
    categorySlug: c.slug,
    descriptionAr: `أحدث حلول ${c.nameAr} من ${c.brand}. نقدم أجهزة طبية متطورة تلبي أعلى معايير الجودة والاعتمادية.`,
    descriptionEn: `Complete ${c.nameEn} solutions from ${c.brand}. Advanced medical equipment meeting the highest quality and reliability standards.`,
    featuresAr: ["أحدث التقنيات الطبية العالمية", "جودة واعتمادية عالية", "ضمان شامل", "دعم فني متخصص 24/7", "قطع غيار أصلية", "تدريب على التشغيل"],
    featuresEn: ["Latest global medical tech", "High quality & reliability", "Comprehensive warranty", "24/7 technical support", "Genuine spare parts", "Operation training"],
    images: [
      c.image,
      ...Array.from({ length: 4 }, (_, i) => {
        const f = c.slug === "furniture" ? `hospital_bed/${i + 2}` : `${i + 2}`;
        return g(c.slug === "furniture" ? "furniture" : c.slug.replace("-", "_"), `${f}.jpg`);
      }),
    ],
  })),
  // Sub-category products for Medical Imaging
  ...[
    { slug: "cardiology", nameAr: "Cardiologia", nameEn: "Cardiology" },
    { slug: "general-imaging", nameAr: "التصوير العام", nameEn: "General Imaging" },
    { slug: "ob-gyn", nameAr: "OB/GYN", nameEn: "OB/GYN" },
    { slug: "poc", nameAr: "POC", nameEn: "POC" },
    { slug: "radiology", nameAr: "Radiologia", nameEn: "Radiology" },
  ].map((sub, i) => ({
    slug: sub.slug,
    nameAr: sub.nameAr,
    nameEn: sub.nameEn,
    brand: "Mindray",
    categorySlug: "medical-imaging",
    descriptionAr: `جهاز ${sub.nameAr} من Mindray — تقنية تصوير طبي متطورة ودقة عالية.`,
    descriptionEn: `${sub.nameEn} system by Mindray — advanced medical imaging with high precision.`,
    featuresAr: ["دقة تصوير عالية", "واجهة سهلة", "تقنيات ذكاء اصطناعي", "خفيف ومحمول"],
    featuresEn: ["High resolution", "Easy interface", "AI-powered", "Portable design"],
    images: [g("medical_imaging_system", `${i + 1}.jpg`)],
  })),
];

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(slug: string) {
  return products.filter((p) => p.categorySlug === slug);
}
