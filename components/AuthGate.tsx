import React, { useState, useEffect } from "react";
import AuthScreen from "./Auth";
import App from "../App";
import { supabase } from "../lib/supabase";

export default function AuthGate() {
  const [session, setSession] = useState<any>(null);
  const [profile, setProfile] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check for existing session
    const init = async () => {
      const { data } = await supabase.auth.getSession();
      setSession(data.session);
      setLoading(false);
    };
    init();

    // Listen for changes (login/logout)
    const { data: listener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setSession(session);
      }
    );

    return () => listener.subscription.unsubscribe();
  }, []);

  const handleAuthSuccess = (user: any, profile: any) => {
    setSession(user);
    setProfile(profile);
  };

  if (loading) return <div>Loading...</div>;
  if (!session) return <AuthScreen onAuthSuccess={handleAuthSuccess} />;
  return <App />;
}
