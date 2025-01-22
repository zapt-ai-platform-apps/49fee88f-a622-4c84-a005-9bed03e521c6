import React from 'react';
import { Auth } from '@supabase/auth-ui-react';
import { supabase } from '../supabaseClient';

export default function AuthComponent() {
  return (
    <div className="max-w-md mx-auto bg-white p-8 rounded-xl shadow-sm">
      <div className="mb-6 text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Welcome to Decor Planner</h2>
        <p className="text-gray-600">Sign in to get personalized decor recommendations</p>
      </div>
      
      <p className="text-center mb-4 text-gray-600">
        <a 
          href="https://www.zapt.ai" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          Sign in with ZAPT
        </a>
      </p>

      <Auth
        supabaseClient={supabase}
        providers={['google', 'facebook']}
        appearance={{
          extend: false,
          className: {
            container: 'space-y-4',
            button: 'w-full justify-center',
            label: 'text-sm text-gray-600',
            input: 'box-border w-full p-2 border rounded-lg',
          },
        }}
      />
    </div>
  );
}