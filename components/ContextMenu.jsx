import { Icon } from '@iconify/react';

const ContextMenu = ({ contextMenu, onCreateFolder, onOpenIcon, onDeleteIcon, onChangeWallpaper, onRefresh }) => {
  return (
    <div 
      className="context-menu absolute bg-black/40 backdrop-blur-2xl rounded-xl shadow-2xl border border-white/10 py-1 z-50 min-w-[200px] animate-fadeIn"
      style={{ left: `${contextMenu.x}px`, top: `${contextMenu.y}px` }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent rounded-xl pointer-events-none"></div>
      
      <div className="relative">
        {contextMenu.type === 'desktop' ? (
          <>
            <button 
              onClick={onCreateFolder}
              className="group w-full flex items-center gap-3 px-4 py-2.5 hover:bg-white/10 text-white text-sm transition-all duration-200"
            >
              <div className="p-1.5 bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-lg group-hover:from-yellow-500/30 group-hover:to-orange-500/30 transition-all">
                <Icon icon="fluent:folder-add-24-filled" className="w-4 h-4 text-yellow-400" />
              </div>
              <span className="font-medium">New Folder</span>
            </button>
            
            <div className="h-px bg-white/10 mx-2 my-1"></div>

            <button 
              onClick={onRefresh}
              className="group w-full flex items-center gap-3 px-4 py-2.5 hover:bg-white/10 text-white text-sm transition-all duration-200"
            >
              <div className="p-1.5 bg-gradient-to-br from-green-500/20 to-teal-500/20 rounded-lg group-hover:from-green-500/30 group-hover:to-teal-500/30 transition-all">
                <Icon icon="fluent:arrow-clockwise-24-filled" className="w-4 h-4 text-green-400" />
              </div>
              <span className="font-medium">Refresh</span>
            </button>

            <button 
              onClick={onChangeWallpaper}
              className="group w-full flex items-center gap-3 px-4 py-2.5 hover:bg-white/10 text-white text-sm transition-all duration-200"
            >
              <div className="p-1.5 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg group-hover:from-purple-500/30 group-hover:to-pink-500/30 transition-all">
                <Icon icon="fluent:image-edit-24-filled" className="w-4 h-4 text-purple-400" />
              </div>
              <span className="font-medium">Change Wallpaper</span>
            </button>
          </>
        ) : (
          <>
            <button 
              onClick={() => onOpenIcon(contextMenu.icon)}
              className="group w-full flex items-center gap-3 px-4 py-2.5 hover:bg-white/10 text-white text-sm transition-all duration-200"
            >
              <div className="p-1.5 bg-gradient-to-br from-blue-500/20 to-green-500/20 rounded-lg group-hover:from-blue-500/30 group-hover:to-green-500/30 transition-all">
                <Icon icon="fluent:folder-open-24-filled" className="w-4 h-4 text-blue-400" />
              </div>
              <span className="font-medium">Open</span>
            </button>
            
            <div className="h-px bg-white/10 mx-2 my-1"></div>
            
            <button 
              onClick={() => onDeleteIcon(contextMenu.icon)}
              className="group w-full flex items-center gap-3 px-4 py-2.5 hover:bg-red-500/20 text-white text-sm transition-all duration-200"
            >
              <div className="p-1.5 bg-gradient-to-br from-red-500/20 to-pink-500/20 rounded-lg group-hover:from-red-500/30 group-hover:to-pink-500/30 transition-all">
                <Icon icon="fluent:delete-24-filled" className="w-4 h-4 text-red-400" />
              </div>
              <span className="font-medium">Move to Trash</span>
            </button>
          </>
        )}
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.15s ease-out;
        }
      `}</style>
    </div>
  );
};

export default ContextMenu;