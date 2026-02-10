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
      "Burnout isn't laziness. It's the result of giving more than you have for longer than you should. It shows up as exhaustion that sleep doesn't fix, a flatness where motivation used to be, and a body that keeps score even when your mind tries to push through. These retreats don't ask you to optimize or hustle your way back to functioning. They don't repackage rest as a strategy for being more productive later. They give you space to stop, sleep, eat, and slowly remember what it feels like to not be running on empty. Some people cry on the first day. Some people sleep for three days straight. Both are fine. There is no wrong way to begin recovering from something that took years to build up.",
    whatToExpect: [
      "Unstructured time — no schedules to follow if you don't want to",
      "Nature and quiet — space to decompress without stimulation",
      "Nourishing meals prepared for you — one less thing to manage",
      "Optional gentle movement — walks, stretching, nothing intense",
      "Zero pressure to share, process, or 'work on yourself'",
      "Sleep — as much as your body needs, no alarms, no agenda",
      "Screen-free common areas where you can sit without distraction",
      "Journaling materials and quiet reading spaces available",
      "Staff who understand burnout and won't push you to participate",
      "A departure conversation to help you protect your rest when you return home",
    ],
    whoItsFor: [
      "Healthcare workers, teachers, and service professionals",
      "Parents and caregivers who never get a break",
      "People who've been pushing through for years and hit a wall",
      "Anyone who can't remember the last time they truly rested",
      "People recovering from toxic work environments",
      "Freelancers, founders, and anyone whose work never has an off switch",
      "People who feel guilty resting but know they desperately need to",
      "Anyone whose body has started sending warning signs — insomnia, illness, numbness",
    ],
    sampleRetreats: [
      { name: "Rest & Restore Weekend", location: "Catskills, NY", price: "$380", nights: "3 nights", tags: ["Secular", "Solo-friendly", "Meals included"] },
      { name: "Digital Detox Cabin Stay", location: "Olympic Peninsula, WA", price: "$550", nights: "5 nights", tags: ["Nature", "Silent-optional", "Private room"] },
      { name: "Slow Living Retreat", location: "Tuscany, Italy", price: "$720", nights: "7 nights", tags: ["Community", "Farm-to-table", "Art optional"] },
      { name: "The Long Exhale", location: "Ojai, CA", price: "$460", nights: "4 nights", tags: ["Secular", "Meals included", "Yoga optional"] },
      { name: "Burnout Recovery Farmstay", location: "Cotswolds, UK", price: "$580", nights: "5 nights", tags: ["Rural", "Animals", "Solo-friendly"] },
      { name: "Off the Grid Retreat", location: "Northern Michigan", price: "$340", nights: "3 nights", tags: ["Cabin", "Lake access", "No WiFi"] },
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
      "Grief doesn't follow a schedule. It doesn't care that it's been 'long enough.' It shows up at random — in the grocery store, on a Tuesday morning, years after everyone else has moved on. These retreats don't offer silver linings or spiritual explanations. They don't rank your losses or tell you which stage you're in. They offer space — to cry, to be silent, to walk, to sit with other people who understand without needing words. Some people come grieving a person. Some come grieving a future that will never happen, a relationship that ended, or a version of themselves that is gone. All of it counts here. You don't have to prove that your grief is big enough to deserve a place.",
    whatToExpect: [
      "Facilitated sharing circles — always optional, never forced",
      "Individual quiet time with no agenda",
      "Nature walks and contemplative movement",
      "Meals together in community — or alone, your choice",
      "Trained grief companions, not therapists performing",
      "No spiritual bypassing — no 'they're in a better place'",
      "Rituals and remembrance activities you can participate in or simply witness",
      "Creative expression options — writing, art, music — no skill required",
      "A library of grief literature and poetry in a comfortable reading space",
      "A closing circle that honors what you carry without trying to resolve it",
    ],
    whoItsFor: [
      "People grieving a death — recent or years ago",
      "People grieving a relationship, job, identity, or health",
      "Anticipatory grief — caring for someone who is dying",
      "People who feel like they 'should be over it by now'",
      "Anyone who needs permission to still be sad",
      "People grieving losses that others don't recognize — infertility, estrangement, a diagnosis",
      "Those who have been strong for everyone else and haven't had space for their own grief",
      "People who are grieving alone and need to be around others who understand",
    ],
    sampleRetreats: [
      { name: "Grief & Gratitude Weekend", location: "Sonoma, CA", price: "$420", nights: "3 nights", tags: ["Secular", "Small group", "Nature"] },
      { name: "Walking Through Loss", location: "Lake District, UK", price: "$580", nights: "5 nights", tags: ["Walking pilgrimage", "Community", "Meals included"] },
      { name: "Still Here Grief Retreat", location: "Vermont", price: "$350", nights: "3 nights", tags: ["Trauma-informed", "Solo-friendly", "Sliding scale"] },
      { name: "Tending Sorrow", location: "Santa Fe, NM", price: "$490", nights: "4 nights", tags: ["Desert landscape", "Creative expression", "Small group"] },
      { name: "The Harbour Grief Retreat", location: "Nova Scotia, Canada", price: "$530", nights: "5 nights", tags: ["Coastal", "Peer support", "Meals included"] },
      { name: "Letters to the Lost", location: "Galway, Ireland", price: "$440", nights: "4 nights", tags: ["Writing-based", "Rural", "Community meals"] },
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
      "Depression makes everything harder — including seeking help. Getting out of bed is a task. Making a phone call feels impossible. The idea of going somewhere new can feel like too much. These retreats are designed to be low-barrier, low-pressure environments where you don't have to explain yourself, motivate yourself, or put on a brave face. The facilitators understand that depression isn't a mood — it's a weight that changes how everything feels, from eating to thinking to caring about anything at all. You won't be asked to smile, look on the bright side, or set intentions. You can just be — move slowly, rest often, eat when food is placed in front of you — and that's enough. Many people arrive unsure this will help and leave not transformed but slightly lighter, which is more honest than any miracle story.",
    whatToExpect: [
      "Low-stimulation environments — calm, quiet, gentle",
      "No forced participation in any activity",
      "Trauma-informed facilitators who understand depression",
      "Gentle daily rhythms — meals, rest, optional walks",
      "Peer support from others who understand",
      "Connection to follow-up resources if needed",
      "Comfortable rooms designed for rest — soft lighting, weighted blankets available",
      "A daily check-in with a facilitator — brief, private, no pressure",
      "Access to outdoor spaces without needing to commit to structured activities",
      "Departure support including a simple plan for re-entry to daily life",
    ],
    whoItsFor: [
      "People in depressive episodes who need a change of environment",
      "People between therapy sessions who need additional support",
      "People who've tried 'positive thinking' and need something real",
      "Anyone who needs permission to not be productive",
      "People who feel isolated in their depression",
      "People whose depression shows up as numbness and disconnection, not just sadness",
      "Those who are functional on the outside but running on empty inside",
      "People who want to try something beyond medication — not instead of, alongside",
    ],
    sampleRetreats: [
      { name: "Gentle Days Retreat", location: "Asheville, NC", price: "$400", nights: "4 nights", tags: ["Trauma-informed", "Sliding scale", "Nature"] },
      { name: "The Soft Landing", location: "Cornwall, UK", price: "$480", nights: "5 nights", tags: ["Secular", "Art therapy", "Meals included"] },
      { name: "Winter Light Retreat", location: "Sweden", price: "$650", nights: "6 nights", tags: ["Nature therapy", "Community", "Sauna"] },
      { name: "Low Tide Retreat", location: "Oregon Coast", price: "$370", nights: "3 nights", tags: ["Coastal", "Solo-friendly", "Gentle schedule"] },
      { name: "Still Standing Retreat", location: "Blue Mountains, Australia", price: "$520", nights: "5 nights", tags: ["Bushland", "Peer support", "Meals included"] },
      { name: "The Slow Return", location: "Andalusia, Spain", price: "$580", nights: "6 nights", tags: ["Warm climate", "Garden access", "Community meals"] },
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
      "Trauma-sensitive retreats prioritize your autonomy and safety above all else. Every facilitator is trained. Every activity has an opt-out. Physical touch is never assumed. Group sharing is never required. These spaces understand that healing from trauma requires control, not surrender — and that a retreat environment can feel threatening if it isn't built with genuine care. Too many wellness spaces use language like 'let go' and 'surrender' without understanding how dangerous that feels when your body has learned that letting your guard down leads to harm. Here, you set the pace. You decide what you participate in. You can leave a room, skip a session, eat alone, or change your mind at any point. The structure exists to serve your sense of safety, not the facilitator's agenda.",
    whatToExpect: [
      "Trained trauma-informed facilitators at all times",
      "Consent-based practices — nothing happens without your permission",
      "Opt-out available for every single activity",
      "No surprise physical contact — ever",
      "Grounding tools and quiet spaces always accessible",
      "Clear safety protocols communicated in advance",
      "Detailed pre-retreat information so there are no surprises on arrival",
      "Private rooms available — you are never required to share sleeping space",
      "Somatic practices offered gently — body-based work always at your pace",
      "A designated safe person you can approach at any time, day or night",
    ],
    whoItsFor: [
      "Survivors of abuse, violence, or neglect",
      "People with PTSD or C-PTSD",
      "People who've had negative experiences at other retreats",
      "Anyone who needs extra safety to feel comfortable",
      "People exploring healing modalities for the first time",
      "Those who dissociate or shut down in group settings and need a space that accounts for that",
      "People whose trauma responses include hypervigilance — you need to know the exits, the schedule, the plan",
      "Anyone who has been told to 'just relax' one too many times and needs a place that understands why you can't",
    ],
    sampleRetreats: [
      { name: "Safe Ground Retreat", location: "Oregon", price: "$520", nights: "4 nights", tags: ["Trauma-informed", "Small group", "Nature"] },
      { name: "Embodied Safety", location: "New Mexico", price: "$680", nights: "5 nights", tags: ["Somatic", "Consent-based", "Private room"] },
      { name: "The Brave Space", location: "Scotland", price: "$450", nights: "4 nights", tags: ["Women-only", "Trauma-informed", "Sliding scale"] },
      { name: "Threshold Retreat", location: "Berkshires, MA", price: "$490", nights: "4 nights", tags: ["Mixed gender", "Art therapy", "Private room"] },
      { name: "Rooted & Held", location: "Vancouver Island, Canada", price: "$600", nights: "5 nights", tags: ["Forest setting", "Somatic", "Small group"] },
      { name: "The Steady Place", location: "Dorset, UK", price: "$540", nights: "5 nights", tags: ["Consent-based", "Peer support", "Meals included"] },
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
      "In a world that never stops talking, quiet is radical. Most of daily life requires performing — at work, online, even at home. You narrate, explain, respond, react, all day, every day, until the noise lives inside your head even when the room is empty. These retreats offer silence — not as a spiritual practice (though it can be), but as a form of deep rest. No small talk at meals. No group introductions. No explaining yourself. Just quiet. For some people, the first few hours feel uncomfortable, because silence makes space for things you've been outrunning. That's normal. The quiet holds it all. You don't have to do anything with what comes up. You can just let it be there while you walk, eat, and breathe in a place designed to ask nothing of you.",
    whatToExpect: [
      "Noble silence or optional-silence environments",
      "Meals eaten in quiet community — no forced conversation",
      "Walking paths, gardens, and contemplative spaces",
      "Optional meditation or mindfulness sessions",
      "Private or semi-private accommodations",
      "Communication through notes if needed",
      "A gentle orientation that explains how silence works so you feel prepared",
      "Quiet common areas — libraries, sitting rooms, fireside spaces",
      "No background music, no announcements, no unnecessary noise",
      "A gradual re-entry period before departure so the transition isn't jarring",
    ],
    whoItsFor: [
      "Introverts and highly sensitive people",
      "People overstimulated by social and digital noise",
      "Anyone who needs to stop talking and just be",
      "People recovering from emotionally draining situations",
      "First-time retreat-goers who are nervous about group dynamics",
      "People in talkative professions — therapists, teachers, managers — who are depleted by constant communication",
      "Anyone who craves solitude but doesn't have a safe or quiet place at home",
      "People who want a retreat experience without the social pressure of group bonding",
    ],
    sampleRetreats: [
      { name: "Noble Silence Weekend", location: "Catskills, NY", price: "$320", nights: "3 nights", tags: ["Silent", "Secular", "Meditation optional"] },
      { name: "The Quiet Farm", location: "Devon, UK", price: "$400", nights: "5 nights", tags: ["Nature", "Solo-friendly", "Meals included"] },
      { name: "Mountain Stillness", location: "Colorado", price: "$550", nights: "5 nights", tags: ["Silent", "Private cabin", "Nature"] },
      { name: "The Hush Retreat", location: "Finger Lakes, NY", price: "$360", nights: "3 nights", tags: ["Lakeside", "Silent", "Meals included"] },
      { name: "Deep Rest in Silence", location: "Alentejo, Portugal", price: "$480", nights: "6 nights", tags: ["Rural", "Warm climate", "Solo-friendly"] },
      { name: "Still Point Retreat", location: "Hokkaido, Japan", price: "$620", nights: "5 nights", tags: ["Forest bathing", "Silent", "Private room"] },
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
      "Loneliness isn't about being alone — it's about not feeling connected. You can be surrounded by people and still feel it. You can have a partner, a job, a social media presence, and still go weeks without a single conversation that touches something real. These retreats create gentle community: shared meals, optional activities, parallel presence. You can be around people without performing. You can belong without auditioning. Nobody here will ask you to be fun, interesting, or 'good with people.' The connections that form in these spaces happen slowly and without pressure — over a quiet meal, on a walk where nobody needs to fill the silence, in a room where everyone is reading and that's enough. You don't have to earn belonging here. You already have it.",
    whatToExpect: [
      "Shared meals with no forced conversation — just presence",
      "Optional group activities — walks, cooking, gardening",
      "Small group sizes — intimate, not overwhelming",
      "Structured enough to feel safe, flexible enough to feel free",
      "Community without cliques or social hierarchies",
      "Follow-up community access after the retreat",
      "Low-pressure icebreakers that don't require you to perform or be clever",
      "Parallel activities — reading, crafting, or walking alongside others without needing to talk",
      "Evening gatherings around a fire or a table — come if you want, skip if you don't",
      "A pace that lets relationships form naturally instead of forcing instant bonding",
    ],
    whoItsFor: [
      "People who feel isolated despite having a 'normal' life",
      "Remote workers who miss human connection",
      "People who've moved and haven't found community yet",
      "Anyone going through a transition — divorce, retirement, loss",
      "People who are tired of superficial socializing",
      "Older adults whose social world has gotten smaller through loss or circumstance",
      "People who struggle with social anxiety but still crave connection",
      "Anyone who has realized that being busy is not the same as being connected",
    ],
    sampleRetreats: [
      { name: "Belonging Weekend", location: "Hudson Valley, NY", price: "$380", nights: "3 nights", tags: ["Community", "Meals together", "Nature"] },
      { name: "The Table Retreat", location: "Provence, France", price: "$620", nights: "5 nights", tags: ["Cooking together", "Small group", "Farm stay"] },
      { name: "Parallel Presence", location: "Maine", price: "$450", nights: "4 nights", tags: ["Coastal", "Art optional", "Solo-friendly"] },
      { name: "The Hearth Retreat", location: "Smoky Mountains, TN", price: "$390", nights: "3 nights", tags: ["Fireside gatherings", "Community meals", "Hiking optional"] },
      { name: "Slow Company", location: "Peloponnese, Greece", price: "$560", nights: "5 nights", tags: ["Mediterranean", "Small group", "Cooking together"] },
      { name: "Common Ground Retreat", location: "Oxfordshire, UK", price: "$480", nights: "4 nights", tags: ["Garden work", "Peer support", "Meals included"] },
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
      "Caregivers are the last people to take a break and the first to need one. You've been so focused on someone else's needs that your own have become background noise — something you'll get to eventually, someday, when things settle down. But they never settle down, and eventually isn't coming on its own. These retreats understand the guilt, the exhaustion, and the identity crisis of stopping. They understand that you might feel selfish for being here. They understand that you'll probably check your phone and worry about what's happening at home. That's okay. You don't need to justify your need for rest. You don't need to feel guilty for being here. You've been pouring from an empty cup, and this is a place where someone finally pours something back. Even if it's just a few days of sleeping through the night and eating a meal you didn't prepare, that matters more than you think.",
    whatToExpect: [
      "Full permission to rest — no guilt, no justification needed",
      "Meals prepared for you — no cooking, no cleaning, no managing",
      "Peer support from other caregivers who get it",
      "Optional workshops on boundaries and sustainability",
      "Respite care referrals if you need coverage back home",
      "Follow-up support and community",
      "Space to talk about compassion fatigue, resentment, and grief without being judged",
      "Bodywork or massage options — someone taking care of your body for once",
      "A 'no decisions' environment — everything is handled so you don't have to manage anything",
      "Help building a realistic self-care plan that works within your actual life constraints",
    ],
    whoItsFor: [
      "Parents — especially single parents and special needs parents",
      "Healthcare workers and nurses",
      "Elder care providers — professional and family",
      "Mental health professionals experiencing compassion fatigue",
      "Teachers and social workers",
      "People caring for a partner or family member with chronic illness",
      "Sandwich generation caregivers — those caring for aging parents and young children simultaneously",
      "Anyone who hasn't had a full day to themselves in months or years",
    ],
    sampleRetreats: [
      { name: "Caregiver Respite Weekend", location: "Blue Ridge, VA", price: "$350", nights: "3 nights", tags: ["Secular", "Women-focused", "Sliding scale"] },
      { name: "The Pause Retreat", location: "Lake District, UK", price: "$520", nights: "5 nights", tags: ["Nature", "Peer support", "Meals included"] },
      { name: "Breathe Again Retreat", location: "Costa Rica", price: "$680", nights: "7 nights", tags: ["Tropical", "Yoga optional", "Community"] },
      { name: "Someone Else's Turn", location: "Sedona, AZ", price: "$440", nights: "4 nights", tags: ["Desert", "Massage included", "Small group"] },
      { name: "Empty Cup Retreat", location: "Prince Edward Island, Canada", price: "$480", nights: "4 nights", tags: ["Coastal", "Peer support", "Meals included"] },
      { name: "The Rest You Earned", location: "Dordogne, France", price: "$620", nights: "6 nights", tags: ["Rural", "Farm-to-table", "Solo-friendly"] },
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
      "Sometimes you don't need a modality. You don't need a program. You don't need a theme or a workshop or a breathing technique. You just need to stop. The modern world has made stopping feel dangerous — like if you pause, everything will fall apart, or worse, you'll have to feel whatever you've been outrunning. These retreats offer the most radical thing in modern life: unscheduled time in a safe, quiet place. There's a bed. There's food. There's a door you can close. That's it. No one will knock and ask if you want to join the group. No one will check on your progress. You don't have a progress. You're just here, and that's the whole point. Some people need three days of nothing before they can even begin to hear themselves think again. This is a place that gives you those three days without asking what you plan to do with them.",
    whatToExpect: [
      "No schedule — wake when you want, rest when you want",
      "A room with a bed, a window, and quiet",
      "Meals prepared for you — simple, nourishing, regular",
      "Nature nearby — walks, gardens, water, sky",
      "Nothing to do — and permission to do nothing",
      "Leave when you want — no minimum stay pressure",
      "No intake forms, no goal-setting, no 'what do you hope to get out of this'",
      "Books, blankets, and a space that feels like someone thought about your comfort",
      "Staff who will leave you alone unless you ask for something",
      "The freedom to change your mind about everything — stay in, go out, eat, skip, sleep, wander",
    ],
    whoItsFor: [
      "Anyone who is simply overwhelmed by life",
      "People who don't identify with any specific 'issue'",
      "People who need to stop before they can figure out what's wrong",
      "Anyone who keeps saying 'I just need a break'",
      "People who are skeptical of retreat culture but need rest",
      "People at a crossroads — between jobs, relationships, or life chapters — who need space to think",
      "Anyone who has been running on autopilot and can feel it catching up to them",
      "People who don't want healing, transformation, or growth — just a pause",
    ],
    sampleRetreats: [
      { name: "The Nothing Retreat", location: "Vermont", price: "$280", nights: "3 nights", tags: ["Unstructured", "Solo", "Nature"] },
      { name: "Cabin & Quiet", location: "Montana", price: "$420", nights: "5 nights", tags: ["Private cabin", "Meals delivered", "Off-grid"] },
      { name: "Simple Stop", location: "Portugal", price: "$380", nights: "4 nights", tags: ["Coastal", "Donation-based", "No program"] },
      { name: "The Blank Page", location: "Northumberland, UK", price: "$350", nights: "4 nights", tags: ["Rural", "Private room", "Meals included"] },
      { name: "Dead Stop Retreat", location: "Upper Peninsula, MI", price: "$300", nights: "3 nights", tags: ["Lakeside", "Cabin", "No WiFi"] },
      { name: "Pause & Be", location: "South Island, New Zealand", price: "$560", nights: "5 nights", tags: ["Mountain views", "Solo", "Self-paced"] },
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
