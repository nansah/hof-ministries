import Link from "next/link";

const quickLinks = [
  { href: "/schedule", icon: "🕊️", label: "Weekly Schedule", desc: "Sunday service, Bible study & more" },
  { href: "/ministries", icon: "✝️", label: "Ministries", desc: "Find your place to grow and serve" },
  { href: "/volunteers", icon: "🤝", label: "Volunteer", desc: "Use your gifts to serve our community" },
  { href: "/leadership", icon: "👑", label: "Our Leadership", desc: "Meet our pastors and leaders" },
  { href: "/give", icon: "💛", label: "Give Online", desc: "Support the work of the ministry" },
];

const highlights = [
  { title: "Sunday Worship", time: "10:00 AM", detail: "Join us every Sunday for powerful praise and worship." },
  { title: "Midweek Bible Study", time: "Wednesdays 7 PM", detail: "Go deeper in the Word with our community." },
  { title: "Prayer Meeting", time: "Fridays 6 PM", detail: "Come together and seek God in prayer." },
];

export default function Home() {
  return (
    <div>
      {/* HERO */}
      <section
        className="relative flex flex-col items-center justify-center text-center px-6 py-28 md:py-40"
        style={{
          background: "linear-gradient(135deg, #3b1259 0%, #5c2080 45%, #2e0d46 100%)",
          minHeight: "80vh",
        }}
      >
        {/* Subtle cross pattern overlay */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg,transparent,transparent 40px,#ffffff 40px,#ffffff 41px),repeating-linear-gradient(90deg,transparent,transparent 40px,#ffffff 40px,#ffffff 41px)",
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-8">
            <img
              src="/images/clive-thibela-ZAq4eTAkGC4-unsplash.jpg"
              alt="House of Faith congregation smiling and worshipping together"
              className="rounded-xl shadow-lg w-full max-w-xs object-cover"
              style={{ maxHeight: 220 }}
            />
            <img
              src="/images/elianna-gill-lWEFK31em2w-unsplash.jpg"
              alt="House of Faith members talking and laughing in the lobby"
              className="rounded-xl shadow-lg w-full max-w-xs object-cover"
              style={{ maxHeight: 220 }}
            />
            <img
              src="/images/john-price-RAZQiZOX3mU-unsplash.jpg"
              alt="House of Faith volunteers serving food and smiling"
              className="rounded-xl shadow-lg w-full max-w-xs object-cover"
              style={{ maxHeight: 220 }}
            />
          </div>
          <p
            className="text-sm font-bold uppercase tracking-[0.3em] mb-4"
            style={{ color: "#c9a227" }}
          >
            {/* ...existing code... */}
            Welcome to
          </p>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight">
            House of Faith
          </h1>
          <p className="text-xl md:text-2xl mb-4 font-light" style={{ color: "#e8d5b7" }}>
            A vibrant, Christ-centered community in the Bronx
          </p>
          <p className="text-base md:text-lg max-w-2xl mx-auto mb-10" style={{ color: "#c4a882" }}>
            Rooted in faith. Grounded in love. Built for community. We invite you to worship, grow,
            and serve alongside us here in the Bronx and beyond.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/schedule"
              className="px-8 py-3 rounded-full font-bold text-base shadow-lg transition-all hover:scale-105"
              style={{ background: "#c9a227", color: "#2e0d46" }}
            >
              Join Us This Sunday
            </Link>
            <a
              href="https://churchy.base44.app"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 rounded-full font-bold text-base border-2 transition-all hover:scale-105"
              style={{ borderColor: "#c9a227", color: "#e8d5b7" }}
            >
              Church Hub ↗
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce" style={{ color: "#c4a882" }}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </section>

      {/* SERVICE TIMES STRIP */}
      <section style={{ background: "#c9a227" }} className="py-4 px-6">
        <div className="max-w-5xl mx-auto flex flex-wrap justify-center items-center gap-6 md:gap-12 text-center">
          {highlights.map((h) => (
            <div key={h.title} className="flex items-center gap-3">
              <div>
                <span className="font-bold text-sm" style={{ color: "#2e0d46" }}>{h.title}</span>
                <span className="mx-2" style={{ color: "#5c2080" }}>•</span>
                <span className="text-sm font-semibold" style={{ color: "#3b1259" }}>{h.time}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WELCOME SECTION */}
      <section className="py-20 px-6" style={{ background: "#fdf8f2" }}>
        <div className="max-w-4xl mx-auto text-center">
            <p className="text-sm font-bold uppercase tracking-widest mb-3" style={{ color: "#c9a227" }}>
              Who We Are
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-6" style={{ color: "#3b1259" }}>
              You Belong Here
            </h2>
            <p className="text-lg leading-relaxed mb-6" style={{ color: "#5a3e28" }}>
              At House of Faith, you’ll find hugs, laughter, and real friendships. We celebrate birthdays, support each other through tough times, and cheer for every victory — big or small. Our church is a mosaic of cultures, ages, and stories, united by God’s love.
            </p>
            <div className="grid md:grid-cols-2 gap-8 mt-10">
              <div className="bg-white rounded-lg shadow p-6 text-left">
                <p className="italic mb-2" style={{ color: "#3b1259" }}>
                  “When I first came to House of Faith, I was nervous and didn’t know anyone. But from the moment I walked in, people greeted me by name and made me feel at home. Now, this is my family.”
                </p>
                <span className="block font-semibold" style={{ color: "#c9a227" }}>– Maria, member since 2022</span>
              </div>
              <div className="bg-white rounded-lg shadow p-6 text-left">
                <p className="italic mb-2" style={{ color: "#3b1259" }}>
                  “I love how everyone looks out for each other. If you need prayer, a meal, or just someone to talk to, there’s always someone here for you.”
                </p>
                <span className="block font-semibold" style={{ color: "#c9a227" }}>– James, youth leader</span>
              </div>
            </div>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link
                href="/about"
                className="px-6 py-3 rounded-full font-semibold transition-all hover:opacity-90"
                style={{ background: "#3b1259", color: "#e8d5b7" }}
              >
                Learn More
              </Link>
              <Link
                href="/ministries"
                className="px-6 py-3 rounded-full font-semibold transition-all hover:opacity-90"
                style={{ background: "#c9a227", color: "#2e0d46" }}
              >
                Explore Ministries
              </Link>
            </div>
        </div>
      </section>

      {/* QUICK LINKS GRID */}
      <section className="py-20 px-6" style={{ background: "#e8d5b7" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm font-bold uppercase tracking-widest mb-2" style={{ color: "#7c5c3e" }}>
              Explore
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold" style={{ color: "#3b1259" }}>
              Everything at House of Faith
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {quickLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group p-6 rounded-2xl shadow-md card-hover flex flex-col gap-3"
                style={{ background: "#fdf8f2" }}
              >
                <span className="text-4xl">{item.icon}</span>
                <h3 className="text-lg font-bold" style={{ color: "#3b1259" }}>
                  {item.label}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#7c5c3e" }}>
                  {item.desc}
                </p>
                <span
                  className="text-sm font-semibold mt-auto group-hover:translate-x-1 transition-transform inline-block"
                  style={{ color: "#c9a227" }}
                >
                  Learn more →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CHURCH HUB CALLOUT */}
      <section
        className="py-20 px-6"
        style={{ background: "linear-gradient(135deg, #3b1259 0%, #5c2080 100%)" }}
      >
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-sm font-bold uppercase tracking-widest mb-3" style={{ color: "#c9a227" }}>
            Stay Connected
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-5">
            Access the Church Hub
          </h2>
          <p className="text-lg mb-8" style={{ color: "#e8d5b7" }}>
            Our Church Hub is your digital home for giving, announcements, member resources, and
            staying connected with everything happening at House of Faith — all in one place.
          </p>
          <a
            href="https://churchy.base44.app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-4 rounded-full font-bold text-lg shadow-xl transition-all hover:scale-105"
            style={{ background: "#c9a227", color: "#2e0d46" }}
          >
            Go to Church Hub ↗
          </a>
        </div>
      </section>

      {/* SCRIPTURE */}
      <section className="py-16 px-6" style={{ background: "#fdf8f2" }}>
        <div className="max-w-3xl mx-auto text-center">
          <blockquote className="text-2xl md:text-3xl font-bold italic leading-relaxed mb-4" style={{ color: "#3b1259" }}>
            &ldquo;For I know the plans I have for you, declares the Lord — plans to prosper you and
            not to harm you, plans to give you hope and a future.&rdquo;
          </blockquote>
          <p className="text-base font-semibold" style={{ color: "#c9a227" }}>
            — Jeremiah 29:11
          </p>
        </div>
      </section>
    </div>
  );
}
