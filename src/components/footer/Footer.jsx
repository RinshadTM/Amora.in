import {
  Heart,
  ArrowUpRight,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      {/* Newsletter Section */}
      <div className="border-b border-white/15">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-6 sm:flex-row sm:items-center sm:justify-between sm:px-8 sm:py-8 lg:px-10">
          <div>
            <p className="mb-1 text-xs font-semibold uppercase tracking-[0.2em] text-rose-200">
              Stay in Style
            </p>

            <h2 className="text-xl font-bold sm:text-2xl">
              Get the latest from Lumara
            </h2>

            <p className="mt-1 max-w-md text-xs sm:text-sm leading-relaxed text-white/65">
              Discover new arrivals, exclusive offers, and timeless
              essentials delivered to your inbox.
            </p>
          </div>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex w-full max-w-md rounded-xl bg-white p-1 shadow-md transition focus-within:ring-2 focus-within:ring-rose-300"
          >
            <input
              type="email"
              placeholder="Enter your email address"
              aria-label="Email address"
              required
              className="min-w-0 flex-1 bg-transparent px-3 py-1.5 text-xs sm:text-sm text-gray-800 outline-none placeholder:text-gray-400"
            />

            <button
              type="submit"
              aria-label="Subscribe to newsletter"
              className="flex shrink-0 items-center gap-1.5 rounded-lg bg-[#451D20] px-3.5 py-2 text-xs sm:text-sm font-medium text-white transition hover:bg-[#633036]"
            >
              Subscribe
              <Send size={14} />
            </button>
          </form>
        </div>
      </div>

      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-5 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-10">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">

          {/* Brand */}
          <div>
            <Link
              to="/"
              className="inline-block text-2xl sm:text-3xl font-extrabold tracking-tight"
            >
              lu<span className="text-rose-300">mara</span>
              <span className="text-rose-300">.</span>
            </Link>

            <p className="mt-3 max-w-xs text-xs sm:text-sm leading-relaxed text-white/65">
              Timeless style, thoughtfully curated. Explore fashion,
              accessories, and everyday essentials made to express you.
            </p>

            <div className="mt-4 flex items-center gap-2.5">
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full border border-white/20 transition hover:border-rose-300 hover:bg-rose-300 hover:text-[#451D20]"
              >
                <FaInstagram size={15} />
              </a>

              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full border border-white/20 transition hover:border-rose-300 hover:bg-rose-300 hover:text-[#451D20]"
              >
                <FaFacebookF size={15} />
              </a>

              <a
                href="https://www.twitter.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="Twitter"
                className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full border border-white/20 transition hover:border-rose-300 hover:bg-rose-300 hover:text-[#451D20]"
              >
                <FaTwitter size={15} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-3 text-xs sm:text-sm font-bold uppercase tracking-wider">
              Quick Links
            </h3>

            <ul className="space-y-2 text-xs sm:text-sm text-white/65">
              <li>
                <Link to="/" className="transition hover:pl-1 hover:text-rose-200">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="transition hover:pl-1 hover:text-rose-200">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/shop" className="transition hover:pl-1 hover:text-rose-200">
                  Shop Products
                </Link>
              </li>
              <li>
                <Link to="/contact" className="transition hover:pl-1 hover:text-rose-200">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="mb-3 text-xs sm:text-sm font-bold uppercase tracking-wider">
              Customer Care
            </h3>

            <ul className="space-y-2 text-xs sm:text-sm text-white/65">
              <li>
                <Link to="/contact" className="transition hover:text-rose-200">
                  Help & Support
                </Link>
              </li>
              <li>
                <Link to="/shipping" className="transition hover:text-rose-200">
                  Shipping Information
                </Link>
              </li>
              <li>
                <Link to="/returns" className="transition hover:text-rose-200">
                  Returns & Exchanges
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="transition hover:text-rose-200">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-3 text-xs sm:text-sm font-bold uppercase tracking-wider">
              Get in Touch
            </h3>

            <ul className="space-y-2.5 text-xs sm:text-sm text-white/65">
              <li className="flex items-start gap-2.5">
                <MapPin size={16} className="mt-0.5 shrink-0 text-rose-300" />
                <span>
                  Kerala, India
                  <br />
                  <span className="text-[11px] text-white/45">
                    Online store, worldwide style
                  </span>
                </span>
              </li>

              <li className="flex items-center gap-2.5">
                <Mail size={16} className="shrink-0 text-rose-300" />
                <a
                  href="mailto:support@lumara.com"
                  className="break-all transition hover:text-rose-200"
                >
                  support@lumara.com
                </a>
              </li>

              <li className="flex items-center gap-2.5">
                <Phone size={16} className="shrink-0 text-rose-300" />
                <a
                  href="tel:+910000000000"
                  className="transition hover:text-rose-200"
                >
                  Contact Support
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="mt-8 flex flex-col gap-3 border-t border-white/15 pt-5 text-center sm:mt-10 sm:flex-row sm:items-center sm:justify-between sm:text-left">
          <p className="text-xs leading-5 text-white/50">
            © {new Date().getFullYear()} Lumara. All rights reserved.
          </p>

          <p className="flex items-center justify-center gap-1.5 text-xs text-white/60 sm:justify-end">
            Made with
            <Heart size={13} className="fill-rose-300 text-rose-300" />
            for your everyday style
          </p>

          <Link
            to="/"
            className="group inline-flex items-center justify-center gap-1 text-xs text-white/60 transition hover:text-rose-200"
          >
            Back to Home
            <ArrowUpRight
              size={13}
              className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;