import Header from "./component/Header";
import Contact from "./component/Contact";
import Footer from "./component/Footer";
import { useState, useEffect } from 'react'
import Lightbox from "./component/Lightbox";
import axios from 'axios'

function App() {
  // Create State
  const [images, setImages] = useState([]);
  // Fetch Image Information from Cloudinary
  useEffect(() => {
      const fetchImages = async () => {
          const result = await axios(
              `//res.cloudinary.com/seanmorgandesigns/image/list/illustration.json`
          );
          setImages(result.data.resources);
          return(result)
      };

      fetchImages()
  }, [])

  return (
    <div className="App">
      <Header />
      <div className="page_content">
        <Lightbox images={images}/>
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
