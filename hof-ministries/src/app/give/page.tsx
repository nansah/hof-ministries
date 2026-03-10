const givingOptions = [
  {
    icon: "💻",
    title: "Give Online",
    desc: "The easiest way to give. Use our secure Church Hub to make a one-time donation or set up recurring giving.",
    action: { label: "Give via Church Hub ↗", href: "https://churchy.base44.app", external: true },
  },
  {
    icon: "💵",
    title: "Give in Person",
    desc: "Offering is received every Sunday during our worship service. Giving envelopes are available at the welcome table.",
    action: null,
  },
  {
    icon: "📬",
    title: "Give by Mail",
    desc: "Send a check payable to 'House of Faith Ministries USA Inc.' to our Bronx address. Contact us for mailing details.",
    action: { label: "Contact Us", href: "/contact", external: false },
  },
];

const givingFunds = [
  { icon: "✝️", name: "General Fund", desc: "Supports all church operations, staff, and ministry programs." },
  { icon: "🌍", name: "Community Outreach", desc: "Funds food drives, community events, and local service programs." },
  { icon: "👧", name: "Youth & Children", desc: "Supports our children and youth ministry programs." },
  { icon: "🏗️", name: "Building Fund", desc: "Dedicated to facility improvements and future expansion projects." },
  { icon: "🌏", name: "Missions", desc: "Supports global missions and international evangelism efforts." },
  { icon: "🎓", name: "Scholarship Fund", desc: "Provides educational assistance for members in need." },
];

export default function GivePage() {
  return (
    <div>
      {/* HERO */}
      <section
        className="py-24 px-6 text-center"
        style={{ background: "linear-gradient(135deg, #3b1259 0%, #5c2080 100%)" }}
      >
        <p className="text-sm font-bold uppercase tracking-widest mb-3" style={{ color: "#c9a227" }}>
          Partner With Us
        </p>
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-5">
          Give to House of Faith
        </h1>
        <p className="text-lg max-w-2xl mx-auto" style={{ color: "#e8d5b7" }}>
          Your generosity fuels the mission. Every gift — large or small — makes a lasting
          difference in the Bronx and beyond.
        </p>
        <a
          href="https://churchy.base44.app"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-8 px-8 py-3 rounded-full font-bold transition-all hover:scale-105"
          style={{ background: "#c9a227", color: "#2e0d46" }}
        >
          Give Now via Church Hub ↗
        </a>
      </section>

      {/* SCRIPTURE */}
      <section style={{ background: "#c9a227" }} className="py-5 px-6 text-center">
        <p className="text-base font-semibold italic" style={{ color: "#2e0d46" }}>
          &ldquo;Each of you should give what you have decided in your heart to give, not reluctantly or under compulsion, for God loves a cheerful giver.&rdquo; — 2 Corinthians 9:7
        </p>
      </section>

      {/* WHY GIVE */}
      <section className="py-20 px-6" style={{ background: "#fdf8f2" }}>
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm font-bold uppercase tracking-widest mb-3" style={{ color: "#c9a227" }}>
            Why It Matters
          </p>
          <h2 className="text-3xl font-extrabold mb-6" style={{ color: "#3b1259" }}>
            Your Giving Changes Lives
          </h2>
          <p className="text-base leading-relaxed mb-5" style={{ color: "#5a3e28" }}>
            Giving at House of Faith is an act of worship and a partnership in the Gospel. When
            you give, you are helping us preach the Word, serve the community, support families,
            and reach the next generation with the love of Jesus Christ.
          </p>
          <p className="text-base leading-relaxed" style={{ color: "#5a3e28" }}>
            Every dollar given to House of Faith is stewarded with integrity and used for the
            advancement of God&apos;s Kingdom. As a registered 501(c)(3) nonprofit organization, your
            donations may be tax-deductible.
          </p>
        </div>
      </section>

      {/* HOW TO GIVE */}
      <section className="py-20 px-6" style={{ background: "#e8d5b7" }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm font-bold uppercase tracking-widest mb-2" style={{ color: "#7c5c3e" }}>
              Ways to Give
            </p>
            <h2 className="text-3xl font-extrabold" style={{ color: "#3b1259" }}>
              How to Give
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {givingOptions.map((opt) => (
              <div key={opt.title} className="p-6 rounded-2xl shadow card-hover" style={{ background: "#fdf8f2" }}>
                <span className="text-4xl block mb-4">{opt.icon}</span>
                <h3 className="font-extrabold mb-2 text-lg" style={{ color: "#3b1259" }}>{opt.title}</h3>
                <p className="text-sm leading-relaxed mb-4" style={{ color: "#7c5c3e" }}>{opt.desc}</p>
                {opt.action && (
                  opt.action.external ? (
                    <a
                      href={opt.action.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-sm transition-opacity hover:opacity-80"
                      style={{ color: "#c9a227" }}
                    >
                      {opt.action.label}
                    </a>
                  ) : (
                    <a href={opt.action.href} className="font-bold text-sm transition-opacity hover:opacity-80" style={{ color: "#c9a227" }}>
                      {opt.action.label}
                    </a>
                  )
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GIVING FUNDS */}
      <section className="py-20 px-6" style={{ background: "#fdf8f2" }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm font-bold uppercase tracking-widest mb-2" style={{ color: "#c9a227" }}>
              Designated Giving
            </p>
            <h2 className="text-3xl font-extrabold" style={{ color: "#3b1259" }}>
              Giving Funds
            </h2>
            <p className="text-base mt-3 max-w-xl mx-auto" style={{ color: "#5a3e28" }}>
              You can direct your giving to a specific area of the ministry. Here are the funds available:
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {givingFunds.map((fund) => (
              <div key={fund.name} className="p-5 rounded-xl shadow card-hover" style={{ background: "#ffffff" }}>
                <span className="text-3xl block mb-3">{fund.icon}</span>
                <h3 className="font-bold mb-2" style={{ color: "#3b1259" }}>{fund.name}</h3>
                <p className="text-sm" style={{ color: "#7c5c3e" }}>{fund.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-20 px-6 text-center"
        style={{ background: "linear-gradient(135deg, #3b1259 0%, #5c2080 100%)" }}
      >
        <h2 className="text-3xl font-extrabold text-white mb-5">
          Ready to Give?
        </h2>
        <p className="text-base mb-8 max-w-xl mx-auto" style={{ color: "#e8d5b7" }}>
          Access our secure giving portal through the Church Hub and make your gift today.
          Thank you for your faithfulness and generosity.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="https://churchy.base44.app"
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-4 rounded-full font-bold text-lg shadow-xl transition-all hover:scale-105"
            style={{ background: "#c9a227", color: "#2e0d46" }}
          >
            Give via Church Hub ↗
          </a>
        </div>
        <p className="mt-6 text-xs" style={{ color: "#c4a882" }}>
          House of Faith Ministries USA Inc. is a registered 501(c)(3) nonprofit organization.
          Contributions may be tax-deductible.
        </p>
      </section>
    </div>
  );
}
