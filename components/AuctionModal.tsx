import React, { useState } from 'react';

interface AuctionModalProps {
  card: { suit: string; value: string };
  players: any[];
  myChips: number;
  onPlaceBid: (amount: number) => void;
  onClose: () => void;
}

export function AuctionModal({
  card,
  players,
  myChips,
  onPlaceBid,
  onClose,
}: AuctionModalProps) {
  const [bidAmount, setBidAmount] = useState(0);

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl p-8 max-w-md">
        <h2 className="text-2xl font-bold mb-4">Auction</h2>
        <p className="mb-4">Card: {card.value}{card.suit}</p>
        <p className="mb-4">Your chips: ${myChips}</p>
        <input
          type="number"
          value={bidAmount}
          onChange={(e) => setBidAmount(parseInt(e.target.value) || 0)}
          className="w-full border-2 border-gray-300 rounded-lg p-2 mb-4"
          placeholder="Enter bid amount"
        />
        <div className="flex gap-4">
          <button
            onClick={() => onPlaceBid(bidAmount)}
            disabled={bidAmount > myChips || bidAmount <= 0}
            className="flex-1 bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg disabled:opacity-50"
          >
            Place Bid
          </button>
          <button
            onClick={onClose}
            className="flex-1 bg-gray-500 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded-lg"
          >
            Pass
          </button>
        </div>
      </div>
    </div>
  );
}
