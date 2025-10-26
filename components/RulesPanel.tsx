import React from 'react';

interface RulesPanelProps {
  onClose: () => void;
}

export function RulesPanel({ onClose }: RulesPanelProps) {
  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl p-8 max-w-2xl max-h-[80vh] overflow-y-auto">
        <h2 className="text-3xl font-bold mb-4">Game Rules</h2>
        <div className="space-y-4 text-gray-700">
          <p>1. Roll the dice to move around the board</p>
          <p>2. Land on cards to buy them</p>
          <p>3. Build poker hands to earn multipliers</p>
          <p>4. Pay penalties when landing on opponent's cards</p>
          <p>5. Use wild cards (jokers) to complete hands - they last for 1 full lap!</p>
        </div>
        <button
          onClick={onClose}
          className="mt-6 w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg"
        >
          Close
        </button>
      </div>
    </div>
  );
}
