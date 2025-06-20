import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Hero from "./components/hero/Hero";

const App = () => {
  return (
    <div className="main-container">
      <Header />
      <Hero />
      <Footer />
    </div>
  );
};

export default App;
