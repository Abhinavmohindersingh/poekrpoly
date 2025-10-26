import React from 'react';

interface PenaltyModalProps {
  card: { suit: string; value: string };
  penalty: number;
  hand: string | null;
  handCards: Array<{ suit: string; value: string }>;
  ownerName: string;
  onPayPenalty: () => void;
  onSellCards: () => void;
}

export function PenaltyModal({
  card,
  penalty,
  hand,
  handCards,
  ownerName,
  onPayPenalty,
  onSellCards,
}: PenaltyModalProps) {
  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl p-8 max-w-md">
        <h2 className="text-2xl font-bold mb-4">Pay Penalty</h2>
        <p className="mb-4">You landed on {ownerName}'s property!</p>
        <p className="mb-4">Card: {card.value}{card.suit}</p>
        {hand && <p className="mb-4">Hand: {hand}</p>}
        <p className="text-xl font-bold mb-6">Penalty: ${penalty}</p>
        <div className="flex gap-4">
          <button
            onClick={onPayPenalty}
            className="flex-1 bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-6 rounded-lg"
          >
            Pay ${penalty}
          </button>
          <button
            onClick={onSellCards}
            className="flex-1 bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg"
          >
            Sell Cards
          </button>
        </div>
      </div>
    </div>
  );
}
