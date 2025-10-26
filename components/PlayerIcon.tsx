import React from "react";

interface PlayerIconProps {
  suit: string;
  color: string;
  size?: number;
}

export function PlayerIcon({ suit, color, size = 24 }: PlayerIconProps) {
  return (
    <div
      className="flex items-center justify-center font-bold"
      style={{ color, fontSize: size }}
    >
      {suit}
    </div>
  );
}
