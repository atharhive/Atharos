import React, { useState } from "react";
import { Icon } from "@iconify/react";

const WallpaperSelector = ({
  currentWallpaper,
  onSelectWallpaper,
  onClose,
}) => {
  const [isDragging, setIsDragging] = useState(false);

  const wallpapers = [
    { id: 1, url: "/images/wallpaper/wallpaper1.png", name: "Wallpaper 1" },
    { id: 2, url: "/images/wallpaper/wallpaper2.jpeg", name: "Wallpaper 2" },
    { id: 3, url: "/images/wallpaper/wallpaper3.jpeg", name: "Wallpaper 3" },
    { id: 4, url: "/images/wallpaper/wallpaper4.jpg", name: "Wallpaper 4" },
    { id: 5, url: "/images/wallpaper/wallpaper5.jpg", name: "Wallpaper 5" },
    { id: 6, url: "/images/wallpaper/wallpaper6.jpg", name: "Wallpaper 6" },
  ];

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = (event) => {
        onSelectWallpaper(event.target.result);
        onClose();
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    if (!e.currentTarget.contains(e.relatedTarget)) {
      setIsDragging(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);

    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = (event) => {
        onSelectWallpaper(event.target.result);
        onClose();
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSelectWallpaper = (url) => {
    onSelectWallpaper(url);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[60] flex items-center justify-center p-3 sm:p-6 animate-fadeIn"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div className="relative bg-black/40 backdrop-blur-2xl rounded-2xl shadow-2xl border border-white/10 w-full max-w-4xl max-h-[calc(100vh-1.5rem)] sm:max-h-[calc(100vh-3rem)] overflow-y-auto overscroll-contain p-4 sm:p-6">
        <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent rounded-2xl pointer-events-none"></div>

        <div className="relative">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-white">Choose Wallpaper</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-white/10 rounded-lg transition-colors"
            >
              <Icon icon="mdi:close" className="w-6 h-6 text-white" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 mb-5">
            {wallpapers.map((wallpaper) => (
              <button
                key={wallpaper.id}
                onClick={() => handleSelectWallpaper(wallpaper.url)}
                className={`relative group overflow-hidden rounded-xl border-2 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 ${
                  currentWallpaper === wallpaper.url
                    ? "border-blue-400 shadow-lg shadow-blue-500/25"
                    : "border-white/20 hover:border-white/50 hover:-translate-y-0.5"
                }`}
              >
                <img
                  src={wallpaper.url}
                  alt={wallpaper.name}
                  className="w-full aspect-video object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent pt-8">
                  <div className="p-3 text-left">
                    <p className="text-white font-medium">{wallpaper.name}</p>
                  </div>
                </div>
                {currentWallpaper === wallpaper.url && (
                  <div className="absolute top-2 right-2 p-1.5 bg-blue-500 rounded-full shadow-lg">
                    <Icon icon="mdi:check" className="w-4 h-4 text-white" />
                  </div>
                )}
              </button>
            ))}
          </div>

          <div className="border-t border-white/10 pt-6">
            <label
              className="block"
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
            >
              <div
                className={`flex items-center justify-center gap-3 p-5 sm:p-8 border-2 border-dashed rounded-xl transition-all cursor-pointer ${
                  isDragging
                    ? "border-blue-400 bg-blue-500/10"
                    : "border-white/20 hover:border-white/40 hover:bg-white/5"
                }`}
              >
                <Icon
                  icon={isDragging ? "mdi:image-plus" : "mdi:upload"}
                  className="w-8 h-8 text-white/60"
                />
                <div className="text-center">
                  <p className="text-white font-medium">
                    {isDragging ? "Drop image here" : "Upload Custom Wallpaper"}
                  </p>
                  <p className="text-white/60 text-sm mt-1">
                    {isDragging
                      ? "Release to upload"
                      : "Click to browse or drag and drop"}
                  </p>
                </div>
              </div>
              <input
                type="file"
                accept="image/*"
                onChange={handleFileUpload}
                className="hidden"
              />
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WallpaperSelector;
