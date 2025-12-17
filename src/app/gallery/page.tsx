export default function GalleryPage() {
  const images = [
    "/New folder (2)/Bun-Bo-Hue (1).jpg",
    "/New folder (2)/thumb.jpg",
    "/New folder (2)/istockphoto-1471456977-612x612.jpg",
    "/New folder (2)/The-Best-Food-In-Vietnam-Bun-Thit.jpg",
    "/New folder (2)/The-Best-Food-In-Vietnam-Main.jpg",
    "/New folder (2)/The-Best-Food-In-Vietnam-Pho.jpg",
    "/New folder (2)/Top-Vietnamese-foods-in-2023-Banh-Mi.jpg",
    "/New folder (2)/Top-Vietnamese-foods-in-2023-Nem-Ran.jpg",
  ];

  return (
    <div className="bg-black min-h-screen py-24 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <span className="text-orange-500 text-sm tracking-[0.3em] uppercase mb-4 block">Visual Feast</span>
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-6">GALLERY</h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg font-light">
            A visual feast of our delicious dishes and restaurant atmosphere.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1">
          {images.map((src, index) => (
            <div key={index} className="relative aspect-square overflow-hidden group">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={src}
                alt={`Gallery Image ${index + 1}`}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}