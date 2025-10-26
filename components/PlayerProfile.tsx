import React from "react";

interface PlayerProfileProps {
  player: {
    name: string;
    chips: number;
    color: string;
    position: string;
    boughtCards: Array<{ value: string; suit: string }>;
  };
  isCurrentPlayer: boolean;
}

export function PlayerProfile({ player, isCurrentPlayer }: PlayerProfileProps) {
  return (
    <div
      className={`bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-4 border-2 ${
        isCurrentPlayer ? 'border-yellow-400 shadow-lg shadow-yellow-400/50' : 'border-gray-700'
      }`}
    >
      <div className="flex items-center gap-3 mb-2">
        <div
          className="w-8 h-8 rounded-full flex items-center justify-center font-bold text-white"
          style={{ backgroundColor: player.color }}
        >
          {player.name[0]}
        </div>
        <div className="flex-1">
          <div className="text-white font-bold">{player.name}</div>
          <div className="text-yellow-400 text-sm font-semibold">{player.chips} chips</div>
        </div>
      </div>
      <div className="text-gray-400 text-xs">
        {player.boughtCards.length} cards
      </div>
    </div>
  );
}
