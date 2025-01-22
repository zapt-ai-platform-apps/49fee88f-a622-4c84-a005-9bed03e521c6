import React from 'react';

export const InputField = ({ label, Icon, name, value, onChange, placeholder }) => (
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
    <div className="relative">
      <Icon className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
      <input
        type="number"
        name={name}
        value={value}
        onChange={onChange}
        className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
        placeholder={placeholder}
      />
    </div>
  </div>
);