import React from 'react';

interface SellCardsModalProps {
  playerCards: Array<{ suit: string; value: string; position: number }>;
  onSellCards: () => void;
  onClose: () => void;
}

export function SellCardsModal({
  playerCards,
  onSellCards,
  onClose,
}: SellCardsModalProps) {
  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl p-8 max-w-md">
        <h2 className="text-2xl font-bold mb-4">Sell Cards</h2>
        <p className="mb-4">Select cards to sell</p>
        <div className="flex gap-4">
          <button
            onClick={onSellCards}
            className="flex-1 bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg"
          >
            Sell Selected
          </button>
          <button
            onClick={onClose}
            className="flex-1 bg-gray-500 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded-lg"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
