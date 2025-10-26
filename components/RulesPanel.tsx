import React from "react";

interface RulesPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

export function RulesPanel({ isOpen, onClose }: RulesPanelProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl border-4 border-yellow-500 shadow-2xl max-w-2xl max-h-[90vh] overflow-y-auto">
        <h2 className="text-4xl font-black text-yellow-400 mb-6">🎮 Game Rules</h2>
        
        <div className="space-y-4 text-white">
          <div>
            <h3 className="text-2xl font-bold text-yellow-300 mb-2">Objective</h3>
            <p>Collect the most valuable poker hands by purchasing cards as you move around the board.</p>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-yellow-300 mb-2">How to Play</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Roll the dice to move around the board</li>
              <li>Land on cards to purchase them</li>
              <li>Landing on owned cards costs penalty chips to the owner</li>
              <li>Build poker hands to win</li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-yellow-300 mb-2">Card Values</h3>
            <p>Higher cards cost more but are worth more points. Face cards and Aces are premium.</p>
          </div>
        </div>

        <button
          onClick={onClose}
          className="mt-6 w-full bg-yellow-500 hover:bg-yellow-400 text-black font-black py-4 px-8 rounded-xl transition-all hover:scale-105"
        >
          Got it!
        </button>
      </div>
    </div>
  );
}
