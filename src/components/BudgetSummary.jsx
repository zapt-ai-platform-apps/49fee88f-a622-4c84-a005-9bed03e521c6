import React from 'react';
import { CurrencyDollarIcon } from '@heroicons/react/24/outline';

export default function BudgetSummary({ totalCost, budget }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h3 className="text-lg font-medium mb-4 flex items-center gap-2">
        <CurrencyDollarIcon className="h-5 w-5 text-green-600" />
        Budget Summary
      </h3>
      <p className="text-2xl font-bold text-gray-900">
        ${totalCost.toFixed(2)} / ${budget.toFixed(2)}
      </p>
      <div className="mt-4 h-2 bg-gray-200 rounded-full">
        <div 
          className="h-2 bg-indigo-600 rounded-full transition-all duration-300" 
          style={{ width: `${Math.min((totalCost / budget) * 100, 100)}%` }}
        />
      </div>
      {totalCost > budget && (
        <p className="mt-2 text-red-600 text-sm">
          Budget exceeded by ${(totalCost - budget).toFixed(2)}
        </p>
      )}
    </div>
  );
}