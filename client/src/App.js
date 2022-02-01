import "./App.css";
import Navbar from "./components/header/Navbar";
import Newnav from "./components/newnavbar/Newnav";
import Maincomponent from "./components/home/Maincomponent";
import Footer from "./components/footer/Footer";
import SignUp from "./components/auth/SignUp";
import SignIn from "./components/auth/SignIn";
import Cart from "./components/cart/Cart";
import Buynow from "./components/buynow/Buynow";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Newnav />
      <Routes>
        <Route path="/" element={<Maincomponent />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/getproductsone/:id" element={<Cart />} />
        <Route path="/buynow" element={<Buynow />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
