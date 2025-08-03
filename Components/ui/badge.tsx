import * as React from "react";

export const Badge = ({ className = "", children }) => (
  <span className={`inline-block px-2 py-1 text-xs font-semibold rounded bg-yellow-500 text-black ${className}`}>
    {children}
  </span>
);
