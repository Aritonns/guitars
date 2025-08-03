import * as React from "react";

export const Select = ({ value, onValueChange, children }: any) => {
  return <select value={value} onChange={(e) => onValueChange(e.target.value)}>{children}</select>;
};

export const SelectTrigger = ({ className = "", children }: { className?: string; children: React.ReactNode }) => (
  <div className={`border border-gray-600 rounded-md p-2 bg-gray-800 ${className}`}>{children}</div>
);

export const SelectValue = ({ placeholder }: { placeholder?: string }) => (
  <span className="text-gray-400">{placeholder}</span>
);

export const SelectContent = ({ className = "", children }: { className?: string; children: React.ReactNode }) => (
  <div className={`mt-2 bg-gray-800 rounded-md p-2 ${className}`}>{children}</div>
);

export const SelectItem = ({
  value,
  children,
  className = "",
}: {
  value: string;
  children: React.ReactNode;
  className?: string;
}) => (
  <option value={value} className={className}>
    {children}
  </option>
);
