// Curated Unsplash image library for CheapRetreats
// All images are free to use under Unsplash license

function unsplash(id: string, w = 1200, h = 800): string {
  return `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&h=${h}&q=80`;
}

// === HERO IMAGES ===
export const heroImages = {
  homepage: unsplash("photo-1506905925346-21bda4d32df4", 1600, 900),     // Mountain peaks at golden hour
  manifesto: unsplash("photo-1470071459604-3b5ec3a7fe05", 1600, 900),    // Green valley vista
  startHere: unsplash("photo-1441974231531-c6227db76b6e", 1600, 900),    // Sunlit forest path
  the1000Reset: unsplash("photo-1472214103451-9374bd1c798e", 1600, 900), // Mountain sunset glow
  retreatsIndex: unsplash("photo-1501854140801-50d01698950b", 1600, 900),// Autumn forest
  firstTime: unsplash("photo-1490730141103-6cac27aaab94", 1600, 800),    // Calm lake reflection
  verified: unsplash("photo-1465056836900-8f1e940b3a96", 1600, 800),     // Misty green mountains
  about: unsplash("photo-1469474968028-56623f02e42e", 1600, 900),        // Warm sunset
  faq: unsplash("photo-1497436072909-60f360e1d4b1", 1600, 800),          // Green bamboo forest
  reviews: unsplash("photo-1518837695005-2083093ee35b", 1600, 800),      // Calm blue ocean
  communityRun: unsplash("photo-1528605248644-14dd04022da1", 1600, 800), // People gathered
  workExchange: unsplash("photo-1500382017468-9049fed747ef", 1600, 800), // Farm/garden
  scholarships: unsplash("photo-1434030216411-0b793f4b4173", 1600, 800), // Open hands/books
  needs: unsplash("photo-1447752875215-b2761acb3c5d", 1600, 800),        // Forest canopy
  legal: unsplash("photo-1450101499163-c8848c66ca85", 1600, 800),        // Minimal desk
};

// === RETREAT TYPE IMAGES ===
export const typeImages: Record<string, string> = {
  "work-exchange": unsplash("photo-1416879595882-3373a0480b5b", 1200, 800),   // Garden/work
  "meditation": unsplash("photo-1506126613408-eca07ce68773", 1200, 800),       // Meditation on beach
  "silent-retreat": unsplash("photo-1465056836900-8f1e940b3a96", 1200, 800),   // Misty mountains
  "monastery": unsplash("photo-1548013146-72479768bada", 1200, 800),           // Stone architecture
  "rest-retreat": unsplash("photo-1520250497591-112f2f40a3f4", 1200, 800),     // Hammock/rest
  "grief-retreat": unsplash("photo-1518837695005-2083093ee35b", 1200, 800),    // Ocean waves
  "nature-retreat": unsplash("photo-1441974231531-c6227db76b6e", 1200, 800),   // Forest path
  "community-retreat": unsplash("photo-1529156069898-49953e39b3ac", 1200, 800), // People together
  "trauma-sensitive": unsplash("photo-1490730141103-6cac27aaab94", 1200, 800), // Calm lake
  "caregiver-retreat": unsplash("photo-1499209974431-9dddcece7f88", 1200, 800),// Peaceful sunrise
  "creative-retreat": unsplash("photo-1513364776144-60967b0f800f", 1200, 800), // Art/painting
  "spiritual-community": unsplash("photo-1507692049790-de58290a4334", 1200, 800), // Candlelight
  "digital-detox": unsplash("photo-1500049242364-5f500d326cfc", 1200, 800),    // Wooden cabin
  "farm-stay": unsplash("photo-1500382017468-9049fed747ef", 1200, 800),        // Farm scene
  "somatic": unsplash("photo-1544367567-0f2fcb009e0b", 1200, 800),            // Yoga/body
  "walking-retreat": unsplash("photo-1551632811-561732d1e306", 1200, 800),     // Hiking path
  "sound-healing": unsplash("photo-1507838153414-b4b713384a76", 1200, 800),    // Singing bowls
  "hot-springs": unsplash("photo-1540555700478-4be289fbec6e", 1200, 800),      // Thermal pool
  "wellness": unsplash("photo-1545389336-cf090694435e", 1200, 800),            // Zen/wellness
  "learning-retreat": unsplash("photo-1497633762265-9d179a990aa6", 1200, 800), // Books/learning
};

// === LOCATION IMAGES ===
export const locationImages: Record<string, string> = {
  US: unsplash("photo-1472396961693-142e6e269027", 1200, 800),      // American landscape
  CA: unsplash("photo-1503614472-8c93d56e92ce", 1200, 800),         // Canadian mountains/lake
  UK: unsplash("photo-1513635269975-59663e0ac1ad", 1200, 800),      // English countryside
  FR: unsplash("photo-1499856871958-5b9627545d1a", 1200, 800),      // Lavender fields
  PT: unsplash("photo-1555881400-74d7acaacd8b", 1200, 800),         // Portuguese coast
  ES: unsplash("photo-1509840841025-9088ba78a826", 1200, 800),      // Spanish landscape
  IT: unsplash("photo-1523906834658-6e24ef2386f9", 1200, 800),      // Tuscan hills
  IE: unsplash("photo-1590089415225-401ed6f9db8e", 1200, 800),      // Irish cliffs
  SE: unsplash("photo-1509356843151-3e7bd803bf5e", 1200, 800),      // Swedish forest
  IS: unsplash("photo-1504893524553-b855bce32c67", 1200, 800),      // Northern lights
  MX: unsplash("photo-1518105779142-d975f22f1b0a", 1200, 800),      // Mexican landscape
  CR: unsplash("photo-1519681393784-d120267933ba", 1200, 800),      // Tropical canopy
  PE: unsplash("photo-1526392060635-9d6019884377", 1200, 800),      // Andes mountains
  ID: unsplash("photo-1537996194471-e657df975ab4", 1200, 800),      // Bali rice terraces
  NP: unsplash("photo-1544735716-392fe2489ffa", 1200, 800),         // Nepal mountains
  ZA: unsplash("photo-1516026672322-bc52d61a55d5", 1200, 800),      // African landscape
  Global: unsplash("photo-1451187580459-43490279c0fa", 1200, 800),  // World view
};

// === NEED CATEGORY IMAGES ===
export const needImages: Record<string, string> = {
  burnout: unsplash("photo-1499209974431-9dddcece7f88", 1200, 800),        // Peaceful sunrise
  grief: unsplash("photo-1518837695005-2083093ee35b", 1200, 800),          // Ocean waves
  depression: unsplash("photo-1470071459604-3b5ec3a7fe05", 1200, 800),     // Green valley
  "trauma-sensitive": unsplash("photo-1490730141103-6cac27aaab94", 1200, 800), // Calm lake
  quiet: unsplash("photo-1465056836900-8f1e940b3a96", 1200, 800),          // Misty mountains
  loneliness: unsplash("photo-1529156069898-49953e39b3ac", 1200, 800),     // People together
  caregivers: unsplash("photo-1507525428034-b723cf961d3e", 1200, 800),     // Beach
  stop: unsplash("photo-1500049242364-5f500d326cfc", 1200, 800),           // Cabin/stop
};

// === GUIDE IMAGES ===
export const guideImages: Record<string, string> = {
  "what-to-pack": unsplash("photo-1553062407-98eeb64c6a62", 1200, 800),           // Backpack/travel
  "how-to-choose": unsplash("photo-1484480974693-6ca0a78fb36b", 1200, 800),       // Checklist/planning
  "sliding-scale-explained": unsplash("photo-1434030216411-0b793f4b4173", 1200, 800), // Hands/giving
  "meditation-for-beginners": unsplash("photo-1506126613408-eca07ce68773", 1200, 800), // Meditation
  "monastery-etiquette": unsplash("photo-1548013146-72479768bada", 1200, 800),     // Stone arches
  "retreats-for-introverts": unsplash("photo-1500049242364-5f500d326cfc", 1200, 800), // Solitary cabin
  "retreats-vs-vacations": unsplash("photo-1520250497591-112f2f40a3f4", 1200, 800),  // Hammock
  "post-retreat-integration": unsplash("photo-1469474968028-56623f02e42e", 1200, 800),// Sunset path
  "retreats-for-couples": unsplash("photo-1474552226712-ac0f0961a954", 1200, 800),    // Two people walking
  "digital-detox-tips": unsplash("photo-1500049242364-5f500d326cfc", 1200, 800),      // Cabin off-grid
};

// === PRICE TIER IMAGES ===
export const priceImages = {
  under500: unsplash("photo-1447752875215-b2761acb3c5d", 1200, 800),  // Forest canopy
  under750: unsplash("photo-1501854140801-50d01698950b", 1200, 800),  // Autumn forest
  under1000: unsplash("photo-1472214103451-9374bd1c798e", 1200, 800), // Mountain glow
};

// === RETREAT-SPECIFIC IMAGES (mapped by type keyword) ===
const retreatTypeKeywords: Record<string, string> = {
  "work exchange": unsplash("photo-1416879595882-3373a0480b5b", 800, 500),
  "farm": unsplash("photo-1500382017468-9049fed747ef", 800, 500),
  "meditation": unsplash("photo-1506126613408-eca07ce68773", 800, 500),
  "silent": unsplash("photo-1465056836900-8f1e940b3a96", 800, 500),
  "monastery": unsplash("photo-1548013146-72479768bada", 800, 500),
  "rest": unsplash("photo-1520250497591-112f2f40a3f4", 800, 500),
  "grief": unsplash("photo-1518837695005-2083093ee35b", 800, 500),
  "cabin": unsplash("photo-1500049242364-5f500d326cfc", 800, 500),
  "nature": unsplash("photo-1441974231531-c6227db76b6e", 800, 500),
  "community": unsplash("photo-1529156069898-49953e39b3ac", 800, 500),
  "trauma": unsplash("photo-1490730141103-6cac27aaab94", 800, 500),
  "caregiver": unsplash("photo-1499209974431-9dddcece7f88", 800, 500),
  "creative": unsplash("photo-1513364776144-60967b0f800f", 800, 500),
  "yoga": unsplash("photo-1544367567-0f2fcb009e0b", 800, 500),
  "zen": unsplash("photo-1545389336-cf090694435e", 800, 500),
  "desert": unsplash("photo-1509316975850-ff9c5deb0cd9", 800, 500),
  "ocean": unsplash("photo-1507525428034-b723cf961d3e", 800, 500),
  "mountain": unsplash("photo-1464822759023-fed622ff2c3b", 800, 500),
  "island": unsplash("photo-1559128010-7c1ad6e1b6a5", 800, 500),
  "tropical": unsplash("photo-1537996194471-e657df975ab4", 800, 500),
  "walking": unsplash("photo-1551632811-561732d1e306", 800, 500),
  "sound": unsplash("photo-1507838153414-b4b713384a76", 800, 500),
  "hot spring": unsplash("photo-1540555700478-4be289fbec6e", 800, 500),
  "quaker": unsplash("photo-1507692049790-de58290a4334", 800, 500),
  "digital detox": unsplash("photo-1500049242364-5f500d326cfc", 800, 500),
  "somatic": unsplash("photo-1544367567-0f2fcb009e0b", 800, 500),
  "depression": unsplash("photo-1470071459604-3b5ec3a7fe05", 800, 500),
  "learning": unsplash("photo-1497633762265-9d179a990aa6", 800, 500),
  "wellness": unsplash("photo-1545389336-cf090694435e", 800, 500),
};

// Location-based fallback images for retreats
const locationKeywords: Record<string, string> = {
  "bali": unsplash("photo-1537996194471-e657df975ab4", 800, 500),
  "iceland": unsplash("photo-1504893524553-b855bce32c67", 800, 500),
  "tuscany": unsplash("photo-1523906834658-6e24ef2386f9", 800, 500),
  "scotland": unsplash("photo-1506377585622-bedcbb027afc", 800, 500),
  "france": unsplash("photo-1499856871958-5b9627545d1a", 800, 500),
  "peru": unsplash("photo-1526392060635-9d6019884377", 800, 500),
  "nepal": unsplash("photo-1544735716-392fe2489ffa", 800, 500),
  "costa rica": unsplash("photo-1519681393784-d120267933ba", 800, 500),
  "mexico": unsplash("photo-1518105779142-d975f22f1b0a", 800, 500),
  "ireland": unsplash("photo-1590089415225-401ed6f9db8e", 800, 500),
  "wales": unsplash("photo-1513635269975-59663e0ac1ad", 800, 500),
  "sweden": unsplash("photo-1509356843151-3e7bd803bf5e", 800, 500),
  "portugal": unsplash("photo-1555881400-74d7acaacd8b", 800, 500),
  "spain": unsplash("photo-1509840841025-9088ba78a826", 800, 500),
  "south africa": unsplash("photo-1516026672322-bc52d61a55d5", 800, 500),
  "big sur": unsplash("photo-1506905925346-21bda4d32df4", 800, 500),
  "vermont": unsplash("photo-1501854140801-50d01698950b", 800, 500),
  "catskills": unsplash("photo-1447752875215-b2761acb3c5d", 800, 500),
  "sedona": unsplash("photo-1509316975850-ff9c5deb0cd9", 800, 500),
  "oregon": unsplash("photo-1441974231531-c6227db76b6e", 800, 500),
  "montana": unsplash("photo-1464822759023-fed622ff2c3b", 800, 500),
  "maine": unsplash("photo-1507525428034-b723cf961d3e", 800, 500),
  "hudson valley": unsplash("photo-1470071459604-3b5ec3a7fe05", 800, 500),
  "british columbia": unsplash("photo-1503614472-8c93d56e92ce", 800, 500),
  "ontario": unsplash("photo-1447752875215-b2761acb3c5d", 800, 500),
};

export function getRetreatImage(name: string, type: string, location: string): string {
  // Check location keywords first for specificity
  const locLower = location.toLowerCase();
  for (const [keyword, url] of Object.entries(locationKeywords)) {
    if (locLower.includes(keyword)) return url;
  }

  // Then check type keywords
  const typeLower = type.toLowerCase();
  for (const [keyword, url] of Object.entries(retreatTypeKeywords)) {
    if (typeLower.includes(keyword)) return url;
  }

  // Check name keywords
  const nameLower = name.toLowerCase();
  for (const [keyword, url] of Object.entries(retreatTypeKeywords)) {
    if (nameLower.includes(keyword)) return url;
  }

  // Default fallback - beautiful nature
  return unsplash("photo-1441974231531-c6227db76b6e", 800, 500);
}

// Section/decorative images
export const sectionImages = {
  testimonials: unsplash("photo-1506905925346-21bda4d32df4", 1400, 600),
  cta: unsplash("photo-1470071459604-3b5ec3a7fe05", 1400, 600),
  trustBadge: unsplash("photo-1465056836900-8f1e940b3a96", 1200, 400),
  newsletter: unsplash("photo-1469474968028-56623f02e42e", 1400, 400),
};
