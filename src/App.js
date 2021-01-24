import Header from "./component/Header";
import Contact from "./component/Contact";
import Footer from "./component/Footer";
import { useState, useEffect } from 'react'
import Lightbox from "./component/Lightbox";
import axios from 'axios'
import { CloudinaryContext, Transformation, Image} from 'cloudinary-react'

function App() {
  const [images, setImages] = useState([])

  useEffect(() => {
      const fetchImages = async () => {
          const result = await axios.get(
              `//res.cloudinary.com/seanmorgandesigns/image/list/illustration.json`
          );

          console.log(result.data)
          setImages(result.data);
      };

      fetchImages()
  }, [])

  return (
    <div className="App">
      <Header />
      <div className="page_content">
        {/* <Gallery images={images}/> */}
        <Lightbox images={images}/>
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
