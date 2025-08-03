import * as React from "react";

export const Tabs = ({ children }: { children: React.ReactNode }) => {
  return <div className="tabs-container">{children}</div>;
};

export const TabsList = ({ children }: { children: React.ReactNode }) => {
  return <div className="tabs-list flex space-x-2 mb-4">{children}</div>;
};

export const TabsTrigger = ({
  children,
  isActive,
  onClick,
}: {
  children: React.ReactNode;
  isActive?: boolean;
  onClick?: () => void;
}) => {
  return (
    <button
      className={`px-4 py-2 rounded-md ${
        isActive
          ? "bg-yellow-500 text-black"
          : "bg-gray-800 text-white hover:bg-gray-700"
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export const TabsContent = ({ children }: { children: React.ReactNode }) => {
  return <div className="tabs-content">{children}</div>;
};
