import Link from "next/link";

const prayerLines = [
  {
    icon: "📞",
    name: "Monday Evening Prayer Line",
    day: "Every Monday",
    time: "6:00 PM – 7:00 PM EST",
    desc: "Start your week in prayer. Our Monday prayer line focuses on personal needs, family, healing, and weekly intercession for our congregation and community.",
    how: "Call or dial in using the number provided through the Church Hub.",
    type: "Weekly",
  },
  {
    icon: "🙏",
    name: "Friday Night Intercessory Line",
    day: "Every Friday",
    time: "8:00 PM – 9:00 PM EST",
    desc: "End your week in the presence of God. Friday's line is focused on deep intercessory prayer for the church, the Bronx, the nation, and the world.",
    how: "Call or dial in using the number provided through the Church Hub.",
    type: "Weekly",
  },
  {
    icon: "🌅",
    name: "Morning Prayer (Daily)",
    day: "Monday – Friday",
    time: "6:00 AM – 6:30 AM EST",
    desc: "Start each weekday with focused morning prayer. Our prayer team leads 30 minutes of Scripture reading, declarations, and intercession every morning.",
    how: "Dial-in information available through the Church Hub.",
    type: "Daily",
  },
  {
    icon: "✉️",
    name: "Prayer Request Line",
    day: "Anytime",
    time: "Submit 24/7",
    desc: "Have a specific prayer need? Submit your prayer request online or through the Church Hub and our intercessory prayer team will lift you up in prayer.",
    how: "Submit through the Church Hub or contact us directly.",
    type: "On Demand",
  },
];

const prayerAreas = [
  { icon: "❤️", label: "Healing & Health" },
  { icon: "👨‍👩‍👧", label: "Family & Marriage" },
  { icon: "💼", label: "Career & Finances" },
  { icon: "🧠", label: "Mental & Emotional Wellness" },
  { icon: "✝️", label: "Salvation of Loved Ones" },
  { icon: "🏠", label: "Housing & Provision" },
  { icon: "🌍", label: "Community & Nation" },
  { icon: "🕊️", label: "Peace & Guidance" },
];

export default function PrayerPage() {
  return (
    <div>
      {/* HERO */}
      <section
        className="py-24 px-6 text-center"
        style={{ background: "linear-gradient(135deg, #3b1259 0%, #5c2080 100%)" }}
      >
        <p className="text-sm font-bold uppercase tracking-widest mb-3" style={{ color: "#c9a227" }}>
          Seek God Together
        </p>
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-5">
          Prayer Lines
        </h1>
        <p className="text-lg max-w-2xl mx-auto" style={{ color: "#e8d5b7" }}>
          At House of Faith, we believe prayer is the foundation of everything we do. Join us on
          one of our prayer lines — no matter where you are, you can pray with us.
        </p>
        <a
          href="https://churchy.base44.app"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-8 px-8 py-3 rounded-full font-bold transition-all hover:scale-105"
          style={{ background: "#c9a227", color: "#2e0d46" }}
        >
          Get Dial-in Details on Church Hub ↗
        </a>
      </section>

      {/* SCRIPTURE */}
      <section style={{ background: "#c9a227" }} className="py-5 px-6 text-center">
        <p className="text-base font-semibold italic" style={{ color: "#2e0d46" }}>
          &ldquo;Therefore confess your sins to each other and pray for each other so that you may be healed. The prayer of a righteous person is powerful and effective.&rdquo; — James 5:16
        </p>
      </section>

      {/* PRAYER LINES */}
      <section className="py-20 px-6" style={{ background: "#fdf8f2" }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm font-bold uppercase tracking-widest mb-2" style={{ color: "#c9a227" }}>
              Join Us
            </p>
            <h2 className="text-3xl font-extrabold" style={{ color: "#3b1259" }}>
              Our Prayer Lines
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {prayerLines.map((line) => (
              <div
                key={line.name}
                className="rounded-2xl shadow-md card-hover overflow-hidden"
                style={{ background: "#ffffff" }}
              >
                <div
                  className="p-5 flex items-center gap-4"
                  style={{ background: "linear-gradient(135deg, #3b1259 0%, #5c2080 100%)" }}
                >
                  <span className="text-4xl">{line.icon}</span>
                  <div>
                    <span
                      className="inline-block px-2 py-0.5 rounded-full text-xs font-bold mb-1"
                      style={{ background: "#c9a227", color: "#2e0d46" }}
                    >
                      {line.type}
                    </span>
                    <h3 className="text-white font-extrabold text-base">{line.name}</h3>
                  </div>
                </div>
                <div className="p-5">
                  <div
                    className="flex flex-col sm:flex-row gap-3 mb-4 p-3 rounded-xl"
                    style={{ background: "#faf4e8" }}
                  >
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest mb-0.5" style={{ color: "#7c5c3e" }}>
                        Day
                      </p>
                      <p className="text-sm font-semibold" style={{ color: "#3b1259" }}>{line.day}</p>
                    </div>
                    <div className="sm:border-l sm:pl-3" style={{ borderColor: "#e8d5b7" }}>
                      <p className="text-xs font-bold uppercase tracking-widest mb-0.5" style={{ color: "#7c5c3e" }}>
                        Time
                      </p>
                      <p className="text-sm font-semibold" style={{ color: "#3b1259" }}>{line.time}</p>
                    </div>
                  </div>

                  <p className="text-sm leading-relaxed mb-3" style={{ color: "#5a3e28" }}>
                    {line.desc}
                  </p>
                  <p className="text-xs font-semibold p-3 rounded-lg" style={{ background: "#e8d5b7", color: "#3b1259" }}>
                    📋 {line.how}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW TO JOIN */}
      <section className="py-16 px-6" style={{ background: "#e8d5b7" }}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-sm font-bold uppercase tracking-widest mb-2" style={{ color: "#7c5c3e" }}>
              How to Join
            </p>
            <h2 className="text-3xl font-extrabold" style={{ color: "#3b1259" }}>
              Accessing Our Prayer Lines
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            {[
              {
                step: "1",
                icon: "🔗",
                title: "Visit the Church Hub",
                desc: "All dial-in numbers, access codes, and online links are available on our Church Hub platform.",
                action: { label: "Open Church Hub ↗", href: "https://churchy.base44.app", external: true },
              },
              {
                step: "2",
                icon: "📱",
                title: "Call or Join Online",
                desc: "Use a phone to dial in or join via a video/audio link. Available from anywhere — home, work, or on the go.",
                action: null,
              },
              {
                step: "3",
                icon: "🙏",
                title: "Pray With Us",
                desc: "Join the prayer in real-time or simply listen and be strengthened. All are welcome, no experience required.",
                action: { label: "Submit a Prayer Request", href: "/contact", external: false },
              },
            ].map((item) => (
              <div key={item.step} className="p-6 rounded-2xl shadow" style={{ background: "#fdf8f2" }}>
                <span className="text-4xl block mb-3">{item.icon}</span>
                <h3 className="font-bold mb-2" style={{ color: "#3b1259" }}>{item.title}</h3>
                <p className="text-sm leading-relaxed mb-4" style={{ color: "#7c5c3e" }}>{item.desc}</p>
                {item.action && (
                  item.action.external ? (
                    <a
                      href={item.action.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-bold transition-opacity hover:opacity-80"
                      style={{ color: "#c9a227" }}
                    >
                      {item.action.label}
                    </a>
                  ) : (
                    <Link
                      href={item.action.href}
                      className="text-sm font-bold transition-opacity hover:opacity-80"
                      style={{ color: "#c9a227" }}
                    >
                      {item.action.label}
                    </Link>
                  )
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRAYER AREAS */}
      <section className="py-20 px-6" style={{ background: "#fdf8f2" }}>
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm font-bold uppercase tracking-widest mb-2" style={{ color: "#c9a227" }}>
            We Believe
          </p>
          <h2 className="text-3xl font-extrabold mb-5" style={{ color: "#3b1259" }}>
            We Pray For Everything
          </h2>
          <p className="text-base mb-10" style={{ color: "#5a3e28" }}>
            No prayer request is too big or too small for God. At House of Faith, we cover every
            area of life in prayer. Some of the areas we commonly pray for include:
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {prayerAreas.map((area) => (
              <div
                key={area.label}
                className="p-4 rounded-xl shadow flex flex-col items-center gap-2"
                style={{ background: "#ffffff" }}
              >
                <span className="text-3xl">{area.icon}</span>
                <p className="text-sm font-semibold text-center" style={{ color: "#3b1259" }}>
                  {area.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SUBMIT REQUEST CTA */}
      <section
        className="py-20 px-6 text-center"
        style={{ background: "linear-gradient(135deg, #3b1259 0%, #5c2080 100%)" }}
      >
        <h2 className="text-3xl font-extrabold text-white mb-5">
          Need Prayer?
        </h2>
        <p className="text-base mb-8 max-w-xl mx-auto" style={{ color: "#e8d5b7" }}>
          Submit a prayer request and our intercessory prayer team will stand with you in faith.
          You are not alone — the House of Faith family is here for you.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/contact"
            className="px-8 py-3 rounded-full font-bold shadow-lg transition-all hover:scale-105"
            style={{ background: "#c9a227", color: "#2e0d46" }}
          >
            Submit a Prayer Request
          </Link>
          <a
            href="https://churchy.base44.app"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 rounded-full font-bold border-2 transition-all hover:scale-105"
            style={{ borderColor: "#c9a227", color: "#e8d5b7" }}
          >
            Church Hub ↗
          </a>
        </div>
      </section>
    </div>
  );
}
