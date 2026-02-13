import React from "react";

import { Flag, Loader2 } from "lucide-react";
const languages = [
  { name: "Dutch", level: "Native", percent: 100 },
  { name: "English", level: "Fluent", percent: 100 },
  { name: "Spanish", level: "B1", percent: 70 },
  { name: "French", level: "B1", percent: 50 },
  { name: "Italian", level: "A2", percent: 40 },
  { name: "German", level: "basic", percent: 25 },
];

const languageTimeline = [
  { year: "2023-2024", language: "Spanish", course: "Praktisch Spaans 2", level: "A2", start: "2023-09-01", end: "2024-01-01", certificateDate: "2024-01-01", score: 14 },
  { year: "2024-2025", language: "Italian", course: "Praktisch Italiaans 1", level: "A1", start: "2024-09-01", end: "2024-12-30", certificateDate: "2024-12-30", score: 14 },
  { year: "2024-2025", language: "Spanish", course: "Conversatiecursus Spaans voor beginners", level: "A2+", start: "2024-09-01", end: "2024-12-30", certificateDate: "2024-12-30", score: 13 },
  { year: "2024-2025", language: "Italian", course: "Praktisch Italiaans 2", level: "A2", start: "2025-01-01", end: "2025-06-30", certificateDate: "2025-06-30", score: 14 },
  { year: "2025-2026", language: "Spanish", course: "Praktisch Spaans 3", level: "B1", start: "2025-09-01", end: "2025-12-18", certificateDate: "2025-12-18", score: 15 },
  { year: "2025-2026", language: "Spanish", course: "Praktisch Spaans 4", level: "B2", start: "2026-01-01", end: "2026-06-25", certificateDate: "2026-06-25" },
];

const LanguagesSection = () => {
  const startDate = new Date("2023-07-01");
  const maxEndDate = new Date("2026-06-30");
  const totalMonths = (maxEndDate.getFullYear() - startDate.getFullYear()) * 12 + (maxEndDate.getMonth() - startDate.getMonth() + 1);
  const today = new Date();

  const monthsBetween = (d1: Date, d2: Date) =>
    (d2.getFullYear() - d1.getFullYear()) * 12 + (d2.getMonth() - d1.getMonth());

  return (
    <section id="languages" className="py-20 bg-black text-white">
    <div className="max-w-5xl mx-auto px-4">
      <div className="max-w-5xl mx-auto px-4">
        <p className="text-orange-500 font-medium tracking-widest uppercase text-sm mb-4 text-center">
          Expertise
        </p>

        <h2 className="font-serif text-4xl md:text-5xl font-semibold text-white text-center mb-10">
          Languages
        </h2>

        <div className="space-y-6">
          {languages.map((lang, index) => (
            <div key={index}>
              {/* Name and Level */}
              <div className="flex justify-between mb-1">
                <span className="font-medium text-white">{lang.name}</span>
                <span className="text-sm text-gray-400">{lang.level}</span>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-gray-800 rounded-full h-4 overflow-hidden relative">
                {/* Static filled portion */}
                <div
                  className="h-4 rounded-full bg-orange-500"
                  style={{ width: `${lang.percent}%` }}
                ></div>

                {/* Only Spanish: moving shine */}
                {lang.name === "Spanish" && (
                  <div
                    className="absolute top-0 left-0 h-full w-1/5 bg-orange-300 rounded-full animate-loading-segment"
                    style={{ maxWidth: `${88}%` }}
                  ></div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>


    <div className="max-w-5xl mx-auto px-4">

    <h2 className="font-serif text-2xl md:text-3xl font-semibold mb-4 mt-10 text-white text-center">
    Active Learning
    </h2>
        {["Spanish", "Italian"].map((lang) => (
          <div key={lang} className="mb-10">
            <h3 className="text-xl font-semibold mb-3">{lang}</h3>
            <div className="relative w-full h-12 bg-gray-800 rounded-full overflow-visible">
              {/* Background bar */}
              <div className="absolute top-1/2 -translate-y-1/2 w-full h-6 bg-gray-700 rounded-full"></div>

              {/* Courses */}
              {languageTimeline
                .filter((c) => c.language === lang)
                .map((course, index) => {
                  const courseStart = new Date(course.start);
                  const courseEnd = new Date(course.end);
                  const isOngoing = today >= courseStart && today <= courseEnd;

                  const leftPercent = (monthsBetween(startDate, courseStart) / totalMonths) * 100;
                  const widthPercent = (monthsBetween(courseStart, courseEnd) / totalMonths) * 100;

                  return (
                    <div key={index} className="relative">
                      {/* Course bar */}
                      <div
                        className="absolute top-1/2 translate-y-1/2 h-6 bg-orange-500 rounded-full flex items-center justify-end pr-3 text-xs font-semibold text-white"
                        style={{
                          left: `${leftPercent}%`,
                          width: `${widthPercent}%`,
                        }}
                        title={`${course.course} (${course.level}) ${course.start} → ${course.end}`}
                      >
                        {/* Inside the bar: loader for ongoing course */}
                        {isOngoing && (
                            <div className="flex items-center">
                            <Loader2 size={16} className="animate-spin -ml-[110px]" />
                            <span className="text-xs ml-[4px]">In progress</span>
                            </div>


                        )}
                      </div>

                      {/* Certificate level above flag */}
                      {course.certificateDate && new Date(course.certificateDate) && (
                        <>
                          <div
                            className="absolute -top-5 text-xs font-semibold text-white text-center w-12 -translate-x-1/2"
                            style={{
                              left: `${
                                (monthsBetween(startDate, new Date(course.certificateDate)) / totalMonths) * 100
                              }%`,
                            }}
                          >
                            {course.level}
                          </div>
                          <div
                            className="absolute w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-lg border-2 border-orange-500 -translate-x-1/2"
                            style={{
                              left: `${
                                (monthsBetween(startDate, new Date(course.certificateDate)) / totalMonths) * 100
                              }%`,
                            }}
                            title={`Certification: ${course.level} - ${course.course} (${course.certificateDate})`}
                          >
                            <Flag size={20} className="text-red-500" />
                          </div>
                        </>
                      )}
                    </div>
                  );
                })}
            </div>

            {/* Year labels */}
            <div className="flex justify-between mt-2 text-sm text-gray-400">
              {["Sep 2023", "2024","June 2024", "2025", "2025 June","2026", "Jun 2026"].map((y) => (
                <span key={y}>{y}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
      </div>
    </section>
      );
};

export default LanguagesSection;
