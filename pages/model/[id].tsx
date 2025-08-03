import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/Components/ui/button";
import LoadingSpinner from "@/Components/guitar/LoadingSpinner";
import ErrorState from "@/Components/guitar/ErrorState";
import { mockModels } from "@/lib/mockData";

export default function GuitarDetailsPage() {
  const router = useRouter();
  const { id } = router.query;

  const [guitar, setGuitar] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      const model = mockModels.find((g) => g.id === id);
      if (model) {
        setGuitar(model);
      }
      setLoading(false);
    }
  }, [id]);

  if (loading) return <LoadingSpinner message="Loading guitar details..." />;
  if (!guitar) return <ErrorState message="Guitar not found." onRetry={() => router.back()} />;

  return (
    <div className="min-h-screen px-4 md:px-12 lg:px-24 py-10 bg-black text-white">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">{guitar.name} Details</h1>
        <Button
          variant="outline"
          onClick={() => router.back()}
          className="border-yellow-500 text-yellow-400 hover:bg-yellow-500 hover:text-black"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back
        </Button>
      </div>

      {/* Guitar Specs */}
      <div className="bg-gray-800 rounded-lg p-6 space-y-4">
        <div>
          <h2 className="text-xl font-semibold">Brand:</h2>
          <p className="text-gray-300">{guitar.brand}</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold">Type:</h2>
          <p className="text-gray-300">{guitar.type}</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold">Price:</h2>
          <p className="text-yellow-400 font-bold text-lg">${guitar.price}</p>
        </div>
      </div>
    </div>
  );
}
