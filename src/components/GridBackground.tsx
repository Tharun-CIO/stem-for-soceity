
import React from 'react';

interface GridBackgroundProps {
  children: React.ReactNode;
}

const GridBackground = ({ children }: GridBackgroundProps) => {
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none"></div>
      {children}
    </div>
  );
};

export default GridBackground;
