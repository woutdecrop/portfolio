import { useState, useEffect } from "react";

const languages = [
  { name: "Dutch", level: "Native", percent: 100 },
  { name: "English", level: "Fluent", percent: 100 },
  { name: "Spanish", level: "B1", percent: 70 },
  { name: "French", level: "B1", percent: 50 },
  { name: "Italian", level: "A2", percent: 40},
];

const LanguagesSection = () => {
  const [spanishWidth, setSpanishWidth] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => setSpanishWidth(70), 100); // grow to 70%
    return () => clearTimeout(timeout);
  }, []);

  return (
    {languages.map((lang, index) => (
      <div key={index}>
        <div className="flex justify-between mb-1">
          <span className="font-medium text-white">{lang.name}</span>
          <span className="text-sm text-gray-400">{lang.level}</span>
        </div>
        <div className="w-full bg-gray-800 rounded-full h-4 overflow-hidden">
          <div
            className={`h-4 rounded-full transition-all duration-1000 ${
              lang.name === "Spanish" ? "bg-orange-500 animate-pulse-bar" : "bg-orange-500"
            }`}
            style={{
              width: `${lang.name === "Spanish" ? spanishWidth : lang.percent}%`,
            }}
          ></div>
        </div>
      </div>
    ))}
  );
};
