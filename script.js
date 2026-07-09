// Product Data - Grouped by Image (Catalogue 03 2026)
const productGroups = [
  {
    image: "images/C3-2026 catalogue 3_page-0001.jpg",
    products: [
      { name: "Love Nature Nourishing Hand Cream with Organic Coconut Oil", category: "Personal Care", description: "A nourishing hand cream infused with organic coconut oil that delivers 48-hour moisturisation from 97% natural origin ingredients.", price: "NGN 8,490", size: "75 ml" },
      { name: "Love Nature Protecting Hand & Nail Cream with Organic Passion Fruit", category: "Personal Care", description: "A protecting hand and nail cream infused with organic passion fruit that delivers 48-hour moisturisation from 97% natural origin ingredients.", price: "NGN 8,490", size: "75 ml" },
      { name: "Love Nature Caring Hand Cream with Organic Avocado Oil", category: "Personal Care", description: "A caring hand cream infused with organic avocado oil that delivers 24-hour moisturisation from 97% natural origin ingredients.", price: "NGN 8,490", size: "75 ml" },
    ],
  },
  {
    image: "images/C3-2026 catalogue 3_page-0003.jpg",
    products: [
      { name: "Novage+ Proceuticals 10% Niacinamide Power Drops", category: "Skincare", description: "A lightweight, non-sticky, fast-absorbing serum with Niacinamide plus Tri-Comfort Complex that promotes radiance and a strong skin barrier, with EGCG from Green Tea to help protect skin from premature ageing.", price: "NGN 56,790", size: "30 ml" },
    ],
  },
  {
    image: "images/C3-2026 catalogue 3_page-0004.jpg",
    products: [
      { name: "Milk & Honey Gold Nourishing Shampoo", category: "Hair Care", description: "A nourishing shampoo enriched with nutrient-rich milk and sugar-rich honey that leaves hair silky, soft and radiant.", price: "NGN 21,790", size: "250 ml" },
      { name: "Milk & Honey Gold Nourishing Conditioner", category: "Hair Care", description: "A nourishing conditioner enriched with milk and honey that helps replenish shine and vitality.", price: "NGN 21,790", size: "250 ml" },
    ],
  },
  {
    image: "images/C3-2026 catalogue 3_page-0005.jpg",
    products: [
      { name: "The One Hydrating Shine Lip Gloss", category: "Makeup", description: "A full-coverage lip gloss in one swipe with exceptionally hydrating fatty acids, Vitamins A and E, shea butter and pomegranate for protecting antioxidant properties.", price: "NGN 19,790", size: "4.5 ml" },
      { name: "The One Wonder Lash XXL Mascara", category: "Makeup", description: "A mascara with a Wonder Brush and patented Dual Core Technology delivering XXL impact — up to 19x more volume and up to 51% more length.", price: "NGN 15,490", size: "8 ml" },
    ],
  },
  {
    image: "images/C3-2026 catalogue 3_page-0006.jpg",
    products: [
      { name: "Giordani Gold Mister Giordani Eau De Parfum", category: "Fragrance", description: "An aromatic fougere fragrance of grapefruit, geranium and vetiver top, crafted with a vibrant and exclusive Vetiver Top that introduces modern freshness to a refined, woody character, now in Eau de Parfum quality.", price: "NGN 54,990", size: "75 ml" },
      { name: "Giordani Gold Miss Giordani Eau De Parfum", category: "Fragrance", description: "A floral fruity woody fragrance of mango sorbet, Milanese neroli and red pondicherry, brimming with life and carefree spirit.", price: "NGN 54,990", size: "50 ml" },
    ],
  },
  {
    image: "images/C3-2026 catalogue 3_page-0007.jpg",
    products: [
      { name: "Optifresh Pro White Toothpaste", category: "Personal Care", description: "A whitening toothpaste built on Protect Shield Technology for whole mouth protection; 84% of consumers agreed it delivered whiter teeth in 2 weeks.", price: "NGN 8,490", size: "100 ml" },
      { name: "Optifresh Sensitive Toothpaste", category: "Personal Care", description: "A toothpaste formulated with a desensitising agent to reduce sensitivity, built on Protect Shield Technology for whole mouth protection.", price: "NGN 8,490", size: "75 ml" },
      { name: "Optifresh Maximum Fresh Toothpaste", category: "Personal Care", description: "A maximum fresh toothpaste with Protect Shield Technology; 88% of consumers agreed it delivered intense freshness in the whole mouth.", price: "NGN 8,490", size: "100 ml" },
      { name: "Optifresh Natural Oils Toothpaste", category: "Personal Care", description: "A toothpaste formulated without fluoride using natural oils, built on Protect Shield Technology for whole mouth protection.", price: "NGN 8,490", size: "100 ml" },
    ],
  },
  {
    image: "images/C3-2026 catalogue 3_page-0008.jpg",
    products: [
      { name: "Love Potion Eau De Parfum", category: "Fragrance", description: "A sensual and mysterious ambery vanillic fruity fragrance of ginger, cocoa flower and chocolate.", price: "NGN 54,990", size: "50 ml" },
      { name: "Love Potion Cherry On Top Eau De Parfum", category: "Fragrance", description: "A sensual and mysterious ambery fruity fragrance of lipstick accord, black cherry and chocolate truffle accord.", price: "NGN 54,990", size: "50 ml" },
    ],
  },
  {
    image: "images/C3-2026 catalogue 3_page-0009.jpg",
    products: [
      { name: "The One Everlasting Sync Stress-Free Foundation SPF 20 + UVA Protection Natural", category: "Makeup", description: "A stress-free everyday foundation infused with relaxing Lavender essential oil; Skin Response technology keeps skin balanced and hydrated, Pink Rock Rose helps reduce redness and fine lines, and a Longwear Complex resists sweat for 12-hour wear.", price: "NGN 26,290", size: "30 ml" },
    ],
  },
  {
    image: "images/C3-2026 catalogue 3_page-0010.jpg",
    products: [
      { name: "Duologi Anti-Flake Purifying Shampoo", category: "Hair Care", description: "Scalp feels purified and fresh after use.", price: "NGN 27,290", size: "250 ml" },
      { name: "Duologi Intense Repair Shampoo", category: "Hair Care", description: "Makes hair 3x easier to comb.", price: "NGN 27,290", size: "250 ml" },
      { name: "Duologi Rich Creme Conditioner", category: "Hair Care", description: "Strengthens hair from the root with Keratin protein; protective Mango Butter helps to drench hair in nourishment.", price: "NGN 27,290", size: "150 ml" },
      { name: "Duologi Intense Repair Hair Mask", category: "Hair Care", description: "Delivers instantly shiny, softer hair.", price: "NGN 23,490", size: "200 ml" },
      { name: "Duologi Sealing Hair Serum", category: "Hair Care", description: "Strengthens hair and smooths splits.", price: "NGN 26,390", size: "30 ml" },
    ],
  },
  {
    image: "images/C3-2026 catalogue 3_page-0011.jpg",
    products: [
      { name: "The Body Edition Anti-Stretch Mark Body Concentrate", category: "Personal Care", description: "With CICA (Centella Asiatica Extract) to support skin elasticity; visibly reduces and improves the appearance of stretch marks.", price: "NGN 33,290", size: "125 ml" },
      { name: "The Body Edition Anti-Cellulite Body Gel", category: "Personal Care", description: "With Niacinamide, it firms and smooths skin and reduces the appearance of cellulite.", price: "NGN 33,290", size: "150 ml" },
    ],
  },
  {
    image: "images/C3-2026 catalogue 3_page-0012.jpg",
    products: [
      { name: "Love Nature Nourishing Body, Face & Hair Oil with Organic Avocado Oil", category: "Personal Care", description: "Formulated with Organic Avocado Oil known to nurture and soften skin and hair for a healthy look; massage onto face and body or apply to wet or dry hair.", price: "NGN 17,290", size: "100 ml" },
    ],
  },
  {
    image: "images/C3-2026 catalogue 3_page-0013.jpg",
    products: [
      { name: "Novage+ Refresh Gel Cleanser", category: "Skincare", description: "Designed to gently remove impurities, pollutants, and SPF in one step.", price: "NGN 43,890", size: "150 ml" },
      { name: "Novage+ Proceuticals Ultra Light UV-Age Day Shield + SPF 50", category: "Skincare", description: "Formulated to effectively combat photo-ageing and signs of premature ageing, providing protection from UVA, UVB, pollution and free radicals.", price: "NGN 43,390", size: "30 ml" },
      { name: "Novage+ Intense Nourishment Facial Oil Capsules", category: "Skincare", description: "Leaves skin instantly smoother, softer and moisturised.", price: "NGN 66,690", size: "30 pcs" },
      { name: "Novage+ Intense Skin Recharge Overnight Mask", category: "Skincare", description: "Formulated with Hyaluronic Acid and Inca Inchi Oil to restore suppleness and nourish the skin; apply over night cream to wake up to recharged skin.", price: "NGN 45,990", size: "50 ml" },
    ],
  },
  {
    image: "images/C3-2026 catalogue 3_page-0014.jpg",
    products: [
      { name: "Novage+ Bright Intense Eye Cream", category: "Skincare", description: "Targets delicate eye skin to reduce puffiness and fine lines while brightening dark spots.", price: "NGN 49,090", size: "15 ml" },
      { name: "Novage+ Lift + Firm Eye Cream", category: "Skincare", description: "Targets delicate eye skin to reduce puffiness and fine lines with a lifting and firming effect.", price: "NGN 49,090", size: "15 ml" },
      { name: "Novage+ Wrinkle Smooth Eye Cream", category: "Skincare", description: "Targets delicate eye skin to reduce puffiness and fine lines.", price: "NGN 49,090", size: "15 ml" },
      { name: "Novage+ Restore Renewing Eye & Lip Contour Cream", category: "Skincare", description: "Targets delicate eye and lip skin to reduce puffiness and fine lines.", price: "NGN 54,990", size: "15 ml" },
      { name: "Novage+ Bright Intense Serum", category: "Skincare", description: "A boosting serum that gives skin an extra dose of targeted brightening care.", price: "NGN 68,190", size: "30 ml" },
      { name: "Novage+ Lift + Firm Serum", category: "Skincare", description: "A boosting serum that gives skin an extra dose of lifting and firming care.", price: "NGN 68,190", size: "30 ml" },
      { name: "Novage+ Wrinkle Smooth Serum", category: "Skincare", description: "A boosting serum that gives skin an extra dose of targeted wrinkle-smoothing care.", price: "NGN 68,190", size: "30 ml" },
      { name: "Novage+ Blemish + Age Defy Serum", category: "Skincare", description: "A boosting serum that gives skin an extra dose of care targeting blemishes and signs of ageing.", price: "NGN 68,190", size: "30 ml" },
      { name: "Novage+ Restore Renewing Face Serum", category: "Skincare", description: "A boosting serum that gives skin an extra dose of restorative, renewing care.", price: "NGN 79,490", size: "30 ml" },
      { name: "Novage+ Multi-Active Anti-Ageing Day Cream Light SPF 30", category: "Skincare", description: "A day cream that finishes the routine to keep skin hydrated, protected and balanced.", price: "NGN 54,990", size: "50 ml" },
      { name: "Novage+ Multi-Active Anti-Ageing Day Cream Rich SPF 30", category: "Skincare", description: "A rich day cream that keeps skin hydrated, protected and balanced.", price: "NGN 54,990", size: "50 ml" },
      { name: "Novage+ Restore Multi-Correcting Day Cream SPF 30", category: "Skincare", description: "A multi-correcting day cream that keeps skin hydrated, protected and balanced.", price: "NGN 60,790", size: "50 ml" },
      { name: "Novage+ Multi-Active Anti-Ageing Night Cream Light", category: "Skincare", description: "A night cream that keeps skin hydrated, protected and balanced.", price: "NGN 54,990", size: "50 ml" },
      { name: "Novage+ Multi-Active Anti-Ageing Night Cream Rich", category: "Skincare", description: "A rich night cream that keeps skin hydrated, protected and balanced.", price: "NGN 54,990", size: "50 ml" },
      { name: "Novage+ Restore Multi-Recover Night Cream", category: "Skincare", description: "A restorative night cream that keeps skin hydrated, protected and balanced.", price: "NGN 60,790", size: "50 ml" },
    ],
  },
  {
    image: "images/C3-2026 catalogue 3_page-0015.jpg",
    products: [
      { name: "Novage+ Bright Intense Routine Light", category: "Skincare", description: "5 full size products - cleanser, eye cream, serum, day and night creams - that target and brighten dark spots and reduce the appearance of fine lines, reducing hyperpigmentation visibility in just 2 weeks.", price: "NGN 216,890", size: "5 pcs" },
      { name: "Novage+ Blemish + Age Defy Routine Light", category: "Skincare", description: "5 full size products - cleanser, eye cream, serum, day and night creams - that reduce visible ageing signs, including fine lines and wrinkles, and help prevent future breakouts.", price: "NGN 216,890", size: "5 pcs" },
      { name: "Novage+ Wrinkle Smooth Routine Mixed", category: "Skincare", description: "5 full size products - cleanser, eye cream, serum, day and night creams - that target 4 major types of wrinkle and improve skin firmness and elasticity.", price: "NGN 216,890", size: "5 pcs" },
      { name: "Novage+ Restore Renewing Routine", category: "Skincare", description: "5 full size products - cleanser, eye + lip cream, serum, day and night creams - that visibly improve the look of 4 types of wrinkles in just 2 weeks.", price: "NGN 239,990", size: "5 pcs" },
      { name: "Novage+ Lift + Firm Routine Rich", category: "Skincare", description: "5 full size products - cleanser, eye cream, serum, day and night creams - that improve elasticity, reduce sagging skin, and lift, smooth and tighten skin.", price: "NGN 216,890", size: "5 pcs" },
    ],
  },
  {
    image: "images/C3-2026 catalogue 3_page-0016.jpg",
    products: [
      { name: "Optimals Purifying Clay Face Mask", category: "Skincare", description: "A purifying clay face mask that helps activate glowing, dream skin.", price: "NGN 20,590", size: "50 ml" },
      { name: "Optimals Soothing Micellar Cleansing Water", category: "Skincare", description: "A soothing micellar cleansing water that helps activate glowing, dream skin.", price: "NGN 17,490", size: "150 ml" },
      { name: "Opt Optimals Soft Creamy Cleanser", category: "Skincare", description: "Perfect for dry skin, it effectively cleanses without stripping skin of moisture.", price: "NGN 17,490", size: "150 ml" },
      { name: "Opt Optimals Even Out Light Cream", category: "Skincare", description: "Ideal for oily skin, it helps prevent hyperpigmentation.", price: "NGN 26,190", size: "50 ml" },
      { name: "Opt Optimals Even Out Serum", category: "Skincare", description: "Helps boost surface cell turnover with O-Brightening Complex and Glycolic Acid.", price: "NGN 31,890", size: "30 ml" },
      { name: "Opt Optimals Eye & Lip Contour Cream", category: "Skincare", description: "Provides refreshing hydration for skin around the eyes and lips.", price: "NGN 22,490", size: "15 ml" },
      { name: "Opt Optimals Daily Glow Multi-Protector SPF50", category: "Skincare", description: "Provides a glowing complexion and protection against UV.", price: "NGN 28,990", size: "30 ml" },
    ],
  },
  {
    image: "images/C3-2026 catalogue 3_page-0017.jpg",
    products: [
      { name: "Pure Skin Mattifying & Cooling Face Lotion", category: "Skincare", description: "Unclogs and minimises pores with BHA + PHA acids.", price: "NGN 15,290", size: "50 ml" },
      { name: "Pure Skin Clarifying Toning Solution", category: "Skincare", description: "A clarifying toning solution formulated with BHA + PHA acids.", price: "NGN 15,290", size: "150 ml" },
      { name: "Pure Skin Smoothing Face Scrub", category: "Skincare", description: "Exfoliates to help leave skin soft and smooth; 88% of consumers tested agreed it instantly mattifies and reduces shine.", price: "NGN 14,490", size: "75 ml" },
      { name: "Pure Skin 5 Minute Oil-control Clay Mask", category: "Skincare", description: "A salicylic acid clay mask that helps prevent and purify skin.", price: "NGN 14,490", size: "50 ml" },
      { name: "Pure Skin SOS Blemish Gel", category: "Skincare", description: "Reduces spot size and redness within 8 hours, and reduces the size of spots by 40% within 24 hours.", price: "NGN 13,490", size: "6 ml" },
    ],
  },
  {
    image: "images/C3-2026 catalogue 3_page-0018.jpg",
    products: [
      { name: "Love Nature Mattifying Face Lotion with Organic Tea Tree & Lime", category: "Skincare", description: "Provides lightweight hydration; Organic Lime tones and mattifies skin, while Tea Tree Oil helps address blemishes.", price: "NGN 14,690", size: "50 ml" },
      { name: "Love Nature Purifying Face Oil with Organic Tea Tree & Lime", category: "Skincare", description: "Helps purify and soothe skin while targeting blemishes.", price: "NGN 11,290", size: "10 ml" },
      { name: "Love Nature Purifying Toner with Organic Tea Tree & Lime", category: "Skincare", description: "Helps skin feel cleansed, toned & refreshed.", price: "NGN 14,690", size: "150 ml" },
      { name: "Love Nature Hydrating Face Mask with Organic Aloe Vera & Pineapple", category: "Skincare", description: "Smoothes skin while leaving it soft and refreshed.", price: "NGN 14,690", size: "75 ml" },
      { name: "Love Nature Hydrating Face Cream with Organic Aloe Vera & Pineapple", category: "Skincare", description: "Designed to leave skin feeling fresh and hydrated without stickiness.", price: "NGN 14,690", size: "50 ml" },
      { name: "Love Nature Hydrating Toner with Organic Aloe Vera & Pineapple", category: "Skincare", description: "Refreshes and moisturises skin.", price: "NGN 14,690", size: "150 ml" },
      { name: "Love Nature Hydrating Gel Cleanser with Organic Aloe Vera & Pineapple", category: "Skincare", description: "Designed to remove eye makeup and excess sebum without drying.", price: "NGN 14,690", size: "125 ml" },
    ],
  },
  {
    image: "images/C3-2026 catalogue 3_page-0019.jpg",
    products: [
      { name: "Love Nature Nourishing Body Lotion With Organic Cacao Butter & Coconut Oil", category: "Personal Care", description: "A nourishing body lotion with organic cacao butter and coconut oil that provides up to 48 hours of clinically tested hydration for extra dry skin.", price: "NGN 47,790", size: "750 ml" },
      { name: "Love Nature Energising Body Lotion With Organic Mint & Raspberry", category: "Personal Care", description: "An energising body lotion infused with organic mint and raspberry, formulated for normal skin.", price: "NGN 34,790", size: "500 ml" },
      { name: "Love Nature Nourishing Body Cream With Organic Cacao Butter & Coconut Oil", category: "Personal Care", description: "A nourishing body cream with organic cacao butter and coconut oil offering up to 48 hours of clinically tested hydration.", price: "NGN 19,790", size: "200 ml" },
      { name: "Divine Perfumed Body Cream", category: "Personal Care", description: "A luscious perfumed body cream infused with the essence of the Divine fragrance, leaving skin soft, supple and delightfully scented; wear alone or layer under its matching perfume.", price: "NGN 23,990", size: "250 ml" },
      { name: "All Or Nothing Amplified Perfumed Body Cream", category: "Personal Care", description: "A luscious perfumed body cream infused with the essence of the All Or Nothing Amplified fragrance, leaving skin soft, supple and delightfully scented.", price: "NGN 23,990", size: "250 ml" },
      { name: "Giordani Gold Essenza Perfumed Body Cream", category: "Personal Care", description: "A luscious perfumed body cream infused with the essence of the Giordani Gold Essenza fragrance, leaving skin soft, supple and delightfully scented.", price: "NGN 23,990", size: "250 ml" },
      { name: "Love Potion Perfumed Body Cream", category: "Personal Care", description: "A luscious perfumed body cream infused with the essence of the Love Potion fragrance, leaving skin soft, supple and delightfully scented.", price: "NGN 23,990", size: "250 ml" },
    ],
  },
  {
    image: "images/C3-2026 catalogue 3_page-0020.jpg",
    products: [
      { name: "Glow Essentials Body Lotion With Vitamins E & B3", category: "Personal Care", description: "A dermatologically tested body lotion with Vitamins E and B3 that helps hydrate skin instantly and for up to 24 hours, suitable for all skin types.", price: "NGN 16,590", size: "250 ml" },
      { name: "Tender Care Sweet Mandarin Multi-purpose Balm", category: "Personal Care", description: "A tender, nourishing multi-purpose balm with a sweet mandarin scent, part of the ICON collection loved by many.", price: "NGN 9,490", size: "10.5 ml" },
      { name: "Tender Care Blackcurrant Multi-purpose Balm", category: "Personal Care", description: "A tender, nourishing multi-purpose balm with a blackcurrant scent, part of the ICON collection loved by many.", price: "NGN 9,490", size: "10.5 ml" },
      { name: "Tender Care Natural Multi-purpose Balm", category: "Personal Care", description: "A tender, nourishing multi-purpose balm with a natural scent, part of the ICON collection loved by many.", price: "NGN 9,490", size: "10.5 ml" },
      { name: "Tender Care Raspberry Multi-purpose Balm", category: "Personal Care", description: "A tender, nourishing multi-purpose balm with a raspberry scent, part of the ICON collection loved by many.", price: "NGN 9,490", size: "10.5 ml" },
    ],
  },
  {
    image: "images/C3-2026 catalogue 3_page-0021.jpg",
    products: [
      { name: "Milk & Honey Gold Nourishing Hand & Body Cream", category: "Personal Care", description: "A fast-absorbing, non-greasy hand and body cream enriched with moisturising glycerine.", price: "NGN 22,390", size: "250 ml" },
      { name: "Milk & Honey Gold Smoothing Sugar Scrub", category: "Personal Care", description: "A smoothing sugar scrub enriched with moisturising glycerine, perfect for the shower or bath.", price: "NGN 23,990", size: "200 ml" },
      { name: "Milk & Honey Gold Moisturising Hand Cream", category: "Personal Care", description: "A moisturising hand cream that leaves skin soft, smooth and fragrant with intensive all-day hydration.", price: "NGN 11,390", size: "75 ml" },
    ],
  },
  {
    image: "images/C3-2026 catalogue 3_page-0022.jpg",
    products: [
      { name: "Wellosophy Calm & Balance Cleanser", category: "Skincare", description: "A gel cleanser that deeply cleanses the skin, gently dissolving dirt, impurities, pollutants and makeup.", price: "NGN 23,490", size: "95 ml" },
      { name: "Wellosophy Smooth & Balance Gel-Serum", category: "Skincare", description: "A gel-serum that helps defend skin from free radical damage and skin-ageing stressors.", price: "NGN 48,990", size: "50 ml" },
      { name: "Wellosophy Plump & Balance Face Cream", category: "Skincare", description: "A face cream that rebalances the skin to restore a healthy balance of oil and moisture.", price: "NGN 34,990", size: "50 ml" },
      { name: "Wellosophy Skin Core Ritual Kit", category: "Skincare", description: "A three-step skincare ritual kit containing 3 full-size products: cleanser, serum and face cream.", price: "NGN 85,990", size: "3 pc" },
      { name: "Wellosophy Skin, Hair & Nail NutriComplex", category: "Nutrition", description: "A food supplement high in biotin, vitamin C and iron and a source of selenium and zinc; take 2 tablets daily with a meal to support skin, hair and nails.", price: "NGN 54,990", size: "42.8 g" },
    ],
  },
  {
    image: "images/C3-2026 catalogue 3_page-0023.jpg",
    products: [
      { name: "Wellosophy Meal Replacement For Weight Control Chocolate Flavour", category: "Nutrition", description: "A nutritionally complete meal replacement shake in chocolate flavour, 25g per serving with 21 servings per tub.", price: "NGN 149,000", size: "525 g" },
      { name: "Wellosophy Meal Replacement For Weight Control Vanilla Flavour", category: "Nutrition", description: "A nutritionally complete meal replacement shake in vanilla flavour, 25g per serving with 21 servings per tub.", price: "NGN 149,000", size: "525 g" },
      { name: "Wellosophy Wellness Pack Man", category: "Nutrition", description: "A daily wellness pack of sachets formulated to meet the nutritional needs of men, with 1 sachet taken daily.", price: "NGN 89,990", size: "66.3 g" },
      { name: "Wellosophy Wellness Pack Woman", category: "Nutrition", description: "A daily wellness pack of sachets formulated to meet the nutritional needs of women, with 1 sachet taken daily.", price: "NGN 89,990", size: "66.3 g" },
    ],
  },
  {
    image: "images/C3-2026 catalogue 3_page-0024.jpg",
    products: [
      { name: "Wellosophy Meal Replacement For Weight Control Chocolate Flavour (Nutrition Facts)", category: "Nutrition", description: "High in protein and a source of fibre at 202-204 calories per serving, with 23 vitamins and minerals; just add milk for a nutritionally complete, calorie-controlled meal.", price: "NGN 149,000", size: "525 g" },
      { name: "Wellosophy Smartshake Bottle", category: "Nutrition", description: "A 3-in-1 shaker bottle with a leak-proof cap, three stackable compartments with a removable organiser, and a metallic clip for hands-free carrying.", price: "NGN 56,990", size: "22 x 9.5 cm" },
      { name: "Wellosophy Scoop", category: "Nutrition", description: "A measuring scoop designed for use with Wellosophy powders.", price: "NGN 4,590", size: "11.2 x 4.2 cm" },
    ],
  },
  {
    image: "images/C3-2026 catalogue 3_page-0025.jpg",
    products: [
      { name: "Wellosophy Multivitamin & Mineral Kids", category: "Nutrition", description: "Chewable multivitamin and mineral tablets for kids, taken daily with a meal; ages 4-10 take 1 a day, ages 11-17 take 2 a day.", price: "NGN 34,990", size: "37.6 g" },
      { name: "Wellosophy Multivitamin & Mineral Man", category: "Nutrition", description: "A multivitamin and mineral tablet formulated for men, taken 1 tablet daily with water and a meal.", price: "NGN 55,990", size: "63.6 g" },
      { name: "Wellosophy Multivitamin & Mineral Woman", category: "Nutrition", description: "A multivitamin and mineral tablet formulated for women, taken 1 tablet daily with water and a meal.", price: "NGN 55,990", size: "63.6 g" },
      { name: "Wellosophy Omega 3", category: "Nutrition", description: "A food supplement providing omega-3 fatty acids to help protect the heart and support its function; take 2 capsules a day with water and a meal.", price: "NGN 45,990", size: "41.6 g" },
      { name: "Wellosophy Astaxanthin & Bilberry Extract", category: "Nutrition", description: "A food supplement featuring astaxanthin, one of nature's most powerful antioxidants, for a convenient way to increase antioxidant intake; take 1-2 capsules daily with water and a meal.", price: "NGN 59,990", size: "21.3 g" },
      { name: "Wellosophy Marine Calcium & Vitamin D", category: "Nutrition", description: "A food supplement providing calcium for the maintenance of normal bones and teeth, plus vitamin D to support absorption of calcium and phosphorus; take 1-2 tablets a day with a meal.", price: "NGN 49,990", size: "45 g" },
    ],
  },
  {
    image: "images/C3-2026 catalogue 3_page-0026.jpg",
    products: [
      { name: "Wellosophy Wellness Pack Woman (3-Week Supply)", category: "Nutrition", description: "A 3-week supply wellness pack formulated to address the nutritional needs of women, with 22 essential vitamins and minerals plus omega-3 fatty acids EPA and DHA.", price: "NGN 89,990", size: "66.3 g" },
      { name: "Wellosophy Wellness Pack Man (3-Week Supply)", category: "Nutrition", description: "A 3-week supply wellness pack formulated to address the nutritional needs of men, with 22 essential vitamins and minerals plus omega-3 fatty acids EPA and DHA.", price: "NGN 89,990", size: "66.3 g" },
    ],
  },
  {
    image: "images/C3-2026 catalogue 3_page-0027.jpg",
    products: [
      { name: "Divine Dark Velvet Eau De Parfum", category: "Fragrance", description: "An elegant and sophisticated floral fruity woody fragrance featuring violet, lily and freesia with sandalwood.", price: "NGN 54,990", size: "50 ml" },
      { name: "Divine Eau De Parfum", category: "Fragrance", description: "A bold and confident floral woody fragrance featuring dark plum accord and black baccara rose scent with patchouli.", price: "NGN 54,990", size: "50 ml" },
      { name: "Infinita My Sunshine Eau De Parfum", category: "Fragrance", description: "A happy and energising solar floral ambery fragrance featuring mandarin, jasmine absolute and sunlit accord.", price: "NGN 54,990", size: "50 ml" },
      { name: "Infinita Eau De Parfum", category: "Fragrance", description: "A happy and energising fruity floral woody fragrance featuring mandarin, jasmine grandiflorum and cashmere wood.", price: "NGN 54,990", size: "50 ml" },
    ],
  },
  {
    image: "images/C3-2026 catalogue 3_page-0028.jpg",
    products: [
      { name: "Whispers Of Me Eau de Parfum", category: "Fragrance", description: "A sensual and mysterious Floral Woody Musk fragrance blending pear, bright petals bloom accord and musk to reflect your rich inner world.", price: "NGN 54,990", size: "50 ml" },
      { name: "Oh! Sweet Dulce De Leche Eau de Toilette", category: "Fragrance", description: "A happy and energising Ambery Vanillic Fruity scent featuring peach candy, rose jelly and dulce de leche notes for a sweet, playful mood.", price: "NGN 36,790", size: "50 ml" },
      { name: "Volare Eau de Parfum", category: "Fragrance", description: "A dreamy and romantic Floral Rose Violet fragrance with violet leaves, rose damascena and a leather accord.", price: "NGN 43,990", size: "50 ml" },
      { name: "Amber Elixir Mystery Eau de Parfum", category: "Fragrance", description: "An enchanting, sensual Ambery Floral eau de parfum blended with orange vanilla, red lily and amber for a sophisticated, mysterious fragrance.", price: "NGN 59,990", size: "50 ml" },
    ],
  },
  {
    image: "images/C3-2026 catalogue 3_page-0029.jpg",
    products: [
      { name: "All Or Nothing Parfum", category: "Fragrance", description: "A bold and confident Ambery Vanillic Fruity parfum with magnolia, raspberry and vanilla surabsolute notes.", price: "NGN 99,990", size: "50 ml" },
      { name: "All Or Nothing Amplified Parfum", category: "Fragrance", description: "A bold and confident Amber Floral parfum featuring Scentaurus juicy, tuberose absolute India Orpur, red ginger oil Laos Orpur and a precious amber accord.", price: "NGN 99,990", size: "50 ml" },
      { name: "Giordani Gold Essenza Parfum", category: "Fragrance", description: "An elegant and sophisticated Floral Woody parfum crafted with Calabrian bergamot, orange blossom luxury essenza and Tuscan wood, marking Giordani Gold's 50th anniversary.", price: "NGN 89,990", size: "50 ml" },
      { name: "Giordani Gold Essenza Supreme Parfum", category: "Fragrance", description: "An elegant and sophisticated Ambery Floral parfum with pineapple, white floral infusion and olibanum.", price: "NGN 89,990", size: "50 ml" },
      { name: "Giordani Gold Essenza Man Elixir Parfum", category: "Fragrance", description: "An elegant and sophisticated Woody Vetiver parfum blending black pepper, olibanum and ambery woods.", price: "NGN 89,990", size: "50 ml" },
      { name: "Giordani Gold Essenza Perfumed Body Spray", category: "Fragrance", description: "A perfumed body spray extension of the Giordani Gold Essenza fragrance collection, celebrating 50 years of Giordani Gold.", price: "NGN 14,490", size: "75 ml" },
    ],
  },
  {
    image: "images/C3-2026 catalogue 3_page-0030.jpg",
    products: [
      { name: "Giordani Gold Woman Eau de Parfum", category: "Fragrance", description: "An elegant and sophisticated Floral Orange Blossom eau de parfum with mandarin, orange blossom and patchouli.", price: "NGN 59,990", size: "50 ml" },
      { name: "Giordani Gold Man Eau de Parfum", category: "Fragrance", description: "An elegant and sophisticated Woody Vetiver eau de parfum with bergamot, black pepper and vetiver.", price: "NGN 59,990", size: "75 ml" },
      { name: "Giordani Gold Miss Giordani Floral Eau de Parfum", category: "Fragrance", description: "A dreamy and romantic White Floral eau de parfum with neroli, jasmine, tuberose, peony and ylang ylang.", price: "NGN 54,990", size: "50 ml" },
      { name: "Giordani Gold Mister Giordani Aqua Eau de Parfum", category: "Fragrance", description: "An elegant and sophisticated Woody-Watery eau de parfum featuring artemisia, floated wood accord and vetyver.", price: "NGN 54,990", size: "75 ml" },
    ],
  },
  {
    image: "images/C3-2026 catalogue 3_page-0031.jpg",
    products: [
      { name: "Eclat Femme Weekend Riviera Eau de Toilette", category: "Fragrance", description: "A peaceful and refreshing Floral Woody eau de toilette with grapefruit, white gardenia and ambery woods, inspired by an escape to the French Riviera.", price: "NGN 54,990", size: "50 ml" },
      { name: "Eclat Homme Weekend Azur Eau de Toilette", category: "Fragrance", description: "A fresh and energetic Woody Aromatic eau de toilette with pink peppercorn, Cote d'Azur accord and mineral leather accord.", price: "NGN 54,990", size: "75 ml" },
      { name: "Eclat Amour Eau de Toilette", category: "Fragrance", description: "A dreamy and romantic Floral Fruity Woody eau de toilette with white violet, white orris and cedarwood.", price: "NGN 41,990", size: "50 ml" },
      { name: "Eclat Toujours Eau de Toilette", category: "Fragrance", description: "An elegant and sophisticated Aromatic Tonic eau de toilette with mint, orris and cuir corroye.", price: "NGN 41,990", size: "75 ml" },
      { name: "Greater Eau de Toilette for Her", category: "Fragrance", description: "A happy and energising Floral Fruity eau de toilette with mandarin, tuberose and white amber, made for those who aim for greatness.", price: "NGN 48,990", size: "50 ml" },
      { name: "Greater Eau de Toilette for Him", category: "Fragrance", description: "A fresh and energetic Woody Fruity eau de toilette with pineapple, geranium and guaiac.", price: "NGN 48,990", size: "75 ml" },
    ],
  },
  {
    image: "images/C3-2026 catalogue 3_page-0032.jpg",
    products: [
      { name: "Scope Earth Wonder Eau de Toilette", category: "Fragrance", description: "A happy, energised Fruity-Woody eau de toilette blending Pearadise, magnolia, musk and sandalwood.", price: "NGN 48,990", size: "50 ml" },
      { name: "Scope Time Loop Eau de Toilette", category: "Fragrance", description: "A peaceful, cosy and happy Ambery Vanillic Musky eau de toilette with a joyful accord of smooth vanilla, sea breeze, jasmine and musk.", price: "NGN 48,990", size: "50 ml" },
      { name: "Glacier Extreme Eau De Toilette", category: "Fragrance", description: "A strong and confident Citrus Aromatic eau de toilette with black lemon, black stone accord and cedarwood, built for ultimate endurance.", price: "NGN 36,790", size: "100 ml" },
      { name: "Glacier Rock Eau de Toilette", category: "Fragrance", description: "A strong and confident Aromatic Fougere eau de toilette with yellow lemon, cucumber and mineral amber.", price: "NGN 36,790", size: "100 ml" },
    ],
  },
  {
    image: "images/C3-2026 catalogue 3_page-0033.jpg",
    products: [
      { name: "Ascendant Intense Eau de Parfum", category: "Fragrance", description: "A strong and confident Ambery Aromatic eau de parfum with black cardamom, red guarana and amber, made to unleash your physical strength.", price: "NGN 59,990", size: "75 ml" },
      { name: "Signature Man Eau de Toilette", category: "Fragrance", description: "An elegant and sophisticated Woody Fruity eau de toilette with pear, vanilla and nutmeg.", price: "NGN 59,990", size: "75 ml" },
      { name: "Men's Collection Agave Power Eau De Toilette", category: "Fragrance", description: "A strong and confident Fougere Aromatic eau de toilette with blue agave accord, geranium oil and cashmeran, made to rejuvenate your mind.", price: "NGN 43,990", size: "100 ml" },
      { name: "Be The Legend Eau de Toilette", category: "Fragrance", description: "A strong and confident Oriental Woody Fruity eau de toilette with apple, leather accord and tonka bean.", price: "NGN 41,990", size: "75 ml" },
    ],
  },
  {
    image: "images/C3-2026 catalogue 3_page-0034.jpg",
    products: [
      { name: "Possess Absolute Man Eau de Parfum", category: "Fragrance", description: "A strong and confident Woody Vetiver eau de parfum with black pepper, olibanum and ambery woods; an epic aura surrounds you as aromatic facets of lavender, geranium and warm cinnamon fuel your innate power.", price: "NGN 71,990", size: "75 ml" },
    ],
  },
  {
    image: "images/C3-2026 catalogue 3_page-0035.jpg",
    products: [
      { name: "Feminelle Moisturising Intimate Cleansing Cream with Hyaluronic Acid and Peach Extract", category: "Personal Care", description: "A moisturising feminine wash with hyaluronic acid and peach extract, designed to target vaginal dryness during and post menopause.", price: "NGN 14,990", size: "300 ml" },
      { name: "Feminelle Smoothing Shaving Gel with Aloe Vera", category: "Personal Care", description: "A mild, pH-balanced shaving gel with aloe vera and prebiotic, suitable for use during menstruation, pregnancy, breastfeeding and menopause.", price: "NGN 16,790", size: "150 ml" },
      { name: "Feminelle Gentle Intimate Wash with Cotton Extract", category: "Personal Care", description: "A mild, pH-balanced intimate wash with cotton extract, prebiotic and lactic acid to help support the skin's natural defences.", price: "NGN 14,990", size: "300 ml" },
      { name: "Feminelle Soothing Intimate Wash with Aloe Vera", category: "Personal Care", description: "A mild, pH-balanced intimate wash with aloe vera, prebiotic and lactic acid, gentle enough for every life stage.", price: "NGN 14,990", size: "300 ml" },
    ],
  },
  {
    image: "images/C3-2026 catalogue 3_page-0036.jpg",
    products: [
      { name: "Giordani Gold Woman Perfumed Anti-perspirant Roll-On Deodorant", category: "Personal Care", description: "An easy-to-spread, lightweight gentle roll-on deodorant that leaves underarm skin protected, soft and lightly scented; apply daily to clean, dry underarm.", price: "NGN 9,190", size: "50 ml" },
      { name: "Giordani Gold Miss Giordani Perfumed Anti-perspirant Roll-On Deodorant", category: "Personal Care", description: "An easy-to-spread, lightweight gentle roll-on deodorant that leaves underarm skin protected, soft and lightly scented; apply daily to clean, dry underarm.", price: "NGN 9,190", size: "50 ml" },
      { name: "Giordani Gold Mister Giordani Perfumed Anti-perspirant Roll-On Deodorant", category: "Personal Care", description: "An easy-to-spread, lightweight gentle roll-on deodorant that leaves underarm skin protected, soft and lightly scented; apply daily to clean, dry underarm.", price: "NGN 9,190", size: "50 ml" },
      { name: "Possess Perfumed Anti-perspirant Roll-On Deodorant", category: "Personal Care", description: "An easy-to-spread, lightweight gentle roll-on deodorant that leaves underarm skin protected, soft and lightly scented; apply daily to clean, dry underarm.", price: "NGN 9,190", size: "50 ml" },
      { name: "Glacier Perfumed Anti-perspirant Roll-On Deodorant", category: "Personal Care", description: "An easy-to-spread, lightweight gentle roll-on deodorant that leaves underarm skin protected, soft and lightly scented; apply daily to clean, dry underarm.", price: "NGN 9,190", size: "50 ml" },
      { name: "Activelle Extreme Anti-perspirant Deodorant", category: "Personal Care", description: "An Activelle Actiboost 72h anti-perspirant deodorant delivering a burst of confidence with clinically proven protection.", price: "NGN 7,990", size: "50 ml" },
      { name: "Activelle Invisible Fresh Anti-perspirant Deodorant", category: "Personal Care", description: "An Activelle Actiboost 48h anti-perspirant deodorant delivering a burst of confidence with clinically proven protection.", price: "NGN 7,990", size: "50 ml" },
      { name: "Activelle Even Tone Anti-perspirant Deodorant", category: "Personal Care", description: "An Activelle Actiboost 48h anti-perspirant deodorant with Even Tone Technology, renowned for its capability to help restore underarm skin tone.", price: "NGN 7,990", size: "50 ml" },
      { name: "Activelle Power Move Anti-perspirant Deodorant", category: "Personal Care", description: "An Activelle Actiboost 72h anti-perspirant deodorant delivering a burst of confidence with clinically proven protection.", price: "NGN 7,990", size: "50 ml" },
    ],
  },
  {
    image: "images/C3-2026 catalogue 3_page-0037.jpg",
    products: [
      { name: "Love Nature Conditioner For Dry Hair with Organic Wheat & Coconut", category: "Hair Care", description: "Intensively nourishes dry and damaged hair, leaving it feeling soft and strong.", price: "NGN 13,790", size: "250 ml" },
      { name: "Love Nature Nourishing Hair Oil Coconut Oil", category: "Hair Care", description: "Replenishes and moisturises the hair and helps prevent dandruff.", price: "NGN 14,990", size: "100 ml" },
      { name: "Love Nature Hot Oil For Dry Hair with Organic Wheat & Coconut", category: "Hair Care", description: "Non-greasy and lightweight formula moisturises and conditions dry hair.", price: "NGN 4,590", size: "15 ml" },
      { name: "Love Nature Strengthening Hair Smoothie Mask with Organic Banana", category: "Hair Care", description: "Organic Banana extract conditions and strengthens hair for a smoothie-fresh boost.", price: "NGN 5,290", size: "30 ml" },
      { name: "Love Nature 2-in-1 Shampoo For All Hair Types with Organic Avocado Oil & Chamomile", category: "Hair Care", description: "A 2-in-1 formula with natural organic avocado oil and chamomile extracts that cleanses and conditions hair.", price: "NGN 25,990", size: "500 ml" },
    ],
  },
  {
    image: "images/C3-2026 catalogue 3_page-0038.jpg",
    products: [
      { name: "Feet Up Everyday Anti-Perspirant Foot Cream", category: "Personal Care", description: "With peppermint oil that boasts refreshing benefits thanks to its cool and invigorating scent, a great go-to for hot summer days.", price: "NGN 16,990", size: "75 ml" },
      { name: "Feet Up Everyday Refreshing Foot Spray", category: "Personal Care", description: "With natural eucalyptus and peppermint oils to make your feet odour-free and perfectly refreshed.", price: "NGN 29,990", size: "250 ml" },
      { name: "Feet Up Everyday Overnight Moisturising Foot Cream", category: "Personal Care", description: "Formulated with Avocado Oil & Aloe Vera known for their rich moisturising properties.", price: "NGN 11,290", size: "75 ml" },
      { name: "Feet Up Everyday Softening Foot Cream", category: "Personal Care", description: "With chamomile and jojoba to help keep feet soft, smooth and healthy.", price: "NGN 18,490", size: "150 ml" },
      { name: "Expert Foot File", category: "Personal Care", description: "A foot file made of 50% recycled plastic and sandpaper — gently buff feet using the coarse side first, followed by the fine side.", price: "NGN 10,990", size: "23 x 6.5 cm" },
    ],
  },
  {
    image: "images/C3-2026 catalogue 3_page-0039.jpg",
    products: [
      { name: "North For Men Subzero Deodorant Roll-On", category: "Personal Care", description: "With 72HR deodorant protection and an instant cooling effect.", price: "NGN 7,990", size: "50 ml" },
      { name: "North For Men Subzero 2-in-1 Shaving & Cleansing Foam", category: "Personal Care", description: "With enhanced Arctic Pro Defence technology to purify, increase hydration, and shield your skin.", price: "NGN 22,990", size: "200 ml" },
      { name: "North For Men Subzero 2-in-1 Moisturising Gel", category: "Personal Care", description: "Formulated with D-Panthenol for comprehensive hydration.", price: "NGN 8,990", size: "50 ml" },
    ],
  },
  {
    image: "images/C3-2026 catalogue 3_page-0040.jpg",
    products: [
      { name: "The One Colour Unlimited Eye Shadow & Eye Pencil Duo", category: "Makeup", description: "A dual-ended eye shadow and eye pencil duo — apply the eyeliner directly to the lash line and the eye shadow directly to the eyelid.", price: "NGN 27,490", size: "1.2 g" },
      { name: "The One High Impact Eyeliner", category: "Makeup", description: "A waterproof, smudge-proof eyeliner with long-lasting wear.", price: "NGN 13,290", size: "0.3 g" },
      { name: "The One Pump & Plump Mascara", category: "Makeup", description: "Short bristles coat even the smallest, hard-to-reach lashes, giving plumping volume and thicker-looking lashes in just one stroke.", price: "NGN 17,990", size: "8 ml" },
      { name: "The One False Lashes Salon Lift 360 Bendable Mascara - Black", category: "Makeup", description: "A bendable brush reaches every lash for all-day, super lightweight false-lash volume.", price: "NGN 19,990", size: "8 ml" },
    ],
  },
  {
    image: "images/C3-2026 catalogue 3_page-0041.jpg",
    products: [
      { name: "The One Colour Unlimited Ultra Fix Lipstick", category: "Makeup", description: "Clinically proven for 99% fixation on lips, with up to 8 hours long lasting wear and extreme comfortable wear.", price: "NGN 22,790", size: "3.5 g" },
      { name: "The One Smart Sync Lipstick", category: "Makeup", description: "Delivers intense colour pigments for vibrant, full coverage in one swipe, with extra colour, moisture and up to 8 hours long-lastingness.", price: "NGN 19,790", size: "3.8 g" },
    ],
  },
  {
    image: "images/C3-2026 catalogue 3_page-0045.jpg",
    products: [
      { name: "Love Potion Cherry On Top Eau De Parfum", category: "Fragrance", description: "A sensual and mysterious ambery fruity fragrance with chocolate truffle accord, black cherry and lipstick accord notes.", price: "NGN 54,990", size: "50 ml" },
      { name: "Be The Legend Eau De Toilette", category: "Fragrance", description: "A strong and confident Oriental Woody Fruity fragrance.", price: "NGN 41,990", size: "75 ml" },
      { name: "Eclat Femme Weekend Riviera Eau De Toilette", category: "Fragrance", description: "A peaceful and refreshing Floral Woody fragrance with grapefruit, white gardenia and ambery woods notes.", price: "NGN 54,990", size: "50 ml" },
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
