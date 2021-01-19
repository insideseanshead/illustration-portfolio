import Header from "./component/Header";
import Gallery from "./component/Gallery";
import Contact from "./component/Contact";
import Footer from "./component/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="page_content">
        <Gallery />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
