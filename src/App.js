
import "./styles/index.css";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./components/Pages/Home";
import Info from "./components/Pages/Info";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Categories from "./components/Pages/Categories";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/info" element={<Info />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
