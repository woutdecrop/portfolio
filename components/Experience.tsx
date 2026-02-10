import { Briefcase, GraduationCap, Award } from 'lucide-react';

export function Experience() {
  const workExperience = [
    {
      position: 'Senior Researcher',
      company: 'Research Institute',
      period: '2023 - Present',
      description: 'Leading research initiatives in machine learning and data science, publishing papers, and mentoring junior researchers.',
    },
    {
      position: 'Data Scientist',
      company: 'Tech Company',
      period: '2021 - 2023',
      description: 'Developed predictive models and analytics solutions, collaborated with cross-functional teams.',
    },
    {
      position: 'Research Assistant',
      company: 'University Lab',
      period: '2019 - 2021',
      description: 'Conducted research experiments, analyzed data, and contributed to academic publications.',
    },
  ];

  const education = [
    {
      degree: 'Ph.D. in Computer Science',
      institution: 'University Name',
      period: '2019 - 2023',
      description: 'Thesis: Advanced Machine Learning Techniques',
    },
    {
      degree: 'M.S. in Data Science',
      institution: 'University Name',
      period: '2017 - 2019',
      description: 'Focus: Statistical Learning and Analytics',
    },
    {
      degree: 'B.S. in Computer Science',
      institution: 'University Name',
      period: '2013 - 2017',
      description: 'Graduated with Honors',
    },
  ];

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
                  <div className="bg-gray-900 p-4 rounded-lg shadow-sm border border-orange-500/20">
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
                  <div className="absolute w-4 h-4 bg-orange-500 rounded-full -left-[9px] top-0"></div>
                  <div className="bg-gray-900 p-4 rounded-lg shadow-sm border border-orange-500/20">
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
