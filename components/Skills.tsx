interface SkillCategory {
  title: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Programming Languages",
    skills: ["Python", "R", "Julia", "Matlab", "SQL", "Bash"],
  },
  {
    title: "Machine Learning & Tools",
    skills: ["PyTorch", "TensorFlow", "scikit-learn", "Keras","Git", "Docker", "Jupyter", "VS Code" ],
  }
];




const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 px-6 bg-black">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-orange-500 font-medium tracking-widest uppercase text-sm mb-4">
            Expertise
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-white">
            Skills & Technologies
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="bg-gray-900 rounded-xl p-8 shadow-md border border-orange-500/20 hover:border-orange-500/50 transition-colors"
            >
              <h3 className="font-serif text-xl font-semibold text-white mb-6">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="bg-orange-500/10 text-orange-400 px-4 py-2 rounded-full text-sm font-medium hover:bg-orange-500/30 transition-colors cursor-default border border-orange-500/30"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
