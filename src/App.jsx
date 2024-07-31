import Header from "./components/Header";
import "./styles/layout.css";
import "./index.css";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Editorial from "./pages/Editorial";
import Brand from "./pages/Brand.jsx";
import Graphic from "./pages/Graphic.jsx";
import Mobile from "./pages/Mobile.jsx";
import ScrollToTopButton from "./components/ScrollTopButton.jsx";

function App() {
  return (
    <div>
        <header id="header">
          <Header />
        </header>

        <main id="main">
          <Home />
          <Editorial />
          <Brand />
          <Graphic />
          <Mobile />
          <ScrollToTopButton />

        </main>

        <footer id="footer">
          <Footer />
        </footer>
      </div>
  );
}

export default App;
