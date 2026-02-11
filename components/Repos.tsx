const RepoSection = () => {
  const githubProjects = [
    {
      name: "Vessel Acoustic Recording Annotator",
      description: "A pipeline for annotating underwater acoustic recordings using AIS vessel data, producing labeled WAV segments for marine research.",
      link: "https://github.com/woutdecrop/Vessel_Acoustic_Recording_Annotator"
    },
    {
      name: "Audio Vessel Distance Categorizer",
      description: "Deep learning model for classifying vessel distances from underwater acoustic recordings.",
      link: "https://github.com/woutdecrop/audio_vessel_distance_categorizer"
    },
    {
      name: "Phytoplankton Classification",
      description: "CNN-based phytoplankton species classifier for marine ecosystem monitoring.",
      link: "https://github.com/ai4os-hub/phyto-plankton-classification"
    },
    {
      name: "Audio Vessel Classification",
      description: "Module using on iMagine Marketplace to run the vessel distance categorizer on the cloud.",
      link: "https://github.com/ai4os-hub/audio-vessel-classification"
    }
  ];
  return <section id="repos" className="py-24 px-6 bg-black">/* GitHub Projects Section */
        <div>
          <h3 className="font-serif text-3xl font-semibold mb-8 text-white text-center">Featured GitHub Projects</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {githubProjects.map((project, index) => (
              <a 
                key={index} 
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-900 rounded-xl p-6 border border-orange-500/20 hover:border-orange-500/50 transition-all hover:shadow-lg hover:shadow-orange-500/10 group"
              >
                <h4 className="font-semibold text-white mb-2 group-hover:text-orange-400 transition-colors">
                  {project.name}
                </h4>
                <p className="text-gray-400 text-sm mb-4">
                  {project.description}
                </p>
                <span className="text-orange-400 text-sm font-medium flex items-center gap-2">
                  View on GitHub →
                </span>
              </a>
            ))}
          </div>
        </div>
    </section>;
};
export default RepoSection;