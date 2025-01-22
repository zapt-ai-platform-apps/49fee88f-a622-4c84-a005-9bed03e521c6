import React from 'react';
import { supabase } from '../supabaseClient';

export default function Navbar({ session }) {
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-xl font-bold text-gray-800">Student Decor Planner</h1>
        {session && (
          <button 
            onClick={() => supabase.auth.signOut()}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition-colors duration-200"
          >
            Sign Out
          </button>
        )}
      </div>
    </nav>
  );
}