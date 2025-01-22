import React from 'react';

export default function DecorRecommendations({ items, loading }) {
  if (loading) {
    return (
      <div className="text-center p-8">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
        <p className="mt-4 text-gray-600">Analyzing your budget and preferences...</p>
      </div>
    );
  }

  if (!items.length) return null;

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {items.map((item, index) => (
        <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
          <h3 className="font-medium text-lg mb-2">{item.name}</h3>
          <p className="text-gray-600 mb-3">{item.description}</p>
          <div className="flex justify-between items-center">
            <span className="text-blue-600 font-medium">${item.cost}</span>
            <span className="text-sm bg-gray-100 px-2 py-1 rounded">
              {item.category}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}