const AboutSection = () => {
  return <section id="about" className="py-24 px-6 bg-black">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center mb-16">
          <div>
            <p className="text-orange-500 font-medium tracking-widest uppercase text-sm mb-4">
              About Me
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-semibold text-white mb-6">Enthusiast,<br />
              <span className="bg-gradient-to-r from-orange-500 to-orange-400 bg-clip-text text-transparent">building AI for the ocean.</span>
            </h2>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                I'm a marine scientist at the Flanders Marine Institute (VLIZ) in Oostende, Belgium, 
                specializing in machine learning applications for marine ecosystem monitoring. 
                My research focuses on developing AI-powered tools for phytoplankton classification 
                and underwater acoustic analysis.
              </p>
              <p>
                I work on automated image classification workflows, leveraging convolutional neural 
                networks for biodiversity assessment in the North Sea. I'm also involved in the 
                iMagine project, developing best practices for AI-based image analysis in 
                plankton research and underwater sound classification.
              </p>
            </div>
          </div>
          
          <div className="bg-gray-900 rounded-2xl p-8 shadow-md border border-orange-500/20 hover:border-orange-500/50 transition-colors">
            <h3 className="font-serif text-2xl font-semibold mb-6 text-white">
              Quick Facts
            </h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center py-3 border-b border-gray-700">
                <span className="text-gray-400">Current Position</span>
                <span className="font-medium text-white">Researcher @ VLIZ</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-gray-700">
                <span className="text-gray-400">Location</span>
                <span className="font-medium text-white">Ghent, Belgium</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-gray-700">
                <span className="text-gray-400">Education</span>
                <span className="font-medium text-white">Bioscience Engineering</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-gray-700">
                <span className="text-gray-400">Focus Areas</span>
                <span className="font-medium text-white">Marine AI & ML</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default AboutSection;