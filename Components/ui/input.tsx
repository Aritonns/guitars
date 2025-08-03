import * as React from "react";

export const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ className = "", ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={`px-3 py-2 rounded-md border border-gray-600 bg-gray-900 text-white placeholder-gray-400 text-sm ${className}`}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";
