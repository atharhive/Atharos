import Trash from "./app/Trash";
import AboutMe from "./app/AboutMe";
import Contact from "./app/Contact";
import GoogleChrome from "./app/GoogleChrome";
import Projects from "./app/Projects";
import Calculator from "./app/Calculator";
import Hobbies from "./app/Hobbies";
import Gallery from "./app/Gallery";
import Videos from "./app/Videos";
import Notepad from "./app/Notepad";
import MusicPlayer from "./app/MusicPlayer";
import {
  SpinWheel,
  Paint,
  VSCode,
  HTMLEncoderDecoder,
  TierList,
  SpeedTyping,
  ColorPicker,
  Snake,
  DinoRunner,
  NeonWings,
} from "./app/IframeApps";

const WindowContent = ({
  window,
  deletedItems,
  setDeletedItems,
  onOpenWindow,
}) => {
  if (window.name === "Trash") {
    return (
      <Trash deletedItems={deletedItems} setDeletedItems={setDeletedItems} />
    );
  }

  if (window.name === "About Me") {
    return <AboutMe />;
  }

  if (window.name === "Contact") {
    return <Contact />;
  }

  if (window.name === "New Folder") {
    return (
      <div className="p-8 text-white">
        <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          {window.name}
        </h2>
        <p className="text-gray-300 leading-relaxed">This folder is empty</p>
      </div>
    );
  }

  if (window.name === "Google Chrome") {
    return <GoogleChrome />;
  }

  if (window.name === "Projects") {
    return <Projects />;
  }

  if (window.name === "Spin Wheel") {
    return <SpinWheel />;
  }

  if (window.name === "Paint") {
    return <Paint />;
  }

  if (window.name === "VS Code") {
    return <VSCode />;
  }

  if (window.name === "Hobbies") {
    return <Hobbies />;
  }

  if (window.name === "Calculator") {
    return <Calculator />;
  }

  if (window.name === "Notepad") {
    return <Notepad />;
  }

  if (window.name === "Music Player") {
    return <MusicPlayer />;
  }

  if (window.name === "HTML E/D") {
    return <HTMLEncoderDecoder />;
  }

  if (window.name === "Tier List") {
    return <TierList />;
  }

  if (window.name === "Speed Typing") {
    return <SpeedTyping />;
  }

  if (window.name === "Color Picker") {
    return <ColorPicker />;
  }

  if (window.name === "Snake") {
    return <Snake />;
  }

  if (window.name === "Dino Runner") {
    return <DinoRunner />;
  }

  if (window.name === "Neon Wings") {
    return <NeonWings />;
  }

  if (window.name === "Gallery") {
    return <Gallery onOpenWindow={onOpenWindow} />;
  }

  if (window.imageUrl) {
    return (
      <div className="p-4 flex items-center justify-center h-full bg-gray-900">
        <img
          src={window.imageUrl}
          alt={window.name}
          className="max-w-full max-h-full object-contain rounded-lg"
        />
      </div>
    );
  }

  if (window.name === "Videos") {
    return <Videos onOpenWindow={onOpenWindow} />;
  }

  if (window.isVideo && window.videoId) {
    return (
      <div className="flex items-center justify-center h-full bg-gray-900">
        <iframe
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${window.videoId}`}
          title={window.name}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="rounded-lg"
        />
      </div>
    );
  }

  return (
    <div className="p-8 text-white">
      <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
        {window.name}
      </h2>
      <p className="text-gray-300 leading-relaxed">
        {window.name.toLowerCase()}
      </p>
    </div>
  );
};

export default WindowContent;
