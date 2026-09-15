import React from 'react';
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';

const DesktopIcon = ({ icon, isSelected, onMouseDown, onDoubleClick, onClick, onContextMenu, isMobile, index, refreshKey }) => {
  const handleClick = (e) => {
    if (onClick) {
      e.stopPropagation();
      onClick();
    }
  };

  return (
    <motion.div
      key={refreshKey}
      className={`desktop-icon ${isMobile ? 'relative' : 'absolute'} select-none ${isSelected ? 'selected' : ''}`}
      style={!isMobile ? { left: `${icon.x}px`, top: `${icon.y}px` } : {}}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ 
        type: "spring", 
        stiffness: 300, 
        damping: 20,
        delay: index * 0.05
      }}
    >
      <div 
        className={`flex flex-col items-center p-3 rounded-lg hover:bg-white/10 transition-all duration-200 ${isSelected ? 'bg-white/20' : ''} cursor-pointer ${isMobile ? 'w-full h-20' : 'w-20 h-24'}`}
        onMouseDown={(e) => onMouseDown && onMouseDown(e, icon)}
        onClick={handleClick}
        onDoubleClick={() => onDoubleClick && onDoubleClick(icon)}
        onContextMenu={(e) => onContextMenu && onContextMenu(e, icon)}
      >
        <div className={`flex items-center justify-center ${isMobile ? 'w-8 h-8' : 'w-12 h-12'}`}>
          {icon.image ? (
            <div className={`${isMobile ? 'w-8 h-8' : 'w-12 h-12'} rounded-xl overflow-hidden shadow-2xl transform hover:scale-110 transition-all duration-200 pointer-events-none`}>
              <img 
                src={icon.image} 
                alt={icon.name}
                className="w-full h-full object-cover"
              />
            </div>
          ) : icon.color ? (
            <div className={`flex items-center justify-center ${isMobile ? 'w-8 h-8' : 'w-12 h-12'} bg-gradient-to-br ${icon.color} rounded-xl shadow-2xl transform hover:scale-110 transition-all duration-200 pointer-events-none`}>
              <Icon icon={icon.icon} className={`${isMobile ? 'w-8 h-8' : 'w-12 h-12'}`} />
            </div>
          ) : (
            <Icon icon={icon.icon} className={`${isMobile ? 'w-8 h-8' : 'w-12 h-12'} text-white drop-shadow-lg transform hover:scale-110 transition-all duration-200 pointer-events-none`} />
          )}
        </div>
        <span className={`text-white text-xs font-medium text-center drop-shadow-lg ${isMobile ? 'max-w-full' : 'max-w-20'} break-words pointer-events-none leading-tight mt-1`}>
          {icon.name}
        </span>
      </div>
    </motion.div>
  );
};

export default DesktopIcon;