import { Icon } from "@iconify/react";

const AboutMe = () => {
  return (
    <div className="p-8 text-white h-full">
      <div className="max-w-2xl mx-auto">
        <div className="flex items-center gap-6 mb-6">
          <div className="relative">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full p-1">
              <div className="w-full h-full bg-gray-900 rounded-full flex items-center justify-center">
                <Icon icon="mdi:account" className="w-10 h-10 text-white" />
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent p-1">
              Athar OS
            </h2>
            <p className="text-gray-400 text-sm mt-1">
              Interactive Desktop System
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
              Athar OS is an interactive desktop-style portfolio experience
              built for browsing projects, tools, media, and games in one place.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-3 border border-gray-700/50 hover:border-blue-500/50 transition-all">
              <Icon
                icon="mdi:code-tags"
                className="text-blue-400 w-6 h-6 mb-1"
              />
              <h4 className="text-white font-medium text-sm">Technologies</h4>
              <p className="text-gray-400 text-xs">
                React, Next.js, Tailwind CSS
              </p>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-3 border border-gray-700/50 hover:border-purple-500/50 transition-all">
              <Icon
                icon="mdi:shield-check"
                className="text-purple-400 w-6 h-6 mb-1"
              />
              <h4 className="text-white font-medium text-sm">System Focus</h4>
              <p className="text-gray-400 text-xs">Interactive experiences</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
