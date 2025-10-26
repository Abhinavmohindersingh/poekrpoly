import React from "react";
import { useState } from "react";

interface MiniSlotMachineProps {
  onRollComplete: (dice1: number, dice2: number) => void;
  isVisible: boolean;
  disabled?: boolean;
}

export function MiniSlotMachine({ onRollComplete, isVisible, disabled }: MiniSlotMachineProps) {
  const [isRolling, setIsRolling] = useState(false);
  const [dice1, setDice1] = useState(1);
  const [dice2, setDice2] = useState(1);

  const handleRoll = () => {
    if (disabled || isRolling) return;
    
    setIsRolling(true);
    
    const rollInterval = setInterval(() => {
      setDice1(Math.floor(Math.random() * 6) + 1);
      setDice2(Math.floor(Math.random() * 6) + 1);
    }, 100);

    setTimeout(() => {
      clearInterval(rollInterval);
      const finalDice1 = Math.floor(Math.random() * 6) + 1;
      const finalDice2 = Math.floor(Math.random() * 6) + 1;
      setDice1(finalDice1);
      setDice2(finalDice2);
      setIsRolling(false);
      onRollComplete(finalDice1, finalDice2);
    }, 1000);
  };

  if (!isVisible) return null;

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex gap-4">
        <div className="w-16 h-16 bg-white rounded-xl shadow-2xl flex items-center justify-center text-4xl font-black border-4 border-gray-800">
          {dice1}
        </div>
        <div className="w-16 h-16 bg-white rounded-xl shadow-2xl flex items-center justify-center text-4xl font-black border-4 border-gray-800">
          {dice2}
        </div>
      </div>
      <button
        onClick={handleRoll}
        disabled={disabled || isRolling}
        className="px-8 py-3 rounded-xl font-black text-lg transition-all bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 hover:scale-105 text-white shadow-xl disabled:bg-gray-500 disabled:cursor-not-allowed"
      >
        {isRolling ? '🎲 Rolling...' : '🎲 Roll Dice'}
      </button>
    </div>
  );
}
