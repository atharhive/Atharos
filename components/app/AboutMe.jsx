import { Icon } from "@iconify/react";

const AboutMe = () => {
  return (
    <div className="h-full min-h-0 overflow-y-auto overscroll-contain p-6 text-white sm:p-8">
      <div className="max-w-2xl mx-auto pb-8">
        <div className="flex items-center gap-6 mb-6">
          <div className="relative">
            <div className="w-20 h-20 border-2 border-white bg-gradient-to-br from-blue-500 to-purple-700 shadow-[4px_4px_0_rgba(0,0,0,0.7)] flex items-center justify-center">
              <Icon
                icon="pixelarticons:briefcase"
                className="w-12 h-12 text-white"
                aria-label="About Me app"
              />
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent p-1">
              Md Athar Jamal Makki
            </h2>
            <p className="text-gray-400 text-sm mt-1">
              Indie Hacker | MLH Fellow
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-5 border border-gray-700/50">
            <h3 className="text-lg font-semibold text-white mb-2 flex items-center gap-2">
              <Icon icon="mdi:account-details" className="text-blue-400" />
              About
            </h3>
            <p className="text-gray-300 leading-relaxed text-sm">
              Builder and open-source catalyst studying Data Science at IIT
              Madras. I turn curiosity into practical software and products that
              people can actually use.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-3 border border-gray-700/50 hover:border-blue-500/50 transition-all">
              <Icon
                icon="mdi:code-tags"
                className="text-blue-400 w-6 h-6 mb-1"
              />
              <h4 className="text-white font-medium text-sm">Highlights</h4>
              <p className="text-gray-400 text-xs">
                6x hackathon winner | MLH Top 50 2026
              </p>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-3 border border-gray-700/50 hover:border-purple-500/50 transition-all">
              <Icon
                icon="mdi:shield-check"
                className="text-purple-400 w-6 h-6 mb-1"
              />
              <h4 className="text-white font-medium text-sm">Building Now</h4>
              <p className="text-gray-400 text-xs">
                Practical tools | privacy-first software
              </p>
            </div>
          </div>

          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-5 border border-gray-700/50">
            <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
              <Icon icon="mdi:briefcase-outline" className="text-amber-400" />
              Experience
            </h3>
            <div className="space-y-4">
              <div className="border-l-2 border-amber-400/70 pl-4">
                <div className="flex items-start justify-between gap-3">
                  <h4 className="text-white font-medium">
                    Technical Operations Intern
                  </h4>
                  <span className="text-gray-500 text-xs whitespace-nowrap">
                    2026 - Present
                  </span>
                </div>
                <p className="text-amber-300 text-sm mt-1">
                  Build Club / Midnight Network
                </p>
                <p className="text-gray-400 text-xs leading-relaxed mt-1">
                  Built cohort operations software and supported founders across
                  product direction, AI tools, and startup execution.
                </p>
              </div>
              <div className="border-l-2 border-blue-400/70 pl-4">
                <div className="flex items-start justify-between gap-3">
                  <h4 className="text-white font-medium">
                    Software Engineering Fellow
                  </h4>
                  <span className="text-gray-500 text-xs whitespace-nowrap">
                    2025
                  </span>
                </div>
                <p className="text-blue-300 text-sm mt-1">
                  Major League Hacking
                </p>
                <p className="text-gray-400 text-xs leading-relaxed mt-1">
                  Collaborated in a remote engineering cohort, contributed to
                  open-source projects, and built with TypeScript, React,
                  Node.js, and the Midnight.js SDK.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
