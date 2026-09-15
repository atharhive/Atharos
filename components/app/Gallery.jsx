import { Icon } from '@iconify/react';

const Gallery = ({ onOpenWindow }) => {
  const images = Array.from({ length: 10 }, (_, i) => ({
    id: i + 1,
    url: `/images/gallery/image-${i + 1}.jpg`,
    title: `Image ${i + 1}`
  }));

  const handleImageClick = (image) => {
    const imageWindow = {
      name: image.title,
      icon: 'mdi:image',
      color: 'from-blue-500 to-blue-600',
      imageUrl: image.url.replace('300/200', '800/600')
    };
    onOpenWindow(imageWindow);
  };

  return (
    <div className="p-8 text-white h-full flex flex-col">
      <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
        Gallery
      </h2>
      <div className="flex-1 overflow-y-auto">
        <div className="grid grid-cols-3 gap-4">
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