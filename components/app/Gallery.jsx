import { Icon } from "@iconify/react";

const Gallery = ({ onOpenWindow }) => {
  const imageFiles = [
    "photo_2026-09-16_03-41-07.jpg",
    "photo_2026-09-16_03-41-33.jpg",
    "photo_2026-09-16_03-41-39.jpg",
    "photo_2026-09-16_03-41-48.jpg",
    "photo_2026-09-16_03-42-11.jpg",
    "photo_2026-09-16_03-47-28.jpg",
    "photo_2026-09-16_03-47-34.jpg",
    "photo_2026-09-16_03-47-43.jpg",
    "photo_2026-09-16_03-48-12.jpg",
    "photo_2026-09-16_03-48-35.jpg",
    "photo_2026-09-16_03-48-56.jpg",
    "photo_2026-09-16_03-49-06.jpg",
    "photo_2026-09-16_03-49-11.jpg",
    "photo_2026-09-16_03-49-22.jpg",
    "photo_2026-09-16_03-49-31.jpg",
    "photo_2026-09-16_03-49-40.jpg",
    "photo_2026-09-16_03-50-07.jpg",
    "photo_2026-09-16_03-50-18.jpg",
  ];

  const images = imageFiles.map((fileName, index) => ({
    id: index + 1,
    url: `/images/gallery/${fileName}`,
    title: `Gallery Photo ${index + 1}`,
  }));

  const handleImageClick = (image) => {
    const imageWindow = {
      name: image.title,
      icon: "mdi:image",
      color: "from-blue-500 to-blue-600",
      imageUrl: image.url,
    };
    onOpenWindow(imageWindow);
  };

  return (
    <div className="h-full min-h-0 overflow-y-auto overscroll-contain p-6 text-white sm:p-8">
      <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
        Gallery
      </h2>
      <div className="pb-8">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
          {images.map((image) => (
            <div
              key={image.id}
              className="group relative overflow-hidden rounded-lg bg-gray-800/50 cursor-pointer"
              onClick={() => handleImageClick(image)}
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-40 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-2">
                <span className="text-sm font-medium">{image.title}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
