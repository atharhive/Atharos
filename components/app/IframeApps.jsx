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
  const initialFiles = {
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
    "/images/wallpaper/stable-singularity.html",
  );

  return <Desktop activeWindows={activeWindows} />;
};

export default OSHeroSection;`,
    "components/app/Projects.jsx": `const projects = [
  { title: "Ink", stack: "Rust, MCP, TypeScript" },
  { title: "Meyme", stack: "FastAPI, Gemini, WebSockets" },
  { title: "Stun", stack: "Next.js, Gemini, Firebase" },
];

export default Projects;`,
    "components/Window.jsx": `const Window = ({ window, onClose }) => (
  <motion.div className="window-container">
    <WindowControls onClose={onClose} />
    <WindowContent window={window} />
  </motion.div>
);`,
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
  const [files, setFiles] = useState(initialFiles);
  const [selectedFile, setSelectedFile] = useState(
    Object.keys(initialFiles)[0],
  );
  const [terminalOpen, setTerminalOpen] = useState(true);
  const [terminalInput, setTerminalInput] = useState("");
  const [terminalLines, setTerminalLines] = useState([
    { type: "path", text: "~/Projects/desktop-portfolio" },
    { type: "output", text: "Type help to see available commands." },
  ]);
  const fileName = selectedFile.split("/").pop();
  const lines = files[selectedFile].split("\n");

  const runCommand = (event) => {
    event.preventDefault();
    const command = terminalInput.trim();
    if (!command) return;

    const output = (() => {
      if (command === "help") {
        return "Available: help, ls, pwd, clear, echo <text>, bun run dev, bun run build";
      }
      if (command === "pwd") return "/home/atharos/Projects/desktop-portfolio";
      if (command === "ls")
        return "components  pages  public  styles  package.json";
      if (command === "bun run dev")
        return "ready - started server on http://localhost:3000";
      if (command === "bun run build")
        return "Compiled successfully - static pages generated";
      if (command === "clear") return "__CLEAR__";
      if (command.startsWith("echo ")) return command.slice(5);
      return `command not found: ${command}`;
    })();

    if (output === "__CLEAR__") {
      setTerminalLines([]);
    } else {
      setTerminalLines((current) => [
        ...current,
        { type: "command", text: command },
        {
          type: output.includes("not found") ? "error" : "output",
          text: output,
        },
      ]);
    }
    setTerminalInput("");
  };

  const fileIcon = (file) => {
    if (file.endsWith(".jsx") || file.endsWith(".js"))
      return "vscode-icons:file-type-js-official";
    if (file.endsWith(".css")) return "vscode-icons:file-type-css";
    return "vscode-icons:default-file";
  };

  return (
    <div className="flex h-full min-h-0 flex-col bg-[#1e1e1e] font-mono text-xs text-[#cccccc] sm:text-sm">
      <div className="flex min-h-0 flex-1">
        <nav className="flex w-11 shrink-0 flex-col items-center gap-4 border-r border-[#333333] bg-[#181818] py-3 text-[#858585]">
          <button className="text-white" title="Explorer">
            <Icon icon="codicon:files" className="h-5 w-5" />
          </button>
          <button title="Search">
            <Icon icon="codicon:search" className="h-5 w-5" />
          </button>
          <button title="Source Control">
            <Icon icon="codicon:source-control" className="h-5 w-5" />
          </button>
          <button title="Extensions">
            <Icon icon="codicon:extensions" className="h-5 w-5" />
          </button>
          <div className="mt-auto">
            <Icon icon="codicon:settings-gear" className="h-5 w-5" />
          </div>
        </nav>

        <aside className="hidden w-52 shrink-0 overflow-y-auto border-r border-[#333333] bg-[#181818] sm:block">
          <div className="flex items-center justify-between px-4 py-3 text-[11px] uppercase tracking-wide text-[#bbbbbb]">
            <span>Explorer</span>
            <Icon icon="codicon:ellipsis" className="h-4 w-4" />
          </div>
          <div className="flex items-center gap-1 px-3 pb-2 text-[#cccccc]">
            <Icon icon="codicon:chevron-down" className="h-4 w-4" />
            <span>DESKTOP-PORTFOLIO</span>
          </div>
          {Object.keys(files).map((file) => (
            <button
              key={file}
              onClick={() => setSelectedFile(file)}
              className={`flex w-full items-center gap-2 truncate border-l-2 px-4 py-1 text-left ${selectedFile === file ? "border-[#007acc] bg-[#37373d] text-white" : "border-transparent text-[#bbbbbb] hover:bg-[#2a2d2e]"}`}
            >
              <Icon icon={fileIcon(file)} className="h-4 w-4 shrink-0" />
              <span className="truncate">{file.split("/").pop()}</span>
            </button>
          ))}
        </aside>

        <main className="flex min-w-0 flex-1 flex-col bg-[#1e1e1e]">
          <div className="flex shrink-0 overflow-x-auto border-b border-[#333333] bg-[#181818]">
            <div className="flex items-center gap-2 border-t-2 border-[#007acc] bg-[#1e1e1e] px-4 py-2 text-[#ffffff]">
              <Icon icon={fileIcon(fileName)} className="h-4 w-4" />
              <span className="whitespace-nowrap">{fileName}</span>
              <span className="text-[#858585]">×</span>
            </div>
          </div>
          <div className="min-h-0 flex-1 overflow-auto">
            <div className="flex min-w-max py-3 leading-6">
              <div className="select-none px-4 text-right text-[#5a5a5a]">
                {lines.map((_, index) => (
                  <div key={index}>{index + 1}</div>
                ))}
              </div>
              <textarea
                value={files[selectedFile]}
                onChange={(event) =>
                  setFiles((current) => ({
                    ...current,
                    [selectedFile]: event.target.value,
                  }))
                }
                spellCheck={false}
                aria-label={`Editing ${fileName}`}
                className="min-h-full min-w-[620px] resize-none bg-transparent pr-8 text-[#d4d4d4] outline-none"
              />
            </div>
          </div>
          {terminalOpen && (
            <div className="flex h-36 shrink-0 flex-col border-t border-[#333333] bg-[#181818] p-3 text-xs">
              <div className="mb-2 flex items-center gap-5 uppercase text-[#bbbbbb]">
                <button className="border-b border-[#007acc] pb-1 text-white">
                  Terminal
                </button>
                <button>Problems</button>
                <button>Output</button>
              </div>
              <div className="min-h-0 flex-1 overflow-y-auto">
                {terminalLines.map((line, index) => (
                  <div
                    key={`${line.text}-${index}`}
                    className={
                      line.type === "path"
                        ? "text-[#8fbc8f]"
                        : line.type === "command"
                          ? "text-[#d4d4d4]"
                          : line.type === "error"
                            ? "text-[#f48771]"
                            : "text-[#6a9955]"
                    }
                  >
                    {line.type === "command" && (
                      <span className="text-[#569cd6]">$ </span>
                    )}
                    {line.text}
                  </div>
                ))}
              </div>
              <form
                onSubmit={runCommand}
                className="mt-2 flex items-center gap-2 border-t border-[#333333] pt-2"
              >
                <span className="text-[#569cd6]">$</span>
                <input
                  value={terminalInput}
                  onChange={(event) => setTerminalInput(event.target.value)}
                  className="min-w-0 flex-1 bg-transparent text-[#d4d4d4] outline-none"
                  placeholder="type a command..."
                  aria-label="Terminal command"
                  autoComplete="off"
                />
              </form>
            </div>
          )}
        </main>
      </div>
      <div className="flex h-6 shrink-0 items-center justify-between bg-[#007acc] px-3 text-[11px] text-white">
        <div className="flex items-center gap-3">
          <Icon icon="codicon:remote" className="h-4 w-4" />
          <span>main*</span>
          <span>0 errors</span>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={() => setTerminalOpen(!terminalOpen)}
            className="hover:text-[#d7efff]"
          >
            Terminal
          </button>
          <span>UTF-8</span>
          <span>JavaScript React</span>
          <span>Prettier</span>
        </div>
      </div>
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
