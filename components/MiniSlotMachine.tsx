import React, { useState } from 'react';

interface MiniSlotMachineProps {
  onRollComplete: (dice1: number, dice2: number) => void;
  isVisible: boolean;
  disabled?: boolean;
}

export function MiniSlotMachine({
  onRollComplete,
  isVisible,
  disabled = false,
}: MiniSlotMachineProps) {
  const [rolling, setRolling] = useState(false);
  const [dice1, setDice1] = useState(1);
  const [dice2, setDice2] = useState(1);

  const handleRoll = () => {
    if (disabled || rolling) return;

    setRolling(true);
    const result1 = Math.floor(Math.random() * 6) + 1;
    const result2 = Math.floor(Math.random() * 6) + 1;

    setTimeout(() => {
      setDice1(result1);
      setDice2(result2);
      setRolling(false);
      onRollComplete(result1, result2);
    }, 500);
  };

  if (!isVisible) return null;

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex gap-4">
        <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center text-3xl font-bold border-4 border-gray-300">
          {dice1}
        </div>
        <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center text-3xl font-bold border-4 border-gray-300">
          {dice2}
        </div>
      </div>
      <button
        onClick={handleRoll}
        disabled={disabled || rolling}
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-lg disabled:opacity-50"
      >
        {rolling ? 'Rolling...' : 'Roll Dice'}
      </button>
    </div>
  );
}
