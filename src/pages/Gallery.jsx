const galleryImages = [
  "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1497486751825-1233686d5d80?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1462530260150-162092dbf011?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&w=1200&q=80",
];

const categories = ["Campus Life", "Academics", "Sports", "Events", "Innovation Labs"];

function Gallery() {
  return (
    <div className="section page-soft-bg">
      <div className="container">
        <h1>Campus Gallery</h1>
        <p className="section-text">
          Discover moments from our classrooms, events, competitions, and student activities.
        </p>

        <div className="chip-row">
          {categories.map((category) => (
            <span key={category} className="chip">
              {category}
            </span>
          ))}
        </div>

        <div className="gallery-grid">
          {galleryImages.map((src, idx) => (
            <div key={src} className="gallery-item fade-in-up" style={{ animationDelay: `${idx * 0.05}s` }}>
              <img src={src} alt={`Richmond International Center activity ${idx + 1}`} loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Gallery;
