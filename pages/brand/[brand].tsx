// pages/brand/[brand].tsx
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import GuitarCard from "@/Components/guitar/GuitarCard";
import LoadingSpinner from "@/Components/guitar/LoadingSpinner";
import ErrorState from "@/Components/guitar/ErrorState";
import SearchFilters from "@/Components/guitar/SearchFilters";
import { Button } from "@/Components/ui/button";
import { ArrowLeft } from "lucide-react";
import { models as mockModels } from "@/lib/mockData";

export default function BrandModelsPage() {
  const router = useRouter();
  const { brand } = router.query;

  const [models, setModels] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState("All");

  useEffect(() => {
    const loadModels = async () => {
      try {
        setLoading(true);
        await new Promise((res) => setTimeout(res, 1000));
        const filtered = mockModels.filter(
          (m) => m.brand.toLowerCase() === brand?.toString().toLowerCase()
        );
        setModels(filtered);
      } catch {
        setError("Failed to load models");
      } finally {
        setLoading(false);
      }
    };

    if (brand) loadModels();
  }, [brand]);

  const filteredModels = models.filter((model) => {
    const nameMatch = model.name.toLowerCase().includes(searchTerm.toLowerCase());
    const typeMatch = selectedType === "All" || model.type === selectedType;
    return nameMatch && typeMatch;
  });

  if (loading) return <LoadingSpinner message={`Loading ${brand} guitars...`} />;
  if (error) return <ErrorState message={error} onRetry={() => window.location.reload()} />;

  return (
    <div className="min-h-screen px-4 md:px-12 lg:px-24 py-10 bg-black text-white">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold capitalize">{brand} Guitars</h1>
        <Button variant="outline" onClick={() => router.push("/")}>
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back
        </Button>
      </div>

      <SearchFilters
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        selectedType={selectedType}
        setSelectedType={setSelectedType}
      />

      {filteredModels.length === 0 ? (
        <p className="text-gray-400">No models found for your search.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredModels.map((guitar, index) => (
            <GuitarCard
              key={guitar.id}
              index={index}
              guitar={guitar}
              onClick={() => router.push(`/model/${guitar.id}`)}
            />
          ))}
        </div>
      )}
    </div>
  );
}
