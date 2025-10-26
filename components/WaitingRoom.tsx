import React from 'react';

interface Player {
  user_id: string;
  player_name: string;
  is_ready: boolean;
}

interface WaitingRoomProps {
  roomCode: string;
  players: Player[];
  isHost: boolean;
  currentUserId: string;
  onToggleReady: () => void;
  onStartGame: () => void;
  onLeaveRoom: () => void;
}

export default function WaitingRoom({
  roomCode,
  players,
  isHost,
  currentUserId,
  onToggleReady,
  onStartGame,
  onLeaveRoom,
}: WaitingRoomProps) {
  const allReady = players.every((p) => p.is_ready);
  const canStart = isHost && allReady && players.length >= 2;

  return (
    <div className="w-screen h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-purple-900 to-pink-900">
      <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-12 max-w-2xl w-full">
        <h1 className="text-4xl font-bold text-white mb-4 text-center">
          Waiting Room
        </h1>
        <p className="text-2xl text-white/80 mb-8 text-center">
          Room Code: <span className="font-mono font-bold">{roomCode}</span>
        </p>

        <div className="space-y-4 mb-8">
          {players.map((player) => (
            <div
              key={player.user_id}
              className="bg-white/20 rounded-xl p-4 flex justify-between items-center"
            >
              <span className="text-white font-bold text-lg">
                {player.player_name}
                {player.user_id === currentUserId && ' (You)'}
              </span>
              <span
                className={`px-4 py-2 rounded-lg font-bold ${
                  player.is_ready
                    ? 'bg-green-500 text-white'
                    : 'bg-yellow-500 text-black'
                }`}
              >
                {player.is_ready ? 'Ready' : 'Not Ready'}
              </span>
            </div>
          ))}
        </div>

        <div className="space-y-4">
          {!isHost && (
            <button
              onClick={onToggleReady}
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-6 rounded-xl text-xl"
            >
              {players.find((p) => p.user_id === currentUserId)?.is_ready
                ? 'Not Ready'
                : 'Ready'}
            </button>
          )}

          {isHost && (
            <button
              onClick={onStartGame}
              disabled={!canStart}
              className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-6 rounded-xl text-xl disabled:opacity-50"
            >
              Start Game
            </button>
          )}

          <button
            onClick={onLeaveRoom}
            className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-4 px-6 rounded-xl text-xl"
          >
            Leave Room
          </button>
        </div>
      </div>
    </div>
  );
}
