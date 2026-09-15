import { Icon } from '@iconify/react';

const Trash = ({ deletedItems, setDeletedItems }) => {
  return (
    <div className="relative p-8 text-white min-h-[400px] flex flex-col">
      {deletedItems.length === 0 ? (
        <div className="flex flex-1 flex-col items-center justify-center mt-32">
          <Icon icon="mdi:trash-can-outline" className="w-20 h-20 text-gray-600 mb-4 animate-fade-in" />
          <p className="text-gray-400 text-lg font-medium">Trash is empty</p>
          <p className="text-gray-500 text-sm mt-2">Deleted files will appear here</p>
        </div>
      ) : (
        <div className="w-full max-w-xl flex flex-col gap-4 mt-2 animate-fade-in">
          <p className="text-gray-300 mb-2 text-center">{deletedItems.length} item{deletedItems.length > 1 ? 's' : ''} deleted</p>
          <div className="flex flex-col gap-3 max-h-96 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-900 pb-24">
            {deletedItems.slice().reverse().map((item) => (
              <div key={item.id} className="flex items-center gap-4 p-4 bg-gray-800/70 rounded-xl shadow-lg hover:shadow-2xl transition-shadow border border-gray-700/40">
                <div className="bg-gray-700/60 rounded-lg p-2 flex items-center justify-center">
                  <Icon icon={item.icon} className="w-6 h-6 text-gray-300" />
                </div>
                <div className="flex-1">
                  <span className="block text-white font-medium text-base">{item.name}</span>
                  <span className="block text-xs text-gray-500 mt-1">Deleted: {item.deletedAt.toLocaleString('en-US')}</span>
                </div>
              </div>
            ))}
          </div>
          <button 
            onClick={() => setDeletedItems([])}
            className="fixed bottom-8 right-8 px-6 py-3 bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700 text-white font-semibold rounded-xl shadow-lg transition-all text-base z-10"
          >
            <Icon icon="mdi:trash-can-empty" className="inline w-5 h-5 mr-2 align-middle" />
            Empty Trash
          </button>
        </div>
      )}
    </div>
  );
};

export default Trash;