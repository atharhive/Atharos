import React, { useState, useEffect } from 'react';
import { Icon } from '@iconify/react';

const StartMenu = ({ desktopIcons, onIconClick, onClose }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  const filteredIcons = desktopIcons.filter(icon => 
    icon.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className={`${isMobile ? 'fixed inset-0 z-50' : 'absolute bottom-16 left-4 z-50 w-[420px] max-w-[calc(100vw-2rem)] animate-slideUp'} bg-black/40 backdrop-blur-2xl ${isMobile ? '' : 'rounded-2xl'} shadow-2xl border border-white/10`}>
      <div className={`absolute inset-0 bg-gradient-to-b from-white/5 to-transparent ${isMobile ? '' : 'rounded-2xl'} pointer-events-none`}></div>
      
      <div className={`relative ${isMobile ? 'p-4 h-full flex flex-col' : 'p-6'}`}>
        {isMobile && (
          <div className="flex items-center justify-between mb-4 pt-10">
            <h2 className="text-white text-lg font-semibold">Applications</h2>
            <button 
              onClick={onClose}
              className="p-2 hover:bg-white/10 rounded-lg transition-colors"
            >
              <Icon icon="mdi:close" className="w-6 h-6 text-white" />
            </button>
          </div>
        )}
        
        <div className={`${isMobile ? 'mb-4' : 'mb-6'}`}>
          <div className="relative">
            <Icon icon="mdi:magnify" className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search applications..."
              className="w-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl pl-10 pr-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-white/20 focus:bg-white/10 transition-all"
              autoFocus={!isMobile}
            />
          </div>
        </div>

        {!isMobile && (
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-white text-sm font-semibold uppercase tracking-wider opacity-60">Applications</h3>
            <span className="text-xs text-gray-400">{filteredIcons.length} apps</span>
          </div>
        )}

        <div className={`${isMobile ? 'flex-1 overflow-y-auto pb-20' : 'space-y-1 max-h-[400px] overflow-y-auto'} scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent`}>
          {filteredIcons.length === 0 ? (
            <div className="text-center py-8 text-gray-400">
              <Icon icon="mdi:application-brackets" className="w-12 h-12 mx-auto mb-2 opacity-50" />
              <p>No applications found</p>
            </div>
          ) : (
            <div className={isMobile ? 'grid grid-cols-4 gap-4' : 'space-y-1'}>
              {filteredIcons.map((icon) => (
                <button
                  key={icon.id}
                  onClick={() => {
                    onIconClick(icon);
                    onClose();
                  }}
                  className={`group ${isMobile 
                    ? 'flex flex-col items-center p-2 rounded-xl hover:bg-white/10 active:bg-white/15' 
                    : 'w-full flex items-center space-x-4 p-3 rounded-xl hover:bg-white/10 active:bg-white/15'} transition-all duration-200`}
                >
                  <div className="relative">
                    {icon.image ? (
                      <div className={`${isMobile ? 'p-2' : 'p-3'} bg-white/10 backdrop-blur-sm rounded-xl group-hover:bg-white/20 transition-all duration-200 group-hover:scale-110`}>
                        <div className={`${isMobile ? 'w-8 h-8' : 'w-6 h-6'} rounded overflow-hidden`}>
                          <img 
                            src={icon.image} 
                            alt={icon.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                    ) : icon.color ? (
                      <div className={`${isMobile ? 'p-2' : 'p-3'} ${icon.color} bg-white/10 backdrop-blur-sm rounded-xl group-hover:bg-white/20 transition-all duration-200 group-hover:scale-110`}>
                        <Icon icon={icon.icon} className={`${isMobile ? 'w-8 h-8' : 'w-6 h-6'}`} />
                      </div>
                    ) : (
                      <div className={`${isMobile ? 'p-2' : 'p-3'} bg-white/10 backdrop-blur-sm rounded-xl group-hover:bg-white/20 transition-all duration-200 group-hover:scale-110`}>
                        <Icon icon={icon.icon} className={`${isMobile ? 'w-8 h-8' : 'w-6 h-6'}`} />
                      </div>
                    )}
                    <div className="absolute inset-0 rounded-xl bg-white/20 scale-0 group-hover:scale-100 transition-transform duration-300 blur-xl"></div>
                  </div>
                  {isMobile ? (
                    <span className="text-white text-xs font-medium mt-2 text-center line-clamp-2">{icon.name}</span>
                  ) : (
                    <>
                      <div className="flex-1 text-left">
                        <span className="text-white font-medium block group-hover:translate-x-1 transition-transform duration-200">{icon.name}</span>
                        <span className="text-xs text-gray-400">Click to open</span>
                      </div>
                      <Icon icon="mdi:chevron-right" className="w-5 h-5 text-gray-400 opacity-0 group-hover:opacity-100 transition-all duration-200" />
                    </>
                  )}
                </button>
              ))}
            </div>
          )}
        </div>

        {!isMobile && (
          <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between">
            <button 
              onClick={onClose}
              className="text-gray-400 hover:text-white text-sm transition-colors flex items-center gap-2"
            >
              <Icon icon="mdi:close" className="w-4 h-4" />
              Close
            </button>
          </div>
        )}
      </div>

      <style jsx>{`
        .scrollbar-thin::-webkit-scrollbar {
          width: 6px;
        }
        .scrollbar-thumb-white\\/10::-webkit-scrollbar-thumb {
          background-color: rgba(255, 255, 255, 0.1);
          border-radius: 3px;
        }
        .scrollbar-thumb-white\\/10::-webkit-scrollbar-thumb:hover {
          background-color: rgba(255, 255, 255, 0.2);
        }
        .scrollbar-track-transparent::-webkit-scrollbar-track {
          background-color: transparent;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default StartMenu;