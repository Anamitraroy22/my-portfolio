import { BrowserRouter, useLocation } from "react-router-dom";
import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
} from "./components";
import MasterCanvas from "./components/canvas/MasterCanvas";

const AppContent = () => {
  const location = useLocation();
  const path = location.pathname;

  return (
    // Removed bg-primary from here. The stars canvas will now be visible
    // behind all sections that do not have their own opaque background.
    <div className="relative z-0"> 
      {/* 🚀 Hero section (no stars here, uses its own static background) */}
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navbar />
        <Hero />
      </div>

      {/* ⭐ Scrollable sections (Stars visible via MasterCanvas if their backgrounds are transparent) */}
      <About />
      <Experience />
      <Tech />
      <Works />
      <Feedbacks />
      <Contact />

      {/* 🌌 Stars Canvas behind all except Hero */}
      {/* This MasterCanvas is fixed to the viewport and sits at z-index -1 */}
      <MasterCanvas />
    </div>
  );
};

const App = () => (
  <BrowserRouter>
    <AppContent />
  </BrowserRouter>
);

export default App;