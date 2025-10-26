import React from "react";

interface SellCardsModalProps {
  cards: Array<{ value: string; suit: string }>;
  onSell: (cards: Array<{ value: string; suit: string }>) => void;
  onClose: () => void;
}

export function SellCardsModal({ cards, onSell, onClose }: SellCardsModalProps) {
  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-gradient-to-br from-blue-900 to-blue-800 p-8 rounded-2xl border-4 border-blue-500 shadow-2xl max-w-2xl">
        <h2 className="text-3xl font-black text-white mb-4">💰 Sell Cards</h2>
        <p className="text-white mb-6">Select cards to sell back to the bank</p>
        <div className="flex gap-2 mb-6">
          <button
            onClick={onClose}
            className="flex-1 bg-gray-600 hover:bg-gray-500 text-white font-black py-4 px-8 rounded-xl transition-all"
          >
            Cancel
          </button>
          <button
            onClick={() => onSell([])}
            className="flex-1 bg-green-600 hover:bg-green-500 text-white font-black py-4 px-8 rounded-xl transition-all hover:scale-105"
          >
            Sell
          </button>
        </div>
      </div>
    </div>
  );
}
