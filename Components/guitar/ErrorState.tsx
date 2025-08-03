import React from "react";
import { AlertCircle, RefreshCw } from "lucide-react";
import { Button } from "@/Components/ui/button";

export default function ErrorState({ message = "Something went wrong", onRetry }) {
  return (
    <div className="flex flex-col items-center justify-center py-20">
      <div className="w-20 h-20 bg-red-500/20 rounded-full flex items-center justify-center mb-6">
        <AlertCircle className="w-10 h-10 text-red-400" />
      </div>
      <h3 className="text-xl font-bold text-white mb-2">Oops!</h3>
      <p className="text-gray-400 text-center mb-6 max-w-md">
        {message}. Don't worry, even the best guitars need tuning sometimes.
      </p>
      {onRetry && (
        <Button 
          onClick={onRetry}
          className="bg-yellow-500 hover:bg-yellow-600 text-black font-medium"
        >
          <RefreshCw className="w-4 h-4 mr-2" />
          Try Again
        </Button>
      )}
    </div>
  );
}