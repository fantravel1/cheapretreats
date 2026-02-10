export interface Retreat {
  name: string;
  location: string;
  country: string;
  price: number;
  priceDisplay: string;
  nights: number;
  nightsDisplay: string;
  type: string;
  includes: string;
  goodFor: string[];
  tags: string[];
  verified: boolean;
  communityRun: boolean;
  workExchange: boolean;
  scholarship: boolean;
  slidingScale: boolean;
  description?: string;
  highlights?: string[];
}

export function slugify(text: string): string {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

export function getRetreatSlug(r: Retreat): string {
  return slugify(r.name);
}

const countryToRegion: Record<string, string> = {
  US: "North America", CA: "North America",
  UK: "Europe", FR: "Europe", PT: "Europe", ES: "Europe", IT: "Europe", IE: "Europe", SE: "Europe", IS: "Europe",
  NP: "Asia", ID: "Asia",
  ZA: "Africa",
  MX: "Central America", CR: "Central America",
  PE: "South America",
  Global: "Global",
};

export function getRetreatRegion(r: Retreat): string {
  return countryToRegion[r.country] || "International";
}

const typeToSlug: Record<string, string> = {
  "Work exchange": "work-exchange",
  "Farm work exchange": "work-exchange",
  "Meditation retreat": "meditation",
  "Ecumenical community": "spiritual-community",
  "Buddhist meditation + service": "meditation",
  "Contemplative work exchange": "work-exchange",
  "Monastery stay": "monastery",
  "Desert retreat": "silent-retreat",
  "Vipassana meditation": "meditation",
  "Unstructured stay": "rest-retreat",
  "Zen monastery": "monastery",
  "Silent retreat": "silent-retreat",
  "Unstructured rest": "rest-retreat",
  "Grief retreat": "grief-retreat",
  "Respite retreat": "caregiver-retreat",
  "Island retreat": "nature-retreat",
  "Quaker retreat": "spiritual-community",
  "Rest retreat": "rest-retreat",
  "Community retreat": "community-retreat",
  "Farm stay": "farm-stay",
  "Cabin retreat": "nature-retreat",
  "Creative solitude": "creative-retreat",
  "Connection retreat": "community-retreat",
  "Depression recovery": "rest-retreat",
  "Trauma-sensitive retreat": "trauma-sensitive",
  "Trauma-sensitive": "trauma-sensitive",
  "Caregiver retreat": "caregiver-retreat",
  "Creative retreat": "creative-retreat",
  "Sound healing retreat": "sound-healing",
  "Digital detox": "digital-detox",
  "Nature grief retreat": "grief-retreat",
  "Walking pilgrimage": "walking-retreat",
  "Mothers' retreat": "caregiver-retreat",
  "ND-friendly retreat": "rest-retreat",
  "Insight meditation": "meditation",
  "Nature retreat": "nature-retreat",
  "Identity-affirming retreat": "community-retreat",
  "Mindfulness community": "meditation",
  "Somatic retreat": "somatic",
  "Slow living": "rest-retreat",
  "Wellness center": "wellness",
  "Spiritual community": "spiritual-community",
  "Nature immersion": "nature-retreat",
  "Extended rest": "rest-retreat",
  "Veterans' retreat": "trauma-sensitive",
  "Learning retreat": "learning-retreat",
  "Andean healing retreat": "nature-retreat",
  "Hot springs retreat": "hot-springs",
  "Zen training retreat": "meditation",
  "LGBTQ+ healing space": "community-retreat",
  "Coastal silent retreat": "silent-retreat",
};

export function getTypeSlug(r: Retreat): string {
  return typeToSlug[r.type] || slugify(r.type);
}

const countryNames: Record<string, string> = {
  US: "United States", CA: "Canada", UK: "United Kingdom", FR: "France",
  PT: "Portugal", ES: "Spain", IT: "Italy", IE: "Ireland", SE: "Sweden",
  IS: "Iceland", NP: "Nepal", ID: "Indonesia", ZA: "South Africa",
  MX: "Mexico", CR: "Costa Rica", PE: "Peru", Global: "Worldwide",
};

export function getCountryName(code: string): string {
  return countryNames[code] || code;
}

export function getRetreatsByCountry(code: string): Retreat[] {
  return retreats.filter((r) => r.country === code);
}

export function getRetreatsByTypeSlug(slug: string): Retreat[] {
  return retreats.filter((r) => getTypeSlug(r) === slug);
}

export function getRetreatBySlug(slug: string): Retreat | undefined {
  return retreats.find((r) => getRetreatSlug(r) === slug);
}

export const allCountryCodes = (): string[] => {
  return [...new Set(retreats.map((r) => r.country))];
};

export const allTypeSlugs = (): string[] => {
  return [...new Set(retreats.map((r) => getTypeSlug(r)))];
};

export interface RetreatType {
  slug: string;
  name: string;
  description: string;
  icon: string;
}

export const retreatTypes: RetreatType[] = [
  { slug: "work-exchange", name: "Work Exchange", description: "Trade a few hours of daily work for free room, board, and immersion in a healing community. No money required — just willingness.", icon: "🔧" },
  { slug: "meditation", name: "Meditation Retreats", description: "Structured meditation programs — from Vipassana to Zen to secular mindfulness. Teacher-led sits, noble silence, and space to go inward.", icon: "🧘" },
  { slug: "silent-retreat", name: "Silent Retreats", description: "No small talk, no performance. Just you, quiet, and whatever comes up. Many find silence more healing than any workshop.", icon: "🤫" },
  { slug: "monastery", name: "Monastery Stays", description: "Ancient rhythms, simple meals, chapel bells. Monasteries have hosted seekers for centuries — and most welcome people of all faiths or none.", icon: "🏛️" },
  { slug: "rest-retreat", name: "Rest & Recovery", description: "No agenda, no schedule, no pressure. These retreats exist so you can simply stop. Sleep, eat, stare at trees. That's it.", icon: "😴" },
  { slug: "grief-retreat", name: "Grief Retreats", description: "Spaces held specifically for loss. Facilitated circles, nature walks, and the rare gift of being around others who understand without explaining.", icon: "💔" },
  { slug: "nature-retreat", name: "Nature Retreats", description: "Forest bathing, island stays, mountain cabins. Nature does the heavy lifting — these retreats just get you there.", icon: "🌿" },
  { slug: "community-retreat", name: "Community & Connection", description: "For when isolation is the problem. Shared meals, gentle activities, and the radical act of being around people who want to show up.", icon: "🤝" },
  { slug: "trauma-sensitive", name: "Trauma-Sensitive", description: "Consent-based, body-aware, clinically informed. These retreats understand that healing isn't always gentle and safety comes first.", icon: "🛡️" },
  { slug: "caregiver-retreat", name: "Caregiver Retreats", description: "For the people who take care of everyone else. Respite weekends, peer support, and permission to put yourself first for once.", icon: "💛" },
  { slug: "creative-retreat", name: "Creative Retreats", description: "Writing cabins, art studios, and unstructured creative time. Not workshops about creativity — space to actually create or rest from creating.", icon: "🎨" },
  { slug: "spiritual-community", name: "Spiritual Communities", description: "Quaker meeting houses, Taizé, Plum Village. Living spiritual traditions that welcome visitors into their daily rhythms.", icon: "✨" },
  { slug: "digital-detox", name: "Digital Detox", description: "Hand over your phone and remember what boredom feels like. Off-grid cabins and tech-free spaces for genuine disconnection.", icon: "📵" },
  { slug: "farm-stay", name: "Farm Stays", description: "Get your hands dirty. Animal care, garden work, and the grounding rhythm of agricultural life. Surprisingly therapeutic.", icon: "🌾" },
  { slug: "somatic", name: "Somatic & Body Work", description: "Healing through the body, not just the mind. Somatic experiencing, breathwork, movement, and consent-based bodywork.", icon: "🫁" },
  { slug: "walking-retreat", name: "Walking Retreats", description: "Pilgrimage-style walking through beautiful landscapes. No destination pressure — the path itself is the practice.", icon: "🥾" },
  { slug: "sound-healing", name: "Sound Healing", description: "Sound baths, singing bowls, and vibrational therapy in natural settings. Woo-adjacent but genuinely relaxing.", icon: "🔔" },
  { slug: "hot-springs", name: "Hot Springs", description: "Geothermal healing in Iceland, Japan-style onsen, and natural hot spring retreats. Water does the work.", icon: "♨️" },
  { slug: "wellness", name: "Wellness Centers", description: "Full-service retreat centers with yoga, meals, classes, and community. A good entry point if you're not sure what you need.", icon: "🏡" },
  { slug: "learning-retreat", name: "Learning Retreats", description: "Workshops, courses, and skill-building in retreat settings. Learn something new while surrounded by nature and community.", icon: "📚" },
];

export interface LocationData {
  code: string;
  name: string;
  region: string;
  description: string;
  highlights: string[];
}

export const locationData: LocationData[] = [
  { code: "US", name: "United States", region: "North America", description: "From Big Sur hot springs to Vermont silence, the US has the widest variety of affordable retreats. Strong sliding-scale culture and work-exchange programs.", highlights: ["Most work-exchange options", "Strong sliding-scale culture", "Every climate and landscape", "Well-established retreat infrastructure"] },
  { code: "CA", name: "Canada", region: "North America", description: "Forest immersion in British Columbia, Vipassana in Quebec, island retreats on the coast. Canada's retreats lean toward nature-based healing and deep quiet.", highlights: ["World-class nature immersion", "Strong meditation tradition", "Remote wilderness options", "Bilingual retreat options"] },
  { code: "UK", name: "United Kingdom", region: "Europe", description: "Devon farms, Scottish highlands, Welsh mountains, Cornish coasts. The UK has a rich tradition of retreat houses — many centuries old and donation-based.", highlights: ["Historic retreat houses", "Donation-based traditions", "Stunning coastal walks", "Strong grief retreat community"] },
  { code: "FR", name: "France", region: "Europe", description: "Home to Taizé and Plum Village — two of the world's most beloved spiritual communities. Also Provençal cooking retreats and Burgundy silence.", highlights: ["Taizé community", "Plum Village mindfulness", "Farm-to-table tradition", "Centuries of contemplative life"] },
  { code: "PT", name: "Portugal", region: "Europe", description: "Algarve coast meets Alentejo simplicity. Portugal's retreats emphasize slowness, community, and the healing power of doing absolutely nothing.", highlights: ["Coastal healing", "Affordable European option", "Warm climate year-round", "Growing retreat scene"] },
  { code: "ES", name: "Spain", region: "Europe", description: "Andalusian creative retreats, Catalonian silence, and the Camino spirit. Spain blends warmth, community, and centuries of pilgrimage tradition.", highlights: ["Creative retreat culture", "Mediterranean warmth", "Camino de Santiago tradition", "Community-focused spaces"] },
  { code: "IT", name: "Italy", region: "Europe", description: "Slow living in Tuscany — farm-to-table meals, optional art, and the Italian gift of doing less but doing it beautifully.", highlights: ["Farm-to-table meals", "Slow living philosophy", "Art-optional programs", "Community work exchange"] },
  { code: "IE", name: "Ireland", region: "Europe", description: "Wild Atlantic coast, ancient monastic sites, and a culture that understands grief. Ireland's retreats are windswept, honest, and deeply healing.", highlights: ["Wild Atlantic coastline", "Ancient monastic heritage", "Strong grief traditions", "Genuine hospitality"] },
  { code: "SE", name: "Sweden", region: "Europe", description: "Nordic light therapy, forest cabins, and sauna culture. Sweden's retreats embrace the healing power of cold water, warm wood, and honest silence.", highlights: ["Nature therapy tradition", "Sauna healing culture", "Midnight sun retreats", "Deep winter quiet"] },
  { code: "IS", name: "Iceland", region: "Europe", description: "Geothermal pools, volcanic landscapes, and light that changes everything. Iceland's retreats use the raw power of the earth itself.", highlights: ["Natural hot springs", "Volcanic landscapes", "Northern lights", "Geothermal healing"] },
  { code: "MX", name: "Mexico", region: "Central America", description: "Oaxacan hammocks, Pacific coast rest, and indigenous healing traditions. Mexico offers deeply affordable retreats with genuine warmth.", highlights: ["Incredibly affordable", "Warm climate healing", "Indigenous traditions", "Strong community culture"] },
  { code: "CR", name: "Costa Rica", region: "Central America", description: "Tropical caregiver retreats and yoga-optional rest in one of the world's Blue Zones. Nature does most of the healing here.", highlights: ["Blue Zone longevity", "Tropical nature immersion", "Yoga-optional spaces", "Pura vida philosophy"] },
  { code: "PE", name: "Peru", region: "South America", description: "Sacred Valley healing with Andean traditions, high-altitude quiet, and deep cultural reverence for the natural world.", highlights: ["Andean healing traditions", "Sacred Valley energy", "Extended stay options", "Indigenous wisdom"] },
  { code: "ID", name: "Indonesia", region: "Asia", description: "Ubud's rice terraces have drawn seekers for decades. Bali offers extended-stay rest at prices that make real healing possible.", highlights: ["Affordable extended stays", "Rice terrace beauty", "Yoga and meditation", "Warm community"] },
  { code: "NP", name: "Nepal", region: "Asia", description: "The birthplace of the Buddha offers meditation in Lumbini, mountain silence, and volunteer programs that give back while you heal.", highlights: ["Birthplace of Buddhism", "Mountain meditation", "Volunteer programs", "Ultra-affordable"] },
  { code: "ZA", name: "South Africa", region: "Africa", description: "Buddhist retreat centers in KwaZulu-Natal, nature immersion in the bush, and healing at the southern tip of the world.", highlights: ["Nature-based healing", "Affordable programs", "Buddhist tradition", "Wildlife encounters"] },
];

export const retreats: Retreat[] = [
  // === FREE / WORK EXCHANGE / DONATION-BASED ===
  { name: "Esalen Work-Scholar Program", location: "Big Sur, CA", country: "US", price: 0, priceDisplay: "$0 (work exchange)", nights: 28, nightsDisplay: "28 nights", type: "Work exchange", includes: "Shared room, all meals, hot springs, 1 workshop/week", goodFor: ["Deep reset", "Career transition", "Burnout"], tags: ["Secular", "Community", "Physical work"], verified: true, communityRun: false, workExchange: true, scholarship: true, slidingScale: false },
  { name: "WWOOF Farm Stays", location: "Various worldwide", country: "Global", price: 0, priceDisplay: "$0 (work exchange)", nights: 14, nightsDisplay: "14+ nights", type: "Farm work exchange", includes: "Room, meals, farm life", goodFor: ["Stopping", "Loneliness", "Depression"], tags: ["Nature", "Physical work", "Community"], verified: true, communityRun: true, workExchange: true, scholarship: false, slidingScale: false },
  { name: "Insight Meditation Society", location: "Barre, MA", country: "US", price: 0, priceDisplay: "Donation-based", nights: 7, nightsDisplay: "7-9 nights", type: "Meditation retreat", includes: "Shared room, meals, teacher-led program", goodFor: ["Quiet", "Burnout", "Grief"], tags: ["Secular", "Donation-based", "Silent"], verified: true, communityRun: true, workExchange: false, scholarship: true, slidingScale: true },
  { name: "Birchwood Work Exchange", location: "Northern Minnesota", country: "US", price: 0, priceDisplay: "$0 (work exchange)", nights: 21, nightsDisplay: "21 nights", type: "Work exchange", includes: "Private cabin, all meals, woodworking shop access", goodFor: ["Burnout", "Stopping", "Career transition"], tags: ["Nature", "Physical work", "Solo-friendly"], verified: true, communityRun: true, workExchange: true, scholarship: false, slidingScale: false },
  { name: "Taizé Community", location: "Burgundy, France", country: "FR", price: 0, priceDisplay: "Donation-based", nights: 7, nightsDisplay: "7 nights", type: "Ecumenical community", includes: "Shared dormitory, all meals, prayer services", goodFor: ["Loneliness", "Grief", "Quiet"], tags: ["Spiritual-optional", "Community", "Youth-friendly"], verified: true, communityRun: true, workExchange: true, scholarship: true, slidingScale: true },
  { name: "Volunteer Nepal Meditation Center", location: "Lumbini, Nepal", country: "NP", price: 0, priceDisplay: "$0 (work exchange)", nights: 14, nightsDisplay: "14 nights", type: "Buddhist meditation + service", includes: "Shared room, vegetarian meals, meditation instruction", goodFor: ["Quiet", "Depression", "Loneliness"], tags: ["Buddhist", "Work practice", "International"], verified: true, communityRun: true, workExchange: true, scholarship: false, slidingScale: false },
  { name: "Karme Choling Volunteer Program", location: "Barnet, VT", country: "US", price: 0, priceDisplay: "$0 (work exchange)", nights: 30, nightsDisplay: "30 nights", type: "Contemplative work exchange", includes: "Private room, all meals, meditation instruction, classes", goodFor: ["Deep reset", "Burnout", "Quiet"], tags: ["Buddhist-inspired", "Community", "Contemplative work"], verified: true, communityRun: true, workExchange: true, scholarship: true, slidingScale: false },

  // === UNDER $300 ===
  { name: "Abbey of Gethsemani", location: "Trappist, KY", country: "US", price: 175, priceDisplay: "$175", nights: 5, nightsDisplay: "5 nights", type: "Monastery stay", includes: "Private room, 3 meals/day, chapel access, gardens", goodFor: ["Quiet", "Grief", "Stopping"], tags: ["Catholic-optional", "Silent", "Donation-suggested"], verified: true, communityRun: true, workExchange: false, scholarship: false, slidingScale: true },
  { name: "Desert House of Prayer", location: "Tucson, AZ", country: "US", price: 200, priceDisplay: "$200", nights: 5, nightsDisplay: "5 nights", type: "Desert retreat", includes: "Private hermitage, meals, chapel, desert trails", goodFor: ["Quiet", "Burnout", "Grief"], tags: ["Religious-optional", "Silent", "Solo-friendly"], verified: true, communityRun: true, workExchange: false, scholarship: false, slidingScale: true },
  { name: "Buddhist Retreat Centre", location: "Ixopo, South Africa", country: "ZA", price: 210, priceDisplay: "$210", nights: 5, nightsDisplay: "5 nights", type: "Meditation retreat", includes: "Shared room, vegetarian meals, meditation instruction", goodFor: ["Quiet", "Depression", "Burnout"], tags: ["Buddhist-inspired", "Nature", "Affordable"], verified: true, communityRun: true, workExchange: false, scholarship: true, slidingScale: true },
  { name: "Dhamma Suttama", location: "Quebec, Canada", country: "CA", price: 0, priceDisplay: "Donation-based", nights: 10, nightsDisplay: "10 nights", type: "Vipassana meditation", includes: "Shared room, vegetarian meals, 10-day program", goodFor: ["Quiet", "Burnout", "Trauma"], tags: ["Secular", "Silent", "Donation-based"], verified: true, communityRun: true, workExchange: false, scholarship: false, slidingScale: true },
  { name: "The Nothing Retreat", location: "Vermont", country: "US", price: 280, priceDisplay: "$280", nights: 3, nightsDisplay: "3 nights", type: "Unstructured stay", includes: "Private room, 3 meals/day, nature trails", goodFor: ["Burnout", "Stopping"], tags: ["Secular", "Solo-friendly", "Unstructured"], verified: true, communityRun: false, workExchange: false, scholarship: false, slidingScale: false },
  { name: "Tassajara Zen Mountain Center", location: "Carmel Valley, CA", country: "US", price: 290, priceDisplay: "$290", nights: 3, nightsDisplay: "3 nights", type: "Zen monastery", includes: "Shared room, vegetarian meals, hot springs, zazen", goodFor: ["Quiet", "Burnout", "Stopping"], tags: ["Zen Buddhist", "Nature", "Hot springs"], verified: true, communityRun: true, workExchange: true, scholarship: true, slidingScale: true },

  // === $300 - $500 ===
  { name: "Noble Silence Weekend", location: "Catskills, NY", country: "US", price: 320, priceDisplay: "$320", nights: 3, nightsDisplay: "3 nights", type: "Silent retreat", includes: "Shared room, meals, meditation hall", goodFor: ["Quiet", "Burnout"], tags: ["Silent", "Secular", "Meditation optional"], verified: true, communityRun: false, workExchange: false, scholarship: false, slidingScale: true },
  { name: "Omega Rest & Renewal", location: "Rhinebeck, NY", country: "US", price: 330, priceDisplay: "$330", nights: 3, nightsDisplay: "3 nights", type: "Unstructured rest", includes: "Shared room, meals, lake, sauna, yoga", goodFor: ["Burnout", "First-timers", "Stopping"], tags: ["Secular", "Nature", "LGBTQ+ welcoming"], verified: true, communityRun: false, workExchange: false, scholarship: true, slidingScale: true },
  { name: "Gaia House", location: "Devon, England", country: "UK", price: 340, priceDisplay: "$340", nights: 5, nightsDisplay: "5 nights", type: "Meditation retreat", includes: "Shared room, vegetarian meals, teacher-led sits", goodFor: ["Anxiety", "Burnout", "Quiet"], tags: ["Secular", "Donation-based", "Silent"], verified: true, communityRun: true, workExchange: false, scholarship: false, slidingScale: true },
  { name: "Still Here Grief Retreat", location: "Vermont", country: "US", price: 350, priceDisplay: "$350", nights: 3, nightsDisplay: "3 nights", type: "Grief retreat", includes: "Shared room, meals, facilitated circles", goodFor: ["Grief", "Loneliness"], tags: ["Trauma-informed", "Solo-friendly", "Sliding scale"], verified: true, communityRun: false, workExchange: false, scholarship: false, slidingScale: true },
  { name: "Caregiver Respite Weekend", location: "Blue Ridge, VA", country: "US", price: 350, priceDisplay: "$350", nights: 3, nightsDisplay: "3 nights", type: "Respite retreat", includes: "Private room, meals, peer support", goodFor: ["Caregivers", "Burnout"], tags: ["Secular", "Women-focused", "Sliding scale"], verified: true, communityRun: false, workExchange: false, scholarship: true, slidingScale: true },
  { name: "Samish Island Retreat", location: "San Juan Islands, WA", country: "US", price: 360, priceDisplay: "$360", nights: 3, nightsDisplay: "3 nights", type: "Island retreat", includes: "Shared room, meals, kayak access, gardens", goodFor: ["Burnout", "Stopping", "Quiet"], tags: ["Nature", "Coastal", "Small group"], verified: true, communityRun: true, workExchange: false, scholarship: false, slidingScale: false },
  { name: "Pendle Hill Quaker Retreat", location: "Wallingford, PA", country: "US", price: 370, priceDisplay: "$370", nights: 4, nightsDisplay: "4 nights", type: "Quaker retreat", includes: "Private room, meals, library, gardens, worship", goodFor: ["Quiet", "Grief", "Loneliness"], tags: ["Quaker", "Spiritual-optional", "Community"], verified: true, communityRun: true, workExchange: true, scholarship: true, slidingScale: true },
  { name: "Rest & Restore Weekend", location: "Catskills, NY", country: "US", price: 380, priceDisplay: "$380", nights: 3, nightsDisplay: "3 nights", type: "Rest retreat", includes: "Private room, meals, nature", goodFor: ["Burnout", "Stopping"], tags: ["Secular", "Solo-friendly", "Meals included"], verified: true, communityRun: false, workExchange: false, scholarship: false, slidingScale: false },
  { name: "Belonging Weekend", location: "Hudson Valley, NY", country: "US", price: 380, priceDisplay: "$380", nights: 3, nightsDisplay: "3 nights", type: "Community retreat", includes: "Shared room, meals together, optional activities", goodFor: ["Loneliness", "Depression"], tags: ["Community", "Meals together", "Nature"], verified: true, communityRun: false, workExchange: false, scholarship: false, slidingScale: false },
  { name: "Simple Stop", location: "Alentejo, Portugal", country: "PT", price: 380, priceDisplay: "$380", nights: 4, nightsDisplay: "4 nights", type: "Unstructured stay", includes: "Shared room, meals, coastal access", goodFor: ["Stopping", "Burnout"], tags: ["Coastal", "Donation-based", "No program"], verified: true, communityRun: true, workExchange: false, scholarship: false, slidingScale: true },
  { name: "Holy Cross Monastery", location: "West Park, NY", country: "US", price: 385, priceDisplay: "$385", nights: 5, nightsDisplay: "5 nights", type: "Monastery stay", includes: "Private room, 3 meals/day, chapel access", goodFor: ["Quiet", "Grief", "Stopping"], tags: ["Religious-optional", "Silent", "Solo-friendly"], verified: true, communityRun: true, workExchange: false, scholarship: false, slidingScale: true },
  { name: "Gentle Days Retreat", location: "Asheville, NC", country: "US", price: 400, priceDisplay: "$400", nights: 4, nightsDisplay: "4 nights", type: "Depression recovery", includes: "Private room, meals, nature therapy", goodFor: ["Depression", "Burnout"], tags: ["Trauma-informed", "Sliding scale", "Nature"], verified: true, communityRun: false, workExchange: false, scholarship: true, slidingScale: true },
  { name: "The Quiet Farm", location: "Devon, UK", country: "UK", price: 400, priceDisplay: "$400", nights: 5, nightsDisplay: "5 nights", type: "Farm stay", includes: "Private room, meals, farm access", goodFor: ["Quiet", "Stopping"], tags: ["Nature", "Solo-friendly", "Meals included"], verified: true, communityRun: true, workExchange: true, scholarship: false, slidingScale: false },
  { name: "Casa de Quietud", location: "Oaxaca, Mexico", country: "MX", price: 410, priceDisplay: "$410", nights: 5, nightsDisplay: "5 nights", type: "Rest retreat", includes: "Private room, meals, garden, hammocks", goodFor: ["Burnout", "Stopping", "Depression"], tags: ["Secular", "Solo-friendly", "Warm climate"], verified: true, communityRun: true, workExchange: false, scholarship: false, slidingScale: true },
  { name: "Cabin & Quiet", location: "Montana", country: "US", price: 420, priceDisplay: "$420", nights: 5, nightsDisplay: "5 nights", type: "Cabin retreat", includes: "Private cabin, meals delivered, off-grid", goodFor: ["Stopping", "Burnout", "Quiet"], tags: ["Private cabin", "Meals delivered", "Off-grid"], verified: true, communityRun: false, workExchange: false, scholarship: false, slidingScale: false },
  { name: "Grief & Gratitude Weekend", location: "Sonoma, CA", country: "US", price: 420, priceDisplay: "$420", nights: 3, nightsDisplay: "3 nights", type: "Grief retreat", includes: "Shared room, meals, facilitated circles", goodFor: ["Grief", "Loneliness"], tags: ["Secular", "Small group", "Nature"], verified: true, communityRun: false, workExchange: false, scholarship: false, slidingScale: false },
  { name: "Rainy Lake Writers' Cabin", location: "Northern Ontario, Canada", country: "CA", price: 430, priceDisplay: "$430", nights: 5, nightsDisplay: "5 nights", type: "Creative solitude", includes: "Private cabin, meal basket, lake access", goodFor: ["Burnout", "Stopping", "Creative block"], tags: ["Solo-only", "Nature", "Off-grid"], verified: true, communityRun: false, workExchange: false, scholarship: false, slidingScale: false },
  { name: "Mountain Silence Retreat Center", location: "Blue Ridge Mountains, NC", country: "US", price: 450, priceDisplay: "$450", nights: 4, nightsDisplay: "4 nights", type: "Silent retreat", includes: "Private room, 3 meals/day, guided meditation", goodFor: ["Burnout", "Overwhelm"], tags: ["Secular", "Silent", "Solo-friendly"], verified: true, communityRun: false, workExchange: false, scholarship: false, slidingScale: false },
  { name: "Parallel Presence", location: "Maine", country: "US", price: 450, priceDisplay: "$450", nights: 4, nightsDisplay: "4 nights", type: "Connection retreat", includes: "Shared room, meals, coastal walks", goodFor: ["Loneliness", "Depression"], tags: ["Coastal", "Art optional", "Solo-friendly"], verified: true, communityRun: false, workExchange: false, scholarship: false, slidingScale: false },
  { name: "The Brave Space", location: "Highlands, Scotland", country: "UK", price: 450, priceDisplay: "$450", nights: 4, nightsDisplay: "4 nights", type: "Trauma-sensitive retreat", includes: "Private room, meals, facilitated sessions", goodFor: ["Trauma", "Depression"], tags: ["Women-only", "Trauma-informed", "Sliding scale"], verified: true, communityRun: false, workExchange: false, scholarship: true, slidingScale: true },
  { name: "Manresa Jesuit Retreat House", location: "Pickering, Ontario", country: "CA", price: 460, priceDisplay: "$460", nights: 5, nightsDisplay: "5 nights", type: "Directed retreat", includes: "Private room, meals, spiritual direction optional", goodFor: ["Grief", "Quiet", "Stopping"], tags: ["Religious-optional", "Solo-friendly", "Nature"], verified: true, communityRun: true, workExchange: false, scholarship: true, slidingScale: true },
  { name: "The Soft Landing", location: "Cornwall, UK", country: "UK", price: 480, priceDisplay: "$480", nights: 5, nightsDisplay: "5 nights", type: "Depression recovery", includes: "Private room, meals, art therapy", goodFor: ["Depression", "Grief"], tags: ["Secular", "Art therapy", "Meals included"], verified: true, communityRun: false, workExchange: false, scholarship: false, slidingScale: false },
  { name: "Wild Grief Weekend", location: "Snowdonia, Wales", country: "UK", price: 490, priceDisplay: "$490", nights: 3, nightsDisplay: "3 nights", type: "Nature grief retreat", includes: "Shared cabin, meals, guided walks, campfire circles", goodFor: ["Grief", "Loneliness", "Burnout"], tags: ["Nature", "Community", "Campfire"], verified: true, communityRun: false, workExchange: false, scholarship: false, slidingScale: true },

  // === $500 - $750 ===
  { name: "Trauma-Sensitive Retreat", location: "Oregon Coast", country: "US", price: 520, priceDisplay: "$520", nights: 4, nightsDisplay: "4 nights", type: "Trauma-sensitive", includes: "Private room, meals, somatic sessions", goodFor: ["Trauma", "Depression"], tags: ["Trauma-informed", "Small group", "Nature"], verified: true, communityRun: false, workExchange: false, scholarship: true, slidingScale: true },
  { name: "The Pause Retreat", location: "Lake District, UK", country: "UK", price: 520, priceDisplay: "$520", nights: 5, nightsDisplay: "5 nights", type: "Caregiver retreat", includes: "Private room, meals, peer support", goodFor: ["Caregivers", "Burnout"], tags: ["Nature", "Peer support", "Meals included"], verified: true, communityRun: false, workExchange: false, scholarship: false, slidingScale: false },
  { name: "Cortijo Romero", location: "Andalusia, Spain", country: "ES", price: 520, priceDisplay: "$520", nights: 7, nightsDisplay: "7 nights", type: "Creative retreat", includes: "Shared room, all meals, pool, gardens", goodFor: ["Creative block", "Loneliness", "Gentle reset"], tags: ["Secular", "Community", "Art-optional"], verified: true, communityRun: true, workExchange: false, scholarship: false, slidingScale: false },
  { name: "Sound Healing Sanctuary", location: "Sedona, AZ", country: "US", price: 540, priceDisplay: "$540", nights: 4, nightsDisplay: "4 nights", type: "Sound healing retreat", includes: "Shared room, meals, daily sound baths, red rock hikes", goodFor: ["Burnout", "Trauma", "Quiet"], tags: ["Spiritual-optional", "Nature", "Small group"], verified: true, communityRun: false, workExchange: false, scholarship: false, slidingScale: false },
  { name: "Digital Detox Cabin Stay", location: "Olympic Peninsula, WA", country: "US", price: 550, priceDisplay: "$550", nights: 5, nightsDisplay: "5 nights", type: "Digital detox", includes: "Private cabin, meals, nature guides", goodFor: ["Burnout", "Overwhelm"], tags: ["Nature", "Silent-optional", "Private room"], verified: true, communityRun: false, workExchange: false, scholarship: false, slidingScale: false },
  { name: "Mountain Stillness", location: "Crestone, Colorado", country: "US", price: 550, priceDisplay: "$550", nights: 5, nightsDisplay: "5 nights", type: "Silent retreat", includes: "Semi-private room, meals, meditation", goodFor: ["Quiet", "Burnout"], tags: ["Silent", "Private cabin", "Nature"], verified: true, communityRun: false, workExchange: false, scholarship: false, slidingScale: false },
  { name: "Rebuilding After Loss", location: "Cape Cod, MA", country: "US", price: 560, priceDisplay: "$560", nights: 4, nightsDisplay: "4 nights", type: "Grief retreat", includes: "Private room, meals, facilitated sessions, beach walks", goodFor: ["Grief", "Loneliness", "Depression"], tags: ["Secular", "Coastal", "Small group"], verified: true, communityRun: false, workExchange: false, scholarship: true, slidingScale: false },
  { name: "Walking Through Loss", location: "Lake District, UK", country: "UK", price: 580, priceDisplay: "$580", nights: 5, nightsDisplay: "5 nights", type: "Walking pilgrimage", includes: "Shared room, meals, guided walks", goodFor: ["Grief", "Loneliness"], tags: ["Walking pilgrimage", "Community", "Meals included"], verified: true, communityRun: false, workExchange: false, scholarship: false, slidingScale: false },
  { name: "Mama Needs a Break", location: "Sedona, AZ", country: "US", price: 590, priceDisplay: "$590", nights: 4, nightsDisplay: "4 nights", type: "Mothers' retreat", includes: "Private room, meals, childcare referrals, massage", goodFor: ["Caregivers", "Burnout", "Loneliness"], tags: ["Women-only", "Mothers", "Sliding scale"], verified: true, communityRun: false, workExchange: false, scholarship: true, slidingScale: true },
  { name: "The Table Retreat", location: "Provence, France", country: "FR", price: 620, priceDisplay: "$620", nights: 5, nightsDisplay: "5 nights", type: "Connection retreat", includes: "Shared room, cooking together, farm stay", goodFor: ["Loneliness", "Depression"], tags: ["Cooking together", "Small group", "Farm stay"], verified: true, communityRun: true, workExchange: true, scholarship: false, slidingScale: false },
  { name: "Neurodivergent Rest Retreat", location: "Portland, OR", country: "US", price: 630, priceDisplay: "$630", nights: 5, nightsDisplay: "5 nights", type: "ND-friendly retreat", includes: "Private room, meals, sensory room, flexible schedule", goodFor: ["Burnout", "Depression", "Overwhelm"], tags: ["Neurodivergent-friendly", "Secular", "Flexible schedule"], verified: true, communityRun: false, workExchange: false, scholarship: true, slidingScale: true },
  { name: "Spirit Rock Meditation Center", location: "Woodacre, CA", country: "US", price: 650, priceDisplay: "$650", nights: 5, nightsDisplay: "5 nights", type: "Insight meditation", includes: "Shared room, meals, daily teacher meetings", goodFor: ["Trauma", "Grief", "Quiet"], tags: ["Secular", "Trauma-informed", "Sliding scale"], verified: true, communityRun: true, workExchange: false, scholarship: true, slidingScale: true },
  { name: "Winter Light Retreat", location: "Dalarna, Sweden", country: "SE", price: 650, priceDisplay: "$650", nights: 6, nightsDisplay: "6 nights", type: "Nature retreat", includes: "Private cabin, meals, sauna, nature therapy", goodFor: ["Depression", "Burnout"], tags: ["Nature therapy", "Community", "Sauna"], verified: true, communityRun: false, workExchange: false, scholarship: false, slidingScale: false },
  { name: "BIPOC Healing Circle Retreat", location: "Asheville, NC", country: "US", price: 660, priceDisplay: "$660", nights: 5, nightsDisplay: "5 nights", type: "Identity-affirming retreat", includes: "Private room, meals, facilitated circles, bodywork", goodFor: ["Burnout", "Trauma", "Loneliness"], tags: ["BIPOC-centered", "Trauma-informed", "Community"], verified: true, communityRun: false, workExchange: false, scholarship: true, slidingScale: true },
  { name: "Plum Village Practice Center", location: "Dordogne, France", country: "FR", price: 680, priceDisplay: "$680", nights: 7, nightsDisplay: "7 nights", type: "Mindfulness community", includes: "Shared room, all meals, daily practice", goodFor: ["Grief", "Loneliness"], tags: ["Buddhist-inspired", "Community", "Work practice"], verified: true, communityRun: true, workExchange: true, scholarship: true, slidingScale: true },
  { name: "Embodied Safety", location: "Santa Fe, New Mexico", country: "US", price: 680, priceDisplay: "$680", nights: 5, nightsDisplay: "5 nights", type: "Somatic retreat", includes: "Private room, meals, somatic sessions", goodFor: ["Trauma", "Depression"], tags: ["Somatic", "Consent-based", "Private room"], verified: true, communityRun: false, workExchange: false, scholarship: false, slidingScale: false },
  { name: "Caregiver Breathe Again", location: "Nicoya Peninsula, Costa Rica", country: "CR", price: 680, priceDisplay: "$680", nights: 7, nightsDisplay: "7 nights", type: "Caregiver retreat", includes: "Shared room, meals, optional yoga", goodFor: ["Caregivers", "Burnout"], tags: ["Tropical", "Yoga optional", "Community"], verified: true, communityRun: false, workExchange: false, scholarship: false, slidingScale: false },
  { name: "Queer Rest Retreat", location: "Hudson Valley, NY", country: "US", price: 700, priceDisplay: "$700", nights: 5, nightsDisplay: "5 nights", type: "LGBTQ+ healing space", includes: "Private room, meals, facilitated sharing, nature", goodFor: ["Loneliness", "Burnout", "Depression"], tags: ["LGBTQ+-centered", "Secular", "Small group"], verified: true, communityRun: false, workExchange: false, scholarship: true, slidingScale: true },
  { name: "Sea & Silence", location: "Donegal, Ireland", country: "IE", price: 710, priceDisplay: "$710", nights: 6, nightsDisplay: "6 nights", type: "Coastal silent retreat", includes: "Private room, meals, cliff walks, optional yoga", goodFor: ["Grief", "Quiet", "Burnout"], tags: ["Coastal", "Silent", "Nature"], verified: true, communityRun: false, workExchange: false, scholarship: false, slidingScale: false },

  // === $750 - $1000 ===
  { name: "Slow Living Retreat", location: "Tuscany, Italy", country: "IT", price: 720, priceDisplay: "$720", nights: 7, nightsDisplay: "7 nights", type: "Slow living", includes: "Shared room, farm-to-table meals, art optional", goodFor: ["Burnout", "Creative block"], tags: ["Community", "Farm-to-table", "Art optional"], verified: true, communityRun: true, workExchange: true, scholarship: false, slidingScale: false },
  { name: "Kripalu Center for Yoga", location: "Stockbridge, MA", country: "US", price: 750, priceDisplay: "$750", nights: 5, nightsDisplay: "5 nights", type: "Wellness center", includes: "Shared room, 3 buffet meals/day, all classes", goodFor: ["Depression", "Burnout", "First-timers"], tags: ["Spiritual-optional", "Neurodivergent-aware", "LGBTQ+ welcoming"], verified: true, communityRun: false, workExchange: false, scholarship: true, slidingScale: true },
  { name: "Findhorn Foundation Experience Week", location: "Moray, Scotland", country: "UK", price: 780, priceDisplay: "$780", nights: 7, nightsDisplay: "7 nights", type: "Spiritual community", includes: "Shared room, vegetarian meals, workshops, garden work", goodFor: ["Loneliness", "Career transition", "Depression"], tags: ["Spiritual-optional", "Community", "Work practice"], verified: true, communityRun: true, workExchange: true, scholarship: true, slidingScale: true },
  { name: "Deep Forest Immersion", location: "British Columbia, Canada", country: "CA", price: 820, priceDisplay: "$820", nights: 7, nightsDisplay: "7 nights", type: "Nature immersion", includes: "Private cabin, meals, forest bathing guides", goodFor: ["Burnout", "Depression", "Stopping"], tags: ["Nature", "Solo-friendly", "Off-grid"], verified: true, communityRun: false, workExchange: false, scholarship: false, slidingScale: false },
  { name: "The Long Exhale", location: "Ubud, Bali, Indonesia", country: "ID", price: 850, priceDisplay: "$850", nights: 10, nightsDisplay: "10 nights", type: "Extended rest", includes: "Private room, all meals, yoga optional", goodFor: ["Burnout", "Stopping", "Depression"], tags: ["Tropical", "Extended stay", "Solo-friendly"], verified: true, communityRun: false, workExchange: true, scholarship: false, slidingScale: false },
  { name: "Veterans Healing Retreat", location: "Montana", country: "US", price: 0, priceDisplay: "$0 (funded)", nights: 7, nightsDisplay: "7 nights", type: "Veterans' retreat", includes: "Private room, all meals, equine therapy, facilitated groups", goodFor: ["Trauma", "Depression", "Burnout"], tags: ["Veterans-only", "Trauma-informed", "Fully funded"], verified: true, communityRun: false, workExchange: false, scholarship: true, slidingScale: false },
  { name: "Hollyhock Lifelong Learning", location: "Cortes Island, BC, Canada", country: "CA", price: 880, priceDisplay: "$880", nights: 5, nightsDisplay: "5 nights", type: "Learning retreat", includes: "Shared room, gourmet meals, workshops, hot tub", goodFor: ["Burnout", "Creative block", "Career transition"], tags: ["Nature", "Community", "LGBTQ+ welcoming"], verified: true, communityRun: true, workExchange: true, scholarship: true, slidingScale: true },
  { name: "Sacred Valley Rest", location: "Cusco Region, Peru", country: "PE", price: 900, priceDisplay: "$900", nights: 10, nightsDisplay: "10 nights", type: "Andean healing retreat", includes: "Private room, all meals, ceremony optional, nature guides", goodFor: ["Deep reset", "Grief", "Career transition"], tags: ["Indigenous-informed", "Nature", "Extended stay"], verified: true, communityRun: true, workExchange: false, scholarship: false, slidingScale: true },
  { name: "Healing Waters Retreat", location: "Iceland", country: "IS", price: 950, priceDisplay: "$950", nights: 5, nightsDisplay: "5 nights", type: "Hot springs retreat", includes: "Shared room, meals, hot springs, guided hikes", goodFor: ["Burnout", "Grief", "Quiet"], tags: ["Nature", "Geothermal", "Small group"], verified: true, communityRun: false, workExchange: false, scholarship: false, slidingScale: false },
  { name: "Zen Mountain Monastery", location: "Mount Tremper, NY", country: "US", price: 980, priceDisplay: "$980", nights: 7, nightsDisplay: "7 nights", type: "Zen training retreat", includes: "Shared room, all meals, zazen, work practice, dokusan", goodFor: ["Quiet", "Deep reset", "Burnout"], tags: ["Zen Buddhist", "Silent", "Disciplined"], verified: true, communityRun: true, workExchange: true, scholarship: true, slidingScale: true },
];
