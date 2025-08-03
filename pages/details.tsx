import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { ArrowLeft, Music, Users, Wrench, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/Components/ui/button";
import { Card, CardContent } from "@/Components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/Components/ui/tabs";
import { Badge } from "@/Components/ui/badge";

import LoadingSpinner from "@/Components/guitar/LoadingSpinner";
import ErrorState from "@/Components/guitar/ErrorState";

export default function GuitarDetailsPage() {
  const router = useRouter();
  const { id } = router.query;

  const [guitar, setGuitar] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [visibleMusicians, setVisibleMusicians] = useState(2);

  // Mock guitar data
  const mockGuitars = [
    {
      id: "1",
      name: "Stratocaster",
      brand: "Fender",
      type: "Electric",
      price: "1999",
      specs: {
        body: "Alder",
        neck: "Maple",
        pickups: "Single-coil",
        scale: "25.5\"",
        frets: 21
      },
      musicians: ["Jimi Hendrix", "Eric Clapton", "John Mayer", "David Gilmour"]
    },
    {
      id: "2",
      name: "Les Paul",
      brand: "Gibson",
      type: "Electric",
      price: "2399",
      specs: {
        body: "Mahogany",
        neck: "Mahogany",
        pickups: "Humbuckers",
        scale: "24.75\"",
        frets: 22
      },
      musicians: ["Slash", "Jimmy Page", "Joe Perry", "Zakk Wylde"]
    }
  ];

  useEffect(() => {
    const fetchGuitar = async () => {
      try {
        setLoading(true);
        await new Promise(res => setTimeout(res, 1000));
        const found = mockGuitars.find((g) => g.id === id);
        if (!found) throw new Error("Guitar not found");
        setGuitar(found);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchGuitar();
  }, [id]);

  if (loading) return <LoadingSpinner message="Loading guitar details..." />;
  if (error) return <ErrorState message={error} onRetry={() => window.location.reload()} />;

  const musiciansToShow = guitar.musicians.slice(0, visibleMusicians);

  return (
    <div className="min-h-screen px-4 md:px-12 lg:px-24 py-10 bg-black text-white">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-3xl font-bold">{guitar.name} by {guitar.brand}</h1>
        <Button onClick={() => router.back()} variant="outline" className="border-yellow-500 text-yellow-400 hover:bg-yellow-500 hover:text-black">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back
        </Button>
      </div>

      <Card className="bg-gray-900 border-yellow-500/20">
        <CardContent className="p-6">
          <Tabs defaultValue="specs">
            <TabsList className="mb-6 bg-black border-yellow-500/20 text-yellow-400">
              <TabsTrigger value="specs" className="data-[state=active]:bg-yellow-500/10">
                <Wrench className="w-4 h-4 mr-2" /> Specs
              </TabsTrigger>
              <TabsTrigger value="musicians" className="data-[state=active]:bg-yellow-500/10">
                <Users className="w-4 h-4 mr-2" /> Musicians
              </TabsTrigger>
            </TabsList>

            <TabsContent value="specs">
              <ul className="space-y-2 text-gray-300">
                {Object.entries(guitar.specs).map(([key, value]) => (
                  <li key={key}>
                    <span className="font-semibold capitalize">{key}</span>: {String(value)}
                  </li>
                ))}
              </ul>
            </TabsContent>

            <TabsContent value="musicians">
              <ul className="space-y-3 text-white mb-4">
                {musiciansToShow.map((m, idx) => (
                  <li key={idx} className="bg-yellow-500/10 p-3 rounded-lg">
                    <Music className="inline w-4 h-4 mr-2 text-yellow-400" />
                    {m}
                  </li>
                ))}
              </ul>
              {visibleMusicians < guitar.musicians.length && (
                <div className="flex justify-center gap-4">
                  <Button onClick={() => setVisibleMusicians((v) => v + 2)} className="bg-yellow-500 hover:bg-yellow-600 text-black">
                    Show More
                  </Button>
                </div>
              )}
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}
