import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Music } from "lucide-react";
import { Card, CardContent } from "@/Components/ui/card";

export default function BrandCard({ brand, index, onClick }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="cursor-pointer"
      onClick={onClick}
    >
      <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border-yellow-500/20 hover:border-yellow-500/50 transition-all duration-300 overflow-hidden group">
        <CardContent className="p-0">
          {/* Brand Image */}
          <div className="h-48 bg-gradient-to-br from-yellow-500/10 to-yellow-600/5 flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
            <Music className="w-16 h-16 text-yellow-400 group-hover:scale-110 transition-transform duration-300" />
            
            {/* Decorative elements */}
            <div className="absolute top-4 right-4 w-20 h-20 border border-yellow-500/20 rounded-full" />
            <div className="absolute bottom-4 left-4 w-12 h-12 bg-yellow-500/10 rounded-full" />
          </div>

          {/* Brand Info */}
          <div className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors duration-200">
                  {brand}
                </h3>
                <p className="text-gray-400 text-sm">
                  Explore premium guitar collection
                </p>
              </div>
              <ArrowRight className="w-5 h-5 text-yellow-500 group-hover:translate-x-1 transition-transform duration-200" />
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}