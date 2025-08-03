import React from "react";
import { motion } from "framer-motion";
import { Music, Star, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/Components/ui/card";
import { Badge } from "@/Components/ui/badge";

export default function GuitarCard({ guitar, index, onClick }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.05 }}
      whileHover={{ y: -5 }}
      className="cursor-pointer"
      onClick={onClick}
    >
      <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border-yellow-500/20 hover:border-yellow-500/50 transition-all duration-300 overflow-hidden group h-full">
        <CardContent className="p-0">
          {/* Guitar Image */}
          <div className="h-56 bg-gradient-to-br from-yellow-500/5 to-yellow-600/10 flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
            <Music className="w-20 h-20 text-yellow-400 group-hover:scale-110 transition-transform duration-300" />
            
            {/* Type Badge */}
            <div className="absolute top-4 left-4">
              <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-500/30">
                {guitar.type || 'Electric'}
              </Badge>
            </div>

            {/* Rating */}
            <div className="absolute top-4 right-4 flex items-center gap-1 bg-black/50 px-2 py-1 rounded-full">
              <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
              <span className="text-xs text-white">4.8</span>
            </div>
          </div>

          {/* Guitar Info */}
          <div className="p-6">
            <div className="mb-3">
              <h3 className="text-lg font-bold text-white mb-1 group-hover:text-yellow-400 transition-colors duration-200">
                {guitar.model || guitar.name}
              </h3>
              <p className="text-gray-400 text-sm">
                {guitar.brand || 'Premium Guitar'}
              </p>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <p className="text-yellow-400 font-bold text-lg">
                  ${guitar.price || '2,499'}
                </p>
                <p className="text-gray-500 text-xs">Professional Series</p>
              </div>
              <ArrowRight className="w-4 h-4 text-yellow-500 group-hover:translate-x-1 transition-transform duration-200" />
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}