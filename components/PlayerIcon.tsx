import React from 'react';

interface PlayerIconProps {
  color: string;
  suit: string;
}

export function PlayerIcon({ color, suit }: PlayerIconProps) {
  return (
    <div
      className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold shadow-lg border-2"
      style={{
        backgroundColor: color,
        borderColor: 'white',
      }}
    >
      <span className="text-sm">{suit}</span>
    </div>
  );
}
