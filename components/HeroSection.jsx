import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TopMenuBar from "./TopMenuBar";
import ControlCenter from "./ControlCenter";
import DesktopIcon from "./DesktopIcon";
import Window from "./Window";
import ContextMenu from "./ContextMenu";
import Taskbar from "./Taskbar";
import StartMenu from "./StartMenu";
import WallpaperSelector from "./WallpaperSelector";

const OSHeroSection = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [activeWindows, setActiveWindows] = useState([]);
  const [startMenuOpen, setStartMenuOpen] = useState(false);
  const [contextMenu, setContextMenu] = useState(null);
  const [brightness, setBrightness] = useState(100);
  const [volume, setVolume] = useState(50);
  const [controlCenterOpen, setControlCenterOpen] = useState(false);
  const [deletedItems, setDeletedItems] = useState([]);
  const [draggingWindow, setDraggingWindow] = useState(null);
  const [windowDragOffset, setWindowDragOffset] = useState({ x: 0, y: 0 });
  const [wallpaperSelectorOpen, setWallpaperSelectorOpen] = useState(false);
  const [wallpaper, setWallpaper] = useState(
    "/images/wallpaper/stable-singularity.html",
  );
  const [isMobile, setIsMobile] = useState(false);
  const [refreshKey, setRefreshKey] = useState(0);
  const [desktopIcons, setDesktopIcons] = useState(
    [
      {
        id: 1,
        name: "About Me",
        image: "/images/aboutme-cat.svg",
        color: "text-blue-400",
        x: 20,
        y: 60,
        defaultWidth: 900,
        defaultHeight: 600,
      },
      {
        id: 2,
        name: "Projects",
        image: "/images/project-penguin.svg",
        x: 105,
        y: 60,
        defaultWidth: 700,
        defaultHeight: 600,
      },
      {
        id: 3,
        name: "Contact",
        image: "/images/contact-computer.svg",
        x: 190,
        y: 60,
        defaultWidth: 700,
        defaultHeight: 500,
      },
      {
        id: 4,
        name: "Hobbies",
        icon: "fluent-emoji-flat:camping",
        x: 275,
        y: 60,
        defaultWidth: 700,
        defaultHeight: 710,
      },
      {
        id: 5,
        name: "Gallery",
        image: "/images/gallery-mountain.svg",
        x: 20,
        y: 160,
        defaultWidth: 1000,
        defaultHeight: 700,
      },
      {
        id: 6,
        name: "Calculator",
        icon: "flat-color-icons:calculator",
        x: 105,
        y: 160,
        defaultWidth: 400,
        defaultHeight: 500,
      },
      {
        id: 7,
        name: "Google Chrome",
        icon: "logos:chrome",
        x: 190,
        y: 160,
        defaultWidth: 1100,
        defaultHeight: 700,
      },
      {
        id: 8,
        name: "VS Code",
        icon: "material-icon-theme:vscode",
        x: 275,
        y: 160,
        defaultWidth: 1200,
        defaultHeight: 800,
      },
      {
        id: 9,
        name: "Spin Wheel",
        icon: "noto:wheel",
        x: 20,
        y: 260,
        defaultWidth: 800,
        defaultHeight: 800,
      },
      {
        id: 10,
        name: "Paint",
        icon: "noto-v1:artist-palette",
        x: 105,
        y: 260,
        defaultWidth: 700,
        defaultHeight: 680,
      },
      {
        id: 12,
        name: "Notepad",
        icon: "fxemoji:note",
        x: 275,
        y: 260,
        defaultWidth: 600,
        defaultHeight: 500,
      },
      {
        id: 13,
        name: "Music Player",
        icon: "mdi:music",
        color: "text-blue-500",
        x: 105,
        y: 360,
        defaultWidth: 700,
        defaultHeight: 600,
      },
      {
        id: 14,
        name: "Trash",
        icon: "flat-color-icons:full-trash",
        x: 20,
        y: 360,
        defaultWidth: 600,
        defaultHeight: 620,
      },
      {
        id: 15,
        name: "HTML E/D",
        image: "https://jworse.com/img/tools/html-encoder-decoder.png",
        x: 190,
        y: 560,
        defaultWidth: 800,
        defaultHeight: 600,
      },
      {
        id: 16,
        name: "Tier List",
        image: "https://jworse.com/img/tools/tier-list.png",
        x: 275,
        y: 560,
        defaultWidth: 900,
        defaultHeight: 700,
      },
      {
        id: 17,
        name: "Speed Typing",
        image: "https://jworse.com/img/tools/speed-typing.png",
        x: 20,
        y: 560,
        defaultWidth: 800,
        defaultHeight: 600,
      },
      {
        id: 18,
        name: "Color Picker",
        image: "https://jworse.com/img/tools/color-picker.png",
        x: 105,
        y: 560,
        defaultWidth: 700,
        defaultHeight: 600,
      },
      {
        id: 19,
        name: "Snake",
        image: "https://jworse.com/img/games/snake.png",
        x: 190,
        y: 660,
        defaultWidth: 800,
        defaultHeight: 800,
      },
      {
        id: 22,
        name: "Dino Runner",
        image: "https://jworse.com/img/games/dino-runner.png",
        x: 105,
        y: 660,
        defaultWidth: 1200,
        defaultHeight: 800,
      },
      {
        id: 23,
        name: "Neon Wings",
        icon: "noto:rocket",
        x: 20,
        y: 760,
        defaultWidth: 1200,
        defaultHeight: 800,
      },
      {
        id: 25,
        name: "Videos",
        icon: "fluent-color:video-20",
        x: 275,
        y: 760,
        defaultWidth: 800,
        defaultHeight: 600,
      },
      {
        id: 26,
        name: "YouTube",
        icon: "logos:youtube-icon",
        color: "from-red-500 to-red-700",
        externalUrl: "https://www.youtube.com/@Atharships/videos",
        x: 190,
        y: 760,
        defaultWidth: 900,
        defaultHeight: 650,
      },
      {
        id: 27,
        name: "Discord",
        image: "/images/discord-pixel.svg",
        externalUrl: "https://discord.gg/NzzFKfXrt5",
        x: 275,
        y: 760,
        defaultWidth: 900,
        defaultHeight: 650,
      },
    ].map((icon, index) => ({
      ...icon,
      x: 20 + (index % 4) * 85,
      y: 60 + Math.floor(index / 4) * 100,
    })),
  );
  const [draggingIcon, setDraggingIcon] = useState(null);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const [selectedIcon, setSelectedIcon] = useState(null);
  const [selectedIcons, setSelectedIcons] = useState([]);
  const [selectionBox, setSelectionBox] = useState(null);
  const [isSelecting, setIsSelecting] = useState(false);
  const desktopRef = useRef(null);

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (contextMenu && !e.target.closest(".context-menu")) {
        setContextMenu(null);
      }
      if (!e.target.closest(".desktop-icon") && !isSelecting) {
        setSelectedIcon(null);
        setSelectedIcons([]);
      }
      if (
        controlCenterOpen &&
        !e.target.closest(".control-center") &&
        !e.target.closest(".system-tray-button")
      ) {
        setControlCenterOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [contextMenu, controlCenterOpen, isSelecting]);

  const handleIconDoubleClick = (icon) => {
    if (icon.externalUrl) {
      window.open(icon.externalUrl, "_blank", "noopener,noreferrer");
      return;
    }

    const existingWindow = activeWindows.find((w) => w.name === icon.name);
    if (existingWindow) {
      setActiveWindows((windows) =>
        windows.map((item) =>
          item.id === existingWindow.id
            ? { ...item, isMinimized: false }
            : item,
        ),
      );
      bringToFront(existingWindow.id);
      return;
    }

    const newWindow = {
      id: Date.now(),
      ...icon,
      width: isMobile ? window.innerWidth : icon.defaultWidth || 800,
      height: isMobile ? window.innerHeight : icon.defaultHeight || 500,
      x: isMobile ? 0 : 100 + activeWindows.length * 30,
      y: isMobile ? 0 : 80 + activeWindows.length * 30,
      zIndex: activeWindows.length + 1,
      isFullscreen: isMobile,
      isMinimized: false,
    };
    setActiveWindows([...activeWindows, newWindow]);
    setStartMenuOpen(false);
  };

  const handleIconClick = (icon) => {
    if (isMobile) {
      handleIconDoubleClick(icon);
    } else {
      setSelectedIcon(icon.id);
      setSelectedIcons([icon.id]);
    }
  };

  const handleMouseDown = (e, icon) => {
    if (isMobile) return;

    const rect = e.currentTarget.getBoundingClientRect();
    setDragOffset({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
    setDraggingIcon(icon.id);
    setSelectedIcon(icon.id);
    setSelectedIcons([icon.id]);
  };

  const handleDesktopMouseDown = (e) => {
    if (isMobile) return;

    const isClickOnWindow = e.target.closest(".window-container");
    const isClickOnIcon = e.target.closest(".desktop-icon");
    const isClickOnDesktop =
      e.target === desktopRef.current ||
      e.target.classList.contains("desktop-area");

    if (
      isClickOnDesktop &&
      !isClickOnWindow &&
      !isClickOnIcon &&
      e.button === 0
    ) {
      const rect = desktopRef.current.getBoundingClientRect();
      const startX = e.clientX - rect.left;
      const startY = e.clientY - rect.top;

      setIsSelecting(true);
      setSelectionBox({
        startX,
        startY,
        currentX: startX,
        currentY: startY,
      });
      setSelectedIcons([]);
      setSelectedIcon(null);
      e.preventDefault();
    }
  };

  const handleWindowMouseDown = (e, windowId) => {
    if (isMobile) return;

    const window = activeWindows.find((w) => w.id === windowId);
    setWindowDragOffset({
      x: e.clientX - window.x,
      y: e.clientY - window.y,
    });
    setDraggingWindow(windowId);
    bringToFront(windowId);
  };

  const handleWindowResize = (windowId, newDimensions) => {
    setActiveWindows((prevWindows) =>
      prevWindows.map((w) =>
        w.id === windowId ? { ...w, ...newDimensions } : w,
      ),
    );
  };

  const handleMouseMove = (e) => {
    if (isMobile) return;

    if (draggingIcon && desktopRef.current) {
      const desktopRect = desktopRef.current.getBoundingClientRect();
      const newX = e.clientX - desktopRect.left - dragOffset.x;
      const newY = e.clientY - desktopRect.top - dragOffset.y;

      setDesktopIcons((icons) =>
        icons.map((icon) =>
          icon.id === draggingIcon
            ? { ...icon, x: Math.max(0, newX), y: Math.max(0, newY) }
            : icon,
        ),
      );
    }

    if (draggingWindow) {
      const newX = e.clientX - windowDragOffset.x;
      const newY = e.clientY - windowDragOffset.y;

      setActiveWindows((windows) =>
        windows.map((window) =>
          window.id === draggingWindow
            ? { ...window, x: Math.max(0, newX), y: Math.max(30, newY) }
            : window,
        ),
      );
    }

    if (isSelecting && selectionBox && desktopRef.current) {
      const rect = desktopRef.current.getBoundingClientRect();
      const currentX = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
      const currentY = Math.max(0, Math.min(e.clientY - rect.top, rect.height));

      setSelectionBox({
        ...selectionBox,
        currentX,
        currentY,
      });

      const minX = Math.min(selectionBox.startX, currentX);
      const minY = Math.min(selectionBox.startY, currentY);
      const maxX = Math.max(selectionBox.startX, currentX);
      const maxY = Math.max(selectionBox.startY, currentY);

      const selectedIds = desktopIcons
        .filter((icon) => {
          const iconCenterX = icon.x + 40;
          const iconCenterY = icon.y + 40;
          return (
            iconCenterX >= minX &&
            iconCenterX <= maxX &&
            iconCenterY >= minY &&
            iconCenterY <= maxY
          );
        })
        .map((icon) => icon.id);

      setSelectedIcons(selectedIds);
    }
  };

  const handleMouseUp = (e) => {
    setDraggingIcon(null);
    setDraggingWindow(null);
    if (isSelecting) {
      setIsSelecting(false);
      setSelectionBox(null);
    }
  };

  const handleContextMenu = (e) => {
    e.preventDefault();
    if (isMobile) return;

    setContextMenu({
      x: e.clientX,
      y: e.clientY,
      type: "desktop",
    });
  };

  const handleIconContextMenu = (e, icon) => {
    e.preventDefault();
    e.stopPropagation();
    if (isMobile) return;

    if (!selectedIcons.includes(icon.id)) {
      setSelectedIcons([icon.id]);
    }

    setContextMenu({
      x: e.clientX,
      y: e.clientY,
      type: "icon",
      icon: icon,
      multipleSelected: selectedIcons.length > 1,
    });
  };

  const createNewFolder = () => {
    const newFolder = {
      id: Date.now(),
      name: "New Folder",
      icon: "fxemoji:folder",
      x: contextMenu.x - 40,
      y: contextMenu.y - 40,
      defaultWidth: 700,
      defaultHeight: 500,
    };
    setDesktopIcons([...desktopIcons, newFolder]);
    setContextMenu(null);
  };

  const deleteIcon = (icon) => {
    if (selectedIcons.length > 1) {
      const itemsToDelete = desktopIcons.filter((i) =>
        selectedIcons.includes(i.id),
      );
      setDesktopIcons(
        desktopIcons.filter((i) => !selectedIcons.includes(i.id)),
      );
      setDeletedItems([
        ...deletedItems,
        ...itemsToDelete.map((item) => ({ ...item, deletedAt: new Date() })),
      ]);
      setSelectedIcons([]);
    } else {
      setDesktopIcons(desktopIcons.filter((i) => i.id !== icon.id));
      setDeletedItems([...deletedItems, { ...icon, deletedAt: new Date() }]);
    }
    setContextMenu(null);
  };

  const closeWindow = (windowId) => {
    setActiveWindows(activeWindows.filter((w) => w.id !== windowId));
  };

  const minimizeWindow = (windowId) => {
    setActiveWindows((windows) =>
      windows.map((window) =>
        window.id === windowId ? { ...window, isMinimized: true } : window,
      ),
    );
  };

  const toggleFullscreen = (windowId) => {
    setActiveWindows((windows) =>
      windows.map((window) => {
        if (window.id !== windowId) return window;

        if (window.isFullscreen) {
          return {
            ...window,
            isFullscreen: false,
            x: window.previousBounds?.x ?? 100,
            y: window.previousBounds?.y ?? 80,
            width: window.previousBounds?.width ?? 800,
            height: window.previousBounds?.height ?? 500,
          };
        }

        return {
          ...window,
          isFullscreen: true,
          previousBounds: {
            x: window.x,
            y: window.y,
            width: window.width,
            height: window.height,
          },
        };
      }),
    );
  };

  const bringToFront = (windowId) => {
    const maxZ = Math.max(...activeWindows.map((w) => w.zIndex));
    setActiveWindows(
      activeWindows.map((w) =>
        w.id === windowId ? { ...w, zIndex: maxZ + 1 } : w,
      ),
    );
  };

  const handleChangeWallpaper = () => {
    setWallpaperSelectorOpen(true);
    setContextMenu(null);
  };

  const handleSelectWallpaper = (wallpaperUrl) => {
    setWallpaper(wallpaperUrl);
  };

  const handleRefresh = () => {
    setRefreshKey((prev) => prev + 1);
    setContextMenu(null);
  };

  const isHtmlWallpaper = wallpaper.toLowerCase().endsWith(".html");

  return (
    <div
      className="h-screen relative overflow-hidden bg-black"
      style={{ filter: `brightness(${brightness}%)` }}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      <AnimatePresence mode="wait">
        {isHtmlWallpaper ? (
          <motion.iframe
            key={wallpaper}
            title="Live singularity wallpaper"
            src={wallpaper}
            className="absolute inset-0 w-full h-full border-0 overflow-hidden"
            style={{
              background: "#010103",
              pointerEvents: "auto",
              transform: "none",
              scale: "none",
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }}
          />
        ) : (
          <motion.div
            key={wallpaper}
            className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{
              duration: 0.6,
              ease: [0.43, 0.13, 0.23, 0.96],
            }}
            style={{
              backgroundImage: `url(${wallpaper})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          />
        )}
      </AnimatePresence>

      <TopMenuBar
        currentTime={currentTime}
        onControlCenterToggle={() => setControlCenterOpen(!controlCenterOpen)}
        onWallpaperToggle={() => setWallpaperSelectorOpen(true)}
      />

      {controlCenterOpen && (
        <ControlCenter
          brightness={brightness}
          setBrightness={setBrightness}
          volume={volume}
          setVolume={setVolume}
        />
      )}

      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-20 left-1/2 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div
        ref={desktopRef}
        className={`absolute inset-0 ${isMobile ? "pt-12 pb-16 overflow-y-auto" : "pt-8 pb-12"} desktop-area`}
        onContextMenu={handleContextMenu}
        onMouseDown={handleDesktopMouseDown}
      >
        <div className={isMobile ? "grid grid-cols-4 gap-2 p-4" : ""}>
          {desktopIcons.map((icon, index) => (
            <DesktopIcon
              key={icon.id}
              icon={icon}
              index={index}
              isMobile={isMobile}
              refreshKey={refreshKey}
              isSelected={selectedIcons.includes(icon.id)}
              onMouseDown={handleMouseDown}
              onClick={() => handleIconClick(icon)}
              onDoubleClick={handleIconDoubleClick}
              onContextMenu={handleIconContextMenu}
            />
          ))}
        </div>

        {!isMobile && selectionBox && isSelecting && (
          <motion.div
            className="absolute border border-blue-400 bg-blue-400/20 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.1 }}
            style={{
              left: Math.min(selectionBox.startX, selectionBox.currentX),
              top: Math.min(selectionBox.startY, selectionBox.currentY),
              width: Math.abs(selectionBox.currentX - selectionBox.startX),
              height: Math.abs(selectionBox.currentY - selectionBox.startY),
            }}
          />
        )}

        <AnimatePresence>
          {activeWindows.map((window) => (
            <Window
              key={window.id}
              window={window}
              onMouseDown={handleWindowMouseDown}
              onClose={closeWindow}
              onMinimize={minimizeWindow}
              onToggleFullscreen={toggleFullscreen}
              onResize={handleWindowResize}
              deletedItems={deletedItems}
              setDeletedItems={setDeletedItems}
              onOpenWindow={handleIconDoubleClick}
              isMobile={isMobile}
            />
          ))}
        </AnimatePresence>
      </div>

      {contextMenu && (
        <ContextMenu
          contextMenu={contextMenu}
          onCreateFolder={createNewFolder}
          onOpenIcon={(icon) => {
            handleIconDoubleClick(icon);
            setContextMenu(null);
          }}
          onDeleteIcon={deleteIcon}
          onChangeWallpaper={handleChangeWallpaper}
          onRefresh={handleRefresh}
        />
      )}

      {wallpaperSelectorOpen && (
        <WallpaperSelector
          currentWallpaper={wallpaper}
          onSelectWallpaper={handleSelectWallpaper}
          onClose={() => setWallpaperSelectorOpen(false)}
        />
      )}

      <Taskbar
        startMenuOpen={startMenuOpen}
        setStartMenuOpen={setStartMenuOpen}
        activeWindows={activeWindows}
        onBringToFront={bringToFront}
      />

      {startMenuOpen && (
        <StartMenu
          desktopIcons={desktopIcons}
          onIconClick={handleIconDoubleClick}
          onClose={() => setStartMenuOpen(false)}
        />
      )}

      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 10s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
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
          animation: fadeIn 0.3s ease-out;
        }
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slideUp {
          animation: slideUp 0.2s ease-out;
        }
        .slider::-webkit-slider-thumb {
          appearance: none;
          width: 16px;
          height: 16px;
          background: white;
          cursor: pointer;
          border-radius: 50%;
          box-shadow: 0 0 4px rgba(0, 0, 0, 0.3);
          border: none;
        }
        .slider::-webkit-slider-track {
          height: 4px;
          background: rgba(255, 255, 255, 0.2);
          border-radius: 2px;
        }
        .slider::-moz-range-thumb {
          width: 16px;
          height: 16px;
          background: white;
          cursor: pointer;
          border-radius: 50%;
          box-shadow: 0 0 4px rgba(0, 0, 0, 0.3);
          border: none;
        }
        .slider::-moz-range-track {
          height: 4px;
          background: rgba(255, 255, 255, 0.2);
          border-radius: 2px;
          border: none;
        }
      `}</style>
    </div>
  );
};

export default OSHeroSection;
