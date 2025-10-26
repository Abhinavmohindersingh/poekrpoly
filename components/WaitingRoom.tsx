import React from "react";
import { useState, useEffect } from "react";
import { X, Copy, Check } from "lucide-react";

interface WaitingRoomProps {
  roomCode: string;
  players: Array<{ user_id: string; player_name: string; position: number }>;
  isHost: boolean;
  onStartGame: () => void;
  onLeaveRoom: () => void;
  currentUserId: string;
}

export default function WaitingRoom({
  roomCode,
  players,
  isHost,
  onStartGame,
  onLeaveRoom,
  currentUserId,
}: WaitingRoomProps) {
  const [copied, setCopied] = useState(false);

  const handleCopyCode = () => {
    navigator.clipboard.writeText(roomCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className="min-h-screen w-full flex items-center justify-center p-4"
      style={{
        background: "linear-gradient(135deg, #1a472a 0%, #2d5a3d 25%, #1e3a28 50%, #0f2419 75%, #0a1810 100%)",
      }}
    >
      <div className="w-full max-w-2xl">
        <div className="bg-gradient-to-br from-gray-900/95 to-gray-800/95 backdrop-blur-xl border-4 border-yellow-500/50 rounded-3xl shadow-2xl p-8">
          <div className="flex justify-between items-start mb-8">
            <div>
              <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 mb-2">
                Waiting Room
              </h1>
              <p className="text-gray-300">Waiting for players to join...</p>
            </div>
            <button
              onClick={onLeaveRoom}
              className="bg-red-600 hover:bg-red-500 text-white p-2 rounded-lg transition-all"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="bg-gray-800/50 rounded-xl p-6 mb-8">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-gray-400 text-sm mb-1">Room Code</div>
                <div className="text-4xl font-bold text-white tracking-widest font-mono">
                  {roomCode}
                </div>
              </div>
              <button
                onClick={handleCopyCode}
                className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-lg font-bold transition-all flex items-center gap-2"
              >
                {copied ? (
                  <>
                    <Check className="w-5 h-5" />
                    Copied!
                  </>
                ) : (
                  <>
                    <Copy className="w-5 h-5" />
                    Copy
                  </>
                )}
              </button>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-bold text-white mb-4">
              Players ({players.length}/4)
            </h3>
            <div className="space-y-3">
              {players.map((player, idx) => (
                <div
                  key={player.user_id}
                  className="bg-gray-800/70 rounded-xl p-4 flex items-center justify-between"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold">
                      {player.player_name[0].toUpperCase()}
                    </div>
                    <div>
                      <div className="text-white font-bold">
                        {player.player_name}
                        {player.user_id === currentUserId && (
                          <span className="ml-2 text-xs bg-blue-600 px-2 py-1 rounded">
                            You
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                  {idx === 0 && (
                    <span className="bg-yellow-500 text-black px-3 py-1 rounded-full text-xs font-bold">
                      HOST
                    </span>
                  )}
                </div>
              ))}
              {Array.from({ length: 4 - players.length }).map((_, idx) => (
                <div
                  key={`empty-${idx}`}
                  className="bg-gray-800/30 rounded-xl p-4 flex items-center gap-3 border-2 border-dashed border-gray-700"
                >
                  <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center text-gray-500">
                    ?
                  </div>
                  <div className="text-gray-500">Waiting for player...</div>
                </div>
              ))}
            </div>
          </div>

          {isHost && (
            <button
              onClick={onStartGame}
              disabled={players.length < 2}
              className={`w-full py-4 px-8 rounded-xl font-black text-xl transition-all ${
                players.length >= 2
                  ? 'bg-gradient-to-r from-green-600 to-emerald-700 hover:from-green-500 hover:to-emerald-600 text-white hover:scale-105 shadow-xl'
                  : 'bg-gray-700 text-gray-400 cursor-not-allowed'
              }`}
            >
              {players.length >= 2
                ? 'Start Game'
                : `Need at least 2 players (${players.length}/2)`}
            </button>
          )}

          {!isHost && (
            <div className="text-center text-gray-400 py-4">
              Waiting for host to start the game...
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
