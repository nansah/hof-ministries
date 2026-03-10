import Link from "next/link";

const ministryGroups = [
  {
    icon: "🎶",
    name: "Worship & Arts Ministry",
    desc: "Our Worship & Arts team leads the congregation into the presence of God through anointed music, song, and creative expression. Whether you play an instrument, sing, or serve behind the scenes, there's a place for your gift.",
    meetingTime: "Rehearsals: Saturdays 4 PM",
    lead: "Worship Leader",
    tags: ["Musicians", "Singers", "Sound & Media", "Creative Arts"],
  },
  {
    icon: "👧",
    name: "Children's Ministry",
    desc: "We believe every child deserves to encounter God's love in a fun, safe, and engaging environment. Our children's ministry provides age-appropriate Bible lessons, worship, and activities every Sunday.",
    meetingTime: "Sundays during service",
    lead: "Children's Ministry Director",
    tags: ["Ages 4–12", "Sunday School", "Vacation Bible School"],
  },
  {
    icon: "🔥",
    name: "Youth Ministry",
    desc: "HOF Youth is a dynamic ministry designed to empower young people (ages 13–17) to live boldly for Christ. We meet weekly for Bible study, worship, mentorship, and community building.",
    meetingTime: "Fridays 6 PM",
    lead: "Youth Pastor",
    tags: ["Ages 13–17", "Bible Study", "Mentorship", "Events"],
  },
  {
    icon: "🌟",
    name: "Young Adults Ministry",
    desc: "For those in their 18s–30s navigating faith, career, relationships, and purpose — our young adults ministry is a community of peers committed to growing together in every area of life.",
    meetingTime: "Sundays after service",
    lead: "Young Adults Leader",
    tags: ["Ages 18–35", "Fellowship", "Career", "Relationships"],
  },
  {
    icon: "👨",
    name: "Men's Ministry",
    desc: "House of Faith Men's Ministry exists to build Godly men who lead with integrity in their homes, workplaces, and community. We gather for fellowship, accountability, prayer, and service.",
    meetingTime: "Second Saturday of each month, 9 AM",
    lead: "Men's Ministry Leader",
    tags: ["Brotherhood", "Accountability", "Leadership", "Prayer"],
  },
  {
    icon: "👩",
    name: "Women's Ministry",
    desc: "Our Women's Ministry — Women of Faith — empowers women to walk in their God-given identity, purpose, and calling. Through Bible studies, retreats, and community, we support and uplift one another.",
    meetingTime: "Third Saturday of each month, 10 AM",
    lead: "Women's Ministry Leader",
    tags: ["Sisterhood", "Bible Study", "Retreats", "Empowerment"],
  },
  {
    icon: "🤲",
    name: "Prayer & Intercession Ministry",
    desc: "The heartbeat of House of Faith is prayer. Our intercession team covers the church, community, and nations in prayer. We host weekly prayer meetings, prayer lines, and special prayer events.",
    meetingTime: "Fridays 6 PM + Prayer Lines",
    lead: "Prayer Ministry Leader",
    tags: ["Intercession", "Prayer Lines", "Fasting", "Corporate Prayer"],
  },
  {
    icon: "🌍",
    name: "Community Outreach Ministry",
    desc: "Faith without works is dead. Our outreach ministry serves the Bronx through food drives, community events, prison ministry, and local partnerships. We are the hands and feet of Jesus in our neighborhood.",
    meetingTime: "Monthly outreach events",
    lead: "Outreach Director",
    tags: ["Food Drives", "Prison Ministry", "Community Events", "Evangelism"],
  },
  {
    icon: "📖",
    name: "Bible Study & Discipleship",
    desc: "Our midweek Bible study is the foundation for spiritual growth at House of Faith. We go deep into Scripture, equipping believers to understand and apply God's Word to their everyday lives.",
    meetingTime: "Wednesdays 7 PM",
    lead: "Teaching Pastor",
    tags: ["Scripture", "Growth", "Community", "Discussion"],
  },
  {
    icon: "🙏",
    name: "Senior Saints Ministry",
    desc: "We honor and celebrate our seniors at House of Faith. This ministry provides fellowship, care, Bible study, and activities tailored specifically for our treasured senior members.",
    meetingTime: "Monthly gatherings",
    lead: "Senior Ministry Coordinator",
    tags: ["Fellowship", "Care", "Bible Study", "Activities"],
  },
  {
    icon: "💒",
    name: "Marriage & Family Ministry",
    desc: "Building strong families is central to our mission. Our Marriage & Family ministry offers premarital counseling, marriage enrichment workshops, parenting resources, and family retreats.",
    meetingTime: "Quarterly events",
    lead: "Family Life Pastor",
    tags: ["Marriage", "Parenting", "Counseling", "Workshops"],
  },
  {
    icon: "🎓",
    name: "Leadership Development",
    desc: "We are committed to raising up the next generation of leaders within the church and beyond. Our leadership training program equips members with the skills and spiritual foundation to lead effectively.",
    meetingTime: "Monthly sessions",
    lead: "Leadership Development Coordinator",
    tags: ["Training", "Mentorship", "Spiritual Growth", "Service"],
  },
];

export default function MinistriesPage() {
  return (
    <div>
      {/* HERO */}
      <section
        className="py-24 px-6 text-center"
        style={{ background: "linear-gradient(135deg, #3b1259 0%, #5c2080 100%)" }}
      >
        <p className="text-sm font-bold uppercase tracking-widest mb-3" style={{ color: "#c9a227" }}>
          Get Involved
        </p>
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-5">
          Our Ministries
        </h1>
        <p className="text-lg max-w-2xl mx-auto" style={{ color: "#e8d5b7" }}>
          At House of Faith, there is a place for every person to grow in faith, build community,
          and serve with purpose. Find your ministry home.
        </p>
      </section>

      {/* SCRIPTURE */}
      <section style={{ background: "#c9a227" }} className="py-5 px-6 text-center">
        <p className="text-base font-semibold italic" style={{ color: "#2e0d46" }}>
          &ldquo;Now you are the body of Christ, and each one of you is a part of it.&rdquo; — 1 Corinthians 12:27
        </p>
      </section>

      {/* INTRO */}
      <section className="py-16 px-6" style={{ background: "#fdf8f2" }}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold mb-5" style={{ color: "#3b1259" }}>
            Something for Everyone
          </h2>
          <p className="text-base leading-relaxed" style={{ color: "#5a3e28" }}>
            House of Faith is more than a Sunday service — it&apos;s a community of believers actively living
            out their faith together. Our ministries exist to help you grow spiritually, connect
            relationally, and serve practically. Browse our ministry groups below and take your
            first step toward deeper involvement.
          </p>
        </div>
      </section>

      {/* MINISTRY GRID */}
      <section className="pb-20 px-6" style={{ background: "#fdf8f2" }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ministryGroups.map((ministry) => (
              <div
                key={ministry.name}
                className="rounded-2xl shadow-md card-hover overflow-hidden"
                style={{ background: "#ffffff" }}
              >
                {/* Header */}
                <div
                  className="p-5 flex items-center gap-4"
                  style={{ background: "linear-gradient(135deg, #3b1259 0%, #5c2080 100%)" }}
                >
                  <span className="text-4xl">{ministry.icon}</span>
                  <div>
                    <h3 className="font-extrabold text-white text-base leading-tight">{ministry.name}</h3>
                    <p className="text-xs mt-1" style={{ color: "#e8d5b7" }}>{ministry.lead}</p>
                  </div>
                </div>

                <div className="p-5">
                  <p className="text-sm leading-relaxed mb-4" style={{ color: "#5a3e28" }}>
                    {ministry.desc}
                  </p>

                  <div className="flex items-center gap-2 mb-4 p-3 rounded-lg" style={{ background: "#faf4e8" }}>
                    <span style={{ color: "#c9a227" }}>🕐</span>
                    <span className="text-xs font-semibold" style={{ color: "#3b1259" }}>{ministry.meetingTime}</span>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {ministry.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full text-xs font-semibold"
                        style={{ background: "#e8d5b7", color: "#3b1259" }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* JOIN CTA */}
      <section className="py-20 px-6" style={{ background: "#e8d5b7" }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold mb-5" style={{ color: "#3b1259" }}>
            Ready to Get Involved?
          </h2>
          <p className="text-base mb-8 max-w-xl mx-auto" style={{ color: "#5a3e28" }}>
            Reach out to us and we&apos;ll connect you with the right ministry team. No matter your background
            or experience level — there is a place for you at House of Faith.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="px-8 py-3 rounded-full font-bold shadow-lg transition-all hover:scale-105"
              style={{ background: "#3b1259", color: "#e8d5b7" }}
            >
              Get Connected
            </Link>
            <Link
              href="/volunteers"
              className="px-8 py-3 rounded-full font-bold border-2 transition-all hover:scale-105"
              style={{ borderColor: "#3b1259", color: "#3b1259" }}
            >
              Volunteer With Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
