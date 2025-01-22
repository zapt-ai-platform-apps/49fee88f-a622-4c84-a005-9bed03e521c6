import React, { useState } from 'react';
import { BanknotesIcon, ScaleIcon, ChartBarIcon } from '@heroicons/react/24/outline';
import { InputField } from './InputField';

export default function FinancialStatusForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    monthlyIncome: '',
    expenses: '',
    debt: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h3 className="text-lg font-medium mb-4">Financial Status</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-3">
          <InputField
            label="Monthly Income"
            Icon={BanknotesIcon}
            name="monthlyIncome"
            value={formData.monthlyIncome}
            onChange={handleChange}
            placeholder="Enter monthly income"
          />

          <InputField
            label="Monthly Expenses"
            Icon={ScaleIcon}
            name="expenses"
            value={formData.expenses}
            onChange={handleChange}
            placeholder="Enter total expenses"
          />

          <InputField
            label="Current Debt"
            Icon={ChartBarIcon}
            name="debt"
            value={formData.debt}
            onChange={handleChange}
            placeholder="Enter current debt"
          />
        </div>

        <button
          type="submit"
          className="w-full px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-colors"
        >
          Update Financial Status
        </button>
      </form>
    </div>
  );
}