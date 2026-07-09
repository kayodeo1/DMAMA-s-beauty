// Product Data - Grouped by Image
const productGroups = [
  {
    image: "images/C1-2026 catalogue 1_page-0001.jpg",
    products: [
      {
        name: "Milk & Honey Gold Moisturising Hand Cream",
        category: "Personal Care",
        description: "Luxurious hand cream infused with organically sourced extracts of milk and honey.",
        price: "NGN 11,390",
        size: "75 ml",
      },
      {
        name: "Milk & Honey Gold Smoothing Sugar Scrub",
        category: "Personal Care",
        description: "Exfoliating sugar scrub to smooth and soften skin.",
        price: "NGN 23,990",
        size: "200 ml",
      },
      {
        name: "Milk & Honey Gold Nourishing Hand & Body Cream",
        category: "Personal Care",
        description: "Intensively nourishing cream for hand and body.",
        price: "NGN 22,390",
        size: "250 ml",
      },
    ],
  },
  {
    image: "images/C1-2026 catalogue 1_page-0003.jpg",
    products: [
      {
        name: "Optimals Eye & Lip Contour Cream",
        category: "Skincare",
        description: "Hybrid cream delivering 48h hydration for eye and lip contours; reduces puffiness and dark circles.",
        price: "NGN 22,490",
        size: "15 ml",
      },
    ],
  },
  {
    image: "images/C1-2026 catalogue 1_page-0004.jpg",
    products: [
      {
        name: "Optimals Soft Creamy Cleanser",
        category: "Skincare",
        description: "Effectively cleanses without stripping skin of moisture. Perfect for dry skin.",
        price: "NGN 17,490",
        size: "150 ml",
      },
      {
        name: "Optimals Daily Glow Multi-Protector SPF 50",
        category: "Skincare",
        description: "Lightweight, oil-free protector shielding against UVA, UVB, and pollution.",
        price: "NGN 28,990",
        size: "30 ml",
      },
      {
        name: "Optimals Even Out Light Cream",
        category: "Skincare",
        description: "Helps prevent hyperpigmentation and fade dark spots. Ideal for oily skin.",
        price: "NGN 26,190",
        size: "50 ml",
      },
      {
        name: "Optimals Even Out Serum",
        category: "Skincare",
        description: "Helps reduce excess melanin and boost skin barrier strength.",
        price: "NGN 31,890",
        size: "30 ml",
      },
    ],
  },
  {
    image: "images/C1-2026 catalogue 1_page-0005.jpg",
    products: [
      {
        name: "Eclat Homme Weekend Azur Eau de Toilette",
        category: "Fragrance",
        description: "Fresh & energetic Woody Aromatic scent with Pink Peppercorn and Côte d'Azur Accord.",
        price: "NGN 54,990",
        size: "75 ml",
      },
      {
        name: "Eclat Femme Weekend Riviera Eau de Toilette",
        category: "Fragrance",
        description: "Peaceful & refreshing Floral Woody scent with Grapefruit, White Gardenia, and Ambery Woods.",
        price: "NGN 54,990",
        size: "50 ml",
      },
    ],
  },
  {
    image: "images/C1-2026 catalogue 1_page-0006.jpg",
    products: [
      {
        name: "THE ONE Pump & Plump Mascara",
        category: "Makeup",
        description: "Waterproof, smudge-proof mascara with natural origin fibres for plumping volume.",
        price: "NGN 17,990",
        size: "8 ml",
      },
      {
        name: "THE ONE High Impact Eyeliner",
        category: "Makeup",
        description: "Eyeliner for bold looks.",
        price: "NGN 13,290",
        size: "0.3 g",
      },
    ],
  },
  {
    image: "images/C1-2026 catalogue 1_page-0007.jpg",
    products: [
      {
        name: "Wellosophy Smartshake Bottle",
        category: "Nutrition",
        description: "Bottle with liquid, divider, and base compartments.",
        price: "NGN 56,990",
      },
      {
        name: "Wellosophy Scoop",
        category: "Nutrition",
        description: "Measuring scoop.",
        price: "NGN 4,590",
      },
      {
        name: "Wellosophy Meal Replacement for Weight Control (Vanilla & Chocolate)",
        category: "Nutrition",
        description: "High in plant-based protein and fibre. 202-239 calories per serving.",
        price: "NGN 149,000",
        size: "525g each",
      },
    ],
  },
  {
    image: "images/C1-2026 catalogue 1_page-0008.jpg",
    products: [
      {
        name: "Giordani Gold Miss Giordani Floral Eau de Parfum",
        category: "Fragrance",
        description: "Dreamy & romantic White Floral scent with Neroli, Jasmine, and Tuberose.",
        price: "NGN 54,990",
        size: "50 ml",
      },
      {
        name: "Giordani Gold Mister Giordani Aqua Eau de Parfum",
        category: "Fragrance",
        description: "Elegant & sophisticated Woody-Watery scent with Artemisia and Floated Wood Accord.",
        price: "NGN 54,990",
        size: "75 ml",
      },
    ],
  },
  {
    image: "images/C1-2026 catalogue 1_page-0009.jpg",
    products: [
      {
        name: "Feminelle Smoothing Shaving Gel",
        category: "Personal Care",
        description: "With Aloe Vera.",
        price: "NGN 16,790",
        size: "150 ml",
      },
      {
        name: "Feminelle Gentle Intimate Wash",
        category: "Personal Care",
        description: "With Cotton Extract.",
        price: "NGN 14,990",
        size: "300 ml",
      },
      {
        name: "Feminelle Soothing Intimate Wash",
        category: "Personal Care",
        description: "With Aloe Vera.",
        price: "NGN 14,990",
        size: "300 ml",
      },
      {
        name: "Feminelle Moisturising Intimate Cleansing Cream",
        category: "Personal Care",
        description: "With Hyaluronic Acid and Peach Extract.",
        price: "NGN 14,990",
        size: "300 ml",
      },
    ],
  },
  {
    image: "images/C1-2026 catalogue 1_page-0010.jpg",
    products: [
      {
        name: "Love Nature Nourishing Body Cream",
        category: "Personal Care",
        description: "With Organic Cacao Butter & Coconut Oil.",
        price: "NGN 19,790",
        size: "200 ml",
      },
      {
        name: "Love Nature Nourishing Body Lotion",
        category: "Personal Care",
        description: "With Organic Cacao Butter & Coconut Oil for extra dry skin.",
        price: "NGN 47,790",
        size: "750 ml",
      },
      {
        name: "Love Nature Energising Body Lotion",
        category: "Personal Care",
        description: "With Organic Mint & Raspberry for normal skin.",
        price: "NGN 34,790",
        size: "500 ml",
      },
    ],
  },
  {
    image: "images/C1-2026 catalogue 1_page-0011.jpg",
    products: [
      {
        name: "Novage+ Intense Skin Recharge Overnight Mask",
        category: "Skincare",
        description: "Luxurious overnight mask that melts into skin.",
        price: "NGN 45,990",
        size: "50 ml",
      },
      {
        name: "Novage+ Intense Nourishment Facial Oil Capsules",
        category: "Skincare",
        description: "Micro-capsules for intense nourishment.",
        price: "NGN 66,690",
        size: "30 pcs",
      },
    ],
  },
  {
    image: "images/C1-2026 catalogue 1_page-0012.jpg",
    products: [
      {
        name: "Wellosophy Calm & Balance Cleanser",
        category: "Skincare",
        description: "Gently dissolves dirt and impurities.",
        price: "NGN 23,490",
        size: "95 ml",
      },
      {
        name: "Wellosophy Plump & Balance Face Cream",
        category: "Skincare",
        description: "Moisturiser for day and night with Ashwagandha.",
        price: "NGN 34,990",
        size: "50 ml",
      },
      {
        name: "Wellosophy Smooth & Balance Gel-Serum",
        category: "Skincare",
        description: "Anti-ageing serum for a rejuvenated complexion.",
        price: "NGN 48,990",
        size: "50 ml",
      },
      {
        name: "Wellosophy Skin Core Ritual Kit",
        category: "Skincare",
        description: "3 full-size products (Cleanser, Serum, Face Cream).",
        price: "NGN 85,990",
        size: "Set",
      },
    ],
  },
  {
    image: "images/C1-2026 catalogue 1_page-0013.jpg",
    products: [
      {
        name: "Wellosophy Wellness Pack (Woman & Man)",
        category: "Nutrition",
        description: "21 daily sachets with vitamins, minerals, antioxidants, and Omega-3.",
        price: "NGN 89,990",
        size: "21 sachets each",
      },
    ],
  },
  {
    image: "images/C1-2026 catalogue 1_page-0014.jpg",
    products: [
      {
        name: "Wellosophy Omega 3",
        category: "Nutrition",
        description: "Fish oil-derived fatty acids EPA and DHA.",
        price: "NGN 45,990",
        size: "60 capsules",
      },
      {
        name: "Wellosophy Multivitamin & Mineral Kids",
        category: "Nutrition",
        description: "13 vitamins and 9 minerals for children.",
        price: "NGN 34,990",
        size: "30 tablets",
      },
      {
        name: "Wellosophy Astaxanthin & Bilberry Extract",
        category: "Nutrition",
        description: "Natural antioxidants.",
        price: "NGN 59,990",
        size: "30 capsules",
      },
      {
        name: "Wellosophy Skin, Hair & Nail NutriComplex",
        category: "Nutrition",
        description: "Formulated to support skin, hair, and nail health.",
        price: "NGN 54,990",
        size: "60 tablets",
      },
      {
        name: "Wellosophy Multivitamin & Mineral (Man & Woman)",
        category: "Nutrition",
        description: "12 vitamins and 10 minerals tailored for men/women.",
        price: "NGN 55,990",
        size: "60 tablets each",
      },
    ],
  },
  {
    image: "images/C1-2026 catalogue 1_page-0015.jpg",
    products: [
      {
        name: "Wellosophy Marine Calcium & Vitamin D",
        category: "Nutrition",
        description: "Sustainably sourced calcium with Vitamin D.",
        price: "NGN 49,990",
        size: "30 tablets",
      },
    ],
  },
  {
    image: "images/C1-2026 catalogue 1_page-0016.jpg",
    products: [
      {
        name: "Divine Eau de Parfum",
        category: "Fragrance",
        description: "Floral Fruity Woody scent with Violet, Lily, and Freesia.",
        price: "NGN 54,990",
        size: "50 ml",
      },
      {
        name: "Divine Perfumed Body Cream",
        category: "Fragrance",
        description: "",
        price: "NGN 23,990",
        size: "250 ml",
      },
      {
        name: "Love Potion Eau de Parfum",
        category: "Fragrance",
        description: "Ambery Vanillic Fruity fragrance with Ginger and Cocoa Flower.",
        price: "NGN 54,990",
        size: "50 ml",
      },
      {
        name: "Love Potion Perfumed Body Cream",
        category: "Fragrance",
        description: "",
        price: "NGN 23,990",
        size: "250 ml",
      },
      {
        name: "Love Potion Cherry on Top Eau de Parfum",
        category: "Fragrance",
        description: "Ambery Fruity scent with Black Cherry and Chocolate Truffle.",
        price: "NGN 54,990",
        size: "50 ml",
      },
    ],
  },
  {
    image: "images/C1-2026 catalogue 1_page-0017.jpg",
    products: [
      {
        name: "All or Nothing Amplified Parfum",
        category: "Fragrance",
        description: "Floral Woody scent with Tuberose and Red Ginger.",
        price: "NGN 99,990",
        size: "50 ml",
      },
      {
        name: "All Or Nothing Amplified Perfumed Body Cream",
        category: "Fragrance",
        description: "",
        price: "NGN 23,990",
        size: "250 ml",
      },
      {
        name: "All or Nothing Parfum",
        category: "Fragrance",
        description: "Oriental Vanillic Fruity scent with Vanilla Surabsolute.",
        price: "NGN 99,990",
        size: "50 ml",
      },
      {
        name: "Giordani Gold Good as Gold Woman Eau de Parfum",
        category: "Fragrance",
        description: "Oriental Floral scent with Orange Blossom and Saffron.",
        price: "NGN 82,790",
        size: "50 ml",
      },
    ],
  },
  {
    image: "images/C1-2026 catalogue 1_page-0018.jpg",
    products: [
      {
        name: "Giordani Gold Man Eau de Parfum",
        category: "Fragrance",
        description: "",
        price: "NGN 59,990",
        size: "75 ml",
      },
      {
        name: "Giordani Gold Man Anti-perspirant Roll-On",
        category: "Personal Care",
        description: "",
        price: "NGN 9,190",
        size: "50 ml",
      },
      {
        name: "Giordani Gold Essenza Man Elixir Parfum",
        category: "Fragrance",
        description: "",
        price: "NGN 89,990",
        size: "50 ml",
      },
      {
        name: "Giordani Gold Essenza Supreme Parfum",
        category: "Fragrance",
        description: "",
        price: "NGN 89,990",
        size: "50 ml",
      },
      {
        name: "Giordani Gold Woman Eau de Parfum",
        category: "Fragrance",
        description: "",
        price: "NGN 59,990",
        size: "50 ml",
      },
      {
        name: "Giordani Gold Woman Perfumed Roll-On",
        category: "Personal Care",
        description: "",
        price: "NGN 9,190",
        size: "50 ml",
      },
    ],
  },
  {
    image: "images/C1-2026 catalogue 1_page-0019.jpg",
    products: [
      {
        name: "Greater Eau de Toilette for her",
        category: "Fragrance",
        description: "Floral Fruity scent with Mandarin and Tuberose.",
        price: "NGN 48,990",
        size: "50 ml",
      },
      {
        name: "Possess Absolute Eau de Parfum",
        category: "Fragrance",
        description: "Woody Fruity scent with Pomegranate Accord.",
        price: "NGN 71,990",
        size: "50 ml",
      },
      {
        name: "Possess Absolute Man Eau de Parfum",
        category: "Fragrance",
        description: "Woody Vetiver scent with Black Pepper and Ambery Woods.",
        price: "NGN 71,990",
        size: "75 ml",
      },
      {
        name: "Greater Eau de Toilette for him",
        category: "Fragrance",
        description: "",
        price: "NGN 48,990",
        size: "75 ml",
      },
    ],
  },
  {
    image: "images/C1-2026 catalogue 1_page-0020.jpg",
    products: [
      {
        name: "Eclat Amour Eau de Toilette",
        category: "Fragrance",
        description: "",
        price: "NGN 41,990",
        size: "50 ml",
      },
      {
        name: "Eclat Toujours Eau de Toilette",
        category: "Fragrance",
        description: "",
        price: "NGN 41,990",
        size: "75 ml",
      },
      {
        name: "ECLAT Amour Intensité Eau de Toilette",
        category: "Fragrance",
        description: "",
        price: "NGN 41,990",
        size: "50 ml",
      },
      {
        name: "Infinita Eau de Parfum",
        category: "Fragrance",
        description: "",
        price: "NGN 54,990",
        size: "50 ml",
      },
      {
        name: "Eclat Nuit Eau de Parfum for her",
        category: "Fragrance",
        description: "",
        price: "NGN 59,990",
        size: "50 ml",
      },
      {
        name: "Infinita My Sunshine Eau de Parfum",
        category: "Fragrance",
        description: "",
        price: "NGN 54,990",
        size: "50 ml",
      },
    ],
  },
  {
    image: "images/C1-2026 catalogue 1_page-0021.jpg",
    products: [
      {
        name: "Whispers Of Me Eau de Parfum",
        category: "Fragrance",
        description: "Floral Woody Musk scent.",
        price: "NGN 54,990",
        size: "50 ml",
      },
      {
        name: "OH! SWEET DULCE DE LECHE Eau de Toilette",
        category: "Fragrance",
        description: "Oriental Vanillic Fruity scent.",
        price: "NGN 36,790",
        size: "50 ml",
      },
      {
        name: "Volare Eau de Parfum",
        category: "Fragrance",
        description: "",
        price: "NGN 43,990",
        size: "50 ml",
      },
      {
        name: "Magnetista Eau de Parfum",
        category: "Fragrance",
        description: "Oriental Floral scent with Passion Flower.",
        price: "NGN 82,790",
        size: "50 ml",
      },
      {
        name: "Amber Elixir Mystery Eau de Parfum",
        category: "Fragrance",
        description: "",
        price: "NGN 59,990",
        size: "50 ml",
      },
    ],
  },
  {
    image: "images/C1-2026 catalogue 1_page-0022.jpg",
    products: [
      {
        name: "Scope Time Loop Eau de Toilette",
        category: "Fragrance",
        description: "",
        price: "NGN 48,990",
        size: "50 ml",
      },
      {
        name: "Scope Earth Wonder Eau de Toilette",
        category: "Fragrance",
        description: "",
        price: "NGN 48,990",
        size: "50 ml",
      },
      {
        name: "Signature Man Eau de Toilette",
        category: "Fragrance",
        description: "",
        price: "NGN 59,990",
        size: "75 ml",
      },
    ],
  },
  {
    image: "images/C1-2026 catalogue 1_page-0023.jpg",
    products: [
      {
        name: "Ascendant Intense Eau de Parfum",
        category: "Fragrance",
        description: "",
        price: "NGN 59,990",
        size: "75 ml",
      },
      {
        name: "Glacier Rock Eau de Toilette",
        category: "Fragrance",
        description: "",
        price: "NGN 36,790",
        size: "100 ml",
      },
      {
        name: "Be The Legend Anti-perspirant Roll-on",
        category: "Personal Care",
        description: "",
        price: "NGN 9,190",
        size: "50 ml",
      },
      {
        name: "Be the Legend Eau de Toilette",
        category: "Fragrance",
        description: "",
        price: "NGN 41,990",
        size: "75 ml",
      },
    ],
  },
  {
    image: "images/C1-2026 catalogue 1_page-0024.jpg",
    products: [
      {
        name: "Men's Collection Agave Power Eau De Toilette",
        category: "Fragrance",
        description: "",
        price: "NGN 43,990",
        size: "100 ml",
      },
    ],
  },
  {
    image: "images/C1-2026 catalogue 1_page-0025.jpg",
    products: [
      {
        name: "THE ONE Everlasting Sync Stress-Free Foundation",
        category: "Makeup",
        description: "",
        price: "NGN 26,290",
        size: "30 ml",
      },
      {
        name: "THE ONE False Lashes Salon Lift Mascara",
        category: "Makeup",
        description: "",
        price: "NGN 19,990",
        size: "8 ml",
      },
      {
        name: "THE ONE Colour Unlimited Eye Shadow & Eye Pencil Duo",
        category: "Makeup",
        description: "",
        price: "NGN 27,490",
        size: "1.2 g",
      },
    ],
  },
  {
    image: "images/C1-2026 catalogue 1_page-0026.jpg",
    products: [
      {
        name: "THE ONE Smart Sync Lipstick",
        category: "Makeup",
        description: "",
        price: "NGN 19,790",
        size: "3.8 g",
      },
      {
        name: "THE ONE 5-in-1 Wonder Lash XXL Mascara",
        category: "Makeup",
        description: "",
        price: "NGN 15,490",
        size: "8 ml",
      },
      {
        name: "THE ONE Colour Unlimited Ultra Fix Lipstick",
        category: "Makeup",
        description: "",
        price: "NGN 22,790",
        size: "3.5 g",
      },
      {
        name: "THE ONE Irresistible Touch High Shine Lipstick",
        category: "Makeup",
        description: "",
        price: "NGN 22,790",
        size: "4 ml",
      },
    ],
  },
  {
    image: "images/C1-2026 catalogue 1_page-0027.jpg",
    products: [
      {
        name: "THE ONE Colour Unlimited Ultra Fix Liquid Lipstick",
        category: "Makeup",
        description: "99% staying power, ultra-intense matte finish.",
        price: "NGN 22,790",
        size: "5 ml",
      },
    ],
  },
  {
    image: "images/C1-2026 catalogue 1_page-0028.jpg",
    products: [
      {
        name: "Pure Skin Clarifying Toning Solution",
        category: "Skincare",
        description: "",
        price: "NGN 15,290",
        size: "150 ml",
      },
      {
        name: "Pure Skin Mattifying & Cooling Face Lotion",
        category: "Skincare",
        description: "",
        price: "NGN 15,290",
        size: "50 ml",
      },
      {
        name: "Pure Skin Smoothing Face Scrub",
        category: "Skincare",
        description: "",
        price: "NGN 14,490",
        size: "75 ml",
      },
      {
        name: "Pure Skin Pore Clearing Peel-off Mask",
        category: "Skincare",
        description: "",
        price: "NGN 14,490",
        size: "50 ml",
      },
      {
        name: "Pure Skin 5 Minute Oil-control Clay Mask",
        category: "Skincare",
        description: "",
        price: "NGN 14,490",
        size: "50 ml",
      },
      {
        name: "Pure Skin SOS Blemish Gel",
        category: "Skincare",
        description: "",
        price: "NGN 13,490",
        size: "6 ml",
      },
    ],
  },
  {
    image: "images/C1-2026 catalogue 1_page-0029.jpg",
    products: [
      {
        name: "Love Nature Mattifying Face Lotion (Tea Tree & Lime)",
        category: "Skincare",
        description: "",
        price: "NGN 14,690",
        size: "50 ml",
      },
      {
        name: "Love Nature Hydrating Face Mask (Aloe Vera & Pineapple)",
        category: "Skincare",
        description: "",
        price: "NGN 14,690",
        size: "75 ml",
      },
      {
        name: "Love Nature Hydrating Toner (Aloe Vera & Pineapple)",
        category: "Skincare",
        description: "",
        price: "NGN 14,690",
        size: "150 ml",
      },
      {
        name: "Love Nature Hydrating Face Cream (Aloe Vera & Pineapple)",
        category: "Skincare",
        description: "",
        price: "NGN 14,690",
        size: "50 ml",
      },
      {
        name: "Love Nature Gel Cleanser (Aloe Vera & Pineapple)",
        category: "Skincare",
        description: "",
        price: "NGN 14,690",
        size: "125 ml",
      },
      {
        name: "Love Nature Purifying Face Oil (Tea Tree & Lime)",
        category: "Skincare",
        description: "",
        price: "NGN 11,290",
        size: "10 ml",
      },
      {
        name: "Love Nature Purifying Toner (Tea Tree & Lime)",
        category: "Skincare",
        description: "",
        price: "NGN 14,690",
        size: "150 ml",
      },
    ],
  },
  {
    image: "images/C1-2026 catalogue 1_page-0030.jpg",
    products: [
      {
        name: "Novage+ Proceuticals Ultra Light UV-Age Day Shield",
        category: "Skincare",
        description: "",
        price: "NGN 43,390",
        size: "30 ml",
      },
      {
        name: "Novage+ Refresh Gel Cleanser",
        category: "Skincare",
        description: "",
        price: "NGN 43,890",
        size: "150 ml",
      },
      {
        name: "Novage+ Restore Renewing Routine",
        category: "Skincare",
        description: "Eye & Lip Cream, Serum, Day/Night Creams set",
        price: "NGN 239,990",
        size: "Set",
      },
    ],
  },
  {
    image: "images/C1-2026 catalogue 1_page-0031.jpg",
    products: [
      {
        name: "Novage+ Bright Intense Routine",
        category: "Skincare",
        description: "Eye Cream, Serum, Day/Night Creams set",
        price: "NGN 216,890",
        size: "Set",
      },
      {
        name: "Novage+ Wrinkle Smooth Routine",
        category: "Skincare",
        description: "Eye Cream, Serum, Day/Night Creams set",
        price: "NGN 216,890",
        size: "Set",
      },
    ],
  },
  {
    image: "images/C1-2026 catalogue 1_page-0032.jpg",
    products: [
      {
        name: "Novage+ Blemish + Age Defy Routine",
        category: "Skincare",
        description: "",
        price: "NGN 216,890",
        size: "Set",
      },
      {
        name: "Novage+ Lift + Firm Routine",
        category: "Skincare",
        description: "Eye Cream, Serum, Day/Night Creams set",
        price: "NGN 216,890",
        size: "Set",
      },
    ],
  },
  {
    image: "images/C1-2026 catalogue 1_page-0033.jpg",
    products: [
      {
        name: "Optimals Soothing Micellar Cleansing Water",
        category: "Skincare",
        description: "",
        price: "NGN 17,490",
        size: "150 ml",
      },
      {
        name: "Optimals Exfoliating Face Scrub",
        category: "Skincare",
        description: "",
        price: "NGN 17,490",
        size: "75 ml",
      },
      {
        name: "Optimals Purifying Clay Face Mask",
        category: "Skincare",
        description: "",
        price: "NGN 20,590",
        size: "50 ml",
      },
      {
        name: "Love Nature Nourishing Body, Face & Hair Oil",
        category: "Personal Care",
        description: "",
        price: "NGN 17,290",
        size: "100 ml",
      },
      {
        name: "Glow Essentials Body Lotion with Vitamins E & B3",
        category: "Skincare",
        description: "",
        price: "NGN 16,590",
        size: "250 ml",
      },
    ],
  },
  {
    image: "images/C1-2026 catalogue 1_page-0034.jpg",
    products: [
      {
        name: "The Body Edition Anti-Stretch Mark Body Concentrate",
        category: "Skincare",
        description: "",
        price: "NGN 33,290",
        size: "125 ml",
      },
      {
        name: "The Body Edition Anti-Cellulite Body Gel",
        category: "Skincare",
        description: "",
        price: "NGN 33,290",
        size: "150 ml",
      },
    ],
  },
  {
    image: "images/C1-2026 catalogue 1_page-0035.jpg",
    products: [
      {
        name: "Love Nature Hand Cream - Passion Fruit",
        category: "Personal Care",
        description: "",
        price: "NGN 8,490",
        size: "75 ml",
      },
      {
        name: "Love Nature Hand Cream - Avocado Oil",
        category: "Personal Care",
        description: "",
        price: "NGN 8,490",
        size: "75 ml",
      },
      {
        name: "Love Nature Hand Cream - Coconut Oil",
        category: "Personal Care",
        description: "",
        price: "NGN 8,490",
        size: "75 ml",
      },
      {
        name: "Tender Care Multi-purpose Balm - Sweet Mandarin",
        category: "Personal Care",
        description: "",
        price: "NGN 9,490",
        size: "10.5 ml",
      },
      {
        name: "Tender Care Multi-purpose Balm - Raspberry",
        category: "Personal Care",
        description: "",
        price: "NGN 9,490",
        size: "10.5 ml",
      },
      {
        name: "Tender Care Multi-purpose Balm - Blackcurrant",
        category: "Personal Care",
        description: "",
        price: "NGN 9,490",
        size: "10.5 ml",
      },
      {
        name: "Tender Care Multi-purpose Balm - Natural",
        category: "Personal Care",
        description: "",
        price: "NGN 9,490",
        size: "10.5 ml",
      },
    ],
  },
  {
    image: "images/C1-2026 catalogue 1_page-0036.jpg",
    products: [
      {
        name: "North For Men Subzero Deodorant",
        category: "Personal Care",
        description: "",
        price: "NGN 7,990",
      },
      {
        name: "North For Men Subzero Shaving Foam",
        category: "Personal Care",
        description: "",
        price: "NGN 22,990",
      },
      {
        name: "North For Men Subzero Gel",
        category: "Personal Care",
        description: "",
        price: "NGN 8,990",
      },
      {
        name: "Activelle Power Move Spray Deodorant",
        category: "Personal Care",
        description: "",
        price: "NGN 12,990",
      },
      {
        name: "Activelle Invisible Fresh Roll-On",
        category: "Personal Care",
        description: "",
        price: "NGN 7,990",
      },
      {
        name: "Activelle Extreme Roll-On",
        category: "Personal Care",
        description: "",
        price: "NGN 7,990",
      },
      {
        name: "Activelle Power Move Roll-On",
        category: "Personal Care",
        description: "",
        price: "NGN 7,990",
      },
      {
        name: "Activelle Even Tone Roll-On",
        category: "Personal Care",
        description: "",
        price: "NGN 7,990",
      },
    ],
  },
  {
    image: "images/C1-2026 catalogue 1_page-0037.jpg",
    products: [
      {
        name: "Optifresh Pro White Toothpaste",
        category: "Personal Care",
        description: "",
        price: "NGN 8,490",
        size: "100 ml",
      },
      {
        name: "Optifresh Maximum Fresh Toothpaste",
        category: "Personal Care",
        description: "",
        price: "NGN 8,490",
        size: "100 ml",
      },
      {
        name: "Optifresh Natural Oils Toothpaste",
        category: "Personal Care",
        description: "",
        price: "NGN 8,490",
        size: "75 ml",
      },
      {
        name: "Optifresh Sensitive Toothpaste",
        category: "Personal Care",
        description: "",
        price: "NGN 8,490",
        size: "75 ml",
      },
    ],
  },
  {
    image: "images/C1-2026 catalogue 1_page-0038.jpg",
    products: [
      {
        name: "Feet Up Overnight Cream",
        category: "Personal Care",
        description: "",
        price: "NGN 11,290",
      },
      {
        name: "Feet Up Softening Cream",
        category: "Personal Care",
        description: "",
        price: "NGN 18,490",
      },
      {
        name: "Feet Up Refreshing Spray",
        category: "Personal Care",
        description: "",
        price: "NGN 29,990",
      },
      {
        name: "Feet Up Anti-Perspirant Cream",
        category: "Personal Care",
        description: "",
        price: "NGN 16,990",
      },
      {
        name: "Feet Up Foot File",
        category: "Personal Care",
        description: "",
        price: "NGN 10,990",
      },
    ],
  },
  {
    image: "images/C1-2026 catalogue 1_page-0039.jpg",
    products: [
      {
        name: "DUOLOGI Anti-Flake Shampoo",
        category: "Hair Care",
        description: "",
        price: "NGN 27,290",
      },
      {
        name: "DUOLOGI Intense Repair Shampoo",
        category: "Hair Care",
        description: "",
        price: "NGN 27,290",
      },
      {
        name: "DUOLOGI Sealing Serum",
        category: "Hair Care",
        description: "",
        price: "NGN 26,390",
      },
      {
        name: "DUOLOGI Hair Mask",
        category: "Hair Care",
        description: "",
        price: "NGN 23,490",
      },
      {
        name: "DUOLOGI Rich Creme Conditioner",
        category: "Hair Care",
        description: "",
        price: "NGN 27,290",
      },
    ],
  },
  {
    image: "images/C1-2026 catalogue 1_page-0040.jpg",
    products: [
      {
        name: "Love Nature Conditioner",
        category: "Hair Care",
        description: "",
        price: "NGN 13,790",
      },
      {
        name: "Love Nature Hair Oil",
        category: "Hair Care",
        description: "",
        price: "NGN 14,990",
      },
      {
        name: "Love Nature Hot Oil",
        category: "Hair Care",
        description: "",
        price: "NGN 4,590",
      },
      {
        name: "Love Nature Up-Loved Purifying Shampoo",
        category: "Hair Care",
        description: "",
        price: "NGN 13,790",
      },
      {
        name: "Love Nature Smoothie Mask",
        category: "Hair Care",
        description: "",
        price: "NGN 5,290",
      },
      {
        name: "Love Nature Leave-in Conditioner",
        category: "Hair Care",
        description: "",
        price: "NGN 13,790",
      },
      {
        name: "Love Nature 2-in-1 Shampoo",
        category: "Hair Care",
        description: "",
        price: "NGN 25,990",
      },
    ],
  },
];

// State
let currentCategory = "all"
let searchQuery = ""
let slideshowIntervals = {}

// DOM Elements
const productsGrid = document.getElementById("productsGrid")
const noResults = document.getElementById("noResults")
const resultsCount = document.getElementById("resultsCount")
const searchInput = document.getElementById("searchInput")
const categoryTabs = document.querySelectorAll(".tab")

// Normalize category for filtering
function normalizeCategory(category) {
  if (category.includes("Fragrance")) return "Fragrance"
  if (category.includes("Personal Care")) return "Personal Care"
  return category
}

// Filter products
function filterProducts() {
  const filteredGroups = productGroups
    .map((group) => {
      const filteredProducts = group.products.filter((product) => {
        const matchesCategory = currentCategory === "all" || normalizeCategory(product.category) === currentCategory
        const matchesSearch =
          searchQuery === "" ||
          product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.description.toLowerCase().includes(searchQuery.toLowerCase())
        return matchesCategory && matchesSearch
      })
      return { ...group, products: filteredProducts }
    })
    .filter((group) => group.products.length > 0)

  return filteredGroups
}

// Create product card HTML
function createProductCard(group, index) {
  const products = group.products
  const hasMultiple = products.length > 1

  const slidesHTML = products
    .map(
      (product, i) => `
    <div class="product-slide ${i === 0 ? "active" : ""}" data-index="${i}">
      <span class="product-category">${product.category}</span>
      <h3 class="product-name">${product.name}</h3>
      <p class="product-description">${product.description}</p>
      <p class="product-price">${product.price} <span style="font-size: 0.8rem; font-weight: 400; color: var(--color-text-muted);">(${product.size})</span></p>
    </div>
  `,
    )
    .join("")

  const dotsHTML = hasMultiple
    ? `
    <div class="slideshow-nav">
      ${products.map((_, i) => `<button class="slideshow-dot ${i === 0 ? "active" : ""}" data-index="${i}"></button>`).join("")}
    </div>
  `
    : ""

  const arrowsHTML = hasMultiple
    ? `
    <div class="slideshow-arrows">
      <button class="slideshow-arrow prev" aria-label="Previous product">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="m15 18-6-6 6-6"/>
        </svg>
      </button>
      <button class="slideshow-arrow next" aria-label="Next product">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="m9 18 6-6-6-6"/>
        </svg>
      </button>
    </div>
  `
    : ""

  return `
    <article class="product-card" data-card-index="${index}">
      <div class="slideshow-container">
        <div class="product-image-container">
          <img src="${group.image}" alt="${products[0].name}" loading="lazy" onerror="this.src='https://placehold.co/400x300/F5F0EB/8B5A5A?text=DMAMA+Beauty'">
          ${hasMultiple ? `<span class="product-count-badge">${products.length} products</span>` : ""}
        </div>
        ${arrowsHTML}
        ${dotsHTML}
      </div>
      <div class="product-info">
        ${slidesHTML}
      </div>
    </article>
  `
}

// Render products
function renderProducts() {
  // Clear existing intervals
  Object.values(slideshowIntervals).forEach((interval) => clearInterval(interval))
  slideshowIntervals = {}

  const filtered = filterProducts()
  const totalProducts = filtered.reduce((sum, group) => sum + group.products.length, 0)

  if (filtered.length === 0) {
    productsGrid.innerHTML = ""
    noResults.style.display = "block"
    resultsCount.textContent = "No products found"
    return
  }

  noResults.style.display = "none"
  resultsCount.textContent = `Showing ${totalProducts} product${totalProducts !== 1 ? "s" : ""} in ${filtered.length} collection${filtered.length !== 1 ? "s" : ""}`

  productsGrid.innerHTML = filtered.map((group, index) => createProductCard(group, index)).join("")

  // Setup slideshow functionality for each card
  document.querySelectorAll(".product-card").forEach((card, cardIndex) => {
    setupSlideshow(card, filtered[cardIndex].products.length)
  })
}

// Setup slideshow for a card
function setupSlideshow(card, productCount) {
  if (productCount <= 1) return

  const slides = card.querySelectorAll(".product-slide")
  const dots = card.querySelectorAll(".slideshow-dot")
  const prevBtn = card.querySelector(".slideshow-arrow.prev")
  const nextBtn = card.querySelector(".slideshow-arrow.next")
  let currentSlide = 0

  function showSlide(index) {
    currentSlide = (index + productCount) % productCount

    slides.forEach((slide, i) => {
      slide.classList.toggle("active", i === currentSlide)
    })

    dots.forEach((dot, i) => {
      dot.classList.toggle("active", i === currentSlide)
    })
  }

  // Arrow navigation
  prevBtn?.addEventListener("click", () => showSlide(currentSlide - 1))
  nextBtn?.addEventListener("click", () => showSlide(currentSlide + 1))

  // Dot navigation
  dots.forEach((dot, i) => {
    dot.addEventListener("click", () => showSlide(i))
  })

  // Auto slideshow
  const cardIndex = card.dataset.cardIndex
  slideshowIntervals[cardIndex] = setInterval(() => showSlide(currentSlide + 1), 2000)

  // Pause on hover
  card.addEventListener("mouseenter", () => clearInterval(slideshowIntervals[cardIndex]))
  card.addEventListener("mouseleave", () => {
    slideshowIntervals[cardIndex] = setInterval(() => showSlide(currentSlide + 1), 5000)
  })
}

// Event Listeners
categoryTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    categoryTabs.forEach((t) => t.classList.remove("active"))
    tab.classList.add("active")
    currentCategory = tab.dataset.category
    renderProducts()
  })
})

searchInput.addEventListener("input", (e) => {
  searchQuery = e.target.value
  renderProducts()
})

// Initialize
document.addEventListener("DOMContentLoaded", renderProducts)
