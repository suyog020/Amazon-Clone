import "./App.css";
import Navbar from "./components/header/Navbar";
import Newnav from "./components/newnavbar/Newnav";
import Maincomponent from "./components/home/Maincomponent";
import Footer from "./components/footer/Footer";
function App() {
  return (
    <>
      <Navbar />
      <Newnav />
      <Maincomponent />
      <Footer />
    </>
  );
}

export default App;
