import Header from "./component/Header";
import Contact from "./component/Contact";
import Footer from "./component/Footer";
import { useState } from 'react'
import Lightbox from "./component/Lightbox";

function App() {
  const [images, setImages] = useState([
    {
        id: 1,
        image:'https://seanmorganillustration.com/images/main/m_hellblazer.jpg',
        alt:'Illustration Based on Gaslands Game.'
    },
    {
        id: 2,
        image:'https://seanmorganillustration.com/images/main/m_fourarm.jpg',
        alt:'Illustration for a draw in your style competition.'
    },
    {
        id: 3,
        image:'https://seanmorganillustration.com/images/main/m_sam_simian.jpg',
        alt:'Character Design project for TTRPG.'
    },
    {
        id: 4,
        image:'https://seanmorganillustration.com/images/main/m_tabby.jpg',
        alt:'Gold Dragonborn Barbarian Character Commission.'
    },
    {
        id: 5,
        image:'https://seanmorganillustration.com/images/main/m_reilly.jpg',
        alt:'Dungeons and Dragons character design commission.'
    },
    {
        id: 6,
        image:'https://seanmorganillustration.com/images/main/m_gaslands.jpg',
        alt:'Illustration for Gaslands Game.'
    },
    {
        id: 7,
        image:'https://seanmorganillustration.com/images/main/m_home.jpg',
        alt:'Self Portrait.'
    },
    {
        id: 8,
        image:'https://seanmorganillustration.com/images/main/m_medusa.jpg',
        alt:'Medusa Character Design.'
    },
    {
        id: 9,
        image:'https://seanmorganillustration.com/images/main/m_kirk.jpg',
        alt:'Captain Kirk Portrait.'
    },
    {
        id: 10,
        image:'https://seanmorganillustration.com/images/main/m_missing_cleavland.jpg',
        alt:'Missing Cleavland.'
    },
    {
        id: 11,
        image:'https://seanmorganillustration.com/images/main/m_lindariel.jpg',
        alt:'Elf Ranger Linariel Character Design.'
    },
    {
        id: 12,
        image:'https://seanmorganillustration.com/images/main/m_strangeways.jpg',
        alt:'Strange Ways.'
    },
    {
        id: 13,
        image:'https://seanmorganillustration.com/images/main/m_hellboy.jpg',
        alt:'Hellboy Illustration.'
    },
    {
        id: 14,
        image:'https://seanmorganillustration.com/images/main/m_skull_and_fez_new.jpg',
        alt:'Tentiskull design.'
    },
    {
        id: 15,
        image:'https://seanmorganillustration.com/images/main/m_studyingkills.jpg',
        alt:'Studying Kills book cover illustration.'
    }
])

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
