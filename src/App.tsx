import { BrowserRouter as Router, Routes, Route } from "react-router";
import Header from "./components/Header";
import Home from "./pages/HomePage";
import About from "./pages/AboutPage";
import Product from "./pages/ProductsPage";
import Contacts from "./pages/ContactsPage";
import Accounts from "./pages/AccountsPage";
import Cart from "./pages/CartPage";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Product />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/account" element={<Accounts />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
}

export default App;
