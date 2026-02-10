import type { Metadata } from "next";
import Link from "next/link";
import { heroImages } from "@/lib/images";

export const metadata: Metadata = {
  title: "Honest Retreat Reviews — What Was Hard, What Helped, What Surprised Me",
  description:
    "Real retreat reviews from real people. Not testimonials — honest accounts including what was hard, who it's not for, and what surprised people. Covering burnout, grief, depression, caregiving, work exchange, monastery stays, and more.",
  alternates: { canonical: "https://cheapretreats.com/reviews" },
};

const reviews = [
  {
    name: "Sarah M.",
    retreat: "Mountain Silence Retreat Center",
    location: "Blue Ridge Mountains, NC",
    need: "Burnout",
    stayed: "4 nights",
    rating: "Would return",
    whatHelped: "The complete absence of a schedule. Nobody expected anything from me. I slept 12 hours the first day and didn't feel guilty about it. The meals appeared at regular times and that was the only structure.",
    whatWasHard: "The second day was brutal. Without distraction, all the anxiety I'd been outrunning caught up. I cried in my room for two hours. But nobody knocked on my door or tried to fix it.",
    whoItsNotFor: "If you need a lot of social interaction to feel safe, this might feel isolating. It's very quiet. That's the point, but it's not for everyone.",
    whatSurprised: "How quickly my body started sleeping normally once I stopped looking at screens. By day three I was falling asleep at 9pm and waking up with the light.",
    wishIdKnown: "Bring a flashlight. The paths aren't well-lit at night.",
  },
  {
    name: "James R.",
    retreat: "Plum Village Practice Center",
    location: "Dordogne, France",
    need: "Grief",
    stayed: "7 nights",
    rating: "Life-changing (genuinely)",
    whatHelped: "Eating in silence with 200 other people and realizing I wasn't alone. The walking meditation. The monks' complete lack of urgency about anything.",
    whatWasHard: "The communal living. Shared rooms with strangers. The 5:30am wake-up bell. The food was simple and sometimes repetitive. I missed coffee (they don't serve it).",
    whoItsNotFor: "People who need privacy. People who aren't open to Buddhist-inspired practices (though nothing is forced). People who need caffeine to function.",
    whatSurprised: "That the working meditation — washing dishes, cleaning toilets — was where I cried the most. Something about doing simple physical tasks broke something open.",
    wishIdKnown: "Bring layers. The meditation hall is cold in the morning. And the donation at the end is genuinely voluntary — don't stress about it.",
  },
  {
    name: "Kim L.",
    retreat: "Esalen Work-Scholar Program",
    location: "Big Sur, CA",
    need: "Career transition / burnout",
    stayed: "28 nights",
    rating: "Transformative but demanding",
    whatHelped: "The hot springs at 2am with nobody around. The community of other work-scholars who were all going through their own transitions. Getting physically tired from honest work.",
    whatWasHard: "The work is real. Dishwashing for 5 hours is not glamorous. Some of the workshops available to scholars were incredible; others felt like expensive wellness theater. The social dynamics could be cliquey.",
    whoItsNotFor: "People who can't do physical work. People who need immediate mental health support — this is a growth experience, not a treatment program. People who are uncomfortable with nudity (the hot springs are clothing-optional).",
    whatSurprised: "That I didn't miss my phone after the first week. That the hardest part wasn't the work — it was sitting with myself during the free time.",
    wishIdKnown: "Apply 6+ months early. Bring work clothes that can get dirty. The food is incredible but the schedule is strict.",
  },
  {
    name: "Andrea T.",
    retreat: "Gaia House",
    location: "Devon, England",
    need: "Anxiety / overwhelm",
    stayed: "5 nights",
    rating: "Deeply restful",
    whatHelped: "The teachers were warm without being performative. The bell that rang to bring you back to the present. The gardens. The permission to skip any session.",
    whatWasHard: "Sitting meditation for 45 minutes when my body wanted to run. The noble silence felt lonely at first. I had a low-level headache for two days (probably screen withdrawal).",
    whoItsNotFor: "People who need constant activity or stimulation. People who would find Buddhist chanting uncomfortable (it's a small part of the schedule). People with significant mobility issues — the center has stairs.",
    whatSurprised: "How much my body hurt from just sitting still. I didn't realize how tense I was until I stopped moving.",
    wishIdKnown: "The donation model means you genuinely pay what you can. I was anxious about this but they made it completely pressure-free. Bring comfortable sitting cushion covers.",
  },
  {
    name: "Marcus D.",
    retreat: "The Nothing Retreat",
    location: "Vermont",
    need: "I just needed to stop",
    stayed: "3 nights",
    rating: "Exactly what I needed",
    whatHelped: "Nothing. Literally nothing. There was no program, no facilitator, no group. Just a cabin, meals, and woods. I did absolutely nothing for three days and it was the most healing thing I've done in years.",
    whatWasHard: "The boredom. The first afternoon I almost left because I didn't know what to do with myself. I'm so conditioned to be productive that doing nothing felt physically uncomfortable.",
    whoItsNotFor: "People who need structure or guidance. People in acute crisis who need professional support. People who expect a 'retreat experience' — this is intentionally nothing.",
    whatSurprised: "That by day two, the boredom transformed into peace. My brain literally quieted down. I could hear birds. I could taste food. I didn't even know I'd lost those things.",
    wishIdKnown: "Bring a book but also be okay with not reading it. The cabin is basic — bring an extra blanket in winter.",
  },
  {
    name: "Priya K.",
    retreat: "Safe Ground Retreat",
    location: "Oregon",
    need: "Trauma recovery",
    stayed: "4 nights",
    rating: "Would recommend with caveats",
    whatHelped: "The facilitator explicitly stated 'you can leave any activity at any time, no questions asked' at the start. And they meant it. The somatic exercises were gentle. The group was small (8 people).",
    whatWasHard: "One participant shared something very intense during a circle and it triggered several of us. The facilitator handled it well but it was still hard. Some of the practices brought up body memories I wasn't expecting.",
    whoItsNotFor: "People who haven't done any therapeutic work on their trauma yet — this is a supplement, not a replacement. People who are easily triggered by others' trauma stories (group sharing is optional but happens).",
    whatSurprised: "That the most healing part was not the formal sessions but the informal conversations over tea with other participants who just... got it. No explaining needed.",
    wishIdKnown: "Bring grounding objects from home — a familiar blanket, a photo, something that smells like home. You might need them.",
  },
  {
    name: "Diane W.",
    retreat: "Stillwater Respite House",
    location: "Asheville, NC",
    need: "Caregiver exhaustion",
    stayed: "5 nights",
    rating: "I didn't realize how depleted I was",
    whatHelped: "Being taken care of for the first time in years. Someone else cooked. Someone else cleaned. I didn't have to monitor anyone, manage anyone's medication schedule, or sleep with one ear open. The first morning I woke up without an alarm and just lay there for an hour. I had forgotten what that felt like. The staff understood caregiver fatigue specifically — they didn't treat me like I was on vacation, they treated me like I was recovering.",
    whatWasHard: "The guilt. I felt guilty every single day for being there while my mother was in respite care at home. I called my sister on day two to make sure everything was okay and almost drove back. The other hard part was how emotional I got during meals — eating a warm meal that someone else prepared without rushing felt overwhelming in a way I can't fully explain.",
    whoItsNotFor: "Caregivers who aren't able to arrange reliable backup care — the worry will follow you. People looking for a clinical intervention for compassion fatigue. This is rest, not treatment. Also, if you can't tolerate other people's caregiver stories, the optional group sharing might be difficult.",
    whatSurprised: "How much anger came up alongside the exhaustion. I didn't just feel tired — I felt resentful, which I hadn't let myself acknowledge. By day four, the anger softened into grief, which was somehow easier to carry. Also surprised by how many other caregivers were there. I thought I was the only one falling apart.",
    wishIdKnown: "Arrange your backup care for two days longer than you think you need. Coming home the day after the retreat ends is too abrupt. Give yourself a buffer day. Also, the center has a lending library of caregiver memoirs that was surprisingly comforting.",
  },
  {
    name: "Tom H.",
    retreat: "Tassajara Zen Mountain Center — Work Practice",
    location: "Carmel Valley, CA",
    need: "Wanted to get out of my head",
    stayed: "14 nights",
    rating: "Hard but honest",
    whatHelped: "The rhythm. Wake up, work, eat, sit, sleep. Chopping vegetables for three hours straight shut my brain off in a way that no meditation app ever could. The head cook was a former corporate lawyer who had been there for six years — his calm was contagious. Working alongside the residents blurred the line between guest and community, which made it feel less like a program and more like a life.",
    whatWasHard: "The 4:40am wake-up is real and it does not get easier. My back hurt from the physical work for the entire first week. The accommodations are extremely basic — shared cabins, no electricity in some, outdoor toilets. There were moments I felt like unpaid labor rather than a retreat participant, especially during a long kitchen shift when I was exhausted. The Zen schedule is strict and some of the formality felt rigid rather than freeing.",
    whoItsNotFor: "People who need comfort or luxury in any form. People who cannot handle very early mornings sustained over two weeks. People with back or joint issues — the work is physical and the sitting is on the floor. Anyone who is resistant to Zen Buddhist forms (bowing, chanting, specific meal etiquette) — they are not optional during practice periods.",
    whatSurprised: "How quickly I stopped thinking about my regular life. By day five, my job, my apartment, my social media — all of it felt like it belonged to someone else. Also surprised that the hardest workers in the kitchen were often the happiest people I met. There seems to be something about voluntary, purposeful physical labor that rewires your relationship to effort.",
    wishIdKnown: "Bring moleskin for blisters and ibuprofen for the first week. The general store has almost nothing. Download maps to your phone before you arrive — there is no cell service in the valley. Apply for a work practice period specifically, not a guest stay, if you want the real experience. And be honest on the application about your physical fitness.",
  },
  {
    name: "Laura S.",
    retreat: "Windcall Residency Program",
    location: "Montana",
    need: "Depression / reconnection with myself",
    stayed: "10 nights",
    rating: "Slow and necessary",
    whatHelped: "Being in nature without any obligation to do anything with it. No guided hikes, no forest bathing workshops, no journaling prompts about 'what the river teaches you.' Just mountains and sky and the option to walk out the door or not. On the days I couldn't get out of bed until noon, nobody checked on me with concerned faces. On the days I walked for five hours along the creek, nobody applauded. The neutrality of the space let me find my own pace for the first time in months.",
    whatWasHard: "Days three through five were the worst of my depression, not the best. Removing all structure and stimulation meant the full weight of what I was feeling landed without cushion. I lay in bed and stared at the ceiling and genuinely wondered if I had made a terrible mistake. There was no facilitator, no therapist, no group — just me. That is both the point and the risk. I also struggled with eating regularly. When nobody else sets mealtimes, it's easy to skip meals when you're depressed.",
    whoItsNotFor: "People in acute suicidal crisis — this level of isolation without clinical support is not safe if you are at that point. People who need external structure to function. People who expect nature to cure their depression — it will not. It can hold space for it, but that is different from fixing it. Also not for people who are uncomfortable being truly alone for extended periods.",
    whatSurprised: "That the turnaround, when it came on day six, was not dramatic. I didn't have a breakthrough or a crying release or an epiphany. I just woke up and the weight was slightly less. I made coffee and stood outside and thought, 'I can feel the cold air on my face.' That was it. That tiny flicker of sensory presence after months of numbness was worth the entire trip.",
    wishIdKnown: "Bring easy-to-prepare food you actually enjoy, even if it's comfort food. Depression makes cooking feel impossible, so having things you can eat without effort matters. Tell someone your exact location and check-in schedule before you go. Bring a journal but do not pressure yourself to write in it. And know that it is completely normal for things to get harder before they get easier.",
  },
  {
    name: "Nadia J.",
    retreat: "Open Sky Wellness Retreat",
    location: "New Mexico",
    need: "First retreat ever / general life overwhelm",
    stayed: "3 nights",
    rating: "Glad I went, despite the terror",
    whatHelped: "The welcome orientation on the first evening where the facilitator said, 'Half of you are wondering why you came. That is completely normal.' I almost cried with relief. The small group size (twelve people) and the fact that sharing was always optional. The daily schedule had enough structure that I never felt lost, but enough free time that I never felt trapped. Meeting two other first-timers at lunch on day one and realizing we were all equally terrified made everything easier.",
    whatWasHard: "The drive there. I almost turned around three times. I sat in the parking lot for twenty minutes before walking in. The first night I barely slept because the bed was unfamiliar and I could hear someone in the next room and I kept thinking I should just leave at dawn. The group meditation on day two made me feel like a fraud because I couldn't sit still and everyone else looked serene. One of the facilitators later told me that nobody actually feels serene — they are all just sitting with their discomfort quietly.",
    whoItsNotFor: "People who absolutely cannot handle any group interaction — there are communal meals and optional circles that create a gentle social expectation. People who need very specific dietary accommodations (the meals were good but not highly customizable). People expecting a spa experience — the rooms are clean but simple, and the focus is on inner work, not pampering.",
    whatSurprised: "That I did not need to be 'a retreat person' to get something from it. I don't meditate. I don't do yoga. I don't own a single crystal. I went because I was exhausted and someone suggested it and I ran out of reasons to say no. The surprise was that most of the other participants were also just regular, tired people. Not a single person mentioned their chakras.",
    wishIdKnown: "You do not need to pack special clothes. I brought yoga pants and felt ridiculous — most people wore jeans and regular shirts. Bring earplugs if you are a light sleeper. The orientation on the first evening is important — do not skip it, even if you are anxious, because that is where you learn that your anxiety is shared. And it is okay to eat alone. Nobody will judge you for it.",
  },
  {
    name: "Brother Francis (David P.)",
    retreat: "New Camaldoli Hermitage",
    location: "Big Sur, CA",
    need: "Spiritual emptiness / searching",
    stayed: "7 nights",
    rating: "Profound in unexpected ways",
    whatHelped: "The absolute simplicity of the hermitage cell — a bed, a desk, a chair, a cross on the wall, a window overlooking the Pacific. Nothing else. The monks' daily rhythm of prayer at 5:30am, 7:00am, 11:30am, and 5:30pm created a container I didn't know I needed. I am not Catholic and I told them this upfront, and their response was essentially, 'That's fine, come as you are.' Attending the chanted psalms without understanding half the Latin somehow made it more accessible, not less. I felt held by a structure that had existed for centuries and did not need me to perform anything.",
    whatWasHard: "The silence between the prayer hours was immense. Not peaceful immense — confrontational immense. In that much quiet, every unresolved question about my life, my beliefs, my purpose surfaced with uncomfortable clarity. The meals were extremely simple and always the same basic pattern — soup, bread, fruit, cheese. By day four, I was craving variety physically but also realizing how much mental energy I normally spend on food decisions. The hermitage is remote and steep. Walking to the chapel in the dark at 5:15am on an uneven path was genuinely difficult.",
    whoItsNotFor: "People who are uncomfortable in explicitly religious settings — this is a functioning Catholic monastery and the liturgical calendar shapes everything. People who need social interaction — the silence is real and the monks are kind but not chatty. People who need physical comfort — the cells are austere by design. Anyone with mobility challenges should know that the terrain is steep and the paths are rough.",
    whatSurprised: "That I, an agnostic who walked in looking for answers, found peace not in answers but in the rhythm of showing up. The monks don't try to convert you. They don't even try to explain themselves. They just live their pattern and you are invited to witness it. What surprised me most was that the most spiritual moment of the week was not during prayer — it was sitting alone in my cell at dusk watching fog roll in over the ocean and feeling, for the first time in years, that I did not need to be anywhere else.",
    wishIdKnown: "Bring a warm robe or heavy sweater — the hermitage is cold at night and in the early morning. The bookshop is excellent and curated by monks who actually read the books. The suggested donation is genuinely what you can afford. Bring a headlamp for the 5am walk to chapel. And do not go expecting to find God — go expecting to find quiet, and let whatever happens after that happen on its own terms.",
  },
  {
    name: "River C.",
    retreat: "Dandelion Commons Retreat",
    location: "Western Massachusetts",
    need: "Autistic burnout / sensory recovery",
    stayed: "6 nights",
    rating: "The first retreat that actually worked for me",
    whatHelped: "The flexible schedule was posted each morning and everything was optional — not 'optional but you'll get a look if you skip it' optional, but genuinely, actually optional. I skipped the group sessions entirely for the first two days and nobody said a word. The accommodations listed sensory details in advance: lighting type, mattress firmness, noise levels, proximity to common areas. I chose a cabin at the edge of the property and it was exactly as described. Meals had clear ingredient labels including textures, which sounds small but meant I could eat without the anxiety of unexpected food situations. The facilitator was neurodivergent herself and normalized stimming, leaving rooms, wearing headphones, and not making eye contact during conversation.",
    whatWasHard: "The communal kitchen during mealtimes was loud on two occasions — a large group arrived mid-week and the noise level jumped significantly. I ate in my cabin those evenings, which was allowed but felt isolating. One of the guided activities involved partner work and I froze — the facilitator noticed immediately and offered an alternative without making it a scene, but I still felt conspicuous. The written materials for the retreat used a lot of metaphorical language that I found confusing rather than poetic. I spent energy translating it into concrete meaning, which was tiring.",
    whoItsNotFor: "Neurotypical people expecting a standard retreat format — the pacing and structure here are deliberately different and might feel too loose. People who are uncomfortable around visible neurodivergent behaviors like stimming, echolalia, or flat affect. People who need a highly social bonding experience — the social pressure is intentionally low, which means connections form slowly or not at all. Also, the rural location means limited cell service, which some people might find difficult if they rely on their phone for regulation.",
    whatSurprised: "That I could actually rest. Every other retreat I have tried — and I have tried three — was designed for neurotypical nervous systems. The forced group activities, the eye contact expectations, the vague spiritual language, the sensory chaos of shared spaces. This was the first time someone had thought about what rest actually looks like for a brain like mine. I was also surprised by how emotional I got on day five when I realized I had gone an entire day without masking. I did not even know I was still masking that heavily until I stopped.",
    wishIdKnown: "Request the cabin farthest from the main building if you are noise-sensitive — mine was perfect. Bring your own food items for sensory-safe snacking between meals. The welcome packet is long and detailed, which I actually appreciated, but read it in advance so you are not processing new information on arrival day. Ask about the weekly schedule before booking — some weeks have more group programming than others. And bring whatever sensory tools you use at home. They had some available, but your own are always better.",
  },
];

export default function ReviewsPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-b from-warm-100/40 to-warm-50 py-20 md:py-32">
        <img src={heroImages.reviews} alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-warm-50/90 via-warm-50/75 to-warm-50" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold text-sage-900 mb-6 leading-[1.1]">
            Honest Reviews
          </h1>
          <p className="text-lg md:text-xl text-sage-600 leading-relaxed max-w-2xl mx-auto">
            Not testimonials. Not &ldquo;this changed my life&rdquo; fluff. Real
            accounts from real people — including what was hard, who it&rsquo;s not
            for, and what surprised them.
          </p>
        </div>
      </section>

      <section className="py-14 md:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-10">
            {reviews.map((review, i) => (
              <article key={i} className="bg-warm-50/50 rounded-2xl p-6 md:p-8 border border-warm-200/60">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-6 pb-5 border-b border-warm-200/40">
                  <div>
                    <div className="font-serif text-lg font-semibold text-sage-800">{review.name}</div>
                    <div className="text-sage-600 text-sm">{review.retreat}</div>
                    <div className="text-sage-500 text-sm">{review.location}</div>
                  </div>
                  <div className="sm:text-right">
                    <div className="text-sm text-sage-500">Need: <span className="text-sage-700 font-medium">{review.need}</span></div>
                    <div className="text-sm text-sage-500">Stayed: <span className="text-sage-700">{review.stayed}</span></div>
                    <div className="text-sm text-sage-700 font-medium mt-1">{review.rating}</div>
                  </div>
                </div>

                <div className="space-y-5">
                  <div>
                    <h3 className="text-xs font-semibold text-sage-500 uppercase tracking-wider mb-2">What helped</h3>
                    <p className="text-sage-700 text-sm leading-relaxed">{review.whatHelped}</p>
                  </div>
                  <div>
                    <h3 className="text-xs font-semibold text-rose-500 uppercase tracking-wider mb-2">What was hard</h3>
                    <p className="text-sage-700 text-sm leading-relaxed">{review.whatWasHard}</p>
                  </div>
                  <div>
                    <h3 className="text-xs font-semibold text-warm-600 uppercase tracking-wider mb-2">Who it&rsquo;s not for</h3>
                    <p className="text-sage-700 text-sm leading-relaxed">{review.whoItsNotFor}</p>
                  </div>
                  <div>
                    <h3 className="text-xs font-semibold text-sky-600 uppercase tracking-wider mb-2">What surprised me</h3>
                    <p className="text-sage-700 text-sm leading-relaxed">{review.whatSurprised}</p>
                  </div>
                  <div>
                    <h3 className="text-xs font-semibold text-sage-500 uppercase tracking-wider mb-2">What I wish I&rsquo;d known</h3>
                    <p className="text-sage-700 text-sm leading-relaxed">{review.wishIdKnown}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gradient-to-b from-warm-50 to-sage-50/30">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-sage-900 mb-4">
            This is how trust is built.
          </h2>
          <p className="text-sage-600 text-lg leading-relaxed mb-8 max-w-xl mx-auto">
            We ask every reviewer the same five questions. No editing for
            positivity. No cherry-picking.
          </p>
          <Link href="/start-here" className="inline-flex items-center justify-center px-7 py-3.5 bg-sage-600 text-white font-medium rounded-full hover:bg-sage-700 transition-colors">
            Find Your Retreat
          </Link>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "Honest Retreat Reviews",
            description: "Real retreat reviews including what was hard, who it's not for, and what surprised people.",
            url: "https://cheapretreats.com/reviews",
          }),
        }}
      />
    </>
  );
}
