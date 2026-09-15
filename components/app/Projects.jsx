import { Icon } from "@iconify/react";

const Projects = () => {
  const projects = [
    {
      title: "Ink",
      description:
        "A Rust-powered repository intelligence and orchestration runtime that gives coding agents structured context through MCP.",
      stack: "Rust, TypeScript, MCP, VS Code Extension",
      icon: "mdi:ink-pen",
      url: "https://github.com/dev-Ninjaa/ink",
      demo: "https://ink.releases.fun/",
      video: "https://youtu.be/BVg3ol5S0q8",
    },
    {
      title: "Meyme - AI Voice Assistant",
      description:
        "A cozy, personality-driven voice companion with low-latency streaming conversations, web search skills, and session memory.",
      stack: "FastAPI, Python, Gemini, AssemblyAI, Murf AI, WebSockets",
      icon: "mdi:microphone-message",
      url: "https://github.com/atharhive/30-days-of-ai-voice-agents",
      demo: "https://meyme-the-cat.onrender.com/",
      video: "https://youtu.be/Ka7xC2NPk_k",
    },
    {
      title: "40 Web Mini Projects",
      description:
        "A learning playground of 40 focused frontend builds covering UI patterns, browser APIs, animations, games, and practical JavaScript logic.",
      stack: "HTML, CSS, JavaScript",
      icon: "mdi:web-box",
      url: "https://github.com/atharhive/40-web-mini-projects",
    },
    {
      title: "My Clone Projects",
      description:
        "A collection of full-stack practice applications rebuilt from familiar products, including chat, commerce, social, productivity, and publishing tools.",
      stack: "JavaScript, Node.js, HTML, CSS",
      icon: "mdi:content-copy",
      url: "https://github.com/atharhive/my-clone-projects",
    },
    {
      title: "Rios",
      description:
        "A spatial intelligence workspace that keeps a 2D map and synchronized 3D scene together for asset inspection, monitoring, search, and annotation.",
      stack: "React, TypeScript, Vite, Three.js, Leaflet, Zustand, Axios",
      icon: "mdi:map-marker-radius",
      url: "https://github.com/Invariants0/rios",
      demo: "https://www.rios.luxionlabs.com/",
      video: "https://youtu.be/c7G2p7LcZII",
    },
    {
      title: "Animix",
      description:
        "A 2D animation and spritesheet workbench for generating assets, composing interactive scenes, wiring scene flows, and exporting media.",
      stack: "React, TypeScript, Vite, Express, Gemini, Tailwind CSS",
      icon: "mdi:animation-play-outline",
      url: "https://github.com/Invariants0/animix",
    },
    {
      title: "EntangleMe",
      description:
        "A quantum-inspired messaging app that demonstrates qubit teleportation, Bell-pair entanglement, real-time chat, and interactive circuit visualization.",
      stack: "Python, Qiskit, FastAPI, React, TypeScript, WebSockets",
      icon: "mdi:atom",
      url: "https://github.com/Invariants0/EntangleMe",
      demo: "https://entangleme.vercel.app/",
      video: "https://youtu.be/0y06cFS6Wwo",
    },
    {
      title: "Blink Speech",
      description:
        "An accessibility-focused browser app that turns blink and gaze gestures into spoken phrases through local computer vision and speech synthesis.",
      stack: "React, Vite, TypeScript, MediaPipe, WebGazer.js, Web Speech API",
      icon: "mdi:eye-settings",
      url: "https://github.com/Invariants0/Blink-Speech",
      demo: "https://blink-speech.vercel.app/",
      video: "https://youtu.be/evakcT6qGRI",
    },
    {
      title: "Vybe",
      description:
        "A production-minded URL shortener built for reliability, with Redis sessions, PostgreSQL-backed storage, observability, health checks, and incident-ready operations.",
      stack:
        "Python, Flask, PostgreSQL, Redis, Prometheus, OpenTelemetry, Docker",
      icon: "mdi:link-variant",
      url: "https://github.com/Invariants0/Vybe",
      video: "https://youtu.be/LvmtmfcoxaU",
    },
    {
      title: "ZERA",
      description:
        "A privacy-preserving digital asset registry and marketplace focused on verifiable ownership, proof of eligibility, and compliant private transactions.",
      stack:
        "Next.js, TypeScript, Zustand, Tailwind CSS, Compact, Rust, Midnight",
      icon: "mdi:shield-lock",
      url: "https://github.com/Invariants0/zera",
    },
    {
      title: "ORIN",
      description:
        "A context operating system that connects Gemini with Notion through REST and MCP to remember work, decompose tasks, and execute workflows from natural language.",
      stack:
        "Next.js, React, TypeScript, Gemini, Notion MCP, Prisma, WebSockets",
      icon: "mdi:brain",
      url: "https://github.com/Invariants0/ORIN",
      demo: "https://orin-delta.vercel.app/",
      video: "https://youtu.be/1HVq5Nssdio",
    },
    {
      title: "EIDO",
      description:
        "An autonomous startup foundry that takes an idea through research, architecture, code generation, deployment, tokenization, and launch publishing.",
      stack: "FastAPI, Python, CrewAI, Groq, Next.js, React, E2B, Base",
      icon: "mdi:rocket-launch",
      url: "https://github.com/Invariants0/Eido",
      demo: "https://eido-lyart.vercel.app/",
      video: "https://youtu.be/I-Abgp8-VpU",
    },
    {
      title: "AXON",
      description:
        "A self-evolving AI agent platform that detects missing capabilities, generates new skills, coordinates specialized agents, and preserves semantic memory.",
      stack:
        "FastAPI, Python, LangGraph, Next.js, PostgreSQL, Qdrant, Redis, Docker",
      icon: "mdi:robot-outline",
      url: "https://github.com/Invariants0/axon",
    },
    {
      title: "Stun",
      description:
        "A spatial AI thinking environment where Gemini understands and transforms an infinite canvas across drawing, diagrams, knowledge graphs, and voice commands.",
      stack:
        "Next.js, TypeScript, Gemini, TLDraw, Excalidraw, React Flow, Firebase, GCP",
      icon: "mdi:vector-square-edit",
      url: "https://github.com/Invariants0/Stun",
      demo: "https://stun-frontend-dev-279596491182.us-central1.run.app/",
      video: "https://youtu.be/v3WGyxnfz3Q",
    },
  ];

  return (
    <div className="h-full min-h-0 overflow-y-auto overscroll-contain p-6 text-white sm:p-8">
      <div className="max-w-3xl mx-auto pb-8">
        <div className="flex items-center gap-6 mb-6">
          <div className="relative">
            <div className="w-20 h-20 overflow-hidden">
              <img
                src="/images/project-penguin.svg"
                alt="Pixel penguin Projects logo"
                className="h-full w-full object-contain"
              />
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent p-1">
              Projects
            </h2>
          </div>
        </div>
        <div className="space-y-4 pr-1">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-5 border border-gray-700/50 flex gap-4 items-start hover:border-green-500/50 transition-all relative"
            >
              {project.url && (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute top-3 right-3 text-blue-400 hover:text-blue-300"
                  title="Go to project"
                >
                  <Icon icon="mdi:open-in-new" className="w-5 h-5" />
                </a>
              )}
              <div className="absolute top-3 right-10 flex items-center gap-2">
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-400 hover:text-green-300"
                    title="Open live demo"
                  >
                    <Icon icon="mdi:web" className="w-5 h-5" />
                  </a>
                )}
                {project.video && (
                  <a
                    href={project.video}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-red-400 hover:text-red-300"
                    title="Watch demo video"
                  >
                    <Icon icon="mdi:youtube" className="w-5 h-5" />
                  </a>
                )}
              </div>
              <div className="flex items-center justify-center w-14 h-14 rounded-lg bg-gradient-to-br from-green-500 to-blue-500">
                <Icon icon={project.icon} className="w-7 h-7 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-white mb-1 flex items-center gap-2">
                  {project.title}
                </h3>
                <p className="text-gray-300 leading-relaxed text-sm mb-1">
                  {project.description}
                </p>
                <p className="text-gray-500 text-xs leading-relaxed">
                  {project.stack}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
