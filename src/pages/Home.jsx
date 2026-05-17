import { useNavigate } from "react-router-dom";
import Nav from "../components/nav.jsx";
import Footer from "../components/footer.jsx";

import {
  Upload,
  Brain,
  CheckCircle2,
  Sparkles,
  Shield,
  BarChart3,
  Leaf,
  ImagePlus,
  Zap,
  Clock,
  TrendingUp,
  Award,
  Camera,
  Database,
  Cpu,
} from "lucide-react";

function Home() {
  const navigate = useNavigate();

  const handleStartAnalysis = () => {
    navigate("/analyze");
  };

  return (
    <div className="bg-gradient-to-br from-[#F7FAF7] to-white min-h-screen">
      <Nav />

      {/* HERO SECTION - MODERN & BOLD */}
      <section className="w-full py-20 px-4 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-green-200 rounded-full blur-3xl opacity-20"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-lime-200 rounded-full blur-3xl opacity-20"></div>
        </div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-white border border-gray-200 px-5 py-2 rounded-full shadow-sm mb-8 animate-in fade-in slide-in-from-top-5 duration-500">
            <Sparkles className="w-4 h-4 text-orange-500" />
            <span className="text-sm text-gray-600 font-medium">
              Powered by Google Gemini AI
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight text-[#07130A] animate-in fade-in slide-in-from-bottom-5 duration-700">
            Know if your fruit is{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-lime-500">
              ripe
            </span>{" "}
            in seconds.
          </h1>

          <p className="max-w-3xl mx-auto mt-6 text-lg md:text-xl text-gray-600 leading-relaxed animate-in fade-in duration-1000 delay-100">
            Upload a fruit image and let Google's Gemini AI instantly detect 
            ripeness levels with confidence scores and smart recommendations.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mt-10 animate-in fade-in duration-1000 delay-200">
            <button
              onClick={handleStartAnalysis}
              className="bg-gradient-to-r from-green-500 to-lime-400 text-white px-10 py-4 rounded-2xl font-bold text-lg shadow-xl shadow-green-200 hover:scale-105 transition-all duration-300 flex items-center gap-2"
            >
              <Camera className="w-5 h-5" />
              Start Analyzing
            </button>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-8 mt-10 text-sm text-gray-500 animate-in fade-in duration-1000 delay-300">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-500" />
              <span>No signup required</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-green-500" />
              <span>Results in seconds</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-green-500" />
              <span>Free to try</span>
            </div>
          </div>
        </div>
      </section>

      {/* STATS SECTION - NEW */}
      <section className="px-4 py-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-green-100 text-green-600 mb-4">
                <TrendingUp className="w-8 h-8" />
              </div>
              <p className="text-3xl font-bold text-[#07130A]">95%+</p>
              <p className="text-gray-600 mt-2">Detection Accuracy</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-green-100 text-green-600 mb-4">
                <Clock className="w-8 h-8" />
              </div>
              <p className="text-3xl font-bold text-[#07130A]">&lt;10s</p>
              <p className="text-gray-600 mt-2">Average Analysis Time</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-green-100 text-green-600 mb-4">
                <Award className="w-8 h-8" />
              </div>
              <p className="text-3xl font-bold text-[#07130A]">50+</p>
              <p className="text-gray-600 mt-2">Fruit Types Supported</p>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS - MODERNIZED */}
      <section className="px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-orange-500 font-bold tracking-[4px] uppercase text-sm">
              Simple Process
            </p>
            <h2 className="mt-4 text-4xl md:text-5xl font-extrabold text-[#07130A]">
              Three simple steps
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Get accurate fruit ripeness analysis in less than 10 seconds
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Upload className="w-8 h-8" />,
                title: "Upload Image",
                description: "Take a photo or upload from gallery",
                details: "Supports JPG, PNG, WEBP formats",
              },
              {
                icon: <Cpu className="w-8 h-8" />,
                title: "AI Analysis",
                description: "Gemini AI processes your image",
                details: "Analyzes color, texture, and quality",
              },
              {
                icon: <Brain className="w-8 h-8" />,
                title: "Get Results",
                description: "Receive detailed freshness report",
                details: "Ripeness level & smart recommendations",
              },
            ].map((step, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-3xl p-10 border border-gray-100 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
              >
                <div className="absolute -top-4 -left-4 w-12 h-12 rounded-2xl bg-gradient-to-r from-green-500 to-lime-400 text-white flex items-center justify-center text-xl font-bold shadow-lg">
                  {index + 1}
                </div>
                <div className="w-16 h-16 rounded-2xl bg-green-100 flex items-center justify-center text-green-500 group-hover:scale-110 transition-transform duration-300">
                  {step.icon}
                </div>
                <h3 className="mt-6 text-2xl font-bold text-[#07130A]">{step.title}</h3>
                <p className="mt-3 text-gray-600 font-medium">{step.description}</p>
                <p className="mt-2 text-sm text-gray-400">{step.details}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES - ENHANCED */}
      <section className="px-4 py-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-orange-500 font-bold tracking-[4px] uppercase text-sm">
              Features
            </p>
            <h2 className="mt-4 text-4xl md:text-5xl font-extrabold text-[#07130A]">
              Built for everyday freshness
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Advanced AI technology to help you make smarter food decisions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Zap className="w-6 h-6" />,
                title: "Lightning Fast",
                text: "Get accurate ripeness analysis in under 10 seconds.",
                color: "from-yellow-500 to-orange-500",
              },
              {
                icon: <Shield className="w-6 h-6" />,
                title: "Privacy First",
                text: "Your images are processed securely and never stored.",
                color: "from-blue-500 to-cyan-500",
              },
              {
                icon: <Brain className="w-6 h-6" />,
                title: "Gemini AI Powered",
                text: "Powered by Google's latest Gemini AI technology.",
                color: "from-purple-500 to-pink-500",
              },
              {
                icon: <BarChart3 className="w-6 h-6" />,
                title: "Confidence Scores",
                text: "Know exactly how confident the AI is about each result.",
                color: "from-green-500 to-lime-500",
              },
              {
                icon: <Leaf className="w-6 h-6" />,
                title: "Reduce Food Waste",
                text: "Make smarter decisions and reduce kitchen waste.",
                color: "from-emerald-500 to-teal-500",
              },
              {
                icon: <Camera className="w-6 h-6" />,
                title: "Any Fruit",
                text: "Analyze bananas, apples, mangoes, oranges and more.",
                color: "from-red-500 to-orange-500",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 border border-gray-100 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${feature.color} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                <h3 className="mt-6 text-xl font-bold text-[#07130A]">{feature.title}</h3>
                <p className="mt-3 text-gray-600 leading-relaxed">{feature.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DEMO PREVIEW SECTION - REPLACES UPLOAD SECTION */}
      <section className="px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-r from-green-600 to-lime-500 rounded-3xl overflow-hidden shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-8 md:p-12 text-white">
                <Sparkles className="w-8 h-8 mb-4" />
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Ready to check your fruit's freshness?
                </h2>
                <p className="text-white/90 mb-6 leading-relaxed">
                  Join thousands of users using AI to reduce food waste and make smarter decisions about their fruit.
                </p>
                <button
                  onClick={handleStartAnalysis}
                  className="bg-white text-green-600 px-8 py-3 rounded-xl font-bold hover:scale-105 transition-all duration-300 shadow-lg"
                >
                  Try It Now →
                </button>
                <div className="mt-6 flex gap-4 text-sm text-white/80">
                  <span>✓ No credit card</span>
                  <span>✓ Free to use</span>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-8 md:p-12 flex items-center justify-center">
                <div className="text-center">
                  <div className="bg-white/20 rounded-2xl p-6 backdrop-blur-sm">
                    <div className="text-6xl mb-3">🍎</div>
                    <p className="text-white font-semibold">Sample Analysis</p>
                    <div className="mt-3 inline-flex px-3 py-1 bg-green-500 rounded-full text-xs font-bold">
                      94% Confidence
                    </div>
                    <p className="text-white/80 text-sm mt-3">Ripe • Ready to eat</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION - SIMPLIFIED */}
      <section className="px-4 pb-24">
        <div className="max-w-4xl mx-auto text-center">
          <div className="rounded-3xl bg-gradient-to-r from-green-500 to-lime-400 py-16 px-8 shadow-2xl shadow-green-200">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white">
              Start analyzing fruits now
            </h2>
            <p className="mt-4 text-white/90 text-lg">
              Experience the power of AI fruit ripeness detection
            </p>
            <button
              onClick={handleStartAnalysis}
              className="mt-8 bg-white text-green-600 px-10 py-4 rounded-2xl font-bold text-lg hover:scale-105 transition-all duration-300 shadow-lg inline-flex items-center gap-2"
            >
              <Camera className="w-5 h-5" />
              Analyze a Fruit
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Home;