import Link from "next/link";

const pastors = [
  {
    name: "Senior Pastor",
    title: "Senior Pastor & Founder",
    role: "Visionary Leader",
    bio: "Our Senior Pastor has dedicated decades of faithful service to building the House of Faith community in the Bronx. With a deep passion for God's Word and a heart for people, the Senior Pastor leads our congregation with wisdom, grace, and unwavering faith. Under their leadership, House of Faith has grown into a vibrant, Spirit-filled church that touches lives across the Bronx and beyond.",
    focus: ["Preaching & Teaching", "Vision & Direction", "Community Outreach", "Pastoral Care"],
    initial: "SP",
  },
  {
    name: "Co-Pastor",
    title: "Co-Pastor",
    role: "Ministry & Discipleship",
    bio: "Our Co-Pastor brings a gift for discipleship and teaching that has helped hundreds of members grow deeper in their faith. With a compassionate heart and a powerful anointing, the Co-Pastor oversees our discipleship programs, small groups, and ministry development, ensuring that every member of House of Faith is equipped and empowered to live out their God-given calling.",
    focus: ["Discipleship", "Small Groups", "Ministry Development", "Teaching"],
    initial: "CP",
  },
  {
    name: "Associate Pastor",
    title: "Associate Pastor",
    role: "Youth & Young Adults",
    bio: "Our Associate Pastor leads our youth and young adult ministries with energy, creativity, and a genuine love for the next generation. Committed to raising up young leaders who are passionate about God and their community, the Associate Pastor has built a thriving youth ministry that is shaping the future of House of Faith and the Bronx.",
    focus: ["Youth Ministry", "Young Adults", "Leadership Development", "Evangelism"],
    initial: "AP",
  },
];

const boardMembers = [
  { title: "Elder Board Chair", desc: "Provides spiritual oversight and governance for the ministry." },
  { title: "Elder – Prayer Ministry", desc: "Leads the prayer team and intercessory ministries." },
  { title: "Elder – Community Outreach", desc: "Oversees community service and evangelism efforts." },
  { title: "Deacon – Worship", desc: "Guides the worship team and Sunday service experience." },
  { title: "Deacon – Administration", desc: "Manages church operations and administrative functions." },
  { title: "Deacon – Hospitality", desc: "Oversees the welcome team and church events." },
];

export default function LeadershipPage() {
  return (
    <div>
      {/* HERO */}
      <section
        className="py-24 px-6 text-center"
        style={{ background: "linear-gradient(135deg, #3b1259 0%, #5c2080 100%)" }}
      >
        <p className="text-sm font-bold uppercase tracking-widest mb-3" style={{ color: "#c9a227" }}>
          Our Leaders
        </p>
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-5">
          Leadership & Pastors
        </h1>
        <p className="text-lg max-w-2xl mx-auto" style={{ color: "#e8d5b7" }}>
          Faithful shepherds called by God to guide, teach, and serve the House of Faith family
          with love and integrity.
        </p>
      </section>

      {/* SCRIPTURE */}
      <section style={{ background: "#c9a227" }} className="py-6 px-6 text-center">
        <p className="text-base font-semibold italic" style={{ color: "#2e0d46" }}>
          &ldquo;The elders who direct the affairs of the church well are worthy of double honor.&rdquo; — 1 Timothy 5:17
        </p>
      </section>

      {/* PASTORS */}
      <section className="py-20 px-6" style={{ background: "#fdf8f2" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-sm font-bold uppercase tracking-widest mb-2" style={{ color: "#c9a227" }}>
              Pastoral Team
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold" style={{ color: "#3b1259" }}>
              Meet Our Pastors
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pastors.map((pastor) => (
              <div
                key={pastor.name}
                className="rounded-2xl shadow-lg overflow-hidden card-hover"
                style={{ background: "#ffffff" }}
              >
                {/* Avatar */}
                <div
                  className="h-48 flex items-center justify-center"
                  style={{ background: "linear-gradient(135deg, #3b1259 0%, #7c3aad 100%)" }}
                >
                  <img
                    src={
                      pastor.name === "Senior Pastor"
                        ? "/images/clive-thibela-ZAq4eTAkGC4-unsplash.jpg"
                        : pastor.name === "Co-Pastor"
                        ? "/images/elianna-gill-lWEFK31em2w-unsplash.jpg"
                        : "/images/ismael-paramo-I-YAoNw2nds-unsplash.jpg"
                    }
                    alt={pastor.name}
                    className="w-24 h-24 rounded-full object-cover shadow-xl border-4 border-yellow-600"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-extrabold mb-1" style={{ color: "#3b1259" }}>
                    {pastor.name}
                  </h3>
                  <p className="text-sm font-semibold mb-1" style={{ color: "#c9a227" }}>
                    {pastor.title}
                  </p>
                  <p className="text-xs font-medium uppercase tracking-widest mb-4" style={{ color: "#7c5c3e" }}>
                    {pastor.role}
                  </p>
                  <p className="text-sm leading-relaxed mb-5" style={{ color: "#5a3e28" }}>
                    {pastor.bio}
                  </p>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: "#3b1259" }}>
                      Areas of Focus
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {pastor.focus.map((f) => (
                        <span
                          key={f}
                          className="px-3 py-1 rounded-full text-xs font-semibold"
                          style={{ background: "#e8d5b7", color: "#3b1259" }}
                        >
                          {f}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ELDERS & DEACONS */}
      <section className="py-20 px-6" style={{ background: "#e8d5b7" }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm font-bold uppercase tracking-widest mb-2" style={{ color: "#7c5c3e" }}>
              Governance
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4" style={{ color: "#3b1259" }}>
              Elders & Deacons
            </h2>
            <p className="text-base max-w-xl mx-auto" style={{ color: "#5a3e28" }}>
              Our elders and deacons serve alongside our pastoral team to ensure House of Faith operates
              with integrity, love, and purpose.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {boardMembers.map((member) => (
              <div
                key={member.title}
                className="p-5 rounded-xl shadow card-hover"
                style={{ background: "#fdf8f2" }}
              >
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center mb-3 text-lg"
                  style={{ background: "#3b1259", color: "#c9a227" }}
                >
                  ✝
                </div>
                <h3 className="font-bold mb-2" style={{ color: "#3b1259" }}>
                  {member.title}
                </h3>
                <p className="text-sm" style={{ color: "#7c5c3e" }}>
                  {member.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATEMENT OF FAITH */}
      <section className="py-20 px-6" style={{ background: "#fdf8f2" }}>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-sm font-bold uppercase tracking-widest mb-3" style={{ color: "#c9a227" }}>
            Our Foundation
          </p>
          <h2 className="text-3xl font-extrabold mb-6" style={{ color: "#3b1259" }}>
            What We Believe
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
            {[
              "We believe in the Holy Trinity — Father, Son, and Holy Spirit.",
              "We believe in the divine inspiration and authority of the Holy Bible.",
              "We believe in salvation through faith in Jesus Christ alone.",
              "We believe in the power of prayer and the gifts of the Holy Spirit.",
              "We believe in the Great Commission — spreading the Gospel to all nations.",
              "We believe in the local church as God's instrument for community transformation.",
            ].map((belief) => (
              <div key={belief} className="flex items-start gap-3 p-4 rounded-xl" style={{ background: "#e8d5b7" }}>
                <span style={{ color: "#c9a227" }} className="text-xl mt-0.5">✓</span>
                <p className="text-sm leading-relaxed" style={{ color: "#2c1810" }}>{belief}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-16 px-6 text-center"
        style={{ background: "linear-gradient(135deg, #3b1259 0%, #5c2080 100%)" }}
      >
        <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-4">
          Connect with Our Leadership Team
        </h2>
        <p className="text-base mb-8" style={{ color: "#e8d5b7" }}>
          Have a question, need prayer, or want to schedule a pastoral appointment? We&apos;d love to
          hear from you.
        </p>
        <Link
          href="/contact"
          className="inline-block px-8 py-3 rounded-full font-bold shadow-lg transition-all hover:scale-105"
          style={{ background: "#c9a227", color: "#2e0d46" }}
        >
          Contact Our Team
        </Link>
      </section>
    </div>
  );
}
