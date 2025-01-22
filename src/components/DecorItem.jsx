import React from 'react';

export default function DecorItem({ item, isSelected, onSelect, budgetRemaining }) {
  const canAfford = budgetRemaining >= item.price;

  return (
    <div className={`p-4 border rounded-lg transition-all ${isSelected ? 'border-indigo-600 bg-indigo-50' : 'border-gray-200 hover:border-indigo-400'} ${!canAfford ? 'opacity-50 cursor-not-allowed' : ''}`}>
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 w-24 h-24 bg-gray-100 rounded-md overflow-hidden">
          <img 
            src={item.image} 
            alt={item.name}
            data-image-request={item.dataImageRequest}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1">
          <h4 className="font-medium text-gray-900">{item.name}</h4>
          <p className="text-lg font-semibold text-indigo-600 mt-1">${item.price}</p>
          <button
            onClick={() => onSelect(item)}
            disabled={!canAfford}
            className={`mt-3 px-3 py-1 text-sm rounded-md transition-colors ${
              isSelected 
                ? 'bg-red-100 text-red-800 hover:bg-red-200' 
                : 'bg-indigo-100 text-indigo-800 hover:bg-indigo-200'
            } ${!canAfford ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            {isSelected ? 'Remove' : 'Add to Selection'}
          </button>
        </div>
      </div>
    </div>
  );
}