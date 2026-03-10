const contactInfo = [
  { icon: "📍", label: "Location", value: "467 E 138th St, Bronx, NY 10454", sub: "Corner of St Ann's Ave & E 138th" },
  { icon: "📞", label: "Phone", value: "(718) 555-0100", sub: "Mon–Fri, 9 AM – 5 PM" },
  { icon: "✉️", label: "Email", value: "info@houseoffaithbronx.org", sub: "We respond within 1–2 business days" },
  { icon: "🕐", label: "Sunday Service", value: "10:00 AM", sub: "Every Sunday, Bronx NY" },
];

export default function ContactPage() {
  return (
    <div>
      {/* HERO */}
      <section
        className="py-24 px-6 text-center"
        style={{ background: "linear-gradient(135deg, #3b1259 0%, #5c2080 100%)" }}
      >
        <p className="text-sm font-bold uppercase tracking-widest mb-3" style={{ color: "#c9a227" }}>
          We&apos;d Love to Hear From You
        </p>
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-5">
          Contact Us
        </h1>
        <p className="text-lg max-w-2xl mx-auto" style={{ color: "#e8d5b7" }}>
          Whether you have a question, a prayer request, want to plan a visit, or are looking to
          get connected — reach out and a member of our team will be in touch.
        </p>
      </section>

      {/* GOLD BAR */}
      <section style={{ background: "#c9a227" }} className="py-5 px-6 text-center">
        <p className="text-base font-semibold italic" style={{ color: "#2e0d46" }}>
          &ldquo;Ask and it will be given to you; seek and you will find; knock and the door will be opened.&rdquo; — Matthew 7:7
        </p>
      </section>

      {/* CONTACT GRID */}
      <section className="py-20 px-6" style={{ background: "#fdf8f2" }}>
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

            {/* Contact Info */}
            <div>
              <p className="text-sm font-bold uppercase tracking-widest mb-2" style={{ color: "#c9a227" }}>
                Reach Us
              </p>
              <h2 className="text-3xl font-extrabold mb-6" style={{ color: "#3b1259" }}>
                Get in Touch
              </h2>

              <div className="space-y-4 mb-8">
                {contactInfo.map((info) => (
                  <div key={info.label} className="flex items-start gap-4 p-4 rounded-xl shadow" style={{ background: "#ffffff" }}>
                    <span className="text-2xl mt-0.5">{info.icon}</span>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest mb-0.5" style={{ color: "#7c5c3e" }}>
                        {info.label}
                      </p>
                      <p className="font-bold" style={{ color: "#3b1259" }}>{info.value}</p>
                      <p className="text-xs" style={{ color: "#c4a882" }}>{info.sub}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Church Hub link */}
              <div className="p-5 rounded-2xl" style={{ background: "#3b1259" }}>
                <p className="font-bold text-white mb-2">Access the Church Hub</p>
                <p className="text-sm mb-4" style={{ color: "#e8d5b7" }}>
                  For giving, announcements, member resources, and more — visit our Church Hub.
                </p>
                <a
                  href="https://churchy.base44.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-2 rounded-full font-bold text-sm transition-all hover:opacity-90"
                  style={{ background: "#c9a227", color: "#2e0d46" }}
                >
                  Open Church Hub ↗
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="p-8 rounded-2xl shadow-lg" style={{ background: "#ffffff" }}>
              <p className="text-sm font-bold uppercase tracking-widest mb-2" style={{ color: "#c9a227" }}>
                Send a Message
              </p>
              <h2 className="text-2xl font-extrabold mb-6" style={{ color: "#3b1259" }}>
                Contact Form
              </h2>

              <form className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wide mb-1.5" style={{ color: "#7c5c3e" }}>
                      First Name
                    </label>
                    <input
                      type="text"
                      placeholder="Your first name"
                      className="w-full px-4 py-3 rounded-lg border text-sm outline-none focus:ring-2"
                      style={{
                        borderColor: "#e8d5b7",
                        background: "#fdf8f2",
                        color: "#2c1810",
                      }}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wide mb-1.5" style={{ color: "#7c5c3e" }}>
                      Last Name
                    </label>
                    <input
                      type="text"
                      placeholder="Your last name"
                      className="w-full px-4 py-3 rounded-lg border text-sm outline-none"
                      style={{ borderColor: "#e8d5b7", background: "#fdf8f2", color: "#2c1810" }}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wide mb-1.5" style={{ color: "#7c5c3e" }}>
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 rounded-lg border text-sm outline-none"
                    style={{ borderColor: "#e8d5b7", background: "#fdf8f2", color: "#2c1810" }}
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wide mb-1.5" style={{ color: "#7c5c3e" }}>
                    How Can We Help?
                  </label>
                  <select
                    className="w-full px-4 py-3 rounded-lg border text-sm outline-none"
                    style={{ borderColor: "#e8d5b7", background: "#fdf8f2", color: "#2c1810" }}
                  >
                    <option value="">Select a topic...</option>
                    <option>General Inquiry</option>
                    <option>Prayer Request</option>
                    <option>Plan a Visit</option>
                    <option>Volunteer Interest</option>
                    <option>Ministry Information</option>
                    <option>Pastoral Appointment</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wide mb-1.5" style={{ color: "#7c5c3e" }}>
                    Message
                  </label>
                  <textarea
                    rows={5}
                    placeholder="Write your message here..."
                    className="w-full px-4 py-3 rounded-lg border text-sm outline-none resize-none"
                    style={{ borderColor: "#e8d5b7", background: "#fdf8f2", color: "#2c1810" }}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-full font-bold text-base transition-all hover:opacity-90"
                  style={{ background: "#3b1259", color: "#e8d5b7" }}
                >
                  Send Message
                </button>
                <p className="text-xs text-center" style={{ color: "#c4a882" }}>
                  We typically respond within 1–2 business days.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* PRAYER REQUEST */}
      <section className="py-16 px-6" style={{ background: "#e8d5b7" }}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-extrabold mb-4" style={{ color: "#3b1259" }}>
            Need Prayer?
          </h2>
          <p className="text-base mb-6" style={{ color: "#5a3e28" }}>
            Our intercessory prayer team is here for you. Submit a prayer request through this page
            or join one of our prayer lines.
          </p>
          <a
            href="/prayer"
            className="inline-block px-8 py-3 rounded-full font-bold shadow transition-all hover:scale-105"
            style={{ background: "#3b1259", color: "#e8d5b7" }}
          >
            View Prayer Lines
          </a>
        </div>
      </section>
    </div>
  );
}
