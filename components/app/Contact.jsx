import { Icon } from "@iconify/react";

const Contact = () => {
  const contacts = [
    {
      label: "Email",
      value: "atharjamalmakki@gmail.com",
      href: "mailto:atharjamalmakki@gmail.com",
      icon: "mdi:email",
    },
    {
      label: "GitHub",
      value: "github.com/atharhive",
      href: "https://github.com/atharhive",
      icon: "mdi:github",
    },
    {
      label: "LinkedIn",
      value: "linkedin.com/in/atharsjourney",
      href: "https://www.linkedin.com/in/atharsjourney/",
      icon: "mdi:linkedin",
    },
    {
      label: "X",
      value: "x.com/atharcore",
      href: "https://x.com/atharcore",
      icon: "ri:twitter-x-fill",
    },
    {
      label: "YouTube",
      value: "youtube.com/@Atharships",
      href: "https://www.youtube.com/@Atharships/",
      icon: "mdi:youtube",
    },
    {
      label: "Devpost",
      value: "devpost.com/atharhacks",
      href: "https://devpost.com/atharhacks",
      icon: "simple-icons:devpost",
    },
  ];

  return (
    <div className="h-full min-h-0 overflow-y-auto overscroll-contain p-8 pb-12 text-white">
      <div className="max-w-2xl mx-auto">
        <div className="mb-6">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
            Contact Center
          </h2>
          <p className="text-gray-400">Find Athar across the web.</p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {contacts.map((contact) => (
            <a
              key={contact.label}
              href={contact.href}
              target={contact.href.startsWith("mailto:") ? undefined : "_blank"}
              rel={
                contact.href.startsWith("mailto:")
                  ? undefined
                  : "noopener noreferrer"
              }
              className="group block bg-gray-800/50 backdrop-blur-sm rounded-xl p-5 border border-gray-700/50 hover:border-white/50 transition-all"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 bg-white/10 rounded-lg group-hover:bg-white/20 transition-colors">
                  <Icon icon={contact.icon} className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-white font-medium mb-1">
                    {contact.label}
                  </h3>
                  <p className="text-gray-400 text-sm break-all">
                    {contact.value}
                  </p>
                </div>
                <Icon
                  icon="mdi:open-in-new"
                  className="w-5 h-5 shrink-0 text-gray-500 group-hover:text-white transition-colors"
                />
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;
