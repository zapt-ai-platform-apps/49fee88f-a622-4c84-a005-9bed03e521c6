import React, { useState } from 'react';

export default function BudgetForm({ onSubmit, loading }) {
  const [budget, setBudget] = useState('');
  const [style, setStyle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!budget || !style) return;
    onSubmit(Number(budget), style);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow-sm mb-8">
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Monthly Budget ($)
          </label>
          <input
            type="number"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
            className="box-border w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            min="0"
            required
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Preferred Style
          </label>
          <select
            value={style}
            onChange={(e) => setStyle(e.target.value)}
            className="box-border w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            required
          >
            <option value="">Select a style</option>
            <option value="modern">Modern</option>
            <option value="vintage">Vintage</option>
            <option value="minimalist">Minimalist</option>
            <option value="bohemian">Bohemian</option>
          </select>
        </div>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading ? 'Generating Recommendations...' : 'Get Recommendations'}
      </button>
    </form>
  );
}