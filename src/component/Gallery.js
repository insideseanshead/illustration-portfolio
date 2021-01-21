const Gallery = ({ images }) => {
     return (
        <div class="gallery">
            {images.map((image)=>(<div className="thumbnail"><img className='content' src={image.image} alt={image.alt} /></div>))}
        </div>
    )
}

export default Gallery
