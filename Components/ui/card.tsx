import * as React from "react";

export const Card = ({ className = "", children }: { className?: string; children: React.ReactNode }) => (
  <div className={`rounded-lg border border-gray-700 shadow-sm bg-gray-900 ${className}`}>
    {children}
  </div>
);

export const CardContent = ({ className = "", children }: { className?: string; children: React.ReactNode }) => (
  <div className={`p-4 ${className}`}>{children}</div>
);
