import Header from "./component/Header";
import Gallery from "./component/Gallery";
import Contact from "./component/Contact";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="page_content">
        <Gallery />
        <Contact />
      </div>
    </div>
  );
}

export default App;
