import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{ background: "#2c1810", color: "#e8d5b7" }} className="mt-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold"
                style={{ background: "#c9a227", color: "#3b1259" }}
              >
                HF
              </div>
              <div>
                <p className="font-bold text-white">House of Faith</p>
                <p className="text-xs" style={{ color: "#c4a882" }}>Bronx, NY</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: "#c4a882" }}>
              A Christ-centered community serving the Bronx and beyond with faith, love, and purpose.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-white mb-3 text-sm uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {[
                { href: "/about", label: "About Us" },
                { href: "/leadership", label: "Our Leadership" },
                { href: "/ministries", label: "Ministries" },
                { href: "/schedule", label: "Weekly Schedule" },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="hover:text-yellow-400 transition-colors" style={{ color: "#c4a882" }}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Get Involved */}
          <div>
            <h4 className="font-bold text-white mb-3 text-sm uppercase tracking-wider">Get Involved</h4>
            <ul className="space-y-2 text-sm">
              {[
                { href: "/volunteers", label: "Volunteer" },
                { href: "/prayer", label: "Prayer Lines" },
                { href: "/events", label: "Events" },
                { href: "/give", label: "Give" },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="hover:text-yellow-400 transition-colors" style={{ color: "#c4a882" }}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Hub */}
          <div>
            <h4 className="font-bold text-white mb-3 text-sm uppercase tracking-wider">Connect</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/contact" className="hover:text-yellow-400 transition-colors" style={{ color: "#c4a882" }}>
                  Contact Us
                </Link>
              </li>
              <li>
                <a
                  href="https://churchy.base44.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-yellow-400 transition-colors"
                  style={{ color: "#c4a882" }}
                >
                  Church Hub ↗
                </a>
              </li>
            </ul>
            <div className="mt-4 p-3 rounded-lg" style={{ background: "#3b1259" }}>
              <p className="text-xs text-white font-semibold mb-1">Sunday Service</p>
              <p className="text-xs" style={{ color: "#e8d5b7" }}>10:00 AM • Bronx, NY</p>
              <p className="text-xs mt-1" style={{ color: "#c9a227" }}>📍 467 E 138th St, Bronx, NY 10454</p>
            </div>
          </div>
        </div>

        <div className="border-t pt-6 text-center text-xs" style={{ borderColor: "#4a2e1a", color: "#7c5c3e" }}>
          <p>
            © {new Date().getFullYear()} House of Faith Ministries USA Inc. — All rights reserved.
          </p>
          <p className="mt-1">Bronx, New York</p>
        </div>
      </div>
    </footer>
  );
}
