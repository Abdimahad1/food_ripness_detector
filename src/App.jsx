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
  // WAKE UP BACKEND
  // =====================================================

  useEffect(() => {

    const wakeBackend = async () => {

      try {

        console.log(
          "WAKING BACKEND SERVER..."
        );

        const response =
          await fetch(
            "https://fruit-ripness-backend.onrender.com/health"
          );

        const data =
          await response.json();

        console.log(
          "BACKEND STATUS:",
          data
        );

      } catch (error) {

        console.log(
          "BACKEND WAKE ERROR:"
        );

        console.log(error);

      }

    };

    wakeBackend();

  }, []);

  return (

    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/analyze"
          element={<Analyze />}
        />

        <Route
          path="/about"
          element={<About />}
        />

      </Routes>

    </BrowserRouter>

  );

}

export default App;