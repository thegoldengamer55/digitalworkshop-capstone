import Header from "./components/Header/Header";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/AboutPage";
import Music from "./pages/Music";
import Footer from "./components/Footer/Footer";
import Contact from "./pages/Contact";
import FAQPage from "./pages/FAQPage";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/music" element={<Music />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/faq" element={<FAQPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
