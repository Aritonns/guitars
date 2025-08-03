import * as React from "react";

export const DropdownMenu = ({ children }: { children: React.ReactNode }) => <div>{children}</div>;

export const DropdownMenuTrigger = ({ asChild, children }: { asChild?: boolean; children: React.ReactNode }) => (
  <div className="inline-block">{children}</div>
);

export const DropdownMenuContent = ({ className = "", children }: { className?: string; children: React.ReactNode }) => (
  <div className={`absolute mt-2 w-48 bg-gray-800 rounded shadow-lg z-10 ${className}`}>
    {children}
  </div>
);

export const DropdownMenuItem = ({ className = "", children }: { className?: string; children: React.ReactNode }) => (
  <div className={`px-4 py-2 text-sm text-white hover:bg-gray-700 cursor-pointer ${className}`}>
    {children}
  </div>
);
