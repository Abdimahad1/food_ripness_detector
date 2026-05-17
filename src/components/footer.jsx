import {
  Leaf,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

function Footer() {
  return (
    <footer className="bg-[#07130A] text-white">

      {/* TOP */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14">

          {/* BRAND */}
          <div>

            <div className="flex items-center gap-3">

              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-green-500 to-lime-400 flex items-center justify-center shadow-lg shadow-green-900">
                <Leaf className="w-6 h-6 text-white" />
              </div>

              <h1 className="text-3xl font-extrabold">
                Ripe<span className="text-green-400">AI</span>
              </h1>

            </div>

            <p className="mt-6 text-gray-400 leading-relaxed">
              AI-powered fruit ripeness detection platform helping users
              identify freshness, reduce food waste, and make smarter food
              decisions instantly.
            </p>


          </div>

          {/* QUICK LINKS */}
          <div>

            <h2 className="text-2xl font-bold mb-8">
              Quick Links
            </h2>

            <ul className="space-y-5 text-gray-400">

              <li className="hover:text-green-400 transition duration-300 cursor-pointer">
                Home
              </li>

              <li className="hover:text-green-400 transition duration-300 cursor-pointer">
                Analyze
              </li>

              <li className="hover:text-green-400 transition duration-300 cursor-pointer">
                About
              </li>

              <li className="hover:text-green-400 transition duration-300 cursor-pointer">
                Features
              </li>

            </ul>

          </div>

          {/* FEATURES */}
          <div>

            <h2 className="text-2xl font-bold mb-8">
              Features
            </h2>

            <ul className="space-y-5 text-gray-400">

              <li className="hover:text-green-400 transition duration-300">
                AI Fruit Analysis
              </li>

              <li className="hover:text-green-400 transition duration-300">
                Confidence Detection
              </li>

              <li className="hover:text-green-400 transition duration-300">
                Freshness Monitoring
              </li>

              <li className="hover:text-green-400 transition duration-300">
                Food Waste Reduction
              </li>

            </ul>

          </div>

          {/* CONTACT */}
          <div>

            <h2 className="text-2xl font-bold mb-8">
              Contact
            </h2>

            <div className="space-y-6">

              <div className="flex items-start gap-4">

                <div className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-green-400" />
                </div>

                <div>
                  <p className="text-gray-400">
                    support@ripeai.com
                  </p>
                </div>

              </div>

              <div className="flex items-start gap-4">

                <div className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-green-400" />
                </div>

                <div>
                  <p className="text-gray-400">
                    +252 61 0000000
                  </p>
                </div>

              </div>

              <div className="flex items-start gap-4">

                <div className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-green-400" />
                </div>

                <div>
                  <p className="text-gray-400">
                    Mogadishu, Somalia
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* BOTTOM */}
      <div className="border-t border-white/10">

        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-7 flex flex-col md:flex-row items-center justify-between gap-4">

          <p className="text-gray-500 text-sm text-center md:text-left">
            © 2026 RipeAI. All rights reserved.
          </p>

          <div className="flex items-center gap-8 text-sm text-gray-500">

            <p className="hover:text-green-400 cursor-pointer transition duration-300">
              Privacy Policy
            </p>

            <p className="hover:text-green-400 cursor-pointer transition duration-300">
              Terms of Service
            </p>

          </div>

        </div>

      </div>

    </footer>
  );
}

export default Footer;