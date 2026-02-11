const languages = [
  { name: "English", level: "Fluent", percent: 100 },
  { name: "Dutch", level: "Native", percent: 100 },
  { name: "Spanish", level: "B1", percent: 60, credential: "DELE B1 2025" },
  { name: "Italian", level: "A2", percent: 40, credential: "CELI A2 2024" },
  { name: "French", level: "B1", percent: 60 },
];


const LanguagesSection = () => {
  return (
  <section id="languages" className="py-20 bg-black text-white">
  <div className="max-w-4xl mx-auto px-4">
    <h2 className="text-4xl mb-12 text-center bg-gradient-to-r from-orange-500 to-orange-400 bg-clip-text text-transparent">
      Languages
    </h2>

    <div className="space-y-6">
      {languages.map((lang, index) => (
        <div key={index}>
          <div className="flex justify-between mb-1">
            <span className="font-medium text-white">{lang.name}</span>
            <span className="text-sm text-gray-400">{lang.level}</span>
          </div>
          <div className="w-full bg-gray-800 rounded-full h-4 overflow-hidden">
            <div
              className="bg-orange-500 h-4 rounded-full transition-all duration-500"
              style={{ width: `${lang.percent}%` }}
            ></div>
          </div>
          {lang.credential && (
            <p className="text-xs text-gray-400 mt-1 italic">{lang.credential}</p>
          )}
        </div>
      ))}
    </div>
  </div>
</section>
  )
};

export default LanguagesSection;