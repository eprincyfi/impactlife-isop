"use client";

import { Flame, BookOpen, Crown, ShieldCheck } from "lucide-react";

export default function Home() {
  return (
    <main className="bg-[#030712] text-white overflow-hidden">

      {/* HERO SECTION */}
      <section className="relative min-h-screen overflow-hidden">

        {/* BACKGROUND IMAGE */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1504052434569-70ad5836ab65?q=80&w=2000&auto=format&fit=crop')",
          }}
        />

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/75" />

        {/* GOLD GLOW */}
        <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#D4AF37]/20 blur-3xl" />

        {/* FIRE GLOW */}
        <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-orange-500/20 blur-3xl" />

        {/* NAVBAR */}
        <header className="relative z-20">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">

            <div>
              <h2 className="bg-gradient-to-r from-yellow-300 via-orange-500 to-red-600 bg-clip-text text-2xl font-black text-transparent">
                ISOP
              </h2>

              <p className="text-xs uppercase tracking-[0.3em] text-white/60">
                ImpactLife School of Priesthood
              </p>
            </div>

            <nav className="hidden gap-8 text-sm font-medium text-white/80 md:flex">
              <a href="#about" className="hover:text-[#D4AF37]">
                About
              </a>

              <a href="#training" className="hover:text-[#D4AF37]">
                Training
              </a>

              <a href="#focus" className="hover:text-[#D4AF37]">
                Focus
              </a>

              <a href="#apply" className="hover:text-[#D4AF37]">
                Apply
              </a>
            </nav>
          </div>
        </header>

        {/* HERO CONTENT */}
        <div className="relative z-10 flex min-h-screen items-center">
          <div className="mx-auto max-w-7xl px-6 pb-24 pt-10">

            {/* BADGE */}
            <div className="inline-flex items-center rounded-full border border-[#D4AF37]/20 bg-[#D4AF37]/10 px-6 py-2 backdrop-blur-xl">
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#D4AF37]">
                ImpactLife School of Priesthood (ISOP)
              </p>
            </div>

            {/* TITLE */}
            <h1 className="mt-10 max-w-5xl text-5xl font-black leading-[0.92] tracking-[-0.05em] md:text-8xl">
              Raising Believers
              <br />

              <span className="bg-gradient-to-r from-yellow-300 via-orange-500 to-red-600 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(255,90,0,0.8)]">
                Grounded In Prayer,
              </span>

              <br />

              The Word &
              <span className="bg-gradient-to-r from-[#D4AF37] via-orange-400 to-red-500 bg-clip-text text-transparent">
                {" "}Priesthood.
              </span>
            </h1>

            {/* DESCRIPTION */}
            <p className="mt-10 max-w-3xl text-xl leading-relaxed text-white/75 md:text-2xl">
              A transformational discipleship and spiritual formation institution focused on raising believers grounded in intimacy with God, prayer, character, leadership, the Word, and kingdom purpose.
            </p>

            {/* BUTTONS */}
            <div className="mt-12 flex flex-wrap gap-5">

              <a
                href="YOUR_APPLICATION_LINK"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-gradient-to-r from-[#D4AF37] via-orange-500 to-red-600 px-10 py-5 text-lg font-black text-black shadow-[0_15px_60px_rgba(255,120,0,0.45)] transition duration-300 hover:scale-105"
              >
                🔥 Apply Now
              </a>

              <a
                href="#about"
                className="rounded-full border border-white/15 bg-white/5 px-10 py-5 text-lg font-semibold text-white backdrop-blur-xl transition hover:bg-white hover:text-black"
              >
                Explore ISOP
              </a>
            </div>

            {/* STATS */}
            <div className="mt-20 grid gap-6 md:grid-cols-4">

              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
                <p className="text-sm uppercase tracking-[0.3em] text-[#D4AF37]">
                  Duration
                </p>

                <h3 className="mt-3 text-2xl font-black text-white">
                  3 Months
                </h3>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
                <p className="text-sm uppercase tracking-[0.3em] text-[#D4AF37]">
                  Format
                </p>

                <h3 className="mt-3 text-2xl font-black text-white">
                  Online & Onsite
                </h3>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
                <p className="text-sm uppercase tracking-[0.3em] text-[#D4AF37]">
                  Focus
                </p>

                <h3 className="mt-3 text-2xl font-black text-white">
                  Prayer • Word • Leadership
                </h3>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
                <p className="text-sm uppercase tracking-[0.3em] text-[#D4AF37]">
                  Powered By
                </p>

                <h3 className="mt-3 text-2xl font-black text-white">
                  ImpactLife Foundation
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="relative py-28">
        <div className="mx-auto max-w-7xl px-6">

          <div className="grid items-center gap-16 md:grid-cols-2">

            <div>
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#D4AF37]">
                About ISOP
              </p>

              <h2 className="mt-6 text-5xl font-black leading-tight text-white">
                A Modern School
                <br />
                Of Spiritual Formation.
              </h2>

              <p className="mt-8 text-lg leading-relaxed text-white/70">
                ImpactLife School of Priesthood is a transformational discipleship institution focused on raising believers who carry the life, character, wisdom, discipline, and presence of Jesus Christ.
              </p>

              <p className="mt-6 text-lg leading-relaxed text-white/70">
                Through prayer, sound doctrine, mentorship, spiritual exercises, leadership formation, and kingdom-centered living, students are equipped for spiritual maturity and impactful Christian living.
              </p>
            </div>

            <div className="relative overflow-hidden rounded-[40px] border border-white/10">
              <img
                src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=2000&auto=format&fit=crop"
                alt="Prayer"
                className="h-[600px] w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* FOCUS */}
      <section id="focus" className="relative py-28 bg-[#07111F]">
        <div className="mx-auto max-w-7xl px-6">

          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#D4AF37]">
              What You Will Learn
            </p>

            <h2 className="mt-6 text-5xl font-black leading-tight text-white">
              Spiritual Formation
              <br />
              For Kingdom Living.
            </h2>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2">

            {[
              {
                icon: Flame,
                title: "Prayer & Intimacy",
                text: "Develop a deep and consistent relationship with God.",
              },
              {
                icon: BookOpen,
                title: "The Word",
                text: "Understand scripture deeply and live by truth.",
              },
              {
                icon: Crown,
                title: "Kingdom Leadership",
                text: "Learn leadership through service and spiritual wisdom.",
              },
              {
                icon: ShieldCheck,
                title: "Character Formation",
                text: "Build integrity, discipline, holiness, and maturity.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-[#D4AF37]/30"
              >
                <item.icon className="h-12 w-12 text-[#D4AF37]" />

                <h3 className="mt-8 text-2xl font-black text-white">
                  {item.title}
                </h3>

                <p className="mt-5 leading-relaxed text-white/70">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* APPLY */}
      <section id="apply" className="relative py-32">

        <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37]/10 via-orange-500/10 to-red-600/10" />

        <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">

          <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#D4AF37]">
            ISOP 2ND BATCH 2026
          </p>

          <h2 className="mt-8 text-5xl font-black leading-tight text-white md:text-7xl">
            Applications
            <br />
            Are Now Open.
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-xl leading-relaxed text-white/75">
            Join believers across different locations for a transformational 3-month journey focused on prayer, the Word, leadership, spiritual discipline, and kingdom purpose.
          </p>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-5">

            <a
              href="YOUR_APPLICATION_LINK"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-gradient-to-r from-[#D4AF37] via-orange-500 to-red-600 px-12 py-5 text-lg font-black text-black shadow-[0_20px_60px_rgba(255,120,0,0.45)] transition duration-300 hover:scale-105"
            >
              🔥 Apply Now
            </a>

            <div className="rounded-full border border-white/10 bg-white/5 px-8 py-5 text-white/80 backdrop-blur-xl">
              Online & Onsite Sessions Available
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 py-12">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 text-center md:flex-row md:text-left">

          <div>
            <h3 className="bg-gradient-to-r from-yellow-300 via-orange-500 to-red-600 bg-clip-text text-2xl font-black text-transparent">
              ISOP
            </h3>

            <p className="mt-2 text-white/60">
              ImpactLife School of Priesthood
            </p>
          </div>

          <p className="max-w-xl text-sm leading-relaxed text-white/50">
            “You are a chosen generation, a royal priesthood...” — 1 Peter 2:9
          </p>
        </div>
      </footer>
    </main>
  );
}