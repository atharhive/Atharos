import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const TopMenuBar = ({
  currentTime,
  onControlCenterToggle,
  onWallpaperToggle,
}) => {
  const [isClient, setIsClient] = useState(false);
  const [displayTime, setDisplayTime] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsClient(true);
    setDisplayTime(currentTime);

    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, [currentTime]);

  const formatTime = (date) => {
    if (!date) return "--:--";
    return date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const formatDate = (date) => {
    if (!date) return "---";
    return date.toLocaleDateString("en-US", {
      weekday: "short",
      day: "numeric",
      month: "short",
    });
  };

  return (
    <motion.div
      className="absolute top-0 left-0 right-0 bg-black/70 backdrop-blur-xl z-50 border-b border-white/5"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <div className="flex items-center justify-between px-4 py-1">
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            delay: 0.2,
            type: "spring",
            stiffness: 300,
            damping: 25,
          }}
        >
          <a
            href="https://github.com/atharhive/Atharos"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white text-sm font-medium transition-colors group"
          >
            <Icon
              icon="mdi:github"
              className="w-4 h-4 group-hover:rotate-12 transition-transform"
            />
            {!isMobile && <span>Athar OS</span>}
          </a>
        </motion.div>

        <motion.div
          className="flex items-center gap-2 text-white text-sm font-mono tracking-wide"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            type: "spring",
            stiffness: 300,
            damping: 25,
          }}
        >
          {(!isMobile || isClient) && (
            <div className="flex items-center gap-2 px-3 py-1 bg-white/5 backdrop-blur-sm rounded-full">
              <Icon
                icon="mdi:calendar-today"
                className="w-3.5 h-3.5 text-blue-400"
              />
              <span className="font-medium uppercase">
                {isClient ? formatDate(displayTime) : "---"}
              </span>
            </div>
          )}
          <div className="flex items-center gap-2 px-3 py-1 bg-white/5 backdrop-blur-sm rounded-full">
            <Icon
              icon="mdi:clock-outline"
              className="w-3.5 h-3.5 text-green-400"
            />
            <span className="font-bold">
              {isClient ? formatTime(displayTime) : "--:--"}
            </span>
          </div>
        </motion.div>

        <motion.div
          className="flex-1 flex justify-end"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            delay: 0.2,
            type: "spring",
            stiffness: 300,
            damping: 25,
          }}
        >
          <div className="flex items-center gap-2">
            <button
              onClick={onWallpaperToggle}
              className="p-1.5 rounded-lg hover:bg-white/10 transition-all cursor-pointer group"
              aria-label="Change wallpaper"
              title="Change wallpaper"
            >
              <Icon
                icon="fluent:image-edit-24-filled"
                className="w-4 h-4 text-pink-400 group-hover:text-pink-300"
              />
            </button>
            {isMobile ? (
              <button
                onClick={onControlCenterToggle}
                className="system-tray-button p-1.5 rounded-lg hover:bg-white/10 transition-all cursor-pointer group"
                aria-label="Control Center"
              >
                <Icon
                  icon="fluent:apps-24-filled"
                  className="w-4 h-4 text-blue-400 group-hover:text-blue-300 pointer-events-none"
                />
              </button>
            ) : (
              <>
                <button
                  onClick={onControlCenterToggle}
                  className="system-tray-button p-1.5 rounded-lg hover:bg-white/10 transition-all cursor-pointer group"
                  aria-label="WiFi Status"
                >
                  <Icon
                    icon="fluent:wifi-1-24-filled"
                    className="w-4 h-4 text-blue-400 group-hover:text-blue-300 pointer-events-none"
                  />
                </button>
                <button
                  onClick={onControlCenterToggle}
                  className="system-tray-button p-1.5 rounded-lg hover:bg-white/10 transition-all cursor-pointer group"
                  aria-label="Battery Status"
                >
                  <Icon
                    icon="fluent:battery-3-24-filled"
                    className="w-4 h-4 text-green-400 group-hover:text-green-300 pointer-events-none"
                  />
                </button>
                <button
                  onClick={onControlCenterToggle}
                  className="system-tray-button p-1.5 rounded-lg hover:bg-white/10 transition-all cursor-pointer group"
                  aria-label="Volume Control"
                >
                  <Icon
                    icon="fluent:speaker-2-24-filled"
                    className="w-4 h-4 text-purple-400 group-hover:text-purple-300 pointer-events-none"
                  />
                </button>
              </>
            )}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default TopMenuBar;
