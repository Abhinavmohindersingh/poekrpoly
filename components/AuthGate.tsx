import React, { useEffect, useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import App from '../App';

export default function AuthGate() {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<any>(null);
  const navigate = useNavigate();

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
      setLoading(false);
      if (session?.user) {
        navigate('/game');
      }
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  if (loading) {
    return (
      <div className="w-screen h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-purple-900 to-pink-900">
        <div className="text-white text-2xl">Loading...</div>
      </div>
    );
  }

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/game" element={<App />} />
    </Routes>
  );
}

function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="w-screen h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-purple-900 to-pink-900">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-white mb-8">Pokeropoly</h1>
        <button
          onClick={() => navigate('/game')}
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-12 rounded-xl text-2xl"
        >
          Play Game
        </button>
      </div>
    </div>
  );
}
