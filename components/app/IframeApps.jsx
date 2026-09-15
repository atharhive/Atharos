import React, { useState } from "react";
import { Icon } from "@iconify/react";

const LoadingSpinner = () => (
  <div className="absolute inset-0 flex items-center justify-center bg-[#1e1e1e] z-10">
    <div className="flex flex-col items-center">
      <Icon
        icon="eos-icons:loading"
        className="w-12 h-12 text-blue-500 animate-spin"
      />
      <div className="mt-4 text-gray-400 text-sm animate-pulse">Loading...</div>
    </div>
  </div>
);

export const SpinWheel = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="flex flex-col h-full bg-[#1e1e1e] relative">
      {!isLoaded && <LoadingSpinner />}
      <div className="flex-1 relative">
        <iframe
          src="https://jworse.com/embed/tools/spin-wheel"
          className={`w-full h-full transition-opacity duration-300 ${isLoaded ? "opacity-100" : "opacity-0"}`}
          title="Spin Wheel"
          sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
          onLoad={() => setIsLoaded(true)}
        />
      </div>
    </div>
  );
};

export const Paint = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="flex flex-col h-full bg-[#1e1e1e] relative">
      {!isLoaded && <LoadingSpinner />}
      <div className="flex-1 relative">
        <iframe
          src="https://jworse.com/embed/tools/paint"
          className={`w-full h-full transition-opacity duration-300 ${isLoaded ? "opacity-100" : "opacity-0"}`}
          title="Paint"
          sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
          onLoad={() => setIsLoaded(true)}
        />
      </div>
    </div>
  );
};

export const VSCode = () => {
  const files = {
    "pages/index.js": `import Head from "next/head";
import HeroSection from "../components/HeroSection";

export default function Home() {
  return (
    <>
      <Head><title>Athar OS</title></Head>
      <main><HeroSection /></main>
    </>
  );
}`,
    "components/HeroSection.jsx": `const OSHeroSection = () => {
  const [activeWindows, setActiveWindows] = useState([]);
  const [wallpaper, setWallpaper] = useState(
    "/images/wallpaper/wallpaper1.png",
  );

  return <Desktop activeWindows={activeWindows} />;
};

export default OSHeroSection;`,
    "components/Window.jsx": `const Window = ({ window, onClose }) => (
  <motion.div className="window-container">
    <WindowControls onClose={onClose} />
    <WindowContent window={window} />
  </motion.div>
);`,
    "components/WindowContent.jsx": `if (window.name === "Projects") {
  return <Projects />;
}

if (window.name === "Snake") {
  return <Snake />;
}

return <FallbackApp name={window.name} />;`,
    "styles/globals.css": `.pixel-screen { isolation: isolate; }

.pixel-grid {
  background-size: 4px 4px;
  mix-blend-mode: screen;
}`,
    "package.json": `{
  "name": "desktop-portfolio",
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start"
  }
}`,
  };
  const [selectedFile, setSelectedFile] = useState(Object.keys(files)[0]);

  return (
    <div className="flex h-full min-h-0 bg-[#111827] text-gray-200 font-mono text-xs sm:text-sm">
      <aside className="w-44 sm:w-60 shrink-0 overflow-y-auto border-r border-gray-700 bg-[#0b1220] p-3">
        <div className="mb-3 text-[10px] uppercase tracking-[0.2em] text-cyan-300">
          Athar OS
        </div>
        <div className="mb-2 text-gray-500">EXPLORER</div>
        <div className="mb-2 text-cyan-200">▾ desktop-portfolio</div>
        {Object.keys(files).map((file) => (
          <button
            key={file}
            onClick={() => setSelectedFile(file)}
            className={`block w-full truncate border-l-2 py-1 pl-3 text-left transition-colors ${selectedFile === file ? "border-cyan-400 bg-cyan-400/10 text-white" : "border-transparent text-gray-400 hover:text-white"}`}
          >
            {file}
          </button>
        ))}
      </aside>
      <section className="min-w-0 flex-1 overflow-auto bg-[#101827]">
        <div className="sticky top-0 border-b border-gray-700 bg-[#172033] px-4 py-2 text-cyan-200">
          {selectedFile}
        </div>
        <pre className="min-w-max p-4 leading-6 text-gray-300">
          <code>{files[selectedFile]}</code>
        </pre>
      </section>
    </div>
  );
};

export const HTMLEncoderDecoder = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="flex flex-col h-full bg-[#1e1e1e] relative">
      {!isLoaded && <LoadingSpinner />}
      <div className="flex-1 relative">
        <iframe
          src="https://jworse.com/embed/tools/html-encoder-decoder"
          className={`w-full h-full transition-opacity duration-300 ${isLoaded ? "opacity-100" : "opacity-0"}`}
          title="HTML Encoder"
          sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
          onLoad={() => setIsLoaded(true)}
        />
      </div>
    </div>
  );
};

export const TierList = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="flex flex-col h-full bg-[#1e1e1e] relative">
      {!isLoaded && <LoadingSpinner />}
      <div className="flex-1 relative">
        <iframe
          src="https://jworse.com/embed/tools/tier-list"
          className={`w-full h-full transition-opacity duration-300 ${isLoaded ? "opacity-100" : "opacity-0"}`}
          title="Tier List"
          sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
          onLoad={() => setIsLoaded(true)}
        />
      </div>
    </div>
  );
};

export const SpeedTyping = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="flex flex-col h-full bg-[#1e1e1e] relative">
      {!isLoaded && <LoadingSpinner />}
      <div className="flex-1 relative">
        <iframe
          src="https://jworse.com/embed/tools/speed-typing"
          className={`w-full h-full transition-opacity duration-300 ${isLoaded ? "opacity-100" : "opacity-0"}`}
          title="Speed Typing"
          sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
          onLoad={() => setIsLoaded(true)}
        />
      </div>
    </div>
  );
};

export const ColorPicker = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="flex flex-col h-full bg-[#1e1e1e] relative">
      {!isLoaded && <LoadingSpinner />}
      <div className="flex-1 relative">
        <iframe
          src="https://jworse.com/embed/tools/color-picker"
          className={`w-full h-full transition-opacity duration-300 ${isLoaded ? "opacity-100" : "opacity-0"}`}
          title="Color Picker"
          sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
          onLoad={() => setIsLoaded(true)}
        />
      </div>
    </div>
  );
};

export const Snake = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="flex flex-col h-full bg-[#1e1e1e] relative">
      {!isLoaded && <LoadingSpinner />}
      <div className="flex-1 relative">
        <iframe
          src="https://jworse.com/embed/games/snake"
          className={`w-full h-full transition-opacity duration-300 ${isLoaded ? "opacity-100" : "opacity-0"}`}
          title="Snake"
          sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
          onLoad={() => setIsLoaded(true)}
        />
      </div>
    </div>
  );
};

export const DinoRunner = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="flex flex-col h-full bg-[#1e1e1e] relative">
      {!isLoaded && <LoadingSpinner />}
      <div className="flex-1 relative">
        <iframe
          src="https://jworse.com/embed/games/dino-runner"
          className={`w-full h-full transition-opacity duration-300 ${isLoaded ? "opacity-100" : "opacity-0"}`}
          title="Dino Runner"
          sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
          onLoad={() => setIsLoaded(true)}
        />
      </div>
    </div>
  );
};

export const NeonWings = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="flex flex-col h-full bg-[#1e1e1e] relative">
      {!isLoaded && <LoadingSpinner />}
      <div className="flex-1 relative">
        <iframe
          src="https://jworse.com/embed/games/neon-wings"
          className={`w-full h-full transition-opacity duration-300 ${isLoaded ? "opacity-100" : "opacity-0"}`}
          title="Neon Wings"
          sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
          onLoad={() => setIsLoaded(true)}
        />
      </div>
    </div>
  );
};
