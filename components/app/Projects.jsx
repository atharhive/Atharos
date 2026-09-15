import { Icon } from "@iconify/react";

const Projects = () => {
  const projects = [
    {
      title: "Athar OS",
      description:
        "An interactive portfolio experience designed like a desktop operating system.",
      icon: "uil:desktop",
      url: "https://github.com/atharhive/Atharos",
    },
    {
      title: "Desktop Experiences",
      description:
        "A collection of browser-based tools, games, media, and interactive applications.",
      icon: "fontisto:snowflake-4",
      url: "https://github.com/atharhive/Atharos",
    },
  ];

  return (
    <div className="p-8 text-white h-full">
      <div className="max-w-2xl mx-auto">
        <div className="flex items-center gap-6 mb-6">
          <div className="relative">
            <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-blue-600 rounded-full p-1">
              <div className="w-full h-full bg-gray-900 rounded-full flex items-center justify-center">
                <Icon icon="mdi:folder-star" className="w-10 h-10 text-white" />
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent p-1">
              Projects
            </h2>
          </div>
        </div>
        <div className="space-y-4 max-h-96 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-900">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-5 border border-gray-700/50 flex gap-4 items-center hover:border-green-500/50 transition-all relative"
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
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
