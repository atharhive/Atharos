import { useState, useEffect } from 'react';
import { Icon } from '@iconify/react';

const Notepad = () => {
  const [text, setText] = useState('');
  const [fontSize, setFontSize] = useState(14);
  const [wordWrap, setWordWrap] = useState(true);
  const [isDirty, setIsDirty] = useState(false);

  useEffect(() => {
    const savedText = localStorage.getItem('notepad-text');
    if (savedText) {
      setText(savedText);
    }
  }, []);

  const handleTextChange = (e) => {
    setText(e.target.value);
    setIsDirty(true);
  };

  const handleSave = () => {
    localStorage.setItem('notepad-text', text);
    setIsDirty(false);
  };

  const handleClear = () => {
    if (confirm('Clear all text?')) {
      setText('');
      localStorage.removeItem('notepad-text');
      setIsDirty(false);
    }
  };

  const getWordCount = () => {
    return text.trim() ? text.trim().split(/\s+/).length : 0;
  };

  const getCharCount = () => {
    return text.length;
  };

  const getLineCount = () => {
    return text.split('\n').length;
  };

  return (
    <div className="flex flex-col h-full bg-gray-900">
      <div className="bg-gray-800 border-b border-gray-700 px-4 py-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <button
              onClick={handleSave}
              className="px-3 py-1 bg-gray-700 hover:bg-gray-600 text-white text-sm rounded transition-colors flex items-center gap-1"
            >
              <Icon icon="mdi:content-save" className="w-4 h-4" />
              Save
              {isDirty && <span className="w-2 h-2 bg-orange-500 rounded-full"></span>}
            </button>
            <button
              onClick={handleClear}
              className="px-3 py-1 bg-gray-700 hover:bg-gray-600 text-white text-sm rounded transition-colors flex items-center gap-1"
            >
              <Icon icon="mdi:delete-outline" className="w-4 h-4" />
              Clear
            </button>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <label className="text-gray-400 text-sm">Font:</label>
              <button
                onClick={() => setFontSize(Math.max(10, fontSize - 2))}
                className="px-2 py-1 bg-gray-700 hover:bg-gray-600 text-white text-sm rounded transition-colors"
              >
                <Icon icon="mdi:minus" className="w-4 h-4" />
              </button>
              <span className="text-white text-sm w-8 text-center">{fontSize}</span>
              <button
                onClick={() => setFontSize(Math.min(24, fontSize + 2))}
                className="px-2 py-1 bg-gray-700 hover:bg-gray-600 text-white text-sm rounded transition-colors"
              >
                <Icon icon="mdi:plus" className="w-4 h-4" />
              </button>
            </div>
            
            <button
              onClick={() => setWordWrap(!wordWrap)}
              className={`px-3 py-1 ${wordWrap ? 'bg-blue-600' : 'bg-gray-700'} hover:opacity-80 text-white text-sm rounded transition-all flex items-center gap-1`}
            >
              <Icon icon="mdi:wrap" className="w-4 h-4" />
              Wrap
            </button>
          </div>
        </div>
      </div>

      <div className="flex-1 p-4 bg-gray-900">
        <textarea
          value={text}
          onChange={handleTextChange}
          className="w-full h-full bg-gray-950 text-gray-100 p-4 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 font-mono"
          style={{ 
            fontSize: `${fontSize}px`,
            whiteSpace: wordWrap ? 'pre-wrap' : 'pre',
            overflowX: wordWrap ? 'hidden' : 'auto'
          }}
          placeholder="Start typing..."
          spellCheck="false"
        />
      </div>

      <div className="bg-gray-800 border-t border-gray-700 px-4 py-2">
        <div className="flex items-center justify-between text-xs text-gray-400">
          <div className="flex items-center gap-4">
            <span>Lines: {getLineCount()}</span>
            <span>Words: {getWordCount()}</span>
            <span>Characters: {getCharCount()}</span>
          </div>
          <div className="flex items-center gap-2">
            {isDirty && (
              <span className="text-orange-400 flex items-center gap-1">
                <Icon icon="mdi:circle" className="w-2 h-2" />
                Unsaved
              </span>
            )}
            <span>UTF-8</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notepad;