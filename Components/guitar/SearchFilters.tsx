import React from "react";
import { Search, Filter, SlidersHorizontal } from "lucide-react";
import { Input } from "@/Components/ui/input";
import { Button } from "@/Components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/Components/ui/select";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/Components/ui/dropdown-menu";

export default function SearchFilters({ 
  searchTerm, 
  setSearchTerm, 
  selectedType, 
  setSelectedType,
  types = ['All', 'Electric', 'Acoustic', 'Classical', 'Bass']
}) {
  return (
    <div className="bg-gray-800/50 backdrop-blur-sm border border-yellow-500/20 rounded-xl p-6 mb-8">
      <div className="flex flex-col lg:flex-row gap-4">
        {/* Search */}
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
          <Input
            placeholder="Search guitar models..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 bg-gray-900/50 border-gray-600 text-white placeholder-gray-400 focus:border-yellow-500"
          />
        </div>

        {/* Type Filter */}
        <div className="lg:w-48">
          <Select value={selectedType} onValueChange={setSelectedType}>
            <SelectTrigger className="bg-gray-900/50 border-gray-600 text-white">
              <Filter className="w-4 h-4 mr-2" />
              <SelectValue placeholder="Guitar Type" />
            </SelectTrigger>
            <SelectContent className="bg-gray-800 border-gray-600">
              {types.map((type) => (
                <SelectItem 
                  key={type} 
                  value={type}
                  className="text-white hover:bg-gray-700"
                >
                  {type}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Advanced Filters */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="border-gray-600 text-white hover:bg-gray-700">
              <SlidersHorizontal className="w-4 h-4 mr-2" />
              More Filters
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-gray-800 border-gray-600">
            <DropdownMenuItem className="text-white hover:bg-gray-700">
              Price Range
            </DropdownMenuItem>
            <DropdownMenuItem className="text-white hover:bg-gray-700">
              Brand
            </DropdownMenuItem>
            <DropdownMenuItem className="text-white hover:bg-gray-700">
              Year
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}