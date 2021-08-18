import About from "./components/About";
import Header from "./components/Header";
import Home from "./components/Home";
import Portifolio from "./components/Portifolio";
import Services from "./components/Services";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <About />
      <Services />
      <Portifolio />
      <Contact />
    </div>
  );
}

export default App;
