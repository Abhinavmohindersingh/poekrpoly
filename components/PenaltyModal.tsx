import React from "react";

interface PenaltyModalProps {
  penalty: number;
  ownerName: string;
  onPay: () => void;
}

export function PenaltyModal({ penalty, ownerName, onPay }: PenaltyModalProps) {
  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-gradient-to-br from-red-900 to-red-800 p-8 rounded-2xl border-4 border-red-500 shadow-2xl max-w-md">
        <h2 className="text-3xl font-black text-white mb-4">💸 Pay Penalty</h2>
        <p className="text-white text-lg mb-6">
          Pay <span className="font-bold text-yellow-400">{penalty} chips</span> to {ownerName}
        </p>
        <button
          onClick={onPay}
          className="w-full bg-yellow-500 hover:bg-yellow-400 text-black font-black py-4 px-8 rounded-xl transition-all hover:scale-105"
        >
          Pay {penalty} Chips
        </button>
      </div>
    </div>
  );
}
