import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#4D3E33] text-white">
      <div className="container mx-auto px-6 py-16 lg:px-8">
        {/* Main footer content grid */}
        <div className="grid grid-cols-1 gap-12 text-center sm:text-left md:grid-cols-2 lg:grid-cols-4 mb-12">
          {/* Column 1: Brand Info & Social Links */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">XYZ ESTATE Hub </h3>
            <p className="max-w-md text-gray-300 leading-relaxed mx-auto sm:mx-0">
              Making rental housing accessible and stress-free for the next
              generation.
            </p>
            {/* Social Media Icons */}
            <div className="flex items-center justify-center sm:justify-start gap-4">
              <a
                href="#"
                aria-label="Facebook"
                className="text-gray-300 transition-colors hover:text-white"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="text-gray-300 transition-colors hover:text-white"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="text-gray-300 transition-colors hover:text-white"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="text-gray-300 transition-colors hover:text-white"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-3 text-gray-300">
              <li>
                <a
                  href="#"
                  className="hover:text-white hover:underline transition-colors"
                >
                  Browse Listings
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white hover:underline transition-colors"
                >
                  How It Works
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white hover:underline transition-colors"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white hover:underline transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white hover:underline transition-colors"
                >
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Support */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Support</h4>
            <ul className="space-y-3 text-gray-300">
              <li>
                <a
                  href="#"
                  className="hover:text-white hover:underline transition-colors"
                >
                  Help Center
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white hover:underline transition-colors"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white hover:underline transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white hover:underline transition-colors"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter Subscription */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Stay Updated</h4>
            <p className="text-gray-300">
              Get the latest news and rental deals sent to your inbox.
            </p>
            <form className="flex w-full max-w-md mx-auto sm:mx-0">
              <input
                type="email"
                placeholder="Enter your email"
                aria-label="Email for newsletter"
                className="h-11 flex-grow rounded-l-md border border-r-0 border-white/30 bg-white/10 px-4 text-white placeholder-gray-400 transition-all focus:border-white/50 focus:bg-white/20 focus:outline-none"
              />
              <button
                type="submit"
                className="h-11 shrink-0 rounded-r-md bg-[#F18C5A] px-5 font-semibold text-white transition-all duration-300 hover:bg-[#E87E4C] active:scale-95"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar with Copyright */}
        <div className="border-t border-white/20 pt-8 text-center">
          <p className="text-sm text-gray-300">
            © 2025 XYZ ESTATE Hub. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
