import * as React from "react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = "", variant = "default", ...props }, ref) => {
    const baseStyle =
      variant === "outline"
        ? "border border-yellow-500 text-yellow-400 hover:bg-yellow-500 hover:text-black"
        : "bg-yellow-500 text-black hover:bg-yellow-600";

    return (
      <button
        ref={ref}
        className={`px-4 py-2 rounded-md font-medium text-sm transition-colors ${baseStyle} ${className}`}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";
