import Link from "next/link";

const values = [
  { icon: "📖", title: "Word-Centered", desc: "We are anchored in the truth of the Bible. Every message, ministry, and decision flows from Scripture." },
  { icon: "🙏", title: "Prayer-Driven", desc: "We believe prayer changes things. It is the foundation of everything we do at House of Faith." },
  { icon: "🤝", title: "Community-Focused", desc: "We love our neighbors. House of Faith is deeply committed to serving the Bronx and the greater community." },
  { icon: "🌍", title: "Culturally Inclusive", desc: "We are a diverse, multicultural family that celebrates every background and walks in unity." },
  { icon: "🔥", title: "Spirit-Filled", desc: "We believe in the power of the Holy Spirit and welcome His presence in our worship and daily lives." },
  { icon: "✝️", title: "Christ-Exalting", desc: "Jesus Christ is the center of House of Faith. All we do is to bring glory and honor to His name." },
];

export default function AboutPage() {
  return (
    <div>
      {/* HERO */}
      <section
        className="py-24 px-6 text-center"
        style={{ background: "linear-gradient(135deg, #3b1259 0%, #5c2080 100%)" }}
      >
        <p className="text-sm font-bold uppercase tracking-widest mb-3" style={{ color: "#c9a227" }}>
          Our Story
        </p>
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-5">
          About House of Faith
        </h1>
        <p className="text-lg max-w-2xl mx-auto" style={{ color: "#e8d5b7" }}>
          A Christ-centered church rooted in the Bronx — building faith, family, and community one life at a time.
        </p>
      </section>

      {/* GOLD BAR */}
      <section style={{ background: "#c9a227" }} className="py-5 px-6 text-center">
        <p className="text-base font-semibold italic" style={{ color: "#2e0d46" }}>
          &ldquo;A house of prayer for all nations.&rdquo; — Isaiah 56:7
        </p>
      </section>

      {/* MISSION & VISION */}
      <section className="py-20 px-6" style={{ background: "#fdf8f2" }}>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="p-8 rounded-2xl shadow-md" style={{ background: "#ffffff" }}>
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center text-2xl mb-5"
              style={{ background: "#3b1259", color: "#c9a227" }}
            >
              🎯
            </div>
            <h2 className="text-2xl font-extrabold mb-4" style={{ color: "#3b1259" }}>Our Mission</h2>
            <p className="text-base leading-relaxed" style={{ color: "#5a3e28" }}>
              The mission of House of Faith is to glorify God by making disciples of Jesus Christ,
              equipping believers to walk in their God-given purpose, and serving our community with
              the love and power of the Gospel. We exist to reach the lost, grow the found, and
              send the equipped.
            </p>
          </div>
          <div className="p-8 rounded-2xl shadow-md" style={{ background: "#ffffff" }}>
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center text-2xl mb-5"
              style={{ background: "#3b1259", color: "#c9a227" }}
            >
              🌅
            </div>
            <h2 className="text-2xl font-extrabold mb-4" style={{ color: "#3b1259" }}>Our Vision</h2>
            <p className="text-base leading-relaxed" style={{ color: "#5a3e28" }}>
              We envision a House of Faith that is a transformational force in the Bronx and beyond —
              a thriving spiritual community where every person is known, loved, and empowered to
              impact their family, neighborhood, and the nations for the Kingdom of God.
            </p>
          </div>
        </div>
      </section>

      {/* OUR STORY */}
      <section className="py-20 px-6" style={{ background: "#e8d5b7" }}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-sm font-bold uppercase tracking-widest mb-2" style={{ color: "#7c5c3e" }}>
              Where We Came From
            </p>
            <h2 className="text-3xl font-extrabold" style={{ color: "#3b1259" }}>Our Story</h2>
          </div>
          <div className="p-8 rounded-2xl shadow" style={{ background: "#fdf8f2" }}>
            <p className="text-base leading-relaxed mb-5" style={{ color: "#5a3e28" }}>
              House of Faith was born out of a deep desire to see the Bronx transformed by the
              power of the Gospel. What began as a small gathering of faithful believers has grown
              into a vibrant, multicultural congregation that serves hundreds of families across
              the Bronx and surrounding communities.
            </p>
            <p className="text-base leading-relaxed mb-5" style={{ color: "#5a3e28" }}>
              Through seasons of growth, challenge, and breakthrough, House of Faith has remained
              steadfast in its commitment to God&apos;s Word, authentic worship, and genuine community.
              Our story is one of God&apos;s faithfulness — from our founding to today, He has led,
              provided, and blessed every step of this journey.
            </p>
            <p className="text-base leading-relaxed" style={{ color: "#5a3e28" }}>
              Today, House of Faith Ministries USA Inc. stands as a beacon of hope in the Bronx —
              a place where the hurting find healing, the lost find direction, and every person finds
              a spiritual home. We are honored that God has trusted us with this community, and we
              are committed to honoring that trust for generations to come.
            </p>
          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="py-20 px-6" style={{ background: "#fdf8f2" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm font-bold uppercase tracking-widest mb-2" style={{ color: "#c9a227" }}>
              What Drives Us
            </p>
            <h2 className="text-3xl font-extrabold" style={{ color: "#3b1259" }}>
              Our Core Values
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((val) => (
              <div key={val.title} className="p-6 rounded-2xl shadow card-hover" style={{ background: "#ffffff" }}>
                <span className="text-4xl block mb-3">{val.icon}</span>
                <h3 className="font-extrabold mb-2 text-lg" style={{ color: "#3b1259" }}>{val.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#7c5c3e" }}>{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LEGAL NAME NOTE */}
      <section className="py-10 px-6" style={{ background: "#2c1810" }}>
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-sm" style={{ color: "#c4a882" }}>
            House of Faith is the registered name of{" "}
            <span className="font-bold text-white">House of Faith Ministries USA Inc.</span>, a
            501(c)(3) nonprofit organization located in the Bronx, New York.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-16 px-6 text-center"
        style={{ background: "linear-gradient(135deg, #3b1259 0%, #5c2080 100%)" }}
      >
        <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-5">
          Come Be Part of Our Story
        </h2>
        <p className="text-base mb-8 max-w-xl mx-auto" style={{ color: "#e8d5b7" }}>
          We would love to have you join the House of Faith family. Plan your first visit or
          reach out to learn more about who we are.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/schedule"
            className="px-8 py-3 rounded-full font-bold shadow-lg transition-all hover:scale-105"
            style={{ background: "#c9a227", color: "#2e0d46" }}
          >
            Plan a Visit
          </Link>
          <Link
            href="/contact"
            className="px-8 py-3 rounded-full font-bold border-2 transition-all hover:scale-105"
            style={{ borderColor: "#c9a227", color: "#e8d5b7" }}
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}
