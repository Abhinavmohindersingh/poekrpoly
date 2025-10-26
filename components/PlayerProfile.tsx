import React from 'react';

interface PlayerProfileProps {
  name: string;
  chips: number;
  color: string;
  position: string;
}

export function PlayerProfile({ name, chips, color, position }: PlayerProfileProps) {
  return (
    <div className="p-4 rounded-lg" style={{ backgroundColor: color }}>
      <h3 className="text-white font-bold">{name}</h3>
      <p className="text-white">Chips: ${chips}</p>
    </div>
  );
}
