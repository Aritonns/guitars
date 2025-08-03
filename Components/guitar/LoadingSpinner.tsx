import React from "react";
import { motion } from "framer-motion";
import { Music } from "lucide-react";

export default function LoadingSpinner({ message = "Loading guitars..." }) {
  return (
    <div className="flex flex-col items-center justify-center py-20">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        className="w-16 h-16 border-4 border-yellow-500/20 border-t-yellow-500 rounded-full mb-6"
      />
      <motion.div
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="mb-4"
      >
        <Music className="w-8 h-8 text-yellow-400" />
      </motion.div>
      <p className="text-gray-400 text-lg">{message}</p>
      <p className="text-gray-500 text-sm mt-2">Finding the perfect sound...</p>
    </div>
  );
}