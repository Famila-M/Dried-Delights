import "./App.css";
import AboutUs from "./components/AboutUs";
import AppBar from "./components/AppBar";
import Banner from "./components/Banner";
import ContactUs from "./components/ContactUs";
import Products from "./components/Products";
import SpecialWeek from "./components/SpecialWeek";

function App() {
  return (
    <>
      <AppBar />
      <Banner />
      <Products />
      <SpecialWeek />
      <AboutUs />
      <ContactUs />
      <div className="text-center my-3 text-primary small">
        <i class="bi bi-c-circle"></i> Dried Delights 2024 All rights reserved.
      </div>
    </>
  );
}

export default App;
