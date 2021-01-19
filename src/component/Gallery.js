const Gallery = () => {
    const images = [
            {
                id: 1,
                image:'http://seanmorganillustration.com/images/main/m_hellblazer.jpg',
                alt:'Illustration Based on Gaslands Game.'
            },
            {
                id: 2,
                image:'http://seanmorganillustration.com/images/main/m_fourarm.jpg',
                alt:'Illustration for a draw in your style competition.'
            },
            {
                id: 3,
                image:'http://seanmorganillustration.com/images/main/m_sam_simian.jpg',
                alt:'Character Design project for TTRPG.'
            },
            {
                id: 4,
                image:'http://seanmorganillustration.com/images/main/m_tabby.jpg',
                alt:'Gold Dragonborn Barbarian Character Commission.'
            },
            {
                id: 5,
                image:'http://seanmorganillustration.com/images/main/m_reilly.jpg',
                alt:'Dungeons and Dragons character design commission.'
            },
            {
                id: 6,
                image:'http://seanmorganillustration.com/images/main/m_gaslands.jpg',
                alt:'Illustration for Gaslands Game.'
            },
            {
                id: 7,
                image:'http://seanmorganillustration.com/images/main/m_home.jpg',
                alt:'Self Portrait.'
            },
            {
                id: 8,
                image:'http://seanmorganillustration.com/images/main/m_medusa.jpg',
                alt:'Medusa Character Design.'
            },
            {
                id: 9,
                image:'http://seanmorganillustration.com/images/main/m_kirk.jpg',
                alt:'Captain Kirk Portrait.'
            },
            {
                id: 10,
                image:'http://seanmorganillustration.com/images/main/m_missing_cleavland.jpg',
                alt:'Missing Cleavland.'
            },
            {
                id: 11,
                image:'http://seanmorganillustration.com/images/main/m_lindariel.jpg',
                alt:'Elf Ranger Linariel Character Design.'
            },
            {
                id: 12,
                image:'http://seanmorganillustration.com/images/main/m_strangeways.jpg',
                alt:'Strange Ways.'
            },
            {
                id: 13,
                image:'http://seanmorganillustration.com/images/main/m_hellboy.jpg',
                alt:'Hellboy Illustration.'
            },
            {
                id: 14,
                image:'http://seanmorganillustration.com/images/main/m_skull_and_fez_new.jpg',
                alt:'Tentiskull design.'
            },
            {
                id: 15,
                image:'http://seanmorganillustration.com/images/main/m_studyingkills.jpg',
                alt:'Studying Kills book cover illustration.'
            }
        ]
    
    return (
        <div class="gallery">
            {images.map((image)=>(<div className="thumbnail"><img className='content' src={image.image} alt={image.alt} /></div>))}
        </div>
    )
}

export default Gallery
