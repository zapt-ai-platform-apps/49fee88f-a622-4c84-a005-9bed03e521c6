import React, { useState } from 'react';
import { CurrencyDollarIcon } from '@heroicons/react/24/outline';

export default function BudgetInput({ initialBudget, onBudgetChange }) {
  const [localBudget, setLocalBudget] = useState(initialBudget);

  const handleSubmit = (e) => {
    e.preventDefault();
    onBudgetChange(Number(localBudget));
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h3 className="text-lg font-medium mb-4">Monthly Decor Budget</h3>
      <form onSubmit={handleSubmit} className="flex items-center gap-4">
        <div className="relative flex-1">
          <CurrencyDollarIcon className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="number"
            min="0"
            step="50"
            value={localBudget}
            onChange={(e) => setLocalBudget(e.target.value)}
            className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Enter your budget"
          />
        </div>
        <button
          type="submit"
          className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-colors"
        >
          Set Budget
        </button>
      </form>
    </div>
  );
}