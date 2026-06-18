# 📋 Product Requirements Document (PRD)
## Sayun Medical Corporation — إعادة تصميم شامل للموقع

> **تاريخ الإصدار:** 2026-06-18  
> **الإصدار:** v1.0  
> **الحالة:** موافقة مبدئية  
> **الجهة:** مؤسسة سيئون للأجهزة والمعدات الطبية

---

## 🧭 جدول المحتويات

1. [الملخص التنفيذي](#1-الملخص-التنفيذي)
2. [تحليل الموقع الحالي (As-Is)](#2-تحليل-الموقع-الحالي-as-is)
3. [أهداف المشروع](#3-أهداف-المشروع)
4. [هندسة المعلومات ونطاق العمل](#4-هندسة-المعلومات-ونطاق-العمل)
5. [المتطلبات الوظيفية (Functional)](#5-المتطلبات-الوظيفية-functional)
6. [المتطلبات غير الوظيفية (Non-Functional)](#6-المتطلبات-غير-الوظيفية-non-functional)
7. [التصميم (UI/UX)](#7-التصميم-uiux)
8. [هيكل قاعدة البيانات](#8-هيكل-قاعدة-البيانات)
9. [خريطة الموقع (Sitemap)](#9-خريطة-الموقع-sitemap)
10. [الـ API والمكتبات](#10-الـ-api-والمكتبات)
11. [خطة الطرح والمراحل (Roadmap)](#11-خطة-الطرح-والمراحل-roadmap)
12. [اختبارات الجودة (QA)](#12-اختبارات-الجودة-qa)
13. [الملاحق](#13-الملاحق)

---

## 1. الملخص التنفيذي

### 1.1 عن المؤسسة
**مؤسسة سيئون للأجهزة والمعدات الطبية** — تأسست عام 1998 في صنعاء، اليمن. وهي إحدى المؤسسات الطبية الرائدة في اليمن، متخصصة في بيع وتسويق المعدات والأجهزة الطبية، معتمدة كوكيل لكبرى الشركات العالمية (Mindray, JPI, EMED, KENLIF, TMW). تمتلك 4 فروع موزعة على المحافظات اليمنية ويعمل بها 25 موظفاً.

### 1.2 المشكلة
الموقع الحالي: `https://sayunmedical.com/` يعاني من:
- **تقنية قديمة جداً** (Bootstrap 3.3.7، jQuery 2.2.1، PHP flat files — لا يوجد CMS)
- **تصميم غير عصري** ولا يعكس مكانة المؤسسة
- **لا يدوم الجوال بشكل احترافي** (Bootstrap 3 ليس mobile-first)
- **لا يوجد نظام إدارة محتوى** — كل تعديل يتطلب مبرمج
- **صفحات المنتجات شبه فارغة** أو لا تعمل
- **أداء بطيء** بسبب مكاتب JS قديمة وكثيرة
- **مشاكل SEO هيكلية** — no meta, no OG tags, no structured data
- **نظام لغوي مكرر يدوياً** (نسختين منفصلتين EN/AR)
- **روابط التواصل الاجتماعي معطلة** (href="#")
- **نموذج الاتصال لا يعمل** (action mailto)
- **لا يوجد تحليلات** (no analytics)
- **Search form وهمي** لا يعمل

### 1.3 الحل المقترح
بناء موقع حديث كامل (إعادة بناء从头) باستخدام تقنيات ويب متطورة مع:
- إطار عمل React مع TypeScript
- Next.js 14 (App Router) — SSR/SSG لبُنية SEO قوية
- TailwindCSS v4 للتصميم
- i18n مدمج (next-intl) للغة العربية والإنجليزية
- Headless CMS (Strapi أو Sanity) أو Supabase كقاعدة بيانات
- نظام إدارة منتجات كامل
- تحسينات أداء وأمان متطورة

---

## 2. تحليل الموقع الحالي (As-Is)

### 2.1 البنية التقنية الحالية

| المكون | التقنية المستخدمة | الحالة |
|--------|-------------------|--------|
| Backend | PHP (Flat files, no framework) | ⛔ قديم جداً |
| Frontend | Bootstrap 3.3.7 + jQuery 2.2.1 | ⛔ قديم |
| Slider | Revolution Slider 5.0 (deprecated) | ⛔ ثقيل وقديم |
| Icons | Font Awesome 4.7 | ⛔ إصدار قديم |
| Carousel | Owl Carousel 2.0 | ⚠️ قديم لكن يعمل |
| Lightbox | PrettyPhoto 3.1.6 | ⛔ قديم |
| Animation | jQuery Parallax 1.4.2 | ⛔ قديم |
| CMS | None (pure PHP files) | ⛔ غير موجود |
| Database | None | ⛔ غير موجود |
| SSL/HTTPS | موجود | ✅ |
| RTL | نسخة ملفات منفصلة | ⛔ مكرر يدوي |
| Analytics | غير موجود | ⛔ |

### 2.2 هيكل الملفات الحالي

```
sayunmedical.com/
├── index.php                    # English Home
├── ar/
│   └── index.php                # Arabic Home (مكرر)
├── en/
│   ├── about.php                # English About
│   ├── service.php              # English Services
│   ├── contact.php              # English Contact
│   ├── contact-form.php
│   ├── google_map.php
│   └── product/
│       ├── medical_imaging_system/
│       │   ├── cardiology.php
│       │   ├── general_imaging.php
│       │   ├── ob_gyn.php
│       │   ├── poc.php
│       │   └── radiology.php
│       ├── furniture/
│       │   ├── cabinet_work_table_sink.php
│       │   ├── hospital_bed.php
│       │   └── hospital_trolley.php
│       ├── patient_monitoring_systems.php
│       ├── x_ray.php
│       ├── anesthesia_machines.php
│       ├── dental_unit.php
│       ├── sterilizer.php
│       ├── incubator_and_warmer.php
│       ├── electronic_apparatus.php
│       ├── surgical_lights_and_operating_tables.php
│       └── infusion_pumps.php
├── css/
├── js/
├── images/
├── otherFiles/
│   └── slider-revolution/
└── .....
```

**ملاحظة:** يوجد ما يقارب 20+ صفحة PHP مكررة بالكامل بين النسختين العربية والإنجليزية.

### 2.3 المشاكل التشخيصية

#### 🔴 حرجة
1. **لا يوجد CMS** — كل محتوى الموقع Hardcoded في PHP. أي تعديل يتطلب مبرمج يعدل الملفات يدوياً.
2. **صفحات المنتجات لا تعمل** — بعضها يعطي Timeout، وأغلبها لا يحتوي على صور أو معلومات حقيقية عن المنتجات.
3. **نموذج الاتصال لا يعمل** — `action="mailto:..."` ليس طريقة صحيحة لإرسال النماذج.
4. **الترجمة يدوية ومكررة** — لكل صفحة إنجليزية يوجد نسخة عربية منفصلة. أي تعديل يجب أن يتم في ملفين.
5. **الـ SEO معدوم** — لا توجد وسوم meta description, OG tags, Twitter cards, structured data (JSON-LD), sitemap.xml, robots.txt.

#### 🟡 متوسطة
6. **التصميم غير احترافي** — يبدو وكأنه قالب تعليمي (Educomp) معدل، وليس موقعاً طبياً.
7. **صور السلايدر لا تظهر** — تستخدم `dummy.jpg` كلازي لود لكن الصور الأصلية لا تحمل.
8. **الروابط الاجتماعية معطلة** — جميعها `href="#"`.
9. **Search form وهمي** — يظهر في الواجهة لكن لا يقوم بأي عملية بحث حقيقية.
10. **سرعة التحميل** — يحتوي على 14+ ملف JS و 6+ ملفات CSS، تحميلها متسلسل وليس متوازيًاً.

#### 🟢 خفيفة
11. **الـ Footer مزدحم جداً** — يحتوي على 5 أعمدة مع معلومات مكررة.
12. **الألوان غير متناسقة** — مزيج من الأزرق الداكن والفاتح والذهبي دون نظام مرئي واضح.
13. **الخطوط قديمة** — لا تستخدم خطوطاً ويب حديثة (Google Fonts).
14. **لا يوجد شهادات أو تقييمات عملاء** — رغم أن المؤسسة عمرها 25+ سنة.
15. **لا يوجد مدونة أو أخبار** — رغم وجود مشاريع مهمة (مشروع مع الحكومة الكندية).

---

## 3. أهداف المشروع

### 3.1 أهداف العمل (Business Goals)
| الهدف | مؤشر القياس (KPI) | المستهدف |
|-------|-------------------|----------|
| زيادة المبيعات عبر الموقع | استفسارات واردة من نموذج الاتصال | +300% خلال 6 أشهر |
| تحسين ظهور الموقع في محركات البحث | Traffic عضوي | المرتبة الأولى لكلمات "أجهزة طبية اليمن" |
| تحسين تجربة المستخدم | مدة الجلسة، معدل الارتداد | تقليل الارتداد إلى <40% |
| زيادة المصداقية | مشاهدات صفحة "عنا" و"عملاؤنا" | +200% |
| إدارة المحتوى بسهولة | عدد التحديثات بدون مبرمج | 100% عبر CMS |

### 3.2 أهداف التقنية (Technical Goals)
- **SSR/SSG** لبني SEO قوي
- **PWA-ready** للعمل على الأجهزة الجوالة حتى مع ضعف الاتصال
- **متوافق مع WCAG 2.1 AA** (إمكانية الوصول)
- **Core Web Vitals** جميعها في النطاق الأخضر
- **وقت تحميل** First Contentful Paint < 1.5s
- **Lighthouse Score** > 90 في جميع الفئات

---

## 4. هندسة المعلومات ونطاق العمل

### 4.1 الـ Personas

#### 👤 أحمد — مدير مشتريات مستشفى
- **العمر:** 35-55
- **الهدف:** البحث عن مورد موثوق للأجهزة الطبية
- **الألم:** صعوبة مقارنة المنتجات، عدم معرفة الأسعار، الخوف من الغش التجاري
- **الاحتياج:** كتالوج منتجات واضح، شهادات جودة، ضمانات، تواصل سريع

#### 👤 د. سارة — طبيبة / استشارية
- **العمر:** 30-50
- **الهدف:** معرفة تفاصيل الأجهزة الجديدة وميزاتها التقنية
- **الألم:** قلة المعلومات التقنية في المواقع المحلية
- **الاحتياج:** مواصفات فنية دقيقة، مقارنات، فيديوهات شرح

#### 👤 خالد — صاحب عيادة خاصة
- **العمر:** 28-45
- **الهدف:** تأثيث عيادته بأجهزة حديثة بأسعار معقولة
- **الألم:** ميزانية محدودة، لا يعرف من أين يبدأ
- **الاحتياج:** حلول متكاملة (جهاز + ضمان + صيانة)، تقسيم أقساط، استشارة فورية

### 4.2 هيكلة المحتوى الجديد

```
الصفحة الرئيسية (Home)
├── Hero Slider (3-4 شرائح عالية الجودة)
├── لمحة عن المؤسسة + الأرقام (تأسست 1998، 4 فروع، 25+ موظف، 500+ عميل)
├── أبرز المنتجات (6-8 بطاقات مع روابط)
├── الشركات العالمية (الشعارات المتحركة)
├── مشاريعنا (مشروع الحكومة الكندية)
├── شهادات العملاء (Testimonials Slider)
├── نموذج طلب استشارة سريع
└── Footer محسن

من نحن (About)
├── قصة المؤسسة (1998 → اليوم)
├── الرؤية والرسالة والقيم
├── الجدول الزمني (Timeline)
├── الفريق
├── الشركاء العالميون
└── إنجازاتنا وشهاداتنا

منتجاتنا (Products)
├── التصوير الطبي (Mindray)
│   ├── Cardiologia
│   ├── General Imaging
│   ├── OB/GYN
│   ├── POC
│   └── Radiology
├── الأثاث الطبي
│   ├── خزائن وطاولات
│   ├── أسرة مستشفيات
│   └── عربات
├── أجهزة المراقبة (Mindray)
├── الأشعة (JPI)
├── أجهزة التخدير والتنفس (Mindray)
├── وحدة أسنان
├── معقمات
├── حاضنات ومدافئ
├── أجهزة إلكترونية
├── أضواء جراحية وطاولات عمليات (Mindray)
└── مضخات الحقن (Mindray)

خدماتنا (Services)
├── الدعم الفني
├── الاستشارات الطبية
├── الصيانة وقطع الغيار
├── التوريد والتركيب
├── التدريب
└── طلب جهاز مخصص

المشاريع (Projects)
├── مشروع تعزيز الصمود (الحكومة الكندية)
├── معرض الصور
└── pending

اتصل بنا (Contact)
├── نموذج اتصال (يعمل)
├── معلومات الاتصال
├── خريطة تفاعلية
├── واتساب مباشر
└── وسائل التواصل الاجتماعي

المدونة (Blog) — جديد
├── أخبار المؤسسة
├── مقالات طبية
└── تحديثات المنتجات
```

---

## 5. المتطلبات الوظيفية (Functional Requirements)

### 5.1 صفحات الموقع الأساسية

| # | الصفحة | الأولوية | الوصف |
|---|--------|---------|-------|
| FR-01 | الصفحة الرئيسية | P0 | Hero slider مع CTA، لمحة عن المؤسسة، أرقام رئيسية، منتجات مميزة، شركاء، شهادات، مشاريع، CTA |
| FR-02 | من نحن | P0 | تاريخ المؤسسة، الرؤية والرسالة والقيم، الجدول الزمني، الشركاء |
| FR-03 | المنتجات — الفئات | P0 | عرض فئات المنتجات مع صور وأيقونات |
| FR-04 | المنتجات — التفاصيل | P0 | صفحة منتج فردي: صور، مواصفات، كتالوج PDF، طلب عرض سعر |
| FR-05 | الخدمات | P0 | عرض الخدمات مع أيقونات وتفاصيل كل خدمة |
| FR-06 | المشاريع | P1 | عرض مشاريع المؤسسة مع معرض صور |
| FR-07 | اتصل بنا | P0 | نموذج اتصال يعمل + معلومات + خريطة + واتساب |
| FR-08 | المدونة | P1 | أخبار المؤسسة ومنتجاتها (CMS-based) |
| FR-09 | بحث | P1 | بحث في المنتجات والأخبار |
| FR-10 | صفحة 404 | P0 | صفحة خطأ مخصصة وجذابة |

### 5.2 المتطلبات الوظيفية التفصيلية

#### FR-01: الصفحة الرئيسية
```yaml
sections:
  - hero_slider:
      slides: 3-4
      elements_per_slide: [عنوان رئيسي, جملة فرعية, زر CTA (طلب عرض سعر)]
      animation: fade/slide مع parallax خفيف
      auto_play: true
      interval: 6s
  - stats_bar:
      items: [تأسست 1998, 4 فروع, 25+ موظف, 500+ عميل]
      animation: عد تصاعدي عند الظهور
  - featured_products:
      count: 6-8
      source: أحدث المنتجات أو المميزة من CMS
      layout: شبكة 4x2 أو 3x3
  - partners:
      type: شعارات متحركة (infinite scroll logos)
  - testimonials:
      type: كاروسيل تقييمات العملاء
      source: CMS
  - featured_project:
      type: بطاقة مشروع مميز (مع صور)
  - cta_section:
      title: "تواصل معنا للحصول على استشارة مجانية"
      button: "اتصل بنا الآن"
  - quick_contact_form:
      fields: [الاسم, رقم الجوال, الرسالة]
```

#### FR-03/FR-04: نظام المنتجات (Core Feature)

```yaml
product_system:
  categories:
    - name: التصوير الطبي (Mindray)
      slug: medical-imaging
      subcategories:
        - cardiology
        - general-imaging
        - ob-gyn
        - poc
        - radiology
    - name: الأثاث الطبي
      slug: furniture
      subcategories:
        - cabinet-work-table-sink
        - hospital-bed
        - hospital-trolley
    - name: أجهزة المراقبة
      slug: patient-monitoring
    - name: الأشعة (JPI)
      slug: x-ray
    # ... إلخ

  product_fields:
    - name: string (AR/EN)
    - slug: string (unique)
    - category_id: relation
    - description_short: text (AR/EN)
    - description_full: richtext (AR/EN)
    - specifications: JSON array
    - features: string[] (AR/EN)
    - images: string[] (multiple)
    - catalog_pdf: file
    - brand: string
    - manufacturer: string
    - warranty: string
    - is_featured: boolean
    - meta_title: string
    - meta_description: string
    - status: [draft, published]
    - sort_order: integer

  interactions:
    - عرض جميع المنتجات مع فلاتر (حسب الفئة، الماركة، السعر)
    - بحث في المنتجات
    - معرض صور مع تكبير (lightbox)
    - تحميل كتالوج PDF
    - زر "طلب عرض سعر" → يفتح نموذج اتصال مع إسم المنتج
```

#### FR-07: نظام الاتصال

```yaml
contact_system:
  contact_form:
    fields:
      - name (required)
      - email (required, validation)
      - phone (required)
      - subject (required)
      - message (required, min 20 chars)
      - product_of_interest (optional, auto-filled from product pages)
    actions:
      - إرسال → API → إشعار بريد إلكتروني للإدارة
      - حفظ في قاعدة البيانات (history)
      - إرسال إشعار عبر واتساب (اختياري)
      - إرسال تأكيد للعميل (auto-reply email)

  whatsapp_integration:
    - زر واتساب عائم (Floating button)
    - رابط مباشر: `wa.me/967777033002`
    - نص تلقائي: "مرحباً، أود الاستفسار عن..."

  map:
    - Google Maps Embed مع Markers
    - اتجاهات إلى الفرع الرئيسي
```

#### FR-08: نظام المدونة

```yaml
blog_system:
  fields:
    - title (AR/EN)
    - slug (unique)
    - excerpt (short description)
    - content (rich text)
    - cover_image
    - category (أخبار المؤسسة, مقالات طبية, ...)
    - tags: string[]
    - author: string
    - published_at: datetime
    - is_featured: boolean
    - meta_title
    - meta_description
  features:
    - قائمة المقالات (paginated)
    - مقال فردي (مع share buttons)
    - تصنيفات
    - بحث في المدونة
    - RSS Feed
```

### 5.3 نظام إدارة المحتوى (CMS Admin Panel)

```yaml
admin_panel:
  authentication:
    - تسجيل دخول آمن (JWT + refresh token)
    - صلاحيات (Admin, Editor, Viewer)
  modules:
    - المنتجات: CRUD كامل مع إدارة الصور والفئات
    - الفئات: ترتيب وتعديل الفئات
    - المدونة: كتابة وتعديل المقالات
    - الرسائل: عرض والرد على استفسارات العملاء
    - المشاريع: إضافة وتعديل المشاريع
    - شهادات العملاء: إدارة التقييمات
    - الإعدادات: معلومات المؤسسة، وسائل التواصل، SEO
    - المستخدمين: إدارة المستخدمين والصلاحيات
  features:
    - محرر نصوص (Rich Text Editor - TipTap أو Quill)
    - رفع صور متعدد مع تصغير تلقائي
    - معاينة قبل النشر
    - نسخ احتياطي
    - سجل التغييرات (Audit Log)
```

---

## 6. المتطلبات غير الوظيفية (Non-Functional Requirements)

### 6.1 الأداء (Performance)

| المعيار | الهدف |
|---------|-------|
| First Contentful Paint (FCP) | < 1.5s |
| Largest Contentful Paint (LCP) | < 2.5s |
| First Input Delay (FID) | < 100ms |
| Cumulative Layout Shift (CLS) | < 0.1 |
| Time to Interactive (TTI) | < 3.5s |
| حجم الصفحة الإجمالي | < 500kb (بدون صور) |
| Lighthouse Performance | > 90 |

**استراتيجيات:**
- Next.js SSG للصفحات الثابتة + ISR للمنتجات
- صور WebP/AVIF مع تحويل تلقائي
- CDN (Vercel أو Cloudflare)
- Lazy loading للصور والمكونات
- Font subsetting للخطوط العربية
- Bundle splitting وtree shaking
- Service worker للتخزين المؤقت

### 6.2 الأمان (Security)

| المعيار | الوصف |
|---------|-------|
| HTTPS | إجباري مع HSTS |
| CORS | مخصص للـ API فقط |
| CSRF Protection | لجميع النماذج |
| XSS Prevention | Sanitize كل المدخلات |
| Rate Limiting | على API الاتصال |
| SQL Injection | عبر Prisma/Supabase parameterized queries |
| JWT | مع refresh tokens للإدارة |
| Helmet.js | Headers أمان |
| Environment Variables | كل الأسرار في .env |

### 6.3 إمكانية الوصول (Accessibility)

| المعيار | المستوى |
|---------|---------|
| WCAG | 2.1 AA |
| ARIA Labels | جميع العناصر التفاعلية |
| Keyboard Navigation | كامل الموقع |
| Focus Indicators | واضحة |
| Color Contrast | AA minimum |
| Screen Reader | متوافق مع NVDA, VoiceOver, TalkBack |
| RTL Support | كامل للعربية |

### 6.4 تحسين محركات البحث (SEO)

```yaml
seo_requirements:
  on_page:
    - unique title tags لكل صفحة (AR + EN)
    - unique meta descriptions لكل صفحة
    - Open Graph tags (og:title, og:description, og:image)
    - Twitter Cards
    - JSON-LD Structured Data:
        - Organization schema
        - Product schema (للمنتجات)
        - Article schema (للمدونة)
        - BreadcrumbList schema
        - LocalBusiness schema
    - Canonical URLs
    - hreflang tags (ar, en)
    - heading hierarchy (h1 → h6)
  technical:
    - sitemap.xml (ديناميكي)
    - robots.txt
    - clean URL structure (لا extension)
    - 301 redirects للصفحات القديمة
    - 404 مخصصة
    - تحميل سريع (Core Web Vitals)
  content:
    - صفحات غنية بالمحتوى (250+ كلمة لكل صفحة)
    - صور مع alt tags وصفية
    - internal linking بين المنتجات والمقالات
```

### 6.5 دعم اللغات (i18n)

```yaml
i18n:
  languages:
    - ar: العربية (default)
    - en: English
  direction:
    - ar: RTL
    - en: LTR
  strategy:
    - URL-based: sayunmedical.com/ar/... و sayunmedical.com/en/...
    - default redirect based on browser language
    - next-intl library
  scope:
    - جميع النصوص الثابتة
    - جميع محتوى CMS (منتجات، مقالات، مشاريع)
    - التواريخ (تنسيق مختلف)
    - الأرقام (تنسيق مختلف)
    - الاتجاهات (RTL/LTR)
```

---

## 7. التصميم (UI/UX)

### 7.1 هوية التصميم (Design System)

#### 🎨 الألوان

```css
:root {
  /* العلامة التجارية */
  --color-primary: #0A5C7E;        /* أزرق طبي عميق */
  --color-primary-dark: #073B52;   
  --color-primary-light: #1A8BB5;  
  
  /* الأكسنت */
  --color-accent: #C8A44E;         /* ذهبي متوسط */
  --color-accent-light: #E8D5A3;
  
  /* المحايد */
  --color-neutral-50: #F8FAFC;
  --color-neutral-100: #F1F5F9;
  --color-neutral-200: #E2E8F0;
  --color-neutral-300: #CBD5E1;
  --color-neutral-400: #94A3B8;
  --color-neutral-500: #64748B;
  --color-neutral-600: #475569;
  --color-neutral-700: #334155;
  --color-neutral-800: #1E293B;
  --color-neutral-900: #0F172A;
  
  /* النجاح/الخطأ */
  --color-success: #10B981;
  --color-error: #EF4444;
  --color-warning: #F59E0B;
  
  /* الخلفيات */
  --color-bg: #FFFFFF;
  --color-bg-alt: #F0F7FA;
  --color-bg-dark: #073B52;
}
```

**التبرير:** الأزرق الطبي يمنح الثقة والاحترافية، الذهبي يرمز للجودة والتميز.

#### 🔤 الخطوط

- **العناوين العربية:** `Noto Kufi Arabic` (وزن 600-800)
- **النصوص العربية:** `Noto Sans Arabic` (وزن 300-500)
- **العناوين الإنجليزية:** `Inter` (وزن 600-800)
- **النصوص الإنجليزية:** `Inter` (وزن 300-500)

#### 📐 نظام الشبكة

- **عرض المحتوى:** max-width 1280px
- **Grid:** 12-column responsive grid
- **Gap:** 8px multiplier (8, 16, 24, 32, 48, 64, 96)
- **Border radius:** 8px (12px للبطاقات الكبيرة)
- **Shadows:** 3 مستويات (sm, md, lg)

### 7.2 تصاميم الصفحات الرئيسية (Wireframes)

#### الصفحة الرئيسية

```
┌──────────────────────────────────────────────────┐
│  [Topbar]  الإيميل      [عربي/English] [🔍 بحث] │
│  [Logo]  [الرئيسية] [منتجات] [خدمات] [اتصل بنا] │
├──────────────────────────────────────────────────┤
│                                                  │
│           ┌─── HERO SLIDER ──────────┐           │
│           │  "شريكك في الرعاية       │           │
│           │   الصحية في اليمن"       │           │
│           │  [اطلب عرض سعر]          │           │
│           └──────────────────────────┘           │
│                                                  │
│  ┌─── 1998 ──┐ ┌─── 4 ────┐ ┌─── 25+ ──┐ ┌─── 500+ ──┐ │
│  │  تأسست    │ │  فروع    │ │  موظف   │ │  عميل   │ │
│  └───────────┘ └──────────┘ └──────────┘ └───────────┘ │
│                                                  │
│  ┌─ منتجاتنا المميزة ──────────────────────────┐ │
│  │  [Card] [Card] [Card] [Card]                │ │
│  │  [Card] [Card] [Card] [Card]                │ │
│  └─────────────────────────────────────────────┘ │
│                                                  │
│  ┌─ شركاؤنا العالميون ─────────────────────────┐ │
│  │  [Logo] [Logo] [Logo] [Logo] [Logo] [Logo]  │ │
│  │          (Infinite Scroll)                   │ │
│  └─────────────────────────────────────────────┘ │
│                                                  │
│  ┌─ ماذا يقول عملاؤنا ─────────────────────────┐ │
│  │  "⭐⭐⭐⭐⭐  تجربة ممتازة..."                  │ │
│  └─────────────────────────────────────────────┘ │
│                                                  │
│  ┌─ تواصل معنا ─────────────────────────────────┐ │
│  │  [الاسم]  [رقم الجوال]  [رسالتك]  [إرسال]   │ │
│  └─────────────────────────────────────────────┘ │
├──────────────────────────────────────────────────┤
│  FOOTER: 5 أعمدة محسنة                           │
└──────────────────────────────────────────────────┘
```

#### صفحة المنتجات

```
┌──────────────────────────────────────────────────┐
│  HEADER                                         │
├──────────────────────────────────────────────────┤
│  منتجاتنا الطبية                                  │
│                                                  │
│  ┌──────────────────┐ ┌────────────────────────┐ │
│  │  التصنيفات        │ │  شبكة المنتجات          │ │
│  │  ┌─────────────┐ │ │                         │ │
│  │  │ □ جميع       │ │ │  [Card] [Card] [Card]  │ │
│  │  │ □ التصوير    │ │ │  [Card] [Card] [Card]  │ │
│  │  │ □ الأثاث     │ │ │  [Card] [Card] [Card]  │ │
│  │  │ □ المراقبة   │ │ │                         │ │
│  │  │ □ الأشعة     │ │ │  [Pagination]           │ │
│  │  │ :           │ │ │                         │ │
│  │  └─────────────┘ │ │  [🔍 بحث في المنتجات]   │ │
│  └──────────────────┘ └────────────────────────┘ │
├──────────────────────────────────────────────────┤
│  FOOTER                                         │
└──────────────────────────────────────────────────┘
```

#### صفحة المنتج الفردي

```
┌──────────────────────────────────────────────────┐
│  HEADER                                         │
├──────────────────────────────────────────────────┤
│  Breadcrumb: الرئيسية → منتجات → التصوير الطبي   │
├──────────────────────────────────────────────────┤
│                                                  │
│  ┌───────────────┐  ┌─────────────────────────┐ │
│  │  [Main Image] │  │  إسم المنتج              │ │
│  │               │  │  الماركة: Mindray        │ │
│  │  [Thumbs]     │  │  الضمان: 3 سنوات         │ │
│  │  [Thumbs]     │  │                          │ │
│  └───────────────┘  │  وصف مختصر...            │ │
│                     │                          │ │
│                     │  [اطلب عرض سعر]           │ │
│                     │  [تحميل الكتالوج PDF]    │ │
│                     └──────────────────────────┘ │
│                                                  │
│  ┌─ المواصفات الفنية ──────────────────────────┐ │
│  │  [جدول مواصفات مع أيقونات]                   │ │
│  └─────────────────────────────────────────────┘ │
│                                                  │
│  ┌─ صور إضافية ─────────────────────────────────┐ │
│  │  [Gallery Grid]                               │ │
│  └─────────────────────────────────────────────┘ │
│                                                  │
│  ┌─ منتجات ذات صلة ────────────────────────────┐ │
│  │  [Card] [Card] [Card] [Card]                │ │
│  └─────────────────────────────────────────────┘ │
├──────────────────────────────────────────────────┤
│  FOOTER                                         │
└──────────────────────────────────────────────────┘
```

---

## 8. هيكل قاعدة البيانات

### 8.1 مخطط قاعدة البيانات (Supabase/PostgreSQL)

```sql
-- الجدول: categories (فئات المنتجات)
CREATE TABLE categories (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  parent_id UUID REFERENCES categories(id) ON DELETE SET NULL,
  sort_order INTEGER DEFAULT 0,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- الجدول: category_translations (ترجمة الفئات)
CREATE TABLE category_translations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  category_id UUID REFERENCES categories(id) ON DELETE CASCADE,
  locale TEXT NOT NULL CHECK (locale IN ('ar', 'en')),
  name TEXT NOT NULL,
  slug TEXT NOT NULL,
  description TEXT,
  meta_title TEXT,
  meta_description TEXT,
  UNIQUE(category_id, locale),
  UNIQUE(slug, locale)
);

-- الجدول: products (المنتجات)
CREATE TABLE products (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  category_id UUID REFERENCES categories(id) ON DELETE SET NULL,
  brand TEXT,
  manufacturer TEXT,
  warranty TEXT,
  is_featured BOOLEAN DEFAULT false,
  sort_order INTEGER DEFAULT 0,
  status TEXT DEFAULT 'draft' CHECK (status IN ('draft', 'published')),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- الجدول: product_translations (ترجمة المنتجات)
CREATE TABLE product_translations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  product_id UUID REFERENCES products(id) ON DELETE CASCADE,
  locale TEXT NOT NULL CHECK (locale IN ('ar', 'en')),
  name TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  description_short TEXT,
  description_full TEXT,
  specifications JSONB DEFAULT '[]',
  features TEXT[] DEFAULT '{}',
  meta_title TEXT,
  meta_description TEXT,
  UNIQUE(product_id, locale)
);

-- الجدول: product_images (صور المنتجات)
CREATE TABLE product_images (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  product_id UUID REFERENCES products(id) ON DELETE CASCADE,
  url TEXT NOT NULL,
  alt_ar TEXT,
  alt_en TEXT,
  sort_order INTEGER DEFAULT 0,
  is_primary BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- الجدول: product_catalogs (كتالوجات PDF)
CREATE TABLE product_catalogs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  product_id UUID REFERENCES products(id) ON DELETE CASCADE,
  url TEXT NOT NULL,
  name_ar TEXT,
  name_en TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- الجدول: blog_posts (المدونة)
CREATE TABLE blog_posts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  author TEXT,
  cover_image TEXT,
  category TEXT,
  tags TEXT[] DEFAULT '{}',
  is_featured BOOLEAN DEFAULT false,
  published_at TIMESTAMPTZ,
  status TEXT DEFAULT 'draft' CHECK (status IN ('draft', 'published')),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- الجدول: blog_translations (ترجمة المقالات)
CREATE TABLE blog_translations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  post_id UUID REFERENCES blog_posts(id) ON DELETE CASCADE,
  locale TEXT NOT NULL CHECK (locale IN ('ar', 'en')),
  title TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  excerpt TEXT,
  content TEXT,
  meta_title TEXT,
  meta_description TEXT,
  UNIQUE(post_id, locale)
);

-- الجدول: contacts (رسائل الاتصال)
CREATE TABLE contacts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT,
  phone TEXT,
  subject TEXT,
  message TEXT NOT NULL,
  product_of_interest TEXT,
  is_read BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- الجدول: testimonials (شهادات العملاء)
CREATE TABLE testimonials (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  client_name_ar TEXT NOT NULL,
  client_name_en TEXT NOT NULL,
  position_ar TEXT,
  position_en TEXT,
  content_ar TEXT NOT NULL,
  content_en TEXT NOT NULL,
  client_image TEXT,
  rating INTEGER DEFAULT 5 CHECK (rating BETWEEN 1 AND 5),
  sort_order INTEGER DEFAULT 0,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- الجدول: projects (المشاريع)
CREATE TABLE projects (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  cover_image TEXT,
  gallery_images TEXT[] DEFAULT '{}',
  is_featured BOOLEAN DEFAULT false,
  sort_order INTEGER DEFAULT 0,
  status TEXT DEFAULT 'draft',
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE project_translations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  project_id UUID REFERENCES projects(id) ON DELETE CASCADE,
  locale TEXT NOT NULL CHECK (locale IN ('ar', 'en')),
  title TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  description TEXT,
  content TEXT,
  UNIQUE(project_id, locale)
);

-- الجدول: site_settings (إعدادات الموقع)
CREATE TABLE site_settings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  key TEXT NOT NULL UNIQUE,
  value_ar TEXT,
  value_en TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- الجدول: users (مستخدمي الإدارة)
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT NOT NULL UNIQUE,
  password_hash TEXT NOT NULL,
  name TEXT NOT NULL,
  role TEXT DEFAULT 'editor' CHECK (role IN ('admin', 'editor', 'viewer')),
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);
```

### 8.2 العلاقات (ERD)

```
categories
  │
  ├──< products (N:1)
  │      ├──< product_images (1:N)
  │      ├──< product_catalogs (1:N)
  │      └──> category_translations (1:N)
  │
  └──> category_translations (1:N)

blog_posts
  └──> blog_translations (1:N)

projects
  └──> project_translations (1:N)

contacts (standalone)

testimonials (standalone)

site_settings (standalone)
```

---

## 9. خريطة الموقع (Sitemap)

### 9.1 التنقل الرئيسي

```
[الشعار]  الرئيسية  |  عن المؤسسة  |  المنتجات ▼  |  الخدمات  |  المشاريع  |  المدونة  |  اتصل بنا

           المنتجات ▼
           ├── التصوير الطبي (Mindray) ►
           │   ├── Cardiologia
           │   ├── General Imaging
           │   ├── OB/GYN
           │   ├── POC
           │   └── Radiology
           ├── الأثاث الطبي ►
           │   ├── خزائن وطاولات
           │   ├── أسرة مستشفيات
           │   └── عربات
           ├── أجهزة المراقبة (Mindray)
           ├── الأشعة (JPI)
           ├── أجهزة التخدير (Mindray)
           ├── وحدة أسنان
           ├── معقمات
           ├── حاضنات ومدافئ
           ├── أجهزة إلكترونية
           ├── غرف عمليات (Mindray)
           └── مضخات حقن (Mindray)
```

### 9.2 بنية الـ URL

```
/                                    ← الصفحة الرئيسية (auto-redirect AR)
/ar/                                 ← النسخة العربية
/en/                                 ← النسخة الإنجليزية
/ar/about                            ← من نحن
/en/about
/ar/products                         ← جميع المنتجات
/en/products
/ar/products/:slug                   ← فئة منتجات
/en/products/:slug
/ar/product/:slug                    ← منتج فردي
/en/product/:slug
/ar/services                         ← الخدمات
/en/services
/ar/projects                         ← المشاريع
/en/projects
/ar/project/:slug                    ← مشروع فردي
/en/project/:slug
/ar/contact                          ← اتصل بنا
/en/contact
/ar/blog                             ← المدونة
/en/blog
/ar/blog/:slug                       ← مقال
/en/blog/:slug
/ar/search?q=:query                  ← البحث
/en/search?q=:query
```

---

## 10. الـ API والمكتبات

### 10.1 Recommended Tech Stack

```yaml
frontend:
  framework: Next.js 15 (App Router)
  language: TypeScript
  styling: Tailwind CSS v4
  ui_components: shadcn/ui (Radix primitives)
  animation: Framer Motion
  form: React Hook Form + Zod
  i18n: next-intl
  image_optimization: next/image (built-in)
  state_management: React Query (TanStack Query)

backend:
  api: Next.js API Routes / Route Handlers
  ORM: Prisma (type-safe)
  database: Supabase (PostgreSQL)
  storage: Supabase Storage (للصور والملفات)
  authentication: NextAuth.js v5 (Auth.js)
  email: Resend / Nodemailer
  file_upload: UploadThing or Supabase Storage
  validation: Zod

cms:
  type: Custom-built (dashboard inside Next.js)
  or: Strapi (headless CMS)
  rich_text: TipTap (ProseMirror-based)

deployment:
  platform: Vercel (Primary)
  cdn: Vercel Edge Network
  domain: sayunmedical.com
  dns: Cloudflare
  analytics: Vercel Analytics + Google Analytics 4
  monitoring: Sentry
```

### 10.2 Libraries & Dependencies

```json
{
  "dependencies": {
    "next": "^15.0.0",
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "next-intl": "^3.x",
    "@prisma/client": "^6.x",
    "next-auth": "^5.x",
    "@radix-ui/react-accordion": "^1.x",
    "@radix-ui/react-dialog": "^1.x",
    "@radix-ui/react-dropdown-menu": "^1.x",
    "@radix-ui/react-tabs": "^1.x",
    "@radix-ui/react-select": "^1.x",
    "@radix-ui/react-toast": "^1.x",
    "framer-motion": "^11.x",
    "react-hook-form": "^7.x",
    "@hookform/resolvers": "^3.x",
    "zod": "^3.x",
    "@tanstack/react-query": "^5.x",
    "lucide-react": "^0.x",
    "embla-carousel-react": "^8.x",
    "react-dropzone": "^14.x",
    "sharp": "^0.33.x",
    "recharts": "^2.x"
  },
  "devDependencies": {
    "typescript": "^5.x",
    "tailwindcss": "^4.x",
    "postcss": "^8.x",
    "autoprefixer": "^10.x",
    "eslint": "^9.x",
    "prettier": "^3.x",
    "prettier-plugin-tailwindcss": "^0.x",
    "@types/node": "^22.x",
    "@types/react": "^19.x",
    "prisma": "^6.x"
  }
}
```

---

## 11. خطة الطرح والمراحل (Roadmap)

### المرحلة 1 — البنية التحتية والقالب (الأسبوع 1-2)

| المهمة | الوصف |
|--------|-------|
| إعداد Next.js 15 مع App Router | TypeScript + Tailwind + ESLint |
| إعداد i18n (next-intl) | AR/EN مع RTL/LTR |
| إعداد Supabase | قاعدة البيانات + Storage + Auth |
| إعداد Prisma | Schema + Migrations |
| إعداد شريط التحميل والـ Layouts | Root Layout, Header, Footer |
| تصميم الـ Header | ثابت مع قائمة منسدلة |
| تصميم الـ Footer | 4 أعمدة مع معلومات المؤسسة |
| ربط الخطوط العربية | Noto Kufi Arabic + Noto Sans Arabic |
| **Delivery:** القالب الأساسي يعمل بلغتين | ✅ |

### المرحلة 2 — الصفحات الثابتة (الأسبوع 3-4)

| المهمة | الوصف |
|--------|-------|
| الصفحة الرئيسية | Full Hero + Stats + منتجات + شركاء + شهادات + CTA |
| صفحة من نحن | Timeline + Vision/Mission + Team + Partners |
| صفحة الخدمات | 6 خدمة مع أيقونات وتفاصيل |
| صفحة اتصل بنا | Form + Info + Map + WhatsApp |
| صفحة 404 | مخصصة |
| **Delivery:** كل الصفحات الثابتة | ✅ |

### المرحلة 3 — نظام المنتجات (الأسبوع 5-6)

| المهمة | الوصف |
|--------|-------|
| نموذج بيانات المنتجات في Prisma | Categories + Products + Images |
| صفحة فئات المنتجات | مع فلاتر وبحث |
| صفحة منتج فردي | صور، مواصفات، PDF، طلب سعر |
| لوحة إدارة المنتجات (Admin) | CRUD للفئات والمنتجات |
| رفع الصور والملفات | Supabase Storage |
| **Delivery:** نظام منتجات كامل | ✅ |

### المرحلة 4 — لوحة الإدارة والمدونة (الأسبوع 7-8)

| المهمة | الوصف |
|--------|-------|
| نظام المصادقة (NextAuth) | Admin/Editor/Viewer |
| لوحة تحكم الإدارة | Dashboard |
| إدارة المدونة | CRUD مع محرر نصوص |
| إدارة الرسائل | عرض والرد على الاستفسارات |
| إدارة الشهادات | CRUD |
| إدارة المشاريع | CRUD |
| **Delivery:** CMS كامل | ✅ |

### المرحلة 5 — التحسينات والإطلاق (الأسبوع 9-10)

| المهمة | الوصف |
|--------|-------|
| تحسين الـ SEO | sitemap, robots, metadata, structured data |
| تحسين الأداء | Images, Fonts, Code splitting |
| اختبارات الجودة | Lighthouse, Cross-browser, Mobile |
| التصحيح النهائي | Bug fixes |
| النشر | Vercel + Custom Domain + SSL |
| إعادة التوجيه | 301 redirects من الموقع القديم |
| اختبار المستخدم | مع 3-5 عملاء حقيقيين |
| **Delivery:** الإطلاق الرسمي 🚀 | ✅ |

---

## 12. اختبارات الجودة (QA)

### 12.1 أنواع الاختبارات

| نوع الاختبار | الوصف | النطاق |
|-------------|-------|--------|
| **Unit Tests** | اختبار المكونات الفردية | Jest + React Testing Library |
| **Integration Tests** | اختبار التفاعلات بين المكونات | Jest + MSW |
| **E2E Tests** | اختبار تدفق المستخدم الكامل | Playwright أو TestSprite |
| **Visual Regression** | مقارنة الـ UI قبل/بعد | Chromatic / Percy |
| **Performance** | Lighthouse, Web Vitals | Lighthouse CI |
| **Accessibility** | WCAG compliance | axe-core, WAVE |
| **Cross-browser** | Chrome, Firefox, Safari, Edge | BrowserStack |
| **Mobile** | iOS, Android, different sizes | Responsive checks |

### 12.2 سيناريوهات الاختبار الحرجة (E2E)

```yaml
critical_paths:
  - user_flow_1: "زائر جديد يصل للصفحة الرئيسية"
    steps:
      - تحميل الصفحة الرئيسية
      - التحقق من ظهور Hero Slider
      - التحقق من عمل القائمة المنسدلة
      - النقر على "منتجاتنا"
      - تصفح فئة "التصوير الطبي"
      - اختيار منتج وعرض تفاصيله
      - تحميل الكتالوج
    expected: جميع الخطوات تعمل خلال 3 ثواني

  - user_flow_2: "عميل يرسل استفساراً"
    steps:
      - الذهاب إلى "اتصل بنا"
      - ملء النموذج (اسم، إيميل، رسالة)
      - إرسال النموذج
      - ظهور رسالة تأكيد
      - وصول الإيميل للإدارة (API test)
    expected: تأكيد خلال 5 ثواني

  - user_flow_3: "تبديل اللغة"
    steps:
      - فتح الموقع (عربي)
      - النقر على تبديل اللغة إلى English
      - التحقق من أن URL تغير إلى /en/
      - التحقق من أن كل النصوص بالإنكليزية
      - التحقق من اتجاه الصفحة (LTR)
      - العودة للعربية (RTL)
    expected: التبديل فوري بدون إعادة تحميل

  - user_flow_4: "البحث في المنتجات"
    steps:
      - الذهاب إلى صفحة المنتجات
      - كتابة كلمة في البحث
      - ظهور النتائج المطابقة
      - النقر على نتيجة
      - الوصول لصفحة المنتج
    expected: بحث < 1 ثانية

  - user_flow_5: "المسؤول يضيف منتجاً"
    steps:
      - تسجيل الدخول إلى لوحة الإدارة
      - إضافة فئة جديدة
      - إضافة منتج جديد مع صور
      - التحقق من ظهوره في الموقع
      - تعديل المنتج
      - حذف المنتج
    expected: جميع العمليات CRUD
```

### 12.3 استخدام TestSprite

سيتم استخدام **TestSprite** لاختبار الجودة وفق التالي:
1. **Bootstrap أولي** لتكوين إطار الاختبار
2. **تحليل الكود** (Generate Code Summary)
3. **إنشاء خطط اختبار** للـ Frontend والـ Backend
4. **تنفيذ الاختبارات** مع تقارير تفصيلية
5. **فتح Dashboard** لمراجعة النتائج وتعديل حالات الفشل

---

## 13. الملاحق

### الملحق أ: تحليل الموقع الحالي — مشاكل إضافية

| # | المشكلة | التفاصيل | التأثير |
|---|---------|----------|---------|
| 1 | **Slider Revolution** | إصدار 5.0 قديم جداً، يستخدم Flash-like HTML rendering | أداء ضعيف، لا يدعم اللمس جيداً |
| 2 | **jQuery 2.x** | إصدار قديم لا يدوم IE9+ (لكن هذا ليس مشكلة كبيرة) | أمني، يفتقد تحسينات الأداء الحديثة |
| 3 | **PrettyPhoto** | إصدار 2013، لا يدعم الـ responsive جيداً | تجربة مستخدم سيئة على الجوال |
| 4 | **CSS غير منظم** | 5+ ملفات CSS منفصلة: vendors, components, style | صعوبة الصيانة، تعارض محتمل |
| 5 | **PHP قديم** | بدون framework، بدون autoloading، بدون security headers | ثغرات أمنية محتملة |
| 6 | **No robots.txt** | لا يوجد | الزاحف قد يزور صفحات غير مرغوب فيها |
| 7 | **No sitemap.xml** | لا يوجد | محركات البحث قد تفشل في فهرسة الصفحات |
| 8 | **No Open Graph** | لا توجد وسوم للتواصل الاجتماعي | المشاركة في فيسبوك/تويتر تعطي روابط بدون صور |
| 9 | **Favicon** | موجود لكنه منخفض الجودة | انطباع غير احترافي |
| 10 | **Inline Styles** | وجود أنماط CSS داخل HTML مباشرة | صعوبة الصيانة |

### الملحق ب: قائمة المحتوى المطلوب من العميل

- [x] **الشعار** (موجود `logo2.png` — يحتاج تحسين)
- [ ] **صور المنتجات** (صور حقيقية عالية الجودة لكل منتج)
- [ ] **كتالوجات PDF** للمنتجات
- [ ] **صور حقيقية للمؤسسة** (المكتب، الفريق، المستودع)
- [ ] **شهادات العملاء** (نصوص + صور إذا أمكن)
- [ ] **صور المشاريع** (مشروع الحكومة الكندية وغيره)
- [ ] **روابط التواصل الاجتماعي الفعلية** (فيسبوك، تويتر، لينكدإن)
- [ ] **مواصفات المنتجات** بالتفصيل
- [ ] **قائمة العملاء** (اختياري للثقة)

### الملحق ج: مؤشرات الأداء (KPIs)

| المؤشر | الحالي | المستهدف | طريقة القياس |
|--------|--------|----------|-------------|
| Page Load Time | ~5-8s | < 2s | Lighthouse |
| Bounce Rate | ~65% | < 40% | Google Analytics |
| Pages/Session | ~1.5 | > 3 | Google Analytics |
| Organic Traffic | - | +500% في 6 أشهر | Google Search Console |
| Conversion Rate (Contact) | ~0.5% | > 3% | GA Goals |
| Mobile Traffic | ~40% | > 60% | Google Analytics |
| SEO Rank (أجهزة طبية اليمن) | Top 10 | #1 | Google Search Console |

---

## ✅ خطة العمل المقترحة (Next Steps)

1. **الموافقة على الـ PRD** من قبل صاحب القرار
2. **تجميع المحتوى** من العميل (صور، نصوص، كتالوجات)
3. **إعداد بيئة التطوير** (Vercel + Supabase + GitHub)
4. **بدء المرحلة 1** — إعداد القالب الأساسي
5. **مراجعة أسبوعية** للتقدم
6. **اختبار المستخدم** قبل الإطلاق ب 3 أسابيع
7. **الإطلاق الرسمي** + 301 redirects

---

> **إعداد:** فريق التطوير  
> **المراجعة:** [بانتظار المراجعة]  
> **آخر تحديث:** 18 يونيو 2026
