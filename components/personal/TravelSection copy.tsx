"use client";

import { useEffect, useState } from "react";
import {
  ComposableMap,
  Geographies,
  Geography
} from "react-simple-maps";

const visitedCountries = [
  "Andorra",
  "Australia",
  "Austria",
  "Belgium",
  "Bosnia and Herzegovina",
  "Cambodia",
  "China",
  "Croatia",
  "Cyprus",
  "Denmark",
  "Egypt",
  "England",
  "Estonia",
  "France",
  "Germany",
  "Greece",
  "Hungary",
  "Indonesia",
  "Ireland",
  "Italy",
  "Mexico",
  "Netherlands",
  "Portugal",
  "Spain",
  "Switzerland",
  "Thailand",
  "Turkey",
  "United Kingdom",
  "United States of America",
  "USA",
  "Vatican",
  "Vietnam",
];

export default function TravelSection() {
  const [rotation, setRotation] = useState([0, -15, 0]); // [x, y, z]
  const [isDragging, setIsDragging] = useState(false);
  const [startPos, setStartPos] = useState<{ x: number; y: number } | null>(null);

  // Auto-spin animation when not dragging
  useEffect(() => {
    const id = setInterval(() => {
      if (!isDragging) {
        setRotation(([rotX, rotY, rotZ]) => [rotX + 0.2, rotY, rotZ]);
      }
    }, 30);
    return () => clearInterval(id);
  }, [isDragging]);

  // Handle mouse / touch events
  const handleMouseDown = (e: React.MouseEvent | React.TouchEvent) => {
    setIsDragging(true);
    const x = "touches" in e ? e.touches[0].clientX : e.clientX;
    const y = "touches" in e ? e.touches[0].clientY : e.clientY;
    setStartPos({ x, y });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    setStartPos(null);
  };

  const handleMouseMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging || !startPos) return;

    const x = "touches" in e ? e.touches[0].clientX : e.clientX;
    const y = "touches" in e ? e.touches[0].clientY : e.clientY;

    const dx = x - startPos.x;
    const dy = y - startPos.y;

    setRotation(([rotX, rotY, rotZ]) => [rotX + dx * 0.5, rotY - dy * 0.5, rotZ]);
    setStartPos({ x, y });
  };

  return (
    <section id="travel" className="py-20 px-6 bg-black text-white text-center">
      <h2 className="text-4xl font-bold mb-8">
        Places I've Visited 🌍
      </h2>

      <div className="flex flex-col md:flex-row justify-center items-start gap-8 max-w-5xl mx-auto">
        {/* Interactive Globe */}
        <div
          className="w-full md:w-2/3 flex justify-center cursor-grab"
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onMouseMove={handleMouseMove}
          onTouchStart={handleMouseDown}
          onTouchEnd={handleMouseUp}
          onTouchMove={handleMouseMove}
        >
          <ComposableMap
            projection="geoOrthographic"
            projectionConfig={{ rotate: rotation, scale: 250 }}
            className="shadow-xl rounded-full"
          >
            <Geographies geography="/world.geojson">
              {({ geographies }) =>
                geographies.map((geo) => {
                  const isVisited = visitedCountries.includes(geo.properties.name);
                  return (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      fill={isVisited ? "#3B82F6" : "#1f2937"}
                      stroke="#111"
                      style={{
                        default: { outline: "none" },
                        hover: { fill: "#60a5fa", outline: "none" },
                        pressed: { outline: "none" },
                      }}
                    />
                  );
                })
              }
            </Geographies>
          </ComposableMap>
        </div>

        {/* Scrollable Alphabetical List of Countries */}
        <div className="w-full md:w-1/3 max-h-[400px] overflow-y-auto bg-gray-900/50 backdrop-blur-md rounded-lg p-4 shadow-lg">
          <h3 className="text-xl font-semibold mb-4">Visited Countries</h3>
          <ul className="space-y-2">
            {visitedCountries.map((country, index) => (
              <li
                key={index}
                className="text-white hover:text-blue-400 transition-colors"
              >
                {country}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
