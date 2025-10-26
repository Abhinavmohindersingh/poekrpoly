import React from "react";
import { useState } from "react";

interface AuctionModalProps {
  card: { value: string; suit: string };
  basePrice: number;
  onBid: (amount: number) => void;
  onPass: () => void;
}

export function AuctionModal({ card, basePrice, onBid, onPass }: AuctionModalProps) {
  const [bidAmount, setBidAmount] = useState(basePrice);

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-gradient-to-br from-purple-900 to-purple-800 p-8 rounded-2xl border-4 border-purple-500 shadow-2xl max-w-md">
        <h2 className="text-3xl font-black text-white mb-4">🔨 Auction</h2>
        <div className="bg-white rounded-xl p-4 mb-6">
          <div className="text-4xl font-black text-center" style={{ color: card.suit === '♥' || card.suit === '♦' ? '#ef4444' : '#000' }}>
            {card.value}{card.suit}
          </div>
        </div>
        <div className="flex gap-2 mb-6">
          <button
            onClick={() => setBidAmount(Math.max(basePrice, bidAmount - 50))}
            className="bg-red-600 hover:bg-red-500 text-white font-bold py-2 px-4 rounded"
          >
            -50
          </button>
          <input
            type="number"
            value={bidAmount}
            onChange={(e) => setBidAmount(Math.max(basePrice, parseInt(e.target.value) || basePrice))}
            className="flex-1 bg-white text-black text-center font-bold text-xl rounded px-4"
          />
          <button
            onClick={() => setBidAmount(bidAmount + 50)}
            className="bg-green-600 hover:bg-green-500 text-white font-bold py-2 px-4 rounded"
          >
            +50
          </button>
        </div>
        <div className="flex gap-2">
          <button
            onClick={onPass}
            className="flex-1 bg-gray-600 hover:bg-gray-500 text-white font-black py-4 px-8 rounded-xl transition-all"
          >
            Pass
          </button>
          <button
            onClick={() => onBid(bidAmount)}
            className="flex-1 bg-yellow-500 hover:bg-yellow-400 text-black font-black py-4 px-8 rounded-xl transition-all hover:scale-105"
          >
            Bid {bidAmount}
          </button>
        </div>
      </div>
    </div>
  );
}
