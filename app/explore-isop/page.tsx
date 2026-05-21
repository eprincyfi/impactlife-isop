"use client";

import { useState } from "react";

export default function ExploreISOP() {

  const [openIsop, setOpenIsop] = useState(false);

  const learningAreas = [
    {
      title: "Prayer & Intimacy",
      text: "Develop a deeper, consistent, and more personal walk with God through prayer, fellowship, and spiritual discipline.",
    },
    {
      title: "The Word & Sound Doctrine",
      text: "Grow in understanding of scripture, biblical truth, and practical application of the Word in daily Christian living.",
    },
    {
      title: "Character Formation",
      text: "Build spiritual maturity, discipline, integrity, humility, holiness, and Christlike character.",
    },
    {
      title: "Spiritual Discipline",
      text: "Learn how to cultivate consistency in prayer, fasting, study, obedience, and consecrated living.",
    },
    {
      title: "Kingdom Leadership",
      text: "Understand leadership through service, wisdom, responsibility, humility, and kingdom influence.",
    },
    {
      title: "Purpose & Calling",
      text: "Gain clarity, direction, and spiritual alignment for your personal walk, calling, and kingdom assignment.",
    },
  ];

  const structure = [
    "3 months transformational discipleship training",
    "Online and onsite sessions available",
    "Weekly teachings, mentorship, and spiritual growth assignments",
    "Prayer, Word study, accountability, and practical spiritual exercises",
    "Guidance for personal growth, discipline, leadership, and kingdom purpose",
  ];

  const experiences = [
    {
      title: "A Culture Of Prayer",
      text: "Participants are encouraged to develop a consistent prayer life and deeper intimacy with God.",
    },
    {
      title: "Sound Teaching",
      text: "The school emphasizes biblical truth, spiritual understanding, and practical Christian living.",
    },
    {
      title: "Mentorship & Accountability",
      text: "Students receive guidance, support, encouragement, and spiritual direction throughout the journey.",
    },
    {
      title: "Community & Growth",
      text: "ISOP creates an atmosphere where believers grow together through learning, discipline, and shared pursuit of God.",
    },
  ];

  return (
    <main className="min-h-screen overflow-hidden bg-[#030712] text-white">

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-white/10 py-28">

        <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/15 via-orange-500/5 to-red-600/10" />

        <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#D4AF37]/20 blur-3xl" />

        <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-orange-600/20 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-6xl px-6 text-center">

          <a
            href="/"
            className="inline-flex rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm font-semibold text-white/70 backdrop-blur-xl transition hover:bg-white hover:text-black"
          >
            ← Back to ISOP Home
          </a>

          <div className="mx-auto max-w-5xl text-center">

            <p className="bg-gradient-to-r from-yellow-300 via-orange-500 to-red-600 bg-clip-text text-5xl font-black uppercase tracking-[0.15em] text-transparent drop-shadow-[0_0_20px_rgba(255,120,0,0.6)] md:text-7xl">
              About ISOP
            </p>

            <div className="mx-auto mt-10 max-w-4xl space-y-7 text-lg leading-relaxed text-white/75">

              <p>
                ImpactLife School of Priesthood (ISOP) is a transformational discipleship and spiritual formation institution dedicated to raising believers who are deeply rooted in God, grounded in scripture, disciplined in prayer, and equipped for kingdom living.
              </p>

              <p>
                Through sound teaching, mentorship, spiritual growth, leadership development, accountability, and practical Christian living, ISOP helps believers grow in intimacy with God, spiritual maturity, character, purpose, and kingdom influence.
              </p>

              <p>
                It is a place where believers are strengthened, refined, equipped, and prepared to live fully for God and impact their generation.
              </p>

            </div>

            <div className="mx-auto mt-14 max-w-4xl rounded-[30px] border border-[#D4AF37]/20 bg-[#D4AF37]/5 p-8 backdrop-blur-xl">

              <p className="text-xl italic leading-relaxed text-[#D4AF37] md:text-2xl">
                “He appointed twelve that they might be with Him and that He might send them out to preach and to have authority to drive out demons.”
              </p>

              <p className="mt-5 text-sm uppercase tracking-[0.3em] text-white/50">
                Mark 3:14–15
              </p>

            </div>

          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="relative py-24">

        <div className="mx-auto max-w-6xl space-y-12 px-6">

          {/* WHY ISOP */}
          <div className="rounded-[36px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl md:p-12">

            <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#D4AF37]">
              1. Why ISOP
            </p>

            <h2 className="mt-6 text-4xl font-black leading-tight text-white md:text-5xl">
              Training believers for intimacy and priesthood
            </h2>

            <p className="mt-8 text-lg leading-relaxed text-white/75">
              In a world where evil and wickedness continue to rise, darkness spreads across nations, and many hearts grow cold, the Lord is still calling His people to arise, shine, and become light in their generation.
            </p>

            {openIsop && (
              <>
                <p className="mt-6 text-lg leading-relaxed text-white/75">
                  In the midst of confusion, compromise, spiritual weakness, and distraction, God is seeking believers who will return to Him wholeheartedly, walk in truth, carry His presence, and live for His purpose.
                </p>

                <p className="mt-6 text-lg leading-relaxed text-white/75">
                  Many believers desire spiritual growth, intimacy with God, deeper understanding of scripture, and kingdom purpose, yet lack the structure, guidance, discipline, and spiritual environment needed for intentional transformation.
                </p>

                <p className="mt-6 text-lg leading-relaxed text-white/75">
                  ImpactLife School of Priesthood (ISOP) was founded as a response to the call of the Lord to raise a people who will come to Him, be with Him, be transformed by Him, and be equipped for kingdom impact.
                </p>

                <p className="mt-6 text-lg leading-relaxed text-white/75">
                  ISOP is not just a class or religious program. It is a structured journey of prayer, the Word, mentorship, accountability, character development, spiritual discipline, and kingdom-centered living.
                </p>
              </>
            )}

            <button
              onClick={() => setOpenIsop(!openIsop)}
              className="mt-8 text-lg font-bold text-[#D4AF37] transition hover:text-orange-400"
            >
              {openIsop ? "Show Less ↑" : "Read More ↓"}
            </button>

          </div>

        </div>
      </section>

    </main>
  );
}