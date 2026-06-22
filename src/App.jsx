import { useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Home from "./pages/Home.jsx";
import Analyze from "./pages/Analyze.jsx";
import About from "./pages/About.jsx";

function App() {
  // =====================================================
  // NO NEED TO WAKE BACKEND - Just log the mode
  // =====================================================

  useEffect(() => {
    const isLocalhost = window.location.hostname === 'localhost' || 
                        window.location.hostname === '127.0.0.1';
    
    console.log("===================================");
    console.log("APP STARTED IN:", isLocalhost ? "OFFLINE (LOCAL) MODE" : "ONLINE MODE");
    console.log("Frontend URL:", window.location.origin);
    console.log("===================================");
    
    if (isLocalhost) {
      console.log("Make sure your backend is running on: http://localhost:5000");
    }
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/analyze" element={<Analyze />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;