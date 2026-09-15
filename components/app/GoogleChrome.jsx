import { Icon } from '@iconify/react';
import { useState, useRef } from 'react';

const GoogleChrome = () => {
  const [history, setHistory] = useState([{ url: 'https://www.google.com/webhp?igu=1', display_url: 'https://www.google.com' }]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [inputUrl, setInputUrl] = useState(history[currentIndex].display_url);
  const iframeRef = useRef(null);

  const canGoBack = currentIndex > 0;
  const canGoForward = currentIndex < history.length - 1;

  const navigate = (newUrl, displayUrl) => {
    const newEntry = { url: newUrl, display_url: displayUrl || newUrl };
    const newHistory = [...history.slice(0, currentIndex + 1), newEntry];
    setHistory(newHistory);
    setCurrentIndex(newHistory.length - 1);
    setInputUrl(displayUrl || newUrl);
  };

  const handleNavigate = (e) => {
    e.preventDefault();
    let newUrl = inputUrl;
    let finalUrl = newUrl;
    
    if (!newUrl.startsWith('http://') && !newUrl.startsWith('https://')) {
      newUrl = 'https://' + newUrl;
    }
    
    if (newUrl.includes('google.com') && !newUrl.includes('/webhp?igu=1')) {
      finalUrl = newUrl.replace('google.com', 'google.com/webhp?igu=1');
    }
    
    navigate(finalUrl, newUrl);
  };

  const goBack = () => {
    if (canGoBack) {
      setCurrentIndex(currentIndex - 1);
      setInputUrl(history[currentIndex - 1].display_url);
    }
  };

  const goForward = () => {
    if (canGoForward) {
      setCurrentIndex(currentIndex + 1);
      setInputUrl(history[currentIndex + 1].display_url);
    }
  };

  const handleRefresh = () => {
    if (iframeRef.current) {
      iframeRef.current.src = iframeRef.current.src;
    }
  };

  return (
    <div className="flex flex-col h-full bg-gray-900">
      <div className="bg-gray-800 border-b border-gray-700 p-2">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1">
            <button 
              onClick={goBack}
              className={`p-2 rounded hover:bg-gray-700 transition-colors ${!canGoBack ? 'opacity-50 cursor-not-allowed' : ''}`}
              disabled={!canGoBack}
            >
              <Icon icon="mdi:arrow-left" className="w-5 h-5 text-gray-300" />
            </button>
            <button 
              onClick={goForward}
              className={`p-2 rounded hover:bg-gray-700 transition-colors ${!canGoForward ? 'opacity-50 cursor-not-allowed' : ''}`}
              disabled={!canGoForward}
            >
              <Icon icon="mdi:arrow-right" className="w-5 h-5 text-gray-300" />
            </button>
            <button 
              onClick={handleRefresh}
              className="p-2 rounded hover:bg-gray-700 transition-colors"
            >
              <Icon icon="mdi:refresh" className="w-5 h-5 text-gray-300" />
            </button>
          </div>
          
          <form onSubmit={handleNavigate} className="flex-1 flex items-center">
            <div className="flex-1 relative">
              <Icon icon="mdi:lock" className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-green-500" />
              <input
                type="text"
                value={inputUrl}
                onChange={(e) => setInputUrl(e.target.value)}
                className="w-full bg-gray-900 text-white pl-10 pr-4 py-2 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Search or enter website"
              />
            </div>
          </form>
          
          <div className="flex items-center gap-1">
            <button className="p-2 rounded hover:bg-gray-700 transition-colors">
              <Icon icon="mdi:star-outline" className="w-5 h-5 text-gray-300" />
            </button>
            <button className="p-2 rounded hover:bg-gray-700 transition-colors">
              <Icon icon="mdi:dots-vertical" className="w-5 h-5 text-gray-300" />
            </button>
          </div>
        </div>
      </div>
      
      <div className="flex-1 bg-white relative">
        <iframe
          ref={iframeRef}
          src={history[currentIndex].url}
          className="w-full h-full"
          title="Chrome Browser"
          sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
        />
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/5 to-transparent"></div>
      </div>
    </div>
  );
};

export default GoogleChrome;