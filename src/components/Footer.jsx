import React from 'react';

export default function Footer() {
  return (
    <footer className="mt-auto border-t bg-white">
      <div className="max-w-7xl mx-auto px-4 py-4 text-center text-sm text-gray-600">
        <a 
          href="https://www.zapt.ai" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:text-gray-800 underline"
        >
          Made on ZAPT
        </a>
      </div>
    </footer>
  );
}