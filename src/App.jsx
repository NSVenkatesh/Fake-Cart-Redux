import "./App.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Navbar from "./components/Navbar";
import NotFound from "./pages/NotFound";
import ScrollTop from "./components/ScrollTop";

function App() {
  return (
    <Router>
      <Navbar />
      <ScrollTop />
      <Routes>
        <Route path="/" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
