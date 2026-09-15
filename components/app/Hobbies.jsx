import { Icon } from "@iconify/react";

const Hobbies = () => {
  const interests = [
    {
      title: "Ideas & Inquiry",
      subtitle: "Stay curious",
      description:
        "Random experiments, writing, philosophy, psychology, neuroscience, theology, history, and literature. Proudly nerdy.",
      icon: "mdi:head-lightbulb-outline",
      color: "green",
    },
    {
      title: "Code & Craft",
      subtitle: "Make useful things",
      description:
        "Coding, building, and engineering projects that turn questions into practical tools and experiences.",
      icon: "mdi:tools",
      color: "blue",
    },
    {
      title: "Movement",
      subtitle: "Train with intent",
      description:
        "Running, strength training, football, Sambo, and mixed martial arts.",
      icon: "mdi:run-fast",
      color: "amber",
    },
  ];

  const colorClasses = {
    green: {
      border: "hover:border-green-500/50",
      background: "bg-green-500/20",
      text: "text-green-400",
    },
    blue: {
      border: "hover:border-blue-500/50",
      background: "bg-blue-500/20",
      text: "text-blue-400",
    },
    amber: {
      border: "hover:border-amber-500/50",
      background: "bg-amber-500/20",
      text: "text-amber-400",
    },
  };

  return (
    <div className="h-full min-h-0 overflow-y-auto overscroll-contain p-6 text-white sm:p-8">
      <div className="max-w-2xl mx-auto pb-8">
        <div className="mb-6">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent mb-2">
            What I&apos;m Into
          </h2>
          <p className="text-gray-400">
            Curiosity, craft, and a body that can keep up.
          </p>
        </div>

        <div className="space-y-4">
          {interests.map((interest) => (
            <div
              key={interest.title}
              className={`group rounded-xl border border-gray-700/50 bg-gray-800/50 p-5 backdrop-blur-sm transition-all ${colorClasses[interest.color].border}`}
            >
              <div className="mb-3 flex items-center gap-4">
                <div
                  className={`rounded-lg p-3 ${colorClasses[interest.color].background}`}
                >
                  <Icon
                    icon={interest.icon}
                    className={`h-6 w-6 ${colorClasses[interest.color].text}`}
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">
                    {interest.title}
                  </h3>
                  <p className={`${colorClasses[interest.color].text} text-sm`}>
                    {interest.subtitle}
                  </p>
                </div>
              </div>
              <p className="text-sm leading-relaxed text-gray-300">
                {interest.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hobbies;
