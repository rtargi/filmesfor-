
import React from 'react';

interface KeyStatCardProps {
  label: string;
  value: string;
}

export const KeyStatCard: React.FC<KeyStatCardProps> = ({ label, value }) => (
  <div className="bg-gray-800 p-6 rounded-lg text-center shadow-lg border border-gray-700 hover:border-yellow-500 transition-colors duration-300">
    <p className="text-4xl md:text-5xl font-extrabold text-yellow-400">{value}</p>
    <p className="mt-2 text-gray-400 h-12 flex items-center justify-center">{label}</p>
  </div>
);
