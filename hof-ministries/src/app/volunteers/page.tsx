import Link from "next/link";

const volunteerRoles = [
  {
    icon: "🎤",
    title: "Worship Team",
    dept: "Arts & Worship",
    desc: "Serve as a vocalist, musician, or sound/media technician on our Sunday worship team or special events.",
    commitment: "Weekly rehearsal + Sundays",
    skills: ["Singing", "Instruments", "Sound Engineering", "Lighting", "Media"],
  },
  {
    icon: "👋",
    title: "Welcome & Hospitality",
    dept: "Guest Services",
    desc: "Be the first face visitors see. Our hospitality team greets guests, ushers members, and makes everyone feel at home.",
    commitment: "Sundays (rotating schedule)",
    skills: ["Friendly Personality", "Customer Service", "Bilingual a plus"],
  },
  {
    icon: "📖",
    title: "Children's Ministry Helper",
    dept: "Children's Ministry",
    desc: "Help teach, mentor, and care for our youngest members during Sunday service and special events.",
    commitment: "Sundays during service",
    skills: ["Love for Kids", "Teaching", "Patient & Creative"],
  },
  {
    icon: "📷",
    title: "Media & Communications",
    dept: "Media Ministry",
    desc: "Capture, create, and communicate the story of House of Faith through photography, video, social media, and graphic design.",
    commitment: "Flexible",
    skills: ["Photography", "Video", "Social Media", "Graphic Design", "Livestream"],
  },
  {
    icon: "🍽️",
    title: "Food & Hospitality Events",
    dept: "Community & Outreach",
    desc: "Help organize and serve at our community food drives, church dinners, holiday events, and outreach programs.",
    commitment: "Monthly events",
    skills: ["Cooking", "Food Handling", "Event Setup", "Community Heart"],
  },
  {
    icon: "🚗",
    title: "Transportation Ministry",
    dept: "Deacon Team",
    desc: "Provide rides to church for seniors, members without transportation, and those in need in our community.",
    commitment: "Sundays (as available)",
    skills: ["Valid Driver's License", "Reliable Vehicle", "Compassionate"],
  },
  {
    icon: "🧹",
    title: "Facilities & Setup Team",
    dept: "Operations",
    desc: "Help keep our church building clean, organized, and ready for services, events, and community use.",
    commitment: "Before/after services",
    skills: ["Physical Labor", "Attention to Detail", "Team Player"],
  },
  {
    icon: "💰",
    title: "Finance & Administration",
    dept: "Administration",
    desc: "Support our administrative and financial operations including offering counting, data entry, and office support.",
    commitment: "Flexible / as needed",
    skills: ["Accounting", "Spreadsheets", "Confidentiality", "Organization"],
  },
  {
    icon: "🌍",
    title: "Outreach & Evangelism",
    dept: "Outreach Ministry",
    desc: "Share the Gospel and serve our Bronx neighbors through street evangelism, door-to-door outreach, and community service.",
    commitment: "Monthly outreach days",
    skills: ["Evangelism", "Compassion", "Community Awareness"],
  },
];

const whyVolunteer = [
  { icon: "✨", title: "Use Your Gifts", desc: "God has given each of us unique talents. Volunteering is how you put them to work for His kingdom." },
  { icon: "🤝", title: "Build Community", desc: "Serving alongside others creates deep, lasting friendships and a sense of true belonging." },
  { icon: "🌱", title: "Grow Spiritually", desc: "There is no better classroom for faith than active service. Growth happens when you step out and serve." },
  { icon: "🌟", title: "Make an Impact", desc: "Your volunteer hours directly impact lives in the Bronx — locally and eternally." },
];

export default function VolunteersPage() {
  return (
    <div>
      {/* HERO */}
      <section
        className="py-24 px-6 text-center"
        style={{ background: "linear-gradient(135deg, #3b1259 0%, #5c2080 100%)" }}
      >
        <p className="text-sm font-bold uppercase tracking-widest mb-3" style={{ color: "#c9a227" }}>
          Serve with Purpose
        </p>
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-5">
          Volunteer at House of Faith
        </h1>
        <p className="text-lg max-w-2xl mx-auto" style={{ color: "#e8d5b7" }}>
          Every great ministry is built on willing hearts. Join our volunteer family and use your
          gifts to serve God and the Bronx community.
        </p>
        <a
          href="#roles"
          className="inline-block mt-8 px-8 py-3 rounded-full font-bold transition-all hover:scale-105"
          style={{ background: "#c9a227", color: "#2e0d46" }}
        >
          Find Your Role ↓
        </a>
      </section>

      {/* SCRIPTURE */}
      <section style={{ background: "#c9a227" }} className="py-5 px-6 text-center">
        <p className="text-base font-semibold italic" style={{ color: "#2e0d46" }}>
          &ldquo;Each of you should use whatever gift you have received to serve others.&rdquo; — 1 Peter 4:10
        </p>
      </section>

      {/* WHY VOLUNTEER */}
      <section className="py-20 px-6" style={{ background: "#fdf8f2" }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm font-bold uppercase tracking-widest mb-2" style={{ color: "#c9a227" }}>
              Why Serve?
            </p>
            <h2 className="text-3xl font-extrabold" style={{ color: "#3b1259" }}>
              The Power of Volunteering
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyVolunteer.map((item) => (
              <div key={item.title} className="text-center p-6 rounded-2xl shadow" style={{ background: "#ffffff" }}>
                <span className="text-4xl block mb-3">{item.icon}</span>
                <h3 className="font-bold mb-2" style={{ color: "#3b1259" }}>{item.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#7c5c3e" }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VOLUNTEER ROLES */}
      <section id="roles" className="py-20 px-6" style={{ background: "#e8d5b7" }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm font-bold uppercase tracking-widest mb-2" style={{ color: "#7c5c3e" }}>
              Open Positions
            </p>
            <h2 className="text-3xl font-extrabold" style={{ color: "#3b1259" }}>
              Volunteer Opportunities
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {volunteerRoles.map((role) => (
              <div
                key={role.title}
                className="rounded-2xl shadow-md card-hover overflow-hidden"
                style={{ background: "#fdf8f2" }}
              >
                <div
                  className="p-4 flex items-center gap-3"
                  style={{ background: "#3b1259" }}
                >
                  <span className="text-3xl">{role.icon}</span>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest mb-0.5" style={{ color: "#c9a227" }}>
                      {role.dept}
                    </p>
                    <h3 className="text-white font-extrabold">{role.title}</h3>
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-sm leading-relaxed mb-4" style={{ color: "#5a3e28" }}>{role.desc}</p>
                  <div className="flex items-center gap-2 mb-4 text-xs font-semibold" style={{ color: "#7c5c3e" }}>
                    <span style={{ color: "#c9a227" }}>🕐</span>
                    {role.commitment}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {role.skills.map((s) => (
                      <span key={s} className="px-2 py-1 rounded-full text-xs" style={{ background: "#e8d5b7", color: "#3b1259" }}>
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-20 px-6" style={{ background: "#fdf8f2" }}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm font-bold uppercase tracking-widest mb-2" style={{ color: "#c9a227" }}>
              How to Start
            </p>
            <h2 className="text-3xl font-extrabold" style={{ color: "#3b1259" }}>
              3 Simple Steps to Get Involved
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { step: "01", title: "Connect With Us", desc: "Fill out our volunteer interest form or stop by after Sunday service to let us know you want to serve." },
              { step: "02", title: "Find Your Fit", desc: "A ministry leader will meet with you to understand your gifts, interests, and availability to find the right team." },
              { step: "03", title: "Start Serving", desc: "Complete a brief orientation and join your team! Most volunteer roles start within 1–2 weeks of connecting." },
            ].map((step) => (
              <div key={step.step} className="text-center p-6 rounded-2xl shadow" style={{ background: "#ffffff" }}>
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-xl font-extrabold mx-auto mb-4"
                  style={{ background: "#c9a227", color: "#3b1259" }}
                >
                  {step.step}
                </div>
                <h3 className="font-bold mb-2" style={{ color: "#3b1259" }}>{step.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#7c5c3e" }}>{step.desc}</p>
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
          Ready to Make a Difference?
        </h2>
        <p className="text-base mb-8 max-w-xl mx-auto" style={{ color: "#e8d5b7" }}>
          We would love to have you on our team. Reach out today and take your first step
          toward serving the House of Faith family and the Bronx community.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/contact"
            className="px-8 py-3 rounded-full font-bold shadow-lg transition-all hover:scale-105"
            style={{ background: "#c9a227", color: "#2e0d46" }}
          >
            Sign Up to Volunteer
          </Link>
          <a
            href="https://churchy.base44.app"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 rounded-full font-bold border-2 transition-all hover:scale-105"
            style={{ borderColor: "#c9a227", color: "#e8d5b7" }}
          >
            Access Church Hub ↗
          </a>
        </div>
      </section>
    </div>
  );
}
