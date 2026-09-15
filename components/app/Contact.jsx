import { Icon } from "@iconify/react";

const Contact = () => {
  return (
    <div className="p-8 text-white h-full">
      <div className="max-w-2xl mx-auto">
        <div className="mb-6">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
            Contact Center
          </h2>
          <p className="text-gray-400">
            Contact channels are currently unavailable.
          </p>
        </div>

        <div className="space-y-4">
          <div className="group block bg-gray-800/50 backdrop-blur-sm rounded-xl p-5 border border-gray-700/50 hover:border-purple-500/50 transition-all">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-purple-500/20 rounded-lg group-hover:bg-purple-500/30 transition-colors">
                <Icon icon="mdi:email" className="w-6 h-6 text-purple-400" />
              </div>
              <div className="flex-1">
                <h3 className="text-white font-medium mb-1">Email</h3>
                <p className="text-gray-400 text-sm">
                  No email channel configured
                </p>
              </div>
              <Icon
                icon="mdi:arrow-right"
                className="w-5 h-5 text-gray-500 group-hover:text-purple-400 transition-colors"
              />
            </div>
          </div>

          <div className="group block bg-gray-800/50 backdrop-blur-sm rounded-xl p-5 border border-gray-700/50 hover:border-blue-500/50 transition-all">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-blue-500/20 rounded-lg group-hover:bg-blue-500/30 transition-colors">
                <Icon icon="mdi:web" className="w-6 h-6 text-blue-400" />
              </div>
              <div className="flex-1">
                <h3 className="text-white font-medium mb-1">Website</h3>
                <p className="text-gray-400 text-sm">
                  Website channel unavailable
                </p>
              </div>
              <Icon
                icon="mdi:arrow-right"
                className="w-5 h-5 text-gray-500 group-hover:text-blue-400 transition-colors"
              />
            </div>
          </div>

          <a
            href="https://github.com/atharhive/Atharos"
            target="_blank"
            rel="noopener noreferrer"
            className="group block bg-gray-800/50 backdrop-blur-sm rounded-xl p-5 border border-gray-700/50 hover:border-gray-400/50 transition-all"
          >
            <div className="flex items-center gap-4">
              <div className="p-3 bg-gray-600/20 rounded-lg group-hover:bg-gray-600/30 transition-colors">
                <Icon icon="mdi:github" className="w-6 h-6 text-gray-400" />
              </div>
              <div className="flex-1">
                <h3 className="text-white font-medium mb-1">GitHub</h3>
                <p className="text-gray-400 text-sm">
                  Social channel unavailable
                </p>
              </div>
              <Icon
                icon="mdi:arrow-right"
                className="w-5 h-5 text-gray-500 group-hover:text-gray-300 transition-colors"
              />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
