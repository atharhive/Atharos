import { Icon } from "@iconify/react";
import { useState } from "react";
import { motion } from "framer-motion";

const Taskbar = ({
  startMenuOpen,
  setStartMenuOpen,
  activeWindows,
  onBringToFront,
  onClose,
}) => {
  const [taskbarSize, setTaskbarSize] = useState("normal");

  const sizeClasses = {
    small: "h-12",
    normal: "h-14",
    large: "h-16",
  };

  const iconSizes = {
    small: "w-5 h-5",
    normal: "w-7 h-7",
    large: "w-9 h-9",
  };

  return (
    <motion.div
      className={`absolute bottom-0 left-0 right-0 bg-black/40 backdrop-blur-2xl border-t border-white/10 z-40 transition-all duration-300 ${sizeClasses[taskbarSize]}`}
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-white/5 to-transparent pointer-events-none"></div>

      <div className={`relative flex items-center justify-between px-6 h-full`}>
        <motion.button
          onClick={() => setStartMenuOpen(!startMenuOpen)}
          className={`group relative overflow-hidden flex items-center justify-center ${iconSizes[taskbarSize]} bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl hover:scale-110 active:scale-95 transition-all duration-300 shadow-lg hover:shadow-xl`}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            delay: 0.2,
            type: "spring",
            stiffness: 400,
            damping: 20,
          }}
        >
          <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
          <Icon
            icon="pixelarticons:home"
            className="w-5 h-5 text-white relative z-10"
          />
        </motion.button>

        <div className="flex items-center gap-2 flex-1 px-6 overflow-x-auto scrollbar-none h-full py-2">
          {activeWindows.map((window, index) => (
            <motion.div
              key={window.id}
              className="relative group h-full flex items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.3 + index * 0.05,
                type: "spring",
                stiffness: 300,
                damping: 25,
              }}
            >
              <button
                onClick={() => onBringToFront(window.id)}
                className={`relative flex items-center gap-3 px-4 h-[calc(100%-8px)] bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 active:bg-white/25 transition-all duration-200 min-w-[60px] max-w-[250px] border border-white/10 hover:border-white/20 overflow-hidden`}
              >
                {window.image ? (
                  <div
                    className={`${taskbarSize === "small" ? "w-5 h-5" : "w-6 h-6"} rounded overflow-hidden flex-shrink-0`}
                  >
                    <img
                      src={window.image}
                      alt={window.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ) : window.color ? (
                  <div
                    className={`p-1.5 bg-gradient-to-br ${window.color} rounded-lg flex-shrink-0`}
                  >
                    <Icon icon={window.icon} className="w-4 h-4" />
                  </div>
                ) : (
                  <Icon
                    icon={window.icon}
                    className={`${taskbarSize === "small" ? "w-5 h-5" : "w-6 h-6"} flex-shrink-0`}
                  />
                )}
                <span className="text-white text-sm font-medium truncate">
                  {window.name}
                </span>
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 transform scale-x-100 group-hover:scale-x-100 transition-transform duration-300"></div>
              </button>
              <button
                onClick={(event) => {
                  event.stopPropagation();
                  onClose(window.id);
                }}
                className="absolute right-1 top-1 z-10 rounded bg-black/50 p-0.5 text-white/70 hover:text-white sm:hidden sm:group-hover:block"
                aria-label={`Close ${window.name}`}
                title="Close window"
              >
                <Icon icon="pixelarticons:close" className="h-3 w-3" />
              </button>

              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5 bg-black/90 backdrop-blur-xl rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none whitespace-nowrap">
                <span className="text-white text-xs">{window.name}</span>
                <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 w-2 h-2 bg-black/90 rotate-45"></div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="flex items-center gap-1"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            delay: 0.4,
            type: "spring",
            stiffness: 300,
            damping: 25,
          }}
        >
          <button
            onClick={() => setTaskbarSize("small")}
            className={`p-1.5 rounded-lg transition-all duration-200 ${taskbarSize === "small" ? "bg-white/20 text-white" : "text-gray-400 hover:text-white hover:bg-white/10"}`}
            title="Small"
          >
            <Icon icon="mdi:resize-bottom-right" className="w-3 h-3" />
          </button>
          <button
            onClick={() => setTaskbarSize("normal")}
            className={`p-1.5 rounded-lg transition-all duration-200 ${taskbarSize === "normal" ? "bg-white/20 text-white" : "text-gray-400 hover:text-white hover:bg-white/10"}`}
            title="Normal"
          >
            <Icon icon="mdi:resize-bottom-right" className="w-4 h-4" />
          </button>
          <button
            onClick={() => setTaskbarSize("large")}
            className={`p-1.5 rounded-lg transition-all duration-200 ${taskbarSize === "large" ? "bg-white/20 text-white" : "text-gray-400 hover:text-white hover:bg-white/10"}`}
            title="Large"
          >
            <Icon icon="mdi:resize-bottom-right" className="w-5 h-5" />
          </button>
        </motion.div>
      </div>

      <style jsx>{`
        .scrollbar-none::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-none {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </motion.div>
  );
};

export default Taskbar;
