import { Briefcase, GraduationCap, Award } from 'lucide-react';

export function Experience() {
  const workExperience = [
    {
      position: 'Marine AI Engineer',
      company: 'VLIZ - Flanders Marine Institute',
      period: 'Feb 2023 - Present',
      description: 'Working fulltime on marine AI projects, developing machine learning pipelines and AI applications for oceanographic research in Oostende, Belgium.',
    },
    {
      position: 'Engineering Intern, Marine Observatory Centre',
      company: 'VLIZ - Flanders Marine Institute',
      period: 'Jul 2022 - Sep 2022',
      description: 'Internship focusing on MongoDB, updating data pipelines, machine learning techniques, and several research boat days in the North Sea.',
    },
    {
      position: 'Engineering Intern, Marine Robotics Centre',
      company: 'VLIZ - Flanders Marine Institute',
      period: 'Aug 2021',
      description: 'Hands-on experience operating on a boat, working with Grafana, MySQL, sonar data, and learning the inner workings of a research organization.',
    },
  ];

  const education = [
  {
    degree: 'Master of Bioscience Engineering - BE, Cell and Gene Biotechnology (major Computational Biology)',
    institution: 'Universiteit Gent',
    period: '2020 - 2022',
    honor: 'Magna Cum Laude',
    description: 'Focus on computational biology, bioinformatics, and machine learning applications in biosciences.',
  },
  {
    degree: 'Master of Bioinformatics',
    institution: 'Aarhus University',
    period: '2020 - 2021',
    erasmus: 'Erasmus',
    description: 'Erasmus semester in Aarhus Denmark. Hands-on projects: image recognition and regression models. Skills: Python, Machine Learning, CNNs.',
  },
  {
    degree: 'Bachelor of Bioscience Engineering - BE, Cell and Gene Biotechnology',
    institution: 'Universiteit Gent',
    period: '2017 - 2020',
    honor: 'Cum Laude',
    description: 'Focused on cell and gene biotechnology, bioinformatics, and practical lab experience.',
  },
];


// const education = [
//   {
//     degree: 'Master of Bioscience Engineering - BE, Cell and Gene Biotechnology (major Computational Biology)',
//     institution: 'Universiteit Gent',
//     period: '2020 - 2022',
//     description: 'Graduated Magma cum laude. Focus on computational biology, bioinformatics, and machine learning applications in biosciences.',
//   },
//   {
//     degree: 'Master of Bioinformatics',
//     institution: 'Aarhus University',
//     period: '2020 - 2021',
//     description: 'International experience with hands-on projects: transcriptome analysis using RNA-seq, tissue engineering papers, image recognition, gene finding, and regression models. Skills: Python, Machine Learning, CNNs.',
//   },
//   {
//     degree: 'Bachelor of Bioscience Engineering - BE, Cell and Gene Biotechnology',
//     institution: 'Universiteit Gent',
//     period: '2017 - 2020',
//     description: 'Graduated cum laude. Focused on cell and gene biotechnology, bioinformatics, and practical lab experience.',
//   },
// ];


  // const awards = [
  //   'Best Paper Award - International Conference on AI (2025)',
  //   'Outstanding Research Achievement Award (2024)',
  //   'Innovation Grant Recipient (2023)',
  //   'Dean\'s List - Academic Excellence (2015-2017)',
  // ];

  return (
    <section id="experience" className="py-20 bg-black">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl mb-12 text-center bg-gradient-to-r from-orange-500 to-orange-400 bg-clip-text text-transparent">Experience & Education</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Work Experience */}
          <div>
            <h3 className="text-2xl mb-6 flex items-center text-white">
              <Briefcase className="mr-2 text-orange-500" size={28} />
              Work Experience
            </h3>
            
            <div className="space-y-6">
              {workExperience.map((job, index) => (
                <div key={index} className="relative pl-8 border-l-2 border-orange-500/30">
                  <div className="absolute w-4 h-4 bg-orange-500 rounded-full -left-[9px] top-0"></div>
                  <div className="relative bg-gray-900 p-6 rounded-xl shadow-sm border border-orange-500/20">
                    <h4 className="text-xl mb-1 text-white">{job.position}</h4>
                    <p className="text-gray-400 mb-2">{job.company}</p>
                    <p className="text-sm text-gray-500 mb-3">{job.period}</p>
                    <p className="text-gray-300">{job.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-2xl mb-6 flex items-center text-white">
              <GraduationCap className="mr-2 text-orange-500" size={28} />
              Education
            </h3>
            
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div key={index} className="relative pl-8 border-l-2 border-orange-500/30">
                  {/* Timeline dot */}
                  <div className="absolute w-4 h-4 bg-orange-500 rounded-full -left-[9px] top-0"></div>

                  {/* Card */}
                  <div className="relative bg-gray-900 p-6 rounded-xl shadow-sm border border-orange-500/20">

                    {/* Honor badge */}
                    {edu.honor && (
                      <div className="absolute -top-3 -right-3 bg-gradient-to-r from-orange-500 to-orange-400 text-black text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1 shadow-lg">
                        <Award size={14} />
                        {edu.honor}
                      </div>
                    )}

                    {edu.erasmus && (
                      <div className="absolute -top-3 -right-3 bg-gradient-to-r from-orange-100 to-orange-200 text-black text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1 shadow-lg">
                        <Award size={14} />
                        {edu.erasmus}
                      </div>
                    )}

                    {/* Card content */}
                    <h4 className="text-xl mb-1 text-white">{edu.degree}</h4>
                    <p className="text-gray-400 mb-2">{edu.institution}</p>
                    <p className="text-sm text-gray-500 mb-3">{edu.period}</p>
                    <p className="text-gray-300">{edu.description}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* Awards
        <div className="mt-12">
          <h3 className="text-2xl mb-6 flex items-center text-white">
            <Award className="mr-2 text-orange-500" size={28} />
            Awards & Recognition
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {awards.map((award, index) => (
              <div
                key={index}
                className="bg-gray-900 p-4 rounded-lg shadow-sm border-l-4 border-orange-500 hover:shadow-md transition-shadow"
              >
                <p className="text-gray-300">{award}</p>
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
}
