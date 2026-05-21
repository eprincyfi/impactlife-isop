"use client";

import { useState } from "react";
import {
  Flame,
  BookOpen,
  Crown,
  ShieldCheck,
  MapPin,
  Mail,
  Phone,
} from "lucide-react";

export default function Home() {

  const [openAbout, setOpenAbout] = useState(false);
  const [openWhy, setOpenWhy] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showPopup, setShowPopup] = useState(true);
const handleMouseMove = (
  e: React.MouseEvent<HTMLDivElement>
) => {
  if (e.buttons !== 1) return;

  e.currentTarget.scrollLeft -= e.movementX;
};

  const testimonials = [
    {
      image: "/test1.jpg",
      name: "David O.",
      text: "ISOP transformed my prayer life and consistency in the Word.",
    },

    {
      image: "/test2.jpg",
      name: "Sarah M.",
      text: "I developed deeper intimacy with God and spiritual discipline.",
    },

    {
      image: "/test3.jpg",
      name: "Daniel A.",
      text: "The teachings and mentorship transformed my spiritual life.",
    },

    {
      image: "/test4.jpg",
      name: "Grace E.",
      text: "ISOP strengthened my understanding of priesthood and purpose.",
    },

    {
      image: "/test5.jpg",
      name: "Michael T.",
      text: "My consistency in prayer and Bible study improved greatly.",
    },

    {
      image: "/test6.jpg",
      name: "Esther K.",
      text: "This training deepened my walk with God tremendously.",
    },

    {
      image: "/test7.jpg",
      name: "Joshua A.",
      text: "I became spiritually grounded through accountability and prayer.",
    },

    {
      image: "/test8.jpg",
      name: "Ruth M.",
      text: "The teachings gave me clarity, maturity, and spiritual hunger.",
    },
  ];

  return (
    <main className="bg-[#030712] text-white overflow-hidden">
{/* ================= POPUP ================= */}

{showPopup && (
  <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/75 px-4 backdrop-blur-md">

    {/* POPUP BOX */}
    <div className="relative w-full max-w-2xl overflow-hidden rounded-[34px] border border-white/10 bg-[#020B1D] shadow-[0_25px_80px_rgba(0,0,0,0.75)]">

      {/* BACKGROUND GLOW */}
      <div className="absolute right-[-120px] top-[-120px] h-[260px] w-[260px] rounded-full bg-orange-500/20 blur-3xl" />

      {/* CLOSE BUTTON */}
      <button
        onClick={() => setShowPopup(false)}
        className="absolute right-5 top-5 z-20 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-2xl font-bold text-white/70 backdrop-blur-xl transition duration-300 hover:bg-white hover:text-black"
      >
        ×
      </button>

      {/* CONTENT */}
      <div className="relative z-10 p-7 md:p-8">

        {/* TITLE */}
        <h2 className="max-w-xl text-4xl font-black leading-[1.05] tracking-[-0.03em] md:text-5xl">

          <span className="bg-gradient-to-r from-yellow-300 via-orange-500 to-red-600 bg-clip-text text-transparent">
            ImpactLife School of
          </span>

          <span className="mt-1 block bg-gradient-to-r from-orange-500 via-red-500 to-red-700 bg-clip-text text-transparent">
            Priesthood
          </span>

        </h2>

        {/* SUBTITLE */}
        <p className="mt-4 text-xs font-black uppercase tracking-[0.35em] text-[#D4AF37]">
          2nd Batch 2026
        </p>

        {/* DESCRIPTION */}
        <p className="mt-6 text-base leading-relaxed text-white/75">

          Applications are now open for the ImpactLife School of
          Priesthood. A 3-month transformational discipleship journey
          focused on raising believers who carry the life, character,
          presence, and lifestyle of Jesus Christ.

          <br />
          <br />

          Through teachings, mentorship, prayer, the Word, and practical
          spiritual development, participants will be equipped for deeper
          intimacy with God, spiritual growth, Christ-like character,
          and kingdom purpose.

        </p>

        {/* INFO BOXES */}
        <div className="mt-7 grid gap-4 md:grid-cols-2">

          {/* APPLICATION */}
          <div className="rounded-[22px] border border-white/10 bg-white/5 p-5 backdrop-blur-xl">

            <p className="text-xs font-black uppercase tracking-[0.25em] text-[#D4AF37]">
              Application
            </p>

            <h3 className="mt-3 text-2xl font-black text-white">
              27 May – 10 June
            </h3>

          </div>

          {/* FEE */}
          <div className="rounded-[22px] border border-white/10 bg-white/5 p-5 backdrop-blur-xl">

            <p className="text-xs font-black uppercase tracking-[0.25em] text-[#D4AF37]">
              Fee
            </p>

            <h3 className="mt-3 text-2xl font-black text-[#00FF95]">
              FREE
            </h3>

          </div>

        </div>

        {/* TRAINING BAR */}
        <div className="mt-4 rounded-[20px] border border-[#D4AF37]/20 bg-[#D4AF37]/5 px-5 py-4 text-center backdrop-blur-xl">

          <p className="text-lg font-bold text-[#D4AF37]">
            Online & onsite training available
          </p>

        </div>

        {/* BUTTONS */}
        <div className="mt-6 flex flex-wrap gap-4">

          <a
            href="https://forms.gle/Vq4TiBpcpAzjCfZP6"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-[#D4AF37] px-8 py-4 text-base font-black text-black transition duration-300 hover:scale-105"
          >
            APPLY NOW
          </a>

          <button
            onClick={() => setShowPopup(false)}
            className="rounded-full border border-white/10 bg-white/5 px-8 py-4 text-base font-bold text-white/80 backdrop-blur-xl transition duration-300 hover:bg-white hover:text-black"
          >
            Maybe Later
          </button>

        </div>

      </div>

    </div>

  </div>
)}

      {/* HERO */}
<section className="relative overflow-hidden bg-[#030712]">

  {/* BACKGROUND IMAGE */}
  <div
    className="absolute inset-0 bg-cover bg-center"
    style={{
      backgroundImage:
        "url('https://images.unsplash.com/photo-1504052434569-70ad5836ab65?q=80&w=2000&auto=format&fit=crop')",
    }}
  />

  {/* DARK OVERLAY */}
  <div className="absolute inset-0 bg-black/80" />

  {/* GOLD GLOW */}
  <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#D4AF37]/10 blur-3xl" />

  {/* NAVBAR */}
  <header className="relative z-30 border-b border-white/10 bg-black/20 backdrop-blur-md">

    <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

      {/* LOGO */}
      <div>

        <h2 className="bg-gradient-to-r from-yellow-300 via-orange-500 to-red-600 bg-clip-text text-2xl font-black text-transparent">
          ISOP
        </h2>

        <p className="text-[10px] uppercase tracking-[0.3em] text-white/50">
          School of Priesthood
        </p>

      </div>

      <nav className="hidden items-center gap-8 text-sm font-medium text-white/80 md:flex">

  <a
    href="#about"
    className="transition hover:text-[#D4AF37]"
  >
    About
  </a>

  <a
    href="/training"
    className="transition hover:text-[#D4AF37]"
  >
    Training
  </a>

  <a
    href="#focus"
    className="transition hover:text-[#D4AF37]"
  >
    Focus
  </a>

  <a
    href="#testimonies"
    className="transition hover:text-[#D4AF37]"
  >
    Testimonies
  </a>

  <a
    href="#apply"
    className="transition hover:text-[#D4AF37]"
  >
    Apply
  </a>

</nav>

    </div>

  </header>

  {/* HERO CONTENT */}
  <div className="relative z-20">

    <div className="mx-auto grid min-h-screen max-w-7xl items-center gap-20 px-6 py-20 lg:grid-cols-[1.05fr_0.95fr]">

      {/* LEFT */}
      <div className="max-w-2xl">

        {/* BADGE */}
        <div className="inline-flex items-center rounded-full border border-[#D4AF37]/20 bg-[#D4AF37]/10 px-5 py-3 backdrop-blur-xl">

          <p className="text-xs font-bold uppercase tracking-[0.35em] text-[#D4AF37]">
            Welcome to ImpactLife School of Priesthood
          </p>

        </div>

        {/* TITLE */}
        <h1 className="mt-10 text-4xl font-black leading-[1] tracking-[-0.04em] md:text-6xl xl:text-7xl">

  {/* WHITE TEXT */}
<span className="block text-white">
  Raising Believers
</span>

<span className="mt-1 block text-white">
  Grounded In
</span>

{/* FIRE TEXT */}
<span
  className="
    mt-2 block
    bg-gradient-to-r
    from-yellow-300
    via-orange-500
    to-red-600
    bg-clip-text
    text-transparent
    drop-shadow-[0_0_10px_rgba(255,120,0,0.30)]
  "
>
  Prayer,
</span>

<span
  className="
    mt-1 block
    bg-gradient-to-r
    from-yellow-300
    via-orange-500
    to-red-600
    bg-clip-text
    text-transparent
    drop-shadow-[0_0_10px_rgba(255,120,0,0.30)]
  "
>
  The Word &
</span>

<span
  className="
    mt-1 block
    bg-gradient-to-r
    from-yellow-300
    via-orange-500
    to-red-700
    bg-clip-text
    text-transparent
    drop-shadow-[0_0_12px_rgba(255,80,0,0.35)]
  "
>
  Priesthood
</span>

</h1>

        {/* DESCRIPTION */}
        <p className="mt-8 max-w-xl text-lg leading-relaxed text-white/70 md:text-xl">

          We are a transformational discipleship institution focused on raising believers grounded in intimacy with God, prayer, leadership, the Word, and kingdom purpose.

        </p>

        {/* BUTTONS */}
        <div className="mt-10 flex flex-wrap gap-4">

          <a
  href="https://forms.gle/Vq4TiBpcpAzjCfZP6"
  target="_blank"
  rel="noopener noreferrer"
  className="rounded-full bg-gradient-to-r from-[#D4AF37] via-orange-500 to-red-600 px-10 py-5 text-lg font-black text-black shadow-[0_15px_40px_rgba(255,120,0,0.35)] transition duration-300 hover:scale-105"
>
  Apply Now
</a>

         <a
  href="/explore-isop"
  className="rounded-full border border-white/15 bg-white/5 px-10 py-5 text-lg font-semibold text-white backdrop-blur-xl transition duration-300 hover:bg-white hover:text-black"
>
  Explore ISOP
</a>

        </div>

        {/* STATS */}
        <div className="mt-10 flex flex-wrap gap-4">

          <div className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur-xl">

            <p className="text-[10px] uppercase tracking-[0.3em] text-[#D4AF37]">
              Duration
            </p>

            <h3 className="mt-2 text-lg font-black text-white">
              3 & 6 Months
            </h3>

          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur-xl">

            <p className="text-[10px] uppercase tracking-[0.3em] text-[#D4AF37]">
              Format
            </p>

            <h3 className="mt-2 text-lg font-black text-white">
              Online & Onsite
            </h3>

          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur-xl">

            <p className="text-[10px] uppercase tracking-[0.3em] text-[#D4AF37]">
              Focus
            </p>

            <h3 className="mt-2 text-lg font-black text-white">
              Prayer • Word
            </h3>

          </div>

        </div>

      </div>

      {/* RIGHT */}
      <div className="relative hidden lg:block">

        {/* GLOW */}
        <div className="absolute inset-0 rounded-full bg-[#D4AF37]/10 blur-3xl" />

        {/* IMAGE CARD */}
        <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-white/5 shadow-[0_20px_80px_rgba(0,0,0,0.45)] backdrop-blur-xl">

          <img
            src="/priesthood.jpg"
            alt="Prayer"
            className="h-[620px] w-full object-cover"
          />

          {/* IMAGE OVERLAY */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

          {/* FLOATING CARD */}
          <div className="absolute bottom-6 left-6 right-6 rounded-[28px] border border-white/10 bg-black/40 p-6 backdrop-blur-xl">

            <p className="text-xs uppercase tracking-[0.3em] text-[#D4AF37]">
              ISOP 2026
            </p>

            <h3 className="mt-3 text-3xl font-black text-white">
              Raising Burning Priests
            </h3>

            <p className="mt-3 text-base leading-relaxed text-white/70">
              Prayer • Word • Leadership • Spiritual Discipline
            </p>

          </div>

        </div>

      </div>

    </div>

  </div>

</section>

      {/* ABOUT */}
      <section id="about" className="py-28">

        <div className="mx-auto max-w-7xl px-6">

          <div className="grid gap-8 md:grid-cols-2">

            {/* ABOUT */}
            <div className="overflow-hidden rounded-[36px] border border-white/10 bg-[#07111F]">

              <img
                src="/5.jpg"
                alt="Believers"
                className="h-[240px] w-full object-cover"
              />

              <div className="p-8 md:p-10">

                <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#D4AF37]">
                  About ISOP
                </p>

                <h2 className="mt-5 text-3xl font-black text-white md:text-4xl">
                  A Modern School Of Spiritual Formation
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-white/70">
                  ImpactLife School of Priesthood is focused on raising believers who carry the life, wisdom, character, and presence of Jesus Christ.
                </p>

                {openAbout && (
                  <>
                    <p className="mt-5 text-lg leading-relaxed text-white/70">
                      Through prayer, sound doctrine, mentorship, and leadership formation, students are equipped for spiritual maturity and impactful Christian living.
                    </p>
                  </>
                )}

                <button
                  onClick={() => setOpenAbout(!openAbout)}
                  className="mt-8 text-lg font-bold text-[#D4AF37]"
                >
                  {openAbout ? "Show Less ↑" : "Read More ↓"}
                </button>

              </div>

            </div>

            {/* WHY */}
            <div className="overflow-hidden rounded-[36px] border border-white/10 bg-[#07111F]">

              <img
                src="/3.jpeg"
                alt="Discipleship"
                className="h-[240px] w-full object-cover"
              />

              <div className="p-8 md:p-10">

                <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#D4AF37]">
                  Why Discipleship?
                </p>

                <h2 className="mt-5 text-3xl font-black text-white md:text-4xl">
                  Calling believers into deeper intimacy
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-white/75">
                  Discipleship helps believers grow spiritually and fully reflect the life of Christ.
                </p>

                {openWhy && (
                  <>
                    <p className="mt-5 text-lg leading-relaxed text-white/75">
                      Priesthood is the believer’s calling to live close to God, carry His presence, and serve His purposes on earth.
                    </p>
                  </>
                )}

                <button
                  onClick={() => setOpenWhy(!openWhy)}
                  className="mt-8 text-lg font-bold text-[#D4AF37]"
                >
                  {openWhy ? "Show Less ↑" : "Read More ↓"}
                </button>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* FOCUS */}
      <section id="focus" className="bg-[#07111F] py-28">

        <div className="mx-auto max-w-7xl px-6">

          <div className="max-w-3xl">

            <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#D4AF37]">
              What You Will Learn
            </p>

            <h2 className="mt-6 text-5xl font-black text-white">
              Spiritual Formation For Kingdom Living
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
                className="rounded-[32px] border border-white/10 bg-white/5 p-8"
              >

                <item.icon className="h-12 w-12 text-[#D4AF37]" />

                <h3 className="mt-8 text-2xl font-black text-white">
                  {item.title}
                </h3>

                <p className="mt-5 text-white/70">
                  {item.text}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* ========================= TESTIMONIES SECTION ========================= */}

<section
  id="testimonies"
  className="relative overflow-hidden bg-[#040B18] py-20"
>

  {/* BACKGROUND EFFECTS */}
  <div className="absolute left-[-100px] top-[-100px] h-[320px] w-[320px] rounded-full bg-[#D4AF37]/10 blur-3xl" />
  <div className="absolute bottom-[-100px] right-[-100px] h-[320px] w-[320px] rounded-full bg-blue-900/20 blur-3xl" />

  <div className="relative z-10 mx-auto max-w-7xl px-6">

    {/* HEADER */}
    <div className="max-w-4xl">

      <p className="text-sm font-bold uppercase tracking-[0.35em] text-[#D4AF37]">
        TESTIMONIES
      </p>

      <h2 className="mt-4 text-4xl font-black leading-[1.05] text-white md:text-6xl">

        Lives are being{" "}

        <span className="bg-gradient-to-r from-[#D4AF37] via-yellow-300 to-orange-500 bg-clip-text font-serif italic text-transparent">
          transformed.
        </span>

      </h2>

      <div className="mt-5 h-[3px] w-20 rounded-full bg-[#D4AF37]" />

      <p className="mt-5 max-w-3xl text-lg leading-relaxed text-white/70">
        Hear from some ISOP graduates whose prayer life, intimacy with God,
        spiritual discipline, and kingdom understanding have been transformed
        through ISOP.
      </p>

    </div>

    {/* TESTIMONY WRAPPER */}
    <div className="relative mt-12">

      {/* OUTER BOX */}
      <div className="rounded-[32px] border border-[#D4AF37]/25 bg-[#050D1F]/90 p-6 shadow-[0_20px_80px_rgba(0,0,0,0.45)] backdrop-blur-xl">

        {/* TOP BAR */}
        <div className="mb-5 flex items-center justify-between">

          <div className="flex items-center gap-2">

            <div className="h-2.5 w-2.5 rounded-full bg-[#D4AF37]" />
            <div className="h-2.5 w-2.5 rounded-full bg-yellow-500/50" />
            <div className="h-2.5 w-2.5 rounded-full bg-orange-500/30" />

          </div>

          <p className="text-xs font-medium text-[#D4AF37]/80">
            ← Swipe to explore more →
          </p>

        </div>

        {/* SLIDER */}
<div
  className="
    flex gap-5 overflow-x-auto pb-4
    snap-x snap-mandatory
    scroll-smooth
    scrollbar-hide
    cursor-grab
    active:cursor-grabbing
    select-none
  "
  style={{
    WebkitOverflowScrolling: "touch",
  }}
  onMouseDown={(e) => {
    const slider = e.currentTarget;

    slider.style.cursor = "grabbing";

    const startX = e.pageX;
    const scrollLeft = slider.scrollLeft;

    const move = (moveEvent: MouseEvent) => {
      const walk = moveEvent.pageX - startX;
      slider.scrollLeft = scrollLeft - walk;
    };

    const stop = () => {
      slider.style.cursor = "grab";

      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseup", stop);
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseup", stop);
  }}
>

  {testimonials.map((item, index) => (

    <div
  key={index}
  className="
    min-w-[400px]
    max-w-[400px]
    min-h-[300px]
    flex-shrink-0
    snap-start
    rounded-[30px]
    border border-white/10
    bg-gradient-to-b
    from-[#081426]
    to-[#07111F]
    p-6
    transition-all
    duration-300
    hover:-translate-y-2
    hover:border-[#D4AF37]/40
    hover:shadow-[0_10px_40px_rgba(212,175,55,0.12)]
  "
>

      {/* PROFILE */}
<div className="flex items-center gap-4">

  <div className="relative flex-shrink-0">

    <img
      src={item.image}
      alt={item.name}
      className="
        h-16 w-16 rounded-full
        border-2 border-[#D4AF37]/40
        object-cover
      "
    />

    <div className="absolute bottom-0 right-0 h-3 w-3 rounded-full border border-[#07111F] bg-green-500" />

  </div>

  <div className="min-w-0">

    <h3 className="text-2xl font-black leading-tight text-white">
      {item.name}
    </h3>

    <p className="mt-1 text-sm text-[#D4AF37]">
      ISOP Student
    </p>

    <div className="mt-2 flex gap-1 text-xs text-[#D4AF37]">
      <span>★</span>
      <span>★</span>
      <span>★</span>
      <span>★</span>
      <span>★</span>
    </div>

  </div>

</div>

      {/* QUOTE */}
<div className="mt-5">

  <p className="text-5xl leading-none text-[#D4AF37]/60">
    “
  </p>

  <p className="mt-3 text-base leading-relaxed text-white/75">
    {item.text}
  </p>

</div>

      {/* FOOT */}
      <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4">

        <p className="text-xs text-white/40">
          Verified Testimony
        </p>

        <div className="rounded-full border border-[#D4AF37]/20 bg-[#D4AF37]/10 px-3 py-1 text-xs text-[#D4AF37]">
          ISOP
        </div>

      </div>

    </div>

            ))}

        </div>

      </div>

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

          <h2 className="mt-8 text-5xl font-black text-white md:text-7xl">
            Applications Are Now Open
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-xl leading-relaxed text-white/75">
            Join believers across different locations for a transformational journey focused on prayer, leadership, spiritual discipline, and kingdom purpose.
          </p>

          <div className="mt-12">

            <a
              href="https://forms.gle/Vq4TiBpcpAzjCfZP6"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-gradient-to-r from-[#D4AF37] via-orange-500 to-red-600 px-12 py-5 text-lg font-black text-black"
            >
              Apply Now
            </a>

          </div>

        </div>

      </section>

      {/* FOOTER */}
<footer className="relative overflow-hidden border-t border-white/10 bg-[#020816] py-10">

  {/* GLOW */}
  <div className="absolute left-1/2 top-0 h-[180px] w-[180px] -translate-x-1/2 rounded-full bg-[#D4AF37]/10 blur-3xl" />

  <div className="relative z-10 mx-auto max-w-7xl px-6">

    <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr_0.6fr] lg:items-start">

      {/* LEFT */}
      <div>

        <h2 className="bg-gradient-to-r from-yellow-300 via-orange-500 to-red-600 bg-clip-text text-5xl font-black text-transparent">
          ISOP
        </h2>

        <p className="mt-2 text-[11px] uppercase tracking-[0.4em] text-white/40">
          ImpactLife School of Priesthood
        </p>

        <div className="mt-6 max-w-md">

          <p className="text-lg italic leading-relaxed text-white/75">
            “You are a chosen generation, a royal priesthood...”
          </p>

          <p className="mt-3 text-xs uppercase tracking-[0.3em] text-[#D4AF37]">
            — 1 Peter 2:9
          </p>

        </div>

      </div>

      {/* CONTACT */}
      <div>

        <h3 className="text-sm font-bold uppercase tracking-[0.25em] text-[#D4AF37]">
          Contact
        </h3>

        <div className="mt-6 flex flex-col gap-5">

          {/* OFFICE */}
          <div className="flex items-start gap-3">

            <div className="rounded-full border border-[#D4AF37]/20 bg-[#D4AF37]/10 p-2">

              <MapPin className="h-4 w-4 text-[#D4AF37]" />

            </div>

            <div>

              <p className="text-xs uppercase tracking-[0.25em] text-white/35">
                Office
              </p>

              <p className="mt-2 text-sm leading-relaxed text-white/70">
                Suite 4A Priceless Mall, 1st Avenue Gwarinpa,
                Abuja, Nigeria
              </p>

            </div>

          </div>

          {/* EMAIL */}
          <div className="flex items-start gap-3">

            <div className="rounded-full border border-[#D4AF37]/20 bg-[#D4AF37]/10 p-2">

              <Mail className="h-4 w-4 text-[#D4AF37]" />

            </div>

            <div>

              <p className="text-xs uppercase tracking-[0.25em] text-white/35">
                Email
              </p>

              <p className="mt-2 text-sm text-white/70">
                impactlifeglobal@gmail.com
              </p>

            </div>

          </div>

          {/* PHONE */}
          <div className="flex items-start gap-3">

            <div className="rounded-full border border-[#D4AF37]/20 bg-[#D4AF37]/10 p-2">

              <Phone className="h-4 w-4 text-[#D4AF37]" />

            </div>

            <div>

              <p className="text-xs uppercase tracking-[0.25em] text-white/35">
                Phone
              </p>

              <p className="mt-2 text-sm leading-relaxed text-white/70">
                +234 916 287 9100
              
              </p>

            </div>

          </div>

        </div>

      </div>

      {/* CONNECT */}
<div className="lg:justify-self-end">

        <h3 className="text-sm font-bold uppercase tracking-[0.25em] text-[#D4AF37]">
          Connect
        </h3>

        <div className="mt-6 flex flex-col gap-4 text-sm text-white/70">

          <a
            href="#"
            className="transition duration-300 hover:text-[#D4AF37]"
          >
            Telegram
          </a>

          <a
            href="#"
            className="transition duration-300 hover:text-[#D4AF37]"
          >
            WhatsApp
          </a>

          <a
            href="#"
            className="transition duration-300 hover:text-[#D4AF37]"
          >
            Instagram
          </a>

          <a
            href="#"
            className="transition duration-300 hover:text-[#D4AF37]"
          >
            X (Twitter)
          </a>

        </div>

      </div>

    </div>

    {/* BOTTOM */}
    <div className="mt-8 border-t border-white/10 pt-5 text-center">

      <p className="text-xs tracking-[0.15em] text-white/35">
        © 2026 IMPACTLIFE SCHOOL OF PRIESTHOOD
      </p>

    </div>

  </div>

</footer>

    </main>
  );
}