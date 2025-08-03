import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import BrandCard from "@/Components/guitar/BrandCard";
import LoadingSpinner from "@/Components/guitar/LoadingSpinner";
import ErrorState from "@/Components/guitar/ErrorState";

export default function HomePage() {
  const router = useRouter();
  const [brands, setBrands] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const mockBrands = [
    "Fender",
    "Gibson",
    "Ibanez",
    "PRS",
    "Taylor",
    "Yamaha",
    "ESP",
    "Gretsch",
  ];

  useEffect(() => {
    const loadBrands = async () => {
      try {
        await new Promise((res) => setTimeout(res, 1000));
        setBrands(mockBrands);
      } catch {
        setError("Failed to load brands");
      } finally {
        setLoading(false);
      }
    };

    loadBrands();
  }, []);

  if (loading) return <LoadingSpinner message="Loading guitar brands..." />;
  if (error) return <ErrorState message={error} onRetry={() => window.location.reload()} />;

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* Header */}
      <header className="bg-red-600 py-4 text-center text-white text-2xl font-bold shadow-lg">
        🎸 Online Guitar Shop
      </header>

      {/* Main Content */}
      <main className="flex-grow px-4 md:px-12 lg:px-24 py-10">
        <h1 className="text-3xl font-bold mb-8 text-center">Guitar Brands</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {brands.map((brand, index) => (
            <BrandCard
              key={brand}
              index={index}
              brand={brand}
              onClick={() => router.push(`/brand/${brand.toLowerCase()}`)}
            />
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-red-600 text-center py-3 text-white text-sm">
        &copy; {new Date().getFullYear()} Guitar Shop | All Rights Reserved
      </footer>
    </div>
  );
}
