import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/home';
import Projects from './pages/Projects';
import CaseStudy from './pages/CaseStudy';
import TimelinePage from './pages/TimelinePage';
import About from './pages/About';
import Contact from './pages/Contact';

// Scroll to top on navigation
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);
  return null;
}

function AppLayout() {
  return (
    <div className="min-h-screen bg-primary-bg flex flex-col">
      <ScrollToTop />
      <Navbar />
      <div className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<CaseStudy />} />
          <Route path="/timeline" element={<TimelinePage />} />
          <Route path="/about" element={<About />} />
          {/* Fallback */}
          <Route path="*" element={<Home />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    // Wrap AppLayout in HashRouter instead of BrowserRouter
    <HashRouter>
      <AppLayout />
    </HashRouter>
  );
}