import { useNavigate } from "react-router-dom";
import Nav from "../components/Nav.jsx";
import Footer from "../components/footer.jsx";

import {
  Brain,
  Shield,
  Sparkles,
  Leaf,
  BarChart3,
  Globe,
  Cpu,
  Database,
  Zap,
  Award,
  Heart,
  Users,
  TrendingUp,
  CheckCircle2,
} from "lucide-react";

function About() {
  const navigate = useNavigate();

  return (
    <div className="bg-gradient-to-br from-[#F7FAF7] to-white min-h-screen">
      <Nav />

      {/* HERO SECTION */}
      <section className="px-6 pt-24 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-green-200 rounded-full blur-3xl opacity-20"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-white border border-gray-200 px-5 py-2 rounded-full shadow-sm mb-8 animate-in fade-in slide-in-from-top-5 duration-500">
            <Sparkles className="w-4 h-4 text-orange-500" />
            <span className="text-sm text-gray-600 font-medium">
              About Our AI Platform
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl font-extrabold text-[#07130A] leading-tight animate-in fade-in slide-in-from-bottom-5 duration-700">
            Smart Fruit Detection
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-lime-500"> Powered by Gemini AI</span>
          </h1>

          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed animate-in fade-in duration-1000 delay-100">
            RipeAI is an intelligent fruit ripeness detection platform using Google's 
            Gemini AI to help users identify fruit freshness instantly through advanced image analysis.
          </p>
        </div>
      </section>

      {/* MISSION SECTION - NEW */}
      <section className="px-6 pb-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-8 md:p-12 text-center border border-green-100">
            <Heart className="w-12 h-12 text-green-500 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-[#07130A] mb-4">Our Mission</h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              To reduce global food waste by providing accessible AI technology 
              that helps people make informed decisions about fruit freshness 
              and quality.
            </p>
          </div>
        </div>
      </section>

      {/* TECH STACK HIGHLIGHT - NEW */}
      <section className="px-6 pb-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#07130A]">
              Powered by Industry-Leading Technology
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Built with cutting-edge tools and Google's most advanced AI models
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <Cpu className="w-8 h-8 text-green-500" />
                <h3 className="text-xl font-bold text-[#07130A]">Google Gemini AI</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Our platform leverages Google's state-of-the-art Gemini AI model for 
                accurate fruit detection and ripeness analysis. The AI processes visual 
                data including color, texture, size, and surface patterns to determine 
                freshness levels with high confidence.
              </p>
              <div className="mt-4 flex gap-2">
                <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">Vision Capabilities</span>
                <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">Real-time Analysis</span>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <Database className="w-8 h-8 text-green-500" />
                <h3 className="text-xl font-bold text-[#07130A]">Modern Architecture</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Built with React and Node.js, our platform ensures fast, responsive 
                experiences across all devices. The backend is optimized for quick 
                image processing and AI inference, delivering results in seconds.
              </p>
              <div className="mt-4 flex gap-2">
                <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">React 18</span>
                <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">Node.js</span>
                <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">Tailwind CSS</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES CARDS */}
      <section className="px-6 pb-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-orange-500 font-bold tracking-[4px] uppercase text-sm">
              Key Features
            </p>
            <h2 className="mt-4 text-4xl font-extrabold text-[#07130A]">
              What Makes Us Different
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <Brain className="w-6 h-6" />,
                title: "Gemini AI Detection",
                text: "Advanced computer vision powered by Google's Gemini AI for accurate fruit analysis.",
              },
              {
                icon: <Shield className="w-6 h-6" />,
                title: "Privacy Focused",
                text: "Images are processed securely and never stored permanently on our servers.",
              },
              {
                icon: <Leaf className="w-6 h-6" />,
                title: "Reduce Food Waste",
                text: "Help minimize global food waste through smarter freshness detection.",
              },
              {
                icon: <BarChart3 className="w-6 h-6" />,
                title: "Confidence Scores",
                text: "Get detailed prediction confidence and freshness indicators for every analysis.",
              },
              {
                icon: <Globe className="w-6 h-6" />,
                title: "Accessible Anywhere",
                text: "Use the platform easily from any modern device or web browser.",
              },
              {
                icon: <Zap className="w-6 h-6" />,
                title: "Lightning Fast",
                text: "Get results in under 10 seconds with optimized processing pipelines.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-6 border border-gray-100 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-green-500 to-lime-400 flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="mt-5 text-lg font-bold text-[#07130A]">{item.title}</h3>
                <p className="mt-2 text-gray-600 text-sm leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TECHNOLOGIES - UPDATED WITH GEMINI */}
      <section className="px-6 pb-16">
        <div className="max-w-6xl mx-auto bg-white rounded-3xl p-8 md:p-12 border border-gray-100 shadow-xl">
          <div className="text-center mb-10">
            <p className="text-orange-500 font-bold tracking-[4px] uppercase text-sm">
              Technology Stack
            </p>
            <h2 className="mt-4 text-3xl md:text-4xl font-extrabold text-[#07130A]">
              Built with modern tools
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: "React 18", icon: "⚛️", color: "from-cyan-500 to-blue-500" },
              { name: "Node.js", icon: "🟢", color: "from-green-500 to-emerald-500" },
              { name: "Tailwind CSS", icon: "🎨", color: "from-sky-500 to-indigo-500" },
              { name: "Gemini AI", icon: "🤖", color: "from-purple-500 to-pink-500" },
            ].map((tech, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 text-center border border-gray-100 hover:shadow-xl transition-all duration-300"
              >
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  {tech.icon}
                </div>
                <h3 className="font-bold text-[#07130A]">{tech.name}</h3>
                <div className={`w-full h-1 bg-gradient-to-r ${tech.color} rounded-full mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
              </div>
            ))}
          </div>

          <div className="mt-8 p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl text-center">
            <p className="text-sm text-gray-700">
              ✨ <span className="font-semibold">Gemini AI</span> provides advanced vision capabilities for accurate fruit detection and ripeness analysis
            </p>
          </div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="px-6 pb-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center bg-white rounded-2xl p-8 shadow-md">
              <Users className="w-10 h-10 text-green-500 mx-auto mb-3" />
              <p className="text-3xl font-bold text-[#07130A]">1000+</p>
              <p className="text-gray-600 mt-1">Active Users</p>
            </div>
            <div className="text-center bg-white rounded-2xl p-8 shadow-md">
              <TrendingUp className="w-10 h-10 text-green-500 mx-auto mb-3" />
              <p className="text-3xl font-bold text-[#07130A]">95%</p>
              <p className="text-gray-600 mt-1">Accuracy Rate</p>
            </div>
            <div className="text-center bg-white rounded-2xl p-8 shadow-md">
              <CheckCircle2 className="w-10 h-10 text-green-500 mx-auto mb-3" />
              <p className="text-3xl font-bold text-[#07130A]">50+</p>
              <p className="text-gray-600 mt-1">Fruit Types</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="px-6 pb-24">
        <div className="max-w-4xl mx-auto text-center">
          <div className="rounded-3xl bg-gradient-to-r from-green-600 to-lime-500 py-16 px-8 shadow-2xl shadow-green-200">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white">
              Ready to try it yourself?
            </h2>
            <p className="mt-4 text-white/90 text-lg">
              Experience AI-powered fruit ripeness detection
            </p>
            <button
              onClick={() => navigate("/analyze")}
              className="mt-8 bg-white text-green-600 px-8 py-3 rounded-xl font-bold hover:scale-105 transition-all duration-300 shadow-lg inline-flex items-center gap-2"
            >
              Start Analyzing Now →
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default About;