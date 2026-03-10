import Link from "next/link";

const weeklySchedule = [
  {
    day: "Sunday",
    color: "#3b1259",
    events: [
      {
        time: "9:00 AM",
        name: "Early Morning Prayer",
        location: "Main Sanctuary",
        desc: "Start your Sunday by seeking God's face before the main service.",
        type: "Prayer",
      },
      {
        time: "10:00 AM",
        name: "Sunday Worship Service",
        location: "Main Sanctuary",
        desc: "Our main Sunday celebration service featuring praise and worship, prayer, and a powerful message from the Word of God. Children's Ministry available during this time.",
        type: "Main Service",
        featured: true,
      },
      {
        time: "12:30 PM",
        name: "Young Adults Fellowship",
        location: "Fellowship Hall",
        desc: "A relaxed time of connection and conversation for young adults after service.",
        type: "Fellowship",
      },
    ],
  },
  {
    day: "Monday",
    color: "#5c2080",
    events: [
      {
        time: "6:00 PM",
        name: "Prayer Line",
        location: "Phone / Online",
        desc: "Join our Monday evening prayer line from wherever you are. Call in for intercession and encouragement.",
        type: "Prayer",
      },
    ],
  },
  {
    day: "Tuesday",
    color: "#6b4c35",
    events: [
      {
        time: "7:00 PM",
        name: "Women of Faith Meeting",
        location: "Conference Room",
        desc: "Our women's ministry gathers for Bible study, prayer, and fellowship every other Tuesday.",
        type: "Ministry",
      },
    ],
  },
  {
    day: "Wednesday",
    color: "#3b1259",
    events: [
      {
        time: "7:00 PM",
        name: "Midweek Bible Study",
        location: "Main Sanctuary",
        desc: "Go deeper in God's Word every Wednesday. Open to all ages. Come ready to learn, discuss, and grow.",
        type: "Bible Study",
        featured: true,
      },
    ],
  },
  {
    day: "Thursday",
    color: "#5c2080",
    events: [
      {
        time: "7:00 PM",
        name: "Men's Ministry Gathering",
        location: "Fellowship Hall",
        desc: "Men of House of Faith gather biweekly for prayer, accountability, and fellowship.",
        type: "Ministry",
      },
    ],
  },
  {
    day: "Friday",
    color: "#c9a227",
    events: [
      {
        time: "6:00 PM",
        name: "Youth Ministry Service",
        location: "Youth Room",
        desc: "HOF Youth meets every Friday for worship, Bible study, and community. Ages 13–17.",
        type: "Youth",
      },
      {
        time: "7:30 PM",
        name: "Corporate Prayer Meeting",
        location: "Main Sanctuary",
        desc: "Our weekly church-wide prayer gathering. Come and pray with the House of Faith family.",
        type: "Prayer",
        featured: true,
      },
    ],
  },
  {
    day: "Saturday",
    color: "#7c5c3e",
    events: [
      {
        time: "9:00 AM",
        name: "Men's Ministry (2nd Saturday)",
        location: "Fellowship Hall",
        desc: "Men's breakfast and fellowship on the second Saturday of each month.",
        type: "Ministry",
      },
      {
        time: "10:00 AM",
        name: "Women of Faith (3rd Saturday)",
        location: "Main Sanctuary",
        desc: "Women's monthly gathering for worship, teaching, and sisterhood on the third Saturday.",
        type: "Ministry",
      },
      {
        time: "4:00 PM",
        name: "Worship Team Rehearsal",
        location: "Main Sanctuary",
        desc: "Weekly rehearsal for all worship team members — vocalists, musicians, and tech crew.",
        type: "Rehearsal",
      },
    ],
  },
];

const typeColors: Record<string, { bg: string; text: string }> = {
  "Main Service": { bg: "#3b1259", text: "#e8d5b7" },
  "Bible Study": { bg: "#5c2080", text: "#e8d5b7" },
  Prayer: { bg: "#c9a227", text: "#2e0d46" },
  Youth: { bg: "#7c5c3e", text: "#fdf8f2" },
  Ministry: { bg: "#e8d5b7", text: "#3b1259" },
  Fellowship: { bg: "#d4b896", text: "#3b1259" },
  Rehearsal: { bg: "#2c1810", text: "#e8d5b7" },
};

export default function SchedulePage() {
  return (
    <div>
      {/* HERO */}
      <section
        className="py-24 px-6 text-center"
        style={{ background: "linear-gradient(135deg, #3b1259 0%, #5c2080 100%)" }}
      >
        <p className="text-sm font-bold uppercase tracking-widest mb-3" style={{ color: "#c9a227" }}>
          Come & Worship
        </p>
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-5">
          Weekly Schedule
        </h1>
        <p className="text-lg max-w-2xl mx-auto" style={{ color: "#e8d5b7" }}>
          House of Faith is open and active throughout the week. Find a service,
          study, or gathering that fits your schedule and come experience community.
        </p>
      </section>

      {/* GOLD BAR */}
      <section style={{ background: "#c9a227" }} className="py-4 px-6">
        <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-6 md:gap-12 text-center">
          <div>
            <p className="font-bold text-sm" style={{ color: "#2e0d46" }}>📍 Location</p>
            <p className="text-sm" style={{ color: "#3b1259" }}>Bronx, New York</p>
          </div>
          <div>
            <p className="font-bold text-sm" style={{ color: "#2e0d46" }}>🕐 Sunday Service</p>
            <p className="text-sm" style={{ color: "#3b1259" }}>10:00 AM every Sunday</p>
          </div>
          <div>
            <p className="font-bold text-sm" style={{ color: "#2e0d46" }}>📞 Prayer Lines</p>
            <p className="text-sm" style={{ color: "#3b1259" }}>Mon & Fri evenings</p>
          </div>
        </div>
      </section>

      {/* SCHEDULE */}
      <section className="py-20 px-6" style={{ background: "#fdf8f2" }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm font-bold uppercase tracking-widest mb-2" style={{ color: "#c9a227" }}>
              This Week
            </p>
            <h2 className="text-3xl font-extrabold" style={{ color: "#3b1259" }}>
              Full Weekly Schedule
            </h2>
          </div>

          <div className="space-y-8">
            {weeklySchedule.map((day) => (
              <div key={day.day} className="rounded-2xl overflow-hidden shadow-md">
                {/* Day header */}
                <div
                  className="px-6 py-3 flex items-center gap-3"
                  style={{ background: day.color }}
                >
                  <h3 className="text-white font-extrabold text-lg">{day.day}</h3>
                </div>

                <div style={{ background: "#ffffff" }}>
                  {day.events.map((event, i) => (
                    <div
                      key={event.name}
                      className={`p-5 flex flex-col sm:flex-row gap-4 ${
                        i < day.events.length - 1 ? "border-b" : ""
                      } ${event.featured ? "ring-inset" : ""}`}
                      style={{
                        borderColor: "#e8d5b7",
                        background: event.featured ? "#faf4e8" : "transparent",
                      }}
                    >
                      {/* Time */}
                      <div className="sm:w-28 shrink-0">
                        <p className="font-bold text-sm" style={{ color: "#3b1259" }}>{event.time}</p>
                        <span
                          className="inline-block mt-1 px-2 py-0.5 rounded-full text-xs font-semibold"
                          style={{
                            background: typeColors[event.type]?.bg || "#e8d5b7",
                            color: typeColors[event.type]?.text || "#3b1259",
                          }}
                        >
                          {event.type}
                        </span>
                      </div>

                      {/* Event details */}
                      <div className="flex-1">
                        <div className="flex items-center gap-2 flex-wrap mb-1">
                          <h4 className="font-extrabold" style={{ color: "#3b1259" }}>
                            {event.name}
                          </h4>
                          {event.featured && (
                            <span
                              className="px-2 py-0.5 rounded text-xs font-bold"
                              style={{ background: "#c9a227", color: "#2e0d46" }}
                            >
                              ★ Featured
                            </span>
                          )}
                        </div>
                        <p className="text-xs font-semibold mb-2" style={{ color: "#7c5c3e" }}>
                          📍 {event.location}
                        </p>
                        <p className="text-sm leading-relaxed" style={{ color: "#5a3e28" }}>
                          {event.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SPECIAL EVENTS SECTION (merged from events page) */}
      <section className="py-12 px-6" style={{ background: "#e8d5b7" }}>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-sm font-bold uppercase tracking-widest mb-3" style={{ color: "#7c5c3e" }}>
            Special Events
          </p>
          <h2 className="text-2xl font-extrabold mb-4" style={{ color: "#3b1259" }}>
            Upcoming Events
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {/* Example events, replace with dynamic or real data as needed */}
            <div className="bg-white rounded-lg shadow p-4 text-left">
              <div className="flex items-center gap-3 mb-2">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-bold" style={{ background: "#3b1259", color: "#e8d5b7" }}>MAR 16</span>
                <span className="font-semibold text-base" style={{ color: "#3b1259" }}>Sunday Worship Service</span>
              </div>
              <div className="text-xs mb-1" style={{ color: "#7c5c3e" }}>10:00 AM • Main Sanctuary, Bronx NY</div>
              <div className="text-xs mb-2" style={{ color: "#c9a227" }}>Every Sunday</div>
              <div className="text-sm" style={{ color: "#5a3e28" }}>Join us for our regular Sunday celebration service. All are welcome.</div>
            </div>
            <div className="bg-white rounded-lg shadow p-4 text-left">
              <div className="flex items-center gap-3 mb-2">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-bold" style={{ background: "#3b1259", color: "#e8d5b7" }}>MAR 19</span>
                <span className="font-semibold text-base" style={{ color: "#3b1259" }}>Midweek Bible Study</span>
              </div>
              <div className="text-xs mb-1" style={{ color: "#7c5c3e" }}>7:00 PM • Main Sanctuary, Bronx NY</div>
              <div className="text-xs mb-2" style={{ color: "#c9a227" }}>Every Wednesday</div>
              <div className="text-sm" style={{ color: "#5a3e28" }}>Dive deeper into God's Word every Wednesday evening with our community.</div>
            </div>
            <div className="bg-white rounded-lg shadow p-4 text-left">
              <div className="flex items-center gap-3 mb-2">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-bold" style={{ background: "#3b1259", color: "#e8d5b7" }}>MAR 21</span>
                <span className="font-semibold text-base" style={{ color: "#3b1259" }}>HOF Youth Night</span>
              </div>
              <div className="text-xs mb-1" style={{ color: "#7c5c3e" }}>6:00 PM • Youth Room, Bronx NY</div>
              <div className="text-xs mb-2" style={{ color: "#c9a227" }}>Every Friday</div>
              <div className="text-sm" style={{ color: "#5a3e28" }}>A powerful evening for teens — worship, Word, and community every Friday.</div>
            </div>
            <div className="bg-white rounded-lg shadow p-4 text-left">
              <div className="flex items-center gap-3 mb-2">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-bold" style={{ background: "#3b1259", color: "#e8d5b7" }}>MAR 22</span>
                <span className="font-semibold text-base" style={{ color: "#3b1259" }}>Community Food Drive</span>
              </div>
              <div className="text-xs mb-1" style={{ color: "#7c5c3e" }}>10:00 AM • Bronx Community Center</div>
              <div className="text-xs mb-2" style={{ color: "#c9a227" }}>Last Saturday monthly</div>
              <div className="text-sm" style={{ color: "#5a3e28" }}>Help us serve our Bronx neighbors. Bring nonperishable food items or come volunteer.</div>
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-4 mt-6">
            <a
              href="https://churchy.base44.app"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full font-semibold border-2 transition-all hover:opacity-80"
              style={{ borderColor: "#3b1259", color: "#3b1259" }}
            >
              Church Hub ↗
            </a>
          </div>
        </div>
      </section>

      {/* PLAN A VISIT CTA */}
      <section
        className="py-16 px-6 text-center"
        style={{ background: "linear-gradient(135deg, #3b1259 0%, #5c2080 100%)" }}
      >
        <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-4">
          Plan Your Visit
        </h2>
        <p className="text-base mb-8" style={{ color: "#e8d5b7" }}>
          First time visiting House of Faith? We&apos;d love to welcome you. Reach out and we&apos;ll help
          make your first Sunday unforgettable.
        </p>
        <Link
          href="/contact"
          className="inline-block px-8 py-3 rounded-full font-bold shadow-lg transition-all hover:scale-105"
          style={{ background: "#c9a227", color: "#2e0d46" }}
        >
          Contact Us
        </Link>
      </section>
    </div>
  );
}
