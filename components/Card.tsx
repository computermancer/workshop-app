import { ReactNode } from 'react';

interface CardProps {
  title: string;
  children: ReactNode;
  className?: string;
  id?: string;
}

export function Card({ title, children, className = '', id }: CardProps) {
  return (
    <div 
      id={id}
      className={`bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105 ${className}`}
    >
      <div className="p-6">
        <h2 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-4">{title}</h2>
        <div className="text-gray-700 dark:text-gray-300">
          {children}
        </div>
      </div>
    </div>
  );
}
