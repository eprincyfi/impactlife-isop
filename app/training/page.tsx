export default function TrainingPage() {
  const trainingAreas = [
    {
      title: "Prayer & Intimacy",
      text: "Participants are trained to build consistency in prayer, intimacy with God, worship, spiritual sensitivity, and dependence on the Holy Spirit.",
    },
    {
      title: "The Word & Sound Doctrine",
      text: "Students are equipped with deeper understanding of scripture, biblical truth, sound doctrine, and practical Christian living.",
    },
    {
      title: "Character Formation",
      text: "The training focuses strongly on integrity, holiness, humility, discipline, responsibility, maturity, and Christlike character.",
    },
    {
      title: "Spiritual Discipline",
      text: "Participants are guided through spiritual exercises including prayer, fasting, scripture meditation, study, consecration, and consistency.",
    },
    {
      title: "Kingdom Leadership",
      text: "Students learn leadership through service, wisdom, stewardship, responsibility, and kingdom influence.",
    },
    {
      title: "Purpose & Calling",
      text: "The training helps believers gain clarity, direction, spiritual identity, and alignment with God’s purpose for their lives.",
    },
  ];

  const structure = [
    "3 months transformational discipleship training",
    "Online and onsite learning structure",
    "Weekly teachings and mentorship sessions",
    "Prayer, accountability, and spiritual growth system",
    "Scripture study and practical spiritual exercises",
    "Kingdom leadership and personal development",
  ];

  return (
    <main className="min-h-screen overflow-hidden bg-[#030712] text-white">

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-white/10 py-28">

        <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/15 via-orange-500/5 to-red-600/10" />

        <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#D4AF37]/20 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-6xl px-6 text-center">

          <a
            href="/"
            className="inline-flex rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm font-semibold text-white/70 backdrop-blur-xl transition hover:bg-white hover:text-black"
          >
            ← Back To Home
          </a>

          <p className="mt-10 text-sm font-bold uppercase tracking-[0.35em] text-[#D4AF37]">
            ISOP Training
          </p>

          <h1 className="mt-8 text-5xl font-black leading-[0.95] tracking-[-0.04em] md:text-7xl">
            A Structured Spirit Gym
            <br />
            For Kingdom Impact
        
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-xl leading-relaxed text-white/70">
            A transformational discipleship journey designed to strengthen believers spiritually through prayer, the Word, discipline, mentorship, accountability, and practical Christian living. It is a training environment focused on building intimacy with God, spiritual maturity, kingdom leadership, and believers who will shine as light and make lasting impact in their generation.
          </p>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="relative py-24">

        <div className="mx-auto max-w-6xl space-y-14 px-6">

          

         {/* TRAINING STRUCTURE */}
<div className="rounded-[36px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl md:p-12">

  <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#D4AF37]">
    Training Structure
  </p>

  <h2 className="mt-6 text-4xl font-black leading-tight text-white md:text-5xl">
    Spirit Gym — A Structured Journey Of Spiritual Growth
  </h2>

  <p className="mt-8 max-w-4xl text-lg leading-relaxed text-white/75">
    This training is tagged <span className="font-bold text-[#D4AF37]">“Spirit Gym”</span> — a spiritual environment designed to build believers in intimacy with God, spiritual maturity, discipline, strength, consecration, and kingdom dominion.
  </p>

  {/* TOP GRID */}
  <div className="mt-14 grid gap-8 md:grid-cols-2">

    {/* LEFT */}
    <div className="rounded-[30px] border border-white/10 bg-black/20 p-8">

      <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#D4AF37]">
        Program Structure
      </p>

      <div className="mt-8 space-y-6">

        <div>
          <h3 className="text-2xl font-black text-white">
            Training Duration
          </h3>

          <p className="mt-3 leading-relaxed text-white/70">
            3 months transformational discipleship and spiritual formation training focused on prayer, scripture, discipline, growth, accountability, and kingdom living.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-black text-white">
            Class Days
          </h3>

          <p className="mt-3 leading-relaxed text-white/70">
            Monday, Tuesday, and Wednesday are dedicated to teachings, prayer sessions, spiritual instructions, mentorship, and group interactions.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-black text-white">
            Practicum Days
          </h3>

          <p className="mt-3 leading-relaxed text-white/70">
            Thursday, Friday, and Saturday are focused on practical spiritual exercises including prayer walk, evangelism, Bible reading, personal prayer, and Christian book study.
          </p>
        </div>

      </div>
    </div>

    {/* RIGHT */}
    <div className="rounded-[30px] border border-white/10 bg-black/20 p-8">

      <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#D4AF37]">
        Accountability & Activities
      </p>

      <div className="mt-8 space-y-6">

        <div>
          <h3 className="text-2xl font-black text-white">
            Accountability System
          </h3>

          <p className="mt-3 leading-relaxed text-white/70">
            Participants are guided through accountability systems designed to encourage consistency, discipline, spiritual growth, responsibility, and commitment throughout the training journey.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-black text-white">
            Practical Activities
          </h3>

          <p className="mt-3 leading-relaxed text-white/70">
            Activities include teaching, group prayer, personal prayer, word study, evangelism, prayer walk, group assignments, Christian book reading, and other spiritual development exercises.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-black text-white">
            Spiritual Focus
          </h3>

          <p className="mt-3 leading-relaxed text-white/70">
            The training emphasizes intimacy with God, spiritual discipline, priesthood, leadership development, kingdom influence, maturity, and practical Christian living.
          </p>
        </div>

      </div>
    </div>

  </div>

{/* TRAINING MODES */}
<div className="mt-14">

  <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#D4AF37]">
    Training Modes
  </p>

  <h2 className="mt-6 text-4xl font-black leading-tight text-white md:text-5xl">
    Flexible Learning Options
  </h2>

  <p className="mt-6 max-w-4xl text-lg leading-relaxed text-white/75">
    ISOP currently provides both onsite and online training options to allow believers from different locations participate in the discipleship journey conveniently and effectively.
  </p>

  <div className="mt-12 grid gap-8 md:grid-cols-2">

    {/* ONSITE */}
    <div className="rounded-[30px] border border-[#D4AF37]/20 bg-gradient-to-br from-[#D4AF37]/10 via-orange-500/5 to-red-600/10 p-8">

      <div className="inline-flex rounded-full bg-gradient-to-r from-[#D4AF37] via-orange-500 to-red-600 px-4 py-1 text-sm font-black uppercase tracking-[0.2em] text-white shadow-[0_0_20px_rgba(255,140,0,0.45)]">
        Onsite Training
      </div>

      <h3 className="mt-6 text-3xl font-black text-white">
        Physical Discipleship Experience
      </h3>

      <p className="mt-6 leading-relaxed text-white/75">
        Participants who choose the onsite training option will participate physically in teachings, prayer sessions, mentorship, spiritual exercises, accountability systems, and practical kingdom activities.
      </p>

      <p className="mt-6 leading-relaxed text-white/75">
        At the moment, ISOP does not yet have its own accommodation facilities. Therefore, onsite participants will be responsible for accommodation throughout the training duration.
      </p>

      <div className="mt-8 space-y-4">

        <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
          <p className="text-sm uppercase tracking-[0.2em] text-[#D4AF37]">
            Accommodation Structure
          </p>

          <p className="mt-2 text-lg text-white/75">
            2 participants per room throughout the training period.
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
          <p className="text-sm uppercase tracking-[0.2em] text-[#D4AF37]">
            Accommodation Cost
          </p>

          <p className="mt-2 text-lg text-white/75">
            ₦350,000 or $260 for the entire training duration.
          </p>
        </div>

      </div>

    </div>

    {/* ONLINE */}
    <div className="rounded-[30px] border border-white/10 bg-black/20 p-8">

      <div className="inline-flex rounded-full border border-[#D4AF37]/30 bg-white/5 px-4 py-1 text-sm font-black uppercase tracking-[0.2em] text-[#D4AF37]">
        Online Training
      </div>

      <h3 className="mt-6 text-3xl font-black text-white">
        Remote Learning Experience
      </h3>

      <p className="mt-6 leading-relaxed text-white/75">
        Participants who choose the online training option will fully participate remotely through structured teachings, mentorship, prayer activities, accountability systems, and spiritual assignments.
      </p>

      <p className="mt-6 leading-relaxed text-white/75">
        The online learning structure currently makes use of Zoom, Google Meet, Telegram, and WhatsApp for communication, teachings, mentorship, assignments, and spiritual engagement.
      </p>

      <div className="mt-8 space-y-4">

        <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
          <p className="text-sm uppercase tracking-[0.2em] text-[#D4AF37]">
            Devices Required
          </p>

          <p className="mt-2 text-lg text-white/75">
            Participants are expected to have access to a personal computer, tablet, or smartphone for effective participation.
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
          <p className="text-sm uppercase tracking-[0.2em] text-[#D4AF37]">
            Learning Platforms
          </p>

          <p className="mt-2 text-lg text-white/75">
            Zoom • Google Meet • Telegram • WhatsApp
          </p>
        </div>

      </div>

    </div>

  </div>

</div>

  {/* PHASES */}
  <div className="mt-14 grid gap-8 md:grid-cols-3">

    {/* PHASE 1 */}
    <div className="rounded-[30px] border border-white/10 bg-black/20 p-8 transition hover:border-[#D4AF37]/40 hover:bg-white/10">

      <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#D4AF37]">
        Phase 1
      </p>

      <h3 className="mt-5 text-3xl font-black text-white">
        Foundation
      </h3>

      <p className="mt-6 leading-relaxed text-white/70">
        Building strong spiritual foundations through prayer, intimacy with God, repentance, identity in Christ, and kingdom understanding.
      </p>

    </div>

    {/* PHASE 2 */}
    <div className="rounded-[30px] border border-white/10 bg-black/20 p-8 transition hover:border-[#D4AF37]/40 hover:bg-white/10">

      <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#D4AF37]">
        Phase 2
      </p>

      <h3 className="mt-5 text-3xl font-black text-white">
        Formation
      </h3>

      <p className="mt-6 leading-relaxed text-white/70">
        Developing spiritual discipline, sound doctrine, Christlike character, consecration, consistency, and spiritual maturity.
      </p>

    </div>

    {/* PHASE 3 */}
    <div className="rounded-[30px] border border-white/10 bg-black/20 p-8 transition hover:border-[#D4AF37]/40 hover:bg-white/10">

      <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#D4AF37]">
        Phase 3
      </p>

      <h3 className="mt-5 text-3xl font-black text-white">
        Activation
      </h3>

      <p className="mt-6 leading-relaxed text-white/70">
        Equipping believers for kingdom leadership, spiritual influence, service, ministry responsibility, and impactful Christian living.
      </p>

    </div>

  </div>

</div>

          {/* CORE TRAINING AREAS */}
          <div className="rounded-[36px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl md:p-12">

            <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#D4AF37]">
              Core Training Areas
            </p>

            <h2 className="mt-6 text-4xl font-black leading-tight text-white md:text-5xl">
              What Participants Are Equipped In
            </h2>

            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

              {trainingAreas.map((item) => (
                <div
                  key={item.title}
                  className="rounded-3xl border border-white/10 bg-black/20 p-6 transition hover:border-[#D4AF37]/40 hover:bg-white/10"
                >
                  <h3 className="text-2xl font-black text-white">
                    {item.title}
                  </h3>

                  <p className="mt-5 leading-relaxed text-white/65">
                    {item.text}
                  </p>
                </div>
              ))}

            </div>
          </div>

          {/* EXPECTED OUTCOME */}
          <div className="rounded-[36px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl md:p-12">

            <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#D4AF37]">
              Expected Outcome
            </p>

            <h2 className="mt-6 text-4xl font-black leading-tight text-white md:text-5xl">
              What Participants Become
            </h2>

            <div className="mt-10 grid gap-5 md:grid-cols-2">

              {[
                "Spiritually disciplined believers",
                "Grounded in prayer and scripture",
                "Kingdom-minded leaders",
                "Believers with stronger intimacy with God",
                "More mature and responsible Christians",
                "People equipped for purposeful kingdom living",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-black/20 p-5 text-lg text-white/75"
                >
                  {item}
                </div>
              ))}

            </div>
          </div>

          {/* CTA */}
          <div className="rounded-[40px] border border-[#D4AF37]/20 bg-gradient-to-r from-[#D4AF37]/15 via-orange-500/10 to-red-600/15 p-8 text-center backdrop-blur-xl md:p-12">

            <p className="text-sm font-bold uppercase tracking-[0.35em] text-[#D4AF37]">
              Applications Open
            </p>

            <h2 className="mt-6 text-4xl font-black leading-tight text-white md:text-6xl">
              Join ISOP 2nd Batch 2026
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-white/75">
              Begin your journey of spiritual growth, discipleship, priesthood, and kingdom purpose.
            </p>

            <a
              href="https://forms.gle/Vq4TiBpcpAzjCfZP6"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex rounded-full bg-gradient-to-r from-[#D4AF37] via-orange-500 to-red-600 px-10 py-5 text-lg font-black text-black shadow-[0_20px_60px_rgba(255,120,0,0.45)] transition duration-300 hover:scale-105"
            >
              Apply Now
            </a>
          </div>

        </div>
      </section>
    </main>
  );
}