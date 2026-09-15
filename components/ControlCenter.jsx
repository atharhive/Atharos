import { Icon } from "@iconify/react";
import { useState } from "react";

const ControlCenter = ({ brightness, setBrightness, volume, setVolume }) => {
  const [wifiEnabled, setWifiEnabled] = useState(true);
  const [bluetoothEnabled, setBluetoothEnabled] = useState(false);
  const [airplaneMode, setAirplaneMode] = useState(false);
  const [doNotDisturb, setDoNotDisturb] = useState(false);

  return (
    <div className="control-center absolute top-10 right-4 w-96 bg-black/40 backdrop-blur-2xl rounded-2xl shadow-2xl border border-white/10 p-6 z-50 animate-slideDown">
      <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent rounded-2xl pointer-events-none"></div>

      <div className="relative space-y-4">
        <div className="grid grid-cols-2 gap-3">
          <div
            className={`group relative overflow-hidden rounded-2xl p-4 cursor-pointer transition-all duration-300 ${
              wifiEnabled
                ? "bg-blue-500/20 border border-blue-400/30"
                : "bg-white/5 border border-white/10"
            }`}
            onClick={() => setWifiEnabled(!wifiEnabled)}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative">
              <div className="flex items-center justify-between mb-2">
                <Icon
                  icon="mdi:wifi"
                  className={`w-6 h-6 transition-colors ${wifiEnabled ? "text-blue-400" : "text-gray-500"}`}
                />
                <div
                  className={`w-2 h-2 rounded-full transition-all ${wifiEnabled ? "bg-green-400 shadow-lg shadow-green-400/50" : "bg-gray-600"}`}
                ></div>
              </div>
              <div className="space-y-1">
                <div className="text-white font-medium text-sm">Wi-Fi</div>
                <div
                  className={`text-xs transition-colors ${wifiEnabled ? "text-blue-300" : "text-gray-500"}`}
                >
                  {wifiEnabled ? "Local Network" : "Off"}
                </div>
              </div>
            </div>
          </div>

          <div
            className={`group relative overflow-hidden rounded-2xl p-4 cursor-pointer transition-all duration-300 ${
              bluetoothEnabled
                ? "bg-blue-500/20 border border-blue-400/30"
                : "bg-white/5 border border-white/10"
            }`}
            onClick={() => setBluetoothEnabled(!bluetoothEnabled)}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative">
              <div className="flex items-center justify-between mb-2">
                <Icon
                  icon="mdi:bluetooth"
                  className={`w-6 h-6 transition-colors ${bluetoothEnabled ? "text-blue-400" : "text-gray-500"}`}
                />
                <div
                  className={`w-2 h-2 rounded-full transition-all ${bluetoothEnabled ? "bg-green-400 shadow-lg shadow-green-400/50" : "bg-gray-600"}`}
                ></div>
              </div>
              <div className="space-y-1">
                <div className="text-white font-medium text-sm">Bluetooth</div>
                <div
                  className={`text-xs transition-colors ${bluetoothEnabled ? "text-blue-300" : "text-gray-500"}`}
                >
                  {bluetoothEnabled ? "Connected" : "Off"}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-5 border border-white/10 group hover:border-white/20 transition-all">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-gradient-to-br from-green-400/20 to-green-600/20 rounded-xl">
                <Icon
                  icon="mdi:battery-charging-90"
                  className="w-5 h-5 text-green-400"
                />
              </div>
              <div>
                <div className="text-white font-medium">Battery</div>
                <div className="text-xs text-gray-400">Power Saving Mode</div>
              </div>
            </div>
            <span className="text-green-400 font-bold text-lg">69%</span>
          </div>
          <div className="relative h-3 bg-black/30 rounded-full overflow-hidden">
            <div
              className="absolute inset-y-0 left-0 bg-gradient-to-r from-green-400 to-green-500 rounded-full transition-all duration-500"
              style={{ width: "69%" }}
            >
              <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-5 border border-white/10 group hover:border-purple-400/30 transition-all">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-gradient-to-br from-purple-400/20 to-purple-600/20 rounded-xl">
                  <Icon
                    icon="mdi:volume-high"
                    className="w-5 h-5 text-purple-400"
                  />
                </div>
                <span className="text-white font-medium">Volume</span>
              </div>
              <span className="text-purple-400 font-semibold">{volume}%</span>
            </div>
            <div className="relative">
              <input
                type="range"
                min="0"
                max="100"
                value={volume}
                onChange={(e) => setVolume(e.target.value)}
                className="w-full h-2 bg-black/30 rounded-full appearance-none cursor-pointer relative z-10"
                style={{
                  background: `linear-gradient(to right, #c084fc 0%, #c084fc ${volume}%, rgba(0,0,0,0.3) ${volume}%, rgba(0,0,0,0.3) 100%)`,
                }}
              />
              <div
                className="absolute inset-y-0 left-0 rounded-full pointer-events-none"
                style={{ width: `${volume}%` }}
              >
                <div className="h-full bg-gradient-to-r from-purple-400/20 to-purple-600/20 rounded-full blur-md"></div>
              </div>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-5 border border-white/10 group hover:border-yellow-400/30 transition-all">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-gradient-to-br from-yellow-400/20 to-orange-600/20 rounded-xl">
                  <Icon
                    icon="mdi:brightness-6"
                    className="w-5 h-5 text-yellow-400"
                  />
                </div>
                <span className="text-white font-medium">Brightness</span>
              </div>
              <span className="text-yellow-400 font-semibold">
                {brightness}%
              </span>
            </div>
            <div className="relative">
              <input
                type="range"
                min="20"
                max="100"
                value={brightness}
                onChange={(e) => setBrightness(e.target.value)}
                className="w-full h-2 bg-black/30 rounded-full appearance-none cursor-pointer relative z-10"
                style={{
                  background: `linear-gradient(to right, #facc15 0%, #facc15 ${(brightness - 20) * 1.25}%, rgba(0,0,0,0.3) ${(brightness - 20) * 1.25}%, rgba(0,0,0,0.3) 100%)`,
                }}
              />
              <div
                className="absolute inset-y-0 left-0 rounded-full pointer-events-none"
                style={{ width: `${(brightness - 20) * 1.25}%` }}
              >
                <div className="h-full bg-gradient-to-r from-yellow-400/20 to-orange-400/20 rounded-full blur-md"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <button
            className={`group relative overflow-hidden rounded-2xl p-4 transition-all duration-300 ${
              airplaneMode
                ? "bg-orange-500/20 border border-orange-400/30"
                : "bg-white/5 border border-white/10 hover:border-white/20"
            }`}
            onClick={() => setAirplaneMode(!airplaneMode)}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative flex items-center gap-3">
              <Icon
                icon="mdi:airplane"
                className={`w-5 h-5 transition-all ${airplaneMode ? "text-orange-400 rotate-45" : "text-gray-400"}`}
              />
              <span
                className={`text-sm font-medium transition-colors ${airplaneMode ? "text-orange-300" : "text-gray-300"}`}
              >
                Airplane Mode
              </span>
            </div>
          </button>

          <button
            className={`group relative overflow-hidden rounded-2xl p-4 transition-all duration-300 ${
              doNotDisturb
                ? "bg-purple-500/20 border border-purple-400/30"
                : "bg-white/5 border border-white/10 hover:border-white/20"
            }`}
            onClick={() => setDoNotDisturb(!doNotDisturb)}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative flex items-center gap-3">
              <Icon
                icon="mdi:moon-waning-crescent"
                className={`w-5 h-5 transition-colors ${doNotDisturb ? "text-purple-400" : "text-gray-400"}`}
              />
              <span
                className={`text-sm font-medium transition-colors ${doNotDisturb ? "text-purple-300" : "text-gray-300"}`}
              >
                Do Not Disturb
              </span>
            </div>
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slideDown {
          animation: slideDown 0.3s ease-out;
        }
        input[type="range"]::-webkit-slider-thumb {
          appearance: none;
          width: 20px;
          height: 20px;
          background: white;
          cursor: pointer;
          border-radius: 50%;
          box-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
          transition: all 0.2s;
        }
        input[type="range"]::-webkit-slider-thumb:hover {
          transform: scale(1.2);
          box-shadow: 0 0 20px rgba(255, 255, 255, 0.7);
        }
        input[type="range"]::-moz-range-thumb {
          width: 20px;
          height: 20px;
          background: white;
          cursor: pointer;
          border-radius: 50%;
          box-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
          transition: all 0.2s;
        }
        input[type="range"]::-moz-range-thumb:hover {
          transform: scale(1.2);
          box-shadow: 0 0 20px rgba(255, 255, 255, 0.7);
        }
      `}</style>
    </div>
  );
};

export default ControlCenter;
