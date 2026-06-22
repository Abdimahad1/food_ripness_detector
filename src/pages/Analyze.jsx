// pages/Analyze.jsx
import { useState, useEffect, useRef } from "react";

import Nav from "../components/nav.jsx";
import Footer from "../components/footer.jsx";

// IMPORT YOUR CUSTOM MODEL SERVICE
import { analyzeFruitImage } from "../services/fruitDetectionService.js";

import {
  UploadCloud,
  ImagePlus,
  Sparkles,
  AlertCircle,
  CheckCircle2,
  Brain,
  BarChart3,
  LoaderCircle,
  Apple,
  ScanSearch,
  Cpu,
  Search,
  BadgeCheck,
  RefreshCw,
  Zap,
  Shield,
  Info,
  X,
  Activity,
  Database,
  Microscope,
  BarChart,
  ThumbsUp,
  Cpu as CpuIcon,
} from "lucide-react";

function Analyze() {
  // =====================================================
  // STATES
  // =====================================================
  const [selectedImage, setSelectedImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");
  const [errorType, setErrorType] = useState("");
  const [currentStep, setCurrentStep] = useState(0);
  const [showProcessingModal, setShowProcessingModal] = useState(false);
  const [showResultModal, setShowResultModal] = useState(false);
  
  const stepsContainerRef = useRef(null);
  const activeStepRef = useRef(null);
  
  const [requestCount, setRequestCount] = useState(0);
  const [lastRequestTime, setLastRequestTime] = useState(null);
  const [showQuotaWarning, setShowQuotaWarning] = useState(false);
  
  // Load request count from localStorage
  useEffect(() => {
    const storedCount = localStorage.getItem("fruitAnalysisRequests");
    const storedDate = localStorage.getItem("fruitAnalysisDate");
    const today = new Date().toDateString();
    
    if (storedDate === today && storedCount) {
      setRequestCount(parseInt(storedCount));
    } else {
      localStorage.setItem("fruitAnalysisRequests", "0");
      localStorage.setItem("fruitAnalysisDate", today);
      setRequestCount(0);
    }
  }, []);
  
  useEffect(() => {
    if (showProcessingModal && activeStepRef.current) {
      activeStepRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }, [currentStep, showProcessingModal]);
  
  const checkDailyLimit = () => {
    const DAILY_LIMIT = 50;
    if (requestCount >= DAILY_LIMIT) {
      setError("You've reached today's analysis limit. Please try again tomorrow! 🌙");
      setErrorType("QUOTA_DAILY");
      return false;
    }
    if (requestCount >= DAILY_LIMIT - 5) {
      setShowQuotaWarning(true);
    }
    return true;
  };
  
  const incrementRequestCount = () => {
    const newCount = requestCount + 1;
    setRequestCount(newCount);
    localStorage.setItem("fruitAnalysisRequests", newCount.toString());
  };

  // =====================================================
  // ANALYSIS STEPS
  // =====================================================
  const analysisSteps = [
    { 
      title: "Processing Image", 
      icon: Cpu, 
      time: 800,
      description: "Preparing image for analysis",
      details: "Optimizing image resolution and preparing data..."
    },
    { 
      title: "Loading Trained Model", 
      icon: CpuIcon, 
      time: 1000,
      description: "Loading your custom model",
      details: "Model accuracy: 86.84%"
    },
    { 
      title: "Analyzing Ripeness", 
      icon: Search, 
      time: 1500,
      description: "Detecting fruit condition",
      details: "Analyzing color, texture, and patterns..."
    },
    { 
      title: "Generating Results", 
      icon: Brain, 
      time: 1200,
      description: "Creating recommendation",
      details: "Based on ripeness analysis..."
    },
    { 
      title: "Finalizing", 
      icon: BadgeCheck, 
      time: 800,
      description: "Preparing your report",
      details: "Compiling all data..."
    },
  ];

  // =====================================================
  // HANDLE IMAGE
  // =====================================================
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    
    if (file.size > 10 * 1024 * 1024) {
      setError("Image too large! Please upload an image under 10MB.");
      setErrorType("FILE_TOO_LARGE");
      return;
    }
    
    const validTypes = ["image/jpeg", "image/jpg", "image/png", "image/webp"];
    if (!validTypes.includes(file.type)) {
      setError("Invalid file type! Please upload JPG, PNG, or WEBP images.");
      setErrorType("INVALID_TYPE");
      return;
    }
    
    setSelectedImage(file);
    setPreview(URL.createObjectURL(file));
    setResult(null);
    setError("");
    setErrorType("");
    setShowQuotaWarning(false);
    setShowResultModal(false);
    setShowProcessingModal(false);
  };

  // =====================================================
  // SIMULATE PROCESSING
  // =====================================================
  const simulateProcessing = async () => {
    for (let i = 0; i < analysisSteps.length; i++) {
      setCurrentStep(i);
      const delay = analysisSteps[i].time + Math.random() * 300;
      await new Promise(resolve => setTimeout(resolve, delay));
    }
  };

  // =====================================================
  // HANDLE ANALYZE
  // =====================================================
  const handleAnalyze = async () => {
    if (!selectedImage) {
      setError("Please select an image first! 📸");
      setErrorType("NO_IMAGE");
      return;
    }
    
    if (!checkDailyLimit()) return;
    
    if (lastRequestTime && Date.now() - lastRequestTime < 2000) {
      const waitTime = Math.ceil((2000 - (Date.now() - lastRequestTime)) / 1000);
      setError(`Please wait ${waitTime} seconds before another analysis. 🕐`);
      setErrorType("RATE_LIMIT");
      return;
    }

    try {
      setLoading(true);
      setError("");
      setErrorType("");
      setCurrentStep(0);
      setLastRequestTime(Date.now());
      setShowResultModal(false);
      setShowProcessingModal(true);

      const processingPromise = simulateProcessing();
      const apiPromise = analyzeFruitImage(selectedImage);

      const [apiResponse] = await Promise.all([
        apiPromise,
        processingPromise
      ]);

      await new Promise(resolve => setTimeout(resolve, 500));
      
      incrementRequestCount();

      const responseData = apiResponse.data || apiResponse;
      
      setResult({
        fruit: responseData.fruit || 'Fruit',
        ripeness: responseData.ripeness || 'unknown',
        confidence: responseData.confidence || 0,
        recommendation: responseData.recommendation || 'No recommendation available',
        details: responseData.details || 'Analysis complete',
        status: responseData.status || 'Unknown',
        emoji: responseData.emoji || '🍎',
        all_scores: responseData.all_scores || {},
        model: responseData.model || 'Custom CNN (86.84%)'
      });
      
      setLoading(false);
      setShowProcessingModal(false);
      setShowResultModal(true);
      setShowQuotaWarning(false);

    } catch (err) {
      console.error("Analysis Error:", err);
      setLoading(false);
      setShowProcessingModal(false);
      
      const errorMessage = err.message || err.toString();
      
      if (errorMessage.includes("network") || errorMessage.includes("fetch") || errorMessage.includes("Failed to fetch")) {
        setErrorType("NETWORK_ERROR");
        setError("🌐 Network error! Please check if backend server is running on http://localhost:5000");
      } else if (errorMessage.includes("timeout")) {
        setErrorType("TIMEOUT");
        setError("⏰ Request timed out. Please try again with a smaller image.");
      } else if (errorMessage.includes("ML server")) {
        setErrorType("ML_SERVER_ERROR");
        setError("🔬 ML server not available. Please make sure Python server is running.");
      } else {
        setErrorType("UNKNOWN");
        setError("❌ Failed to analyze image. Please try again.");
      }
    }
  };

  // =====================================================
  // RESET EVERYTHING
  // =====================================================
  const handleReset = () => {
    setSelectedImage(null);
    setPreview(null);
    setResult(null);
    setError("");
    setErrorType("");
    setCurrentStep(0);
    setShowQuotaWarning(false);
    setShowResultModal(false);
    setShowProcessingModal(false);
  };

  // =====================================================
  // HELPERS
  // =====================================================
  const getRipenessColor = (ripeness) => {
    switch(ripeness?.toLowerCase()) {
      case "ripe": return "bg-green-100 text-green-700 border-green-200";
      case "unripe": return "bg-yellow-100 text-yellow-700 border-yellow-200";
      case "overripe": return "bg-orange-100 text-orange-700 border-orange-200";
      case "rotten": return "bg-red-100 text-red-700 border-red-200";
      default: return "bg-gray-100 text-gray-700 border-gray-200";
    }
  };

  const getRipenessEmoji = (ripeness) => {
    switch(ripeness?.toLowerCase()) {
      case "ripe": return "🍎✨";
      case "unripe": return "🍏🟢";
      case "overripe": return "🍌🟤";
      case "rotten": return "🍊💀";
      default: return "🍎";
    }
  };

  return (
    <div className="bg-gradient-to-br from-[#F7FAF7] to-white min-h-screen">
      <Nav />

      {/* HERO */}
      <section className="px-4 pt-20 pb-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white border border-gray-200 px-4 py-1.5 rounded-full shadow-sm mb-6">
            <Sparkles className="w-3.5 h-3.5 text-green-500" />
            <span className="text-xs text-gray-600 font-medium">Trained Model • 86.84% Accuracy</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-extrabold text-[#07130A] leading-tight">
            Analyze Fruit Freshness
            <span className="text-green-500"> Instantly</span>
          </h1>

          <p className="mt-4 text-base text-gray-600 max-w-2xl mx-auto">
            Upload a fruit image and let our custom model determine ripeness, freshness, and provide smart recommendations.
          </p>
          
          <div className="mt-4 inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-3 py-1.5 rounded-full border border-gray-200 text-sm">
            <BarChart3 className="w-3.5 h-3.5 text-green-500" />
            <span className="text-gray-600">
              Today: <span className="font-bold text-green-600">{requestCount}</span>
              <span className="text-gray-400">/50</span>
            </span>
            <span className="text-xs text-gray-400 ml-2">|</span>
            <span className="text-xs text-green-600">🧠 Trained Model</span>
          </div>
        </div>
      </section>

      {/* MAIN SECTION */}
      <section className="px-4 pb-20">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl border border-gray-100 shadow-lg p-6">
            
            {/* UPLOAD BOX */}
            <div className="border-2 border-dashed border-gray-200 rounded-xl p-6 text-center hover:border-green-400 transition duration-300">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-green-500 to-lime-400 flex items-center justify-center mx-auto shadow-lg shadow-green-200">
                <UploadCloud className="text-white w-8 h-8" />
              </div>

              <h2 className="mt-4 text-xl font-bold text-[#07130A]">Upload Fruit Image</h2>
              <p className="mt-2 text-sm text-gray-500">Choose a fruit image for analysis</p>

              <input
                type="file"
                accept="image/jpeg,image/jpg,image/png,image/webp"
                id="imageUpload"
                className="hidden"
                onChange={handleImageChange}
              />

              <label
                htmlFor="imageUpload"
                className="mt-4 inline-block cursor-pointer bg-gradient-to-r from-green-500 to-lime-400 text-white px-6 py-2.5 rounded-xl font-semibold text-sm shadow-lg hover:scale-105 transition duration-300"
              >
                Choose Image
              </label>
            </div>

            {/* IMAGE INFO */}
            <div className="mt-5 grid grid-cols-3 gap-3">
              <div className="bg-[#F7FAF7] rounded-xl p-3 text-center">
                <ImagePlus className="w-4 h-4 text-green-500 mx-auto mb-1" />
                <p className="text-xs text-gray-600">JPG, PNG</p>
              </div>
              <div className="bg-[#F7FAF7] rounded-xl p-3 text-center">
                <Brain className="w-4 h-4 text-green-500 mx-auto mb-1" />
                <p className="text-xs text-gray-600">Custom Model</p>
              </div>
              <div className="bg-[#F7FAF7] rounded-xl p-3 text-center">
                <Shield className="w-4 h-4 text-green-500 mx-auto mb-1" />
                <p className="text-xs text-gray-600">86.84% Acc</p>
              </div>
            </div>

            {/* BUTTONS */}
            <div className="flex gap-3 mt-5">
              <button
                onClick={handleAnalyze}
                disabled={!selectedImage || loading}
                className={`flex-1 py-3 rounded-xl font-semibold text-white transition duration-300 ${
                  !selectedImage || loading
                    ? "bg-gray-300 cursor-not-allowed"
                    : "bg-gradient-to-r from-green-500 to-lime-400 hover:scale-[1.02] shadow-md"
                }`}
              >
                {loading ? (
                  <div className="flex items-center justify-center gap-2">
                    <LoaderCircle className="animate-spin w-4 h-4" />
                    <span className="text-sm">Analyzing...</span>
                  </div>
                ) : (
                  <span className="text-sm">Analyze Fruit</span>
                )}
              </button>
              
              {preview && !loading && (
                <button
                  onClick={handleReset}
                  className="px-4 py-3 rounded-xl font-semibold text-gray-600 bg-gray-100 hover:bg-gray-200 transition duration-300"
                >
                  <RefreshCw className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* QUOTA WARNING */}
            {showQuotaWarning && requestCount >= 45 && !loading && (
              <div className="mt-4 bg-orange-50 border border-orange-200 rounded-xl p-3">
                <div className="flex items-center gap-2">
                  <Info className="w-4 h-4 text-orange-500" />
                  <p className="text-xs text-orange-700">Used {requestCount}/50 today</p>
                </div>
              </div>
            )}

            {/* ERROR DISPLAY */}
            {error && (
              <div className={`mt-4 rounded-xl p-3 ${
                errorType === "QUOTA_EXCEEDED" || errorType === "DAILY_LIMIT" || errorType === "QUOTA_DAILY"
                  ? "bg-orange-50 border border-orange-200"
                  : "bg-red-50 border border-red-100"
              }`}>
                <div className="flex items-start gap-2">
                  <AlertCircle className={`w-4 h-4 mt-0.5 ${
                    errorType === "QUOTA_EXCEEDED" || errorType === "DAILY_LIMIT" || errorType === "QUOTA_DAILY"
                      ? "text-orange-500"
                      : "text-red-500"
                  }`} />
                  <p className="text-xs text-gray-700 flex-1">{error}</p>
                </div>
              </div>
            )}

            {/* IMAGE PREVIEW */}
            {preview && !loading && !result && (
              <div className="mt-5">
                <div className="bg-[#F7FAF7] rounded-xl overflow-hidden border border-gray-100">
                  <img src={preview} alt="Preview" className="w-full h-40 object-cover" />
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ===================================================== */}
      {/* PROCESSING MODAL */}
      {/* ===================================================== */}
      {showProcessingModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-in fade-in duration-300">
          <div className="bg-white rounded-2xl max-w-lg w-full shadow-2xl animate-in zoom-in-95 duration-300">
            
            <div className="bg-gradient-to-r from-green-500 to-lime-400 rounded-t-2xl px-6 py-4">
              <div className="flex items-center gap-3">
                <Activity className="w-6 h-6 text-white animate-pulse" />
                <div>
                  <h2 className="text-lg font-bold text-white">Processing</h2>
                  <p className="text-xs text-white/80">Analyzing your fruit image...</p>
                </div>
              </div>
            </div>

            <div className="p-6">
              <div className="mb-6">
                <div className="flex justify-between text-xs text-gray-500 mb-1">
                  <span>Progress</span>
                  <span>{Math.round((currentStep + 1) / analysisSteps.length * 100)}%</span>
                </div>
                <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-green-500 to-lime-400 rounded-full transition-all duration-500"
                    style={{ width: `${(currentStep + 1) / analysisSteps.length * 100}%` }}
                  ></div>
                </div>
              </div>

              <div ref={stepsContainerRef} className="space-y-3 max-h-96 overflow-y-auto pr-2 scroll-smooth">
                {analysisSteps.map((step, index) => {
                  const Icon = step.icon;
                  const isCompleted = index < currentStep;
                  const isActive = index === currentStep;
                  
                  return (
                    <div
                      key={index}
                      ref={isActive ? activeStepRef : null}
                      className={`relative rounded-xl p-3 transition-all duration-300 ${
                        isActive 
                          ? "bg-green-50 border-l-4 border-green-500 shadow-md" 
                          : isCompleted
                          ? "bg-gray-50"
                          : "bg-white opacity-60"
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <div
                          className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${
                            isActive
                              ? "bg-green-500 text-white animate-pulse"
                              : isCompleted
                              ? "bg-green-100 text-green-600"
                              : "bg-gray-100 text-gray-400"
                          }`}
                        >
                          {isCompleted ? <CheckCircle2 className="w-5 h-5" /> : <Icon className="w-5 h-5" />}
                        </div>
                        
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <h3 className={`font-semibold text-sm ${
                              isActive ? "text-green-700" : isCompleted ? "text-gray-700" : "text-gray-500"
                            }`}>
                              {step.title}
                            </h3>
                            {isActive && (
                              <LoaderCircle className="w-4 h-4 text-green-500 animate-spin" />
                            )}
                            {isCompleted && (
                              <CheckCircle2 className="w-4 h-4 text-green-500" />
                            )}
                          </div>
                          <p className="text-xs text-gray-500 mt-1">{step.description}</p>
                          {isActive && (
                            <p className="text-xs text-green-600 mt-1 font-mono animate-pulse">
                              {step.details}
                            </p>
                          )}
                          {isCompleted && (
                            <p className="text-xs text-green-600 mt-1">✓ Complete</p>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-6 p-3 bg-blue-50 rounded-xl">
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-blue-500" />
                  <p className="text-xs text-blue-700">
                    Using trained model with 86.84% accuracy
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ===================================================== */}
      {/* RESULT MODAL */}
      {/* ===================================================== */}
      {showResultModal && result && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-in fade-in duration-300 overflow-y-auto">
          <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-in zoom-in-95 duration-300">
            
            <div className="sticky top-0 bg-white border-b border-gray-100 px-6 py-4 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <Brain className="w-6 h-6 text-green-500" />
                <h2 className="text-xl font-bold text-[#07130A]">Analysis Complete!</h2>
              </div>
              <button
                onClick={() => setShowResultModal(false)}
                className="p-1 hover:bg-gray-100 rounded-lg transition"
              >
                <X className="w-5 h-5 text-gray-500" />
              </button>
            </div>

            <div className="p-6 space-y-6">
              
              <div className="text-center">
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-100 to-emerald-100 px-4 py-2 rounded-full">
                  <Sparkles className="w-4 h-4 text-green-600" />
                  <span className="text-sm font-semibold text-green-700">Analysis Completed Successfully!</span>
                </div>
              </div>

              {/* Image and Result */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-[#F7FAF7] rounded-xl overflow-hidden">
                  <img src={preview} alt="Analyzed fruit" className="w-full h-48 object-cover" />
                </div>
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-4 text-center flex flex-col justify-center">
                  <Apple className="w-10 h-10 text-green-600 mx-auto mb-2" />
                  <p className="text-sm text-gray-500">Detected Fruit</p>
                  <p className="text-3xl font-extrabold text-[#07130A] capitalize">{result.fruit || "Fruit"}</p>
                  <div className={`inline-flex self-center mt-3 px-3 py-1 rounded-full text-sm font-semibold ${getRipenessColor(result.ripeness)}`}>
                    {getRipenessEmoji(result.ripeness)} {result.ripeness || "Unknown"}
                  </div>
                  <p className="text-xs text-gray-400 mt-2">🧠 {result.model || 'Custom CNN'}</p>
                </div>
              </div>

              {/* Confidence */}
              <div className="bg-[#F7FAF7] rounded-xl p-5">
                <div className="flex justify-between items-center mb-3">
                  <div className="flex items-center gap-2">
                    <BarChart className="w-5 h-5 text-green-600" />
                    <h3 className="font-bold text-[#07130A]">Confidence Score</h3>
                  </div>
                  <span className="text-3xl font-bold text-green-600">{result.confidence || 0}%</span>
                </div>
                <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    style={{ width: `${result.confidence || 0}%` }}
                    className="h-full bg-gradient-to-r from-green-500 to-lime-400 rounded-full transition-all duration-1000"
                  ></div>
                </div>
                <p className="text-xs text-gray-500 mt-2">
                  {result.confidence >= 90 ? "🎯 Very high confidence - Results are highly reliable" : 
                   result.confidence >= 70 ? "👍 Good confidence - Results are likely accurate" : 
                   "⚠️ Moderate confidence - Consider retrying with a clearer image"}
                </p>
              </div>

              {/* Recommendation */}
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-5 border border-green-100">
                <div className="flex items-center gap-2 mb-3">
                  <ThumbsUp className="w-5 h-5 text-green-600" />
                  <h3 className="font-bold text-[#07130A]">Recommendation</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">{result.recommendation || "No recommendation available"}</p>
              </div>

              {/* Details */}
              <div className="bg-orange-50 rounded-xl p-5 border border-orange-100">
                <div className="flex items-center gap-2 mb-3">
                  <Microscope className="w-5 h-5 text-orange-500" />
                  <h3 className="font-bold text-[#07130A]">Detection Details</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">{result.details || "No details available"}</p>
              </div>

              {/* Additional Info */}
              <div className="bg-blue-50 rounded-xl p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Database className="w-4 h-4 text-blue-500" />
                  <p className="text-xs font-semibold text-blue-700">Analysis Information</p>
                </div>
                <div className="grid grid-cols-2 gap-3 text-xs text-gray-600">
                  <div>Powered by: Trained Model</div>
                  <div>Accuracy: 86.84%</div>
                  <div>Timestamp: {new Date().toLocaleTimeString()}</div>
                  <div>Status: Complete ✓</div>
                </div>
                {result.all_scores && (
                  <div className="mt-2 pt-2 border-t border-blue-200">
                    <p className="text-xs font-semibold text-blue-700 mb-1">All Scores:</p>
                    <div className="flex gap-4 text-xs">
                      {Object.entries(result.all_scores).map(([key, value]) => (
                        <span key={key} className="text-gray-600">
                          {key}: {(value * 100).toFixed(1)}%
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="sticky bottom-0 bg-white border-t border-gray-100 px-6 py-4 flex gap-3">
              <button
                onClick={() => {
                  setShowResultModal(false);
                  handleReset();
                }}
                className="flex-1 py-2.5 rounded-xl bg-gradient-to-r from-green-500 to-lime-400 text-white font-semibold hover:scale-[1.02] transition shadow-md"
              >
                Analyze Another Fruit
              </button>
              <button
                onClick={() => setShowResultModal(false)}
                className="flex-1 py-2.5 rounded-xl border border-gray-300 text-gray-700 font-semibold hover:bg-gray-50 transition"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}

export default Analyze;