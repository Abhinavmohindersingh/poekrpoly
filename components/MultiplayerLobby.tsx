import React, { useState } from 'react';

interface MultiplayerLobbyProps {
  onCreateRoom: () => void;
  onJoinRoom: (roomCode: string) => void;
  onBack: () => void;
}

export default function MultiplayerLobby({
  onCreateRoom,
  onJoinRoom,
  onBack,
}: MultiplayerLobbyProps) {
  const [roomCode, setRoomCode] = useState('');

  return (
    <div className="w-screen h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-purple-900 to-pink-900">
      <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-12 max-w-md w-full">
        <h1 className="text-4xl font-bold text-white mb-8 text-center">
          Multiplayer Lobby
        </h1>
        <div className="space-y-4">
          <button
            onClick={onCreateRoom}
            className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-6 rounded-xl text-xl"
          >
            Create Room
          </button>
          <div className="relative">
            <input
              type="text"
              value={roomCode}
              onChange={(e) => setRoomCode(e.target.value)}
              placeholder="Enter room code"
              className="w-full bg-white/20 text-white placeholder-white/50 border-2 border-white/30 rounded-xl p-4 text-center text-xl"
            />
          </div>
          <button
            onClick={() => onJoinRoom(roomCode)}
            disabled={!roomCode}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-6 rounded-xl text-xl disabled:opacity-50"
          >
            Join Room
          </button>
          <button
            onClick={onBack}
            className="w-full bg-gray-500 hover:bg-gray-600 text-white font-bold py-4 px-6 rounded-xl text-xl"
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );
}
