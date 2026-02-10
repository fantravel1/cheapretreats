export interface NeedCategory {
  slug: string;
  title: string;
  headline: string;
  subtitle: string;
  description: string;
  longDescription: string;
  whatToExpect: string[];
  whoItsFor: string[];
  sampleRetreats: {
    name: string;
    location: string;
    price: string;
    nights: string;
    tags: string[];
  }[];
  relatedNeeds: string[];
  gradient: string;
  accentColor: string;
}

export const needsData: Record<string, NeedCategory> = {
  burnout: {
    slug: "burnout",
    title: "Burnout Recovery Retreats",
    headline: "You've given everything.",
    subtitle: "It's time to get some of it back.",
    description:
      "Affordable burnout recovery retreats that provide genuine rest — not another productivity hack disguised as wellness.",
    longDescription:
      "Burnout isn't laziness. It's the result of giving more than you have for longer than you should. These retreats don't ask you to optimize or hustle your way back. They give you space to stop, sleep, eat, and slowly remember what it feels like to not be running on empty.",
    whatToExpect: [
      "Unstructured time — no schedules to follow if you don't want to",
      "Nature and quiet — space to decompress without stimulation",
      "Nourishing meals prepared for you — one less thing to manage",
      "Optional gentle movement — walks, stretching, nothing intense",
      "Zero pressure to share, process, or 'work on yourself'",
      "Sleep — as much as your body needs",
    ],
    whoItsFor: [
      "Healthcare workers, teachers, and service professionals",
      "Parents and caregivers who never get a break",
      "People who've been pushing through for years",
      "Anyone who can't remember the last time they truly rested",
      "People recovering from toxic work environments",
    ],
    sampleRetreats: [
      { name: "Rest & Restore Weekend", location: "Catskills, NY", price: "$380", nights: "3 nights", tags: ["Secular", "Solo-friendly", "Meals included"] },
      { name: "Digital Detox Cabin Stay", location: "Olympic Peninsula, WA", price: "$550", nights: "5 nights", tags: ["Nature", "Silent-optional", "Private room"] },
      { name: "Slow Living Retreat", location: "Tuscany, Italy", price: "$720", nights: "7 nights", tags: ["Community", "Farm-to-table", "Art optional"] },
    ],
    relatedNeeds: ["caregivers", "stop", "depression"],
    gradient: "from-rose-50 to-warm-50",
    accentColor: "rose",
  },
  grief: {
    slug: "grief",
    title: "Grief Retreats",
    headline: "There is no timeline for grief.",
    subtitle: "And no one here will try to give you one.",
    description:
      "Safe, affordable grief retreats where you can feel what you feel without being fixed, rushed, or spiritually bypassed.",
    longDescription:
      "Grief doesn't follow a schedule. It doesn't care that it's been 'long enough.' These retreats don't offer silver linings or spiritual explanations. They offer space — to cry, to be silent, to walk, to sit with other people who understand without needing words.",
    whatToExpect: [
      "Facilitated sharing circles — always optional, never forced",
      "Individual quiet time with no agenda",
      "Nature walks and contemplative movement",
      "Meals together in community — or alone, your choice",
      "Trained grief companions, not therapists performing",
      "No spiritual bypassing — no 'they're in a better place'",
    ],
    whoItsFor: [
      "People grieving a death — recent or years ago",
      "People grieving a relationship, job, identity, or health",
      "Anticipatory grief — caring for someone who is dying",
      "People who feel like they 'should be over it by now'",
      "Anyone who needs permission to still be sad",
    ],
    sampleRetreats: [
      { name: "Grief & Gratitude Weekend", location: "Sonoma, CA", price: "$420", nights: "3 nights", tags: ["Secular", "Small group", "Nature"] },
      { name: "Walking Through Loss", location: "Lake District, UK", price: "$580", nights: "5 nights", tags: ["Walking pilgrimage", "Community", "Meals included"] },
      { name: "Still Here Grief Retreat", location: "Vermont", price: "$350", nights: "3 nights", tags: ["Trauma-informed", "Solo-friendly", "Sliding scale"] },
    ],
    relatedNeeds: ["quiet", "loneliness", "stop"],
    gradient: "from-sky-50 to-warm-50",
    accentColor: "sky",
  },
  depression: {
    slug: "depression",
    title: "Depression Recovery Retreats",
    headline: "When everything feels heavy.",
    subtitle: "A safe place to put it down for a while.",
    description:
      "Gentle, affordable depression recovery retreats with no pressure to perform, transform, or pretend you're okay.",
    longDescription:
      "Depression makes everything harder — including seeking help. These retreats are designed to be low-barrier, low-pressure environments where you don't have to explain yourself, motivate yourself, or put on a brave face. You can just be — and that's enough.",
    whatToExpect: [
      "Low-stimulation environments — calm, quiet, gentle",
      "No forced participation in any activity",
      "Trauma-informed facilitators who understand depression",
      "Gentle daily rhythms — meals, rest, optional walks",
      "Peer support from others who understand",
      "Connection to follow-up resources if needed",
    ],
    whoItsFor: [
      "People in depressive episodes who need a change of environment",
      "People between therapy sessions who need additional support",
      "People who've tried 'positive thinking' and need something real",
      "Anyone who needs permission to not be productive",
      "People who feel isolated in their depression",
    ],
    sampleRetreats: [
      { name: "Gentle Days Retreat", location: "Asheville, NC", price: "$400", nights: "4 nights", tags: ["Trauma-informed", "Sliding scale", "Nature"] },
      { name: "The Soft Landing", location: "Cornwall, UK", price: "$480", nights: "5 nights", tags: ["Secular", "Art therapy", "Meals included"] },
      { name: "Winter Light Retreat", location: "Sweden", price: "$650", nights: "6 nights", tags: ["Nature therapy", "Community", "Sauna"] },
    ],
    relatedNeeds: ["burnout", "loneliness", "quiet"],
    gradient: "from-sage-50 to-warm-50",
    accentColor: "sage",
  },
  "trauma-sensitive": {
    slug: "trauma-sensitive",
    title: "Trauma-Sensitive Retreats",
    headline: "Your safety is non-negotiable.",
    subtitle: "Every detail here is designed with that in mind.",
    description:
      "Trauma-informed retreats with trained facilitators, consent-based practices, and opt-out options at every step. Affordable and verified safe.",
    longDescription:
      "Trauma-sensitive retreats prioritize your autonomy and safety above all else. Every facilitator is trained. Every activity has an opt-out. Physical touch is never assumed. Group sharing is never required. These spaces understand that healing from trauma requires control, not surrender.",
    whatToExpect: [
      "Trained trauma-informed facilitators at all times",
      "Consent-based practices — nothing happens without your permission",
      "Opt-out available for every single activity",
      "No surprise physical contact — ever",
      "Grounding tools and quiet spaces always accessible",
      "Clear safety protocols communicated in advance",
    ],
    whoItsFor: [
      "Survivors of abuse, violence, or neglect",
      "People with PTSD or C-PTSD",
      "People who've had negative experiences at other retreats",
      "Anyone who needs extra safety to feel comfortable",
      "People exploring healing modalities for the first time",
    ],
    sampleRetreats: [
      { name: "Safe Ground Retreat", location: "Oregon", price: "$520", nights: "4 nights", tags: ["Trauma-informed", "Small group", "Nature"] },
      { name: "Embodied Safety", location: "New Mexico", price: "$680", nights: "5 nights", tags: ["Somatic", "Consent-based", "Private room"] },
      { name: "The Brave Space", location: "Scotland", price: "$450", nights: "4 nights", tags: ["Women-only", "Trauma-informed", "Sliding scale"] },
    ],
    relatedNeeds: ["quiet", "depression", "stop"],
    gradient: "from-warm-50 to-clay-50",
    accentColor: "warm",
  },
  quiet: {
    slug: "quiet",
    title: "Quiet Retreats",
    headline: "No talking required.",
    subtitle: "Sometimes silence is the loudest healing.",
    description:
      "Silent and quiet retreats where you can rest without conversation, social performance, or noise. Affordable and peaceful.",
    longDescription:
      "In a world that never stops talking, quiet is radical. These retreats offer silence — not as a spiritual practice (though it can be), but as a form of deep rest. No small talk at meals. No group introductions. No explaining yourself. Just quiet.",
    whatToExpect: [
      "Noble silence or optional-silence environments",
      "Meals eaten in quiet community — no forced conversation",
      "Walking paths, gardens, and contemplative spaces",
      "Optional meditation or mindfulness sessions",
      "Private or semi-private accommodations",
      "Communication through notes if needed",
    ],
    whoItsFor: [
      "Introverts and highly sensitive people",
      "People overstimulated by social and digital noise",
      "Anyone who needs to stop talking and just be",
      "People recovering from emotionally draining situations",
      "First-time retreat-goers who are nervous about group dynamics",
    ],
    sampleRetreats: [
      { name: "Noble Silence Weekend", location: "Catskills, NY", price: "$320", nights: "3 nights", tags: ["Silent", "Secular", "Meditation optional"] },
      { name: "The Quiet Farm", location: "Devon, UK", price: "$400", nights: "5 nights", tags: ["Nature", "Solo-friendly", "Meals included"] },
      { name: "Mountain Stillness", location: "Colorado", price: "$550", nights: "5 nights", tags: ["Silent", "Private cabin", "Nature"] },
    ],
    relatedNeeds: ["burnout", "stop", "trauma-sensitive"],
    gradient: "from-sage-50 to-sky-50/30",
    accentColor: "sage",
  },
  loneliness: {
    slug: "loneliness",
    title: "Loneliness Retreats",
    headline: "You don't have to be 'on.'",
    subtitle: "Connection without performance.",
    description:
      "Retreats for lonely people who want connection without the pressure of socializing. Affordable community-centered healing.",
    longDescription:
      "Loneliness isn't about being alone — it's about not feeling connected. These retreats create gentle community: shared meals, optional activities, parallel presence. You can be around people without performing. You can belong without auditioning.",
    whatToExpect: [
      "Shared meals with no forced conversation — just presence",
      "Optional group activities — walks, cooking, gardening",
      "Small group sizes — intimate, not overwhelming",
      "Structured enough to feel safe, flexible enough to feel free",
      "Community without cliques or social hierarchies",
      "Follow-up community access after the retreat",
    ],
    whoItsFor: [
      "People who feel isolated despite having a 'normal' life",
      "Remote workers who miss human connection",
      "People who've moved and haven't found community yet",
      "Anyone going through a transition — divorce, retirement, loss",
      "People who are tired of superficial socializing",
    ],
    sampleRetreats: [
      { name: "Belonging Weekend", location: "Hudson Valley, NY", price: "$380", nights: "3 nights", tags: ["Community", "Meals together", "Nature"] },
      { name: "The Table Retreat", location: "Provence, France", price: "$620", nights: "5 nights", tags: ["Cooking together", "Small group", "Farm stay"] },
      { name: "Parallel Presence", location: "Maine", price: "$450", nights: "4 nights", tags: ["Coastal", "Art optional", "Solo-friendly"] },
    ],
    relatedNeeds: ["grief", "depression", "caregivers"],
    gradient: "from-sky-50 to-warm-50",
    accentColor: "sky",
  },
  caregivers: {
    slug: "caregivers",
    title: "Caregiver Recovery Retreats",
    headline: "You carry everyone else.",
    subtitle: "It's your turn now.",
    description:
      "Affordable retreats specifically for caregivers — parents, nurses, elder care providers, and anyone who puts everyone else first.",
    longDescription:
      "Caregivers are the last people to take a break and the first to need one. These retreats understand the guilt, the exhaustion, and the identity crisis of stopping. You don't need to justify your need for rest. You don't need to feel guilty for being here.",
    whatToExpect: [
      "Full permission to rest — no guilt, no justification needed",
      "Meals prepared for you — no cooking, no cleaning, no managing",
      "Peer support from other caregivers who get it",
      "Optional workshops on boundaries and sustainability",
      "Respite care referrals if you need coverage back home",
      "Follow-up support and community",
    ],
    whoItsFor: [
      "Parents — especially single parents and special needs parents",
      "Healthcare workers and nurses",
      "Elder care providers — professional and family",
      "Mental health professionals experiencing compassion fatigue",
      "Teachers and social workers",
    ],
    sampleRetreats: [
      { name: "Caregiver Respite Weekend", location: "Blue Ridge, VA", price: "$350", nights: "3 nights", tags: ["Secular", "Women-focused", "Sliding scale"] },
      { name: "The Pause Retreat", location: "Lake District, UK", price: "$520", nights: "5 nights", tags: ["Nature", "Peer support", "Meals included"] },
      { name: "Breathe Again Retreat", location: "Costa Rica", price: "$680", nights: "7 nights", tags: ["Tropical", "Yoga optional", "Community"] },
    ],
    relatedNeeds: ["burnout", "stop", "loneliness"],
    gradient: "from-clay-50 to-warm-50",
    accentColor: "clay",
  },
  stop: {
    slug: "stop",
    title: "\"I Just Need to Stop\" Retreats",
    headline: "No agenda.",
    subtitle: "No program. Just stop.",
    description:
      "The simplest kind of retreat: a safe, affordable place to stop moving, stop performing, and stop managing for a few days.",
    longDescription:
      "Sometimes you don't need a modality. You don't need a program. You don't need a theme or a workshop or a breathing technique. You just need to stop. These retreats offer the most radical thing in modern life: unscheduled time in a safe, quiet place.",
    whatToExpect: [
      "No schedule — wake when you want, rest when you want",
      "A room with a bed, a window, and quiet",
      "Meals prepared for you — simple, nourishing, regular",
      "Nature nearby — walks, gardens, water, sky",
      "Nothing to do — and permission to do nothing",
      "Leave when you want — no minimum stay pressure",
    ],
    whoItsFor: [
      "Anyone who is simply overwhelmed by life",
      "People who don't identify with any specific 'issue'",
      "People who need to stop before they can figure out what's wrong",
      "Anyone who keeps saying 'I just need a break'",
      "People who are skeptical of retreat culture but need rest",
    ],
    sampleRetreats: [
      { name: "The Nothing Retreat", location: "Vermont", price: "$280", nights: "3 nights", tags: ["Unstructured", "Solo", "Nature"] },
      { name: "Cabin & Quiet", location: "Montana", price: "$420", nights: "5 nights", tags: ["Private cabin", "Meals delivered", "Off-grid"] },
      { name: "Simple Stop", location: "Portugal", price: "$380", nights: "4 nights", tags: ["Coastal", "Donation-based", "No program"] },
    ],
    relatedNeeds: ["burnout", "quiet", "caregivers"],
    gradient: "from-warm-50 to-sage-50/30",
    accentColor: "warm",
  },
};

export function getNeedData(slug: string): NeedCategory | undefined {
  return needsData[slug];
}

export function getAllNeedSlugs(): string[] {
  return Object.keys(needsData);
}
