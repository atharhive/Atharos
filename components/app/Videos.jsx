import { Icon } from '@iconify/react';

const Videos = ({ onOpenWindow }) => {
  const videos = [
    {
      id: 1,
      title: "Saldır Jworse (Music)",
      videoId: "rydsvoZYRhQ"
    },

  ].map(video => ({
    ...video,
    thumbnail: `https://img.youtube.com/vi/${video.videoId}/maxresdefault.jpg`
  }));

  const handleVideoClick = (video) => {
    const videoWindow = {
      name: video.title,
      icon: 'mdi:play-circle',
      color: 'from-blue-500 to-gray-600',
      videoId: video.videoId,
      isVideo: true,
      defaultWidth: 900,
      defaultHeight: 600
    };
    onOpenWindow(videoWindow);
  };

  return (
    <div className="p-8 text-white h-full flex flex-col">
      <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
        Videos
      </h2>
      <div className="flex-1 overflow-y-auto">
        <div className="grid grid-cols-2 gap-6">
          {videos.map((video) => (
            <div 
              key={video.id} 
              className="group relative overflow-hidden rounded-lg bg-gray-800/50 cursor-pointer hover:bg-gray-700/50 transition-all duration-300"
              onClick={() => handleVideoClick(video)}
            >
              <div className="relative">
                <img 
                  src={video.thumbnail} 
                  alt={video.title}
                  className="w-full h-32 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/30">
                  <Icon icon="mdi:play-circle" className="w-12 h-12 text-red-500" />
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-sm font-medium text-white group-hover:text-red-400 transition-colors duration-300">
                  {video.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Videos;