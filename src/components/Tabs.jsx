import React, { useState } from 'react';

export function Tabs({ categories, children }) {
  const [activeTab, setActiveTab] = useState(categories[0].id);

  return (
    <div>
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-8">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveTab(category.id)}
              className={`pb-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === category.id
                  ? 'border-indigo-600 text-indigo-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              {category.name}
            </button>
          ))}
        </nav>
      </div>
      {children(activeTab)}
    </div>
  );
}