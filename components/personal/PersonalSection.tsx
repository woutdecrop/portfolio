const PersonalSection = () => {
  return (
    <section id="about" className="py-24 px-6 bg-black">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center mb-16">
          
          {/* Text Section */}
          <div>
            <p className="text-blue-500 font-medium tracking-widest uppercase text-sm mb-4">
              About Me
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-semibold text-white mb-6">
              Curious Explorer,<br />
              <span className="bg-gradient-to-r from-blue-500 to-blue-400 bg-clip-text text-transparent">
                loving life, languages, and adventures.
              </span>
            </h2>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                Hi! I’m Wout, a Ghent enthusiast who loves discovering new cultures, learning new languages, 
                and enjoying all the small adventures life throws at me. I enjoy coding too—mostly as a way 
                to explore ideas and solve little puzzles, but it’s not the main thing that defines me.
              </p>
              <p>
                When I’m not exploring the city or planning my next trip, I try so spend time with my dog, Cora. 
              </p>
              <p>
                Travel, coffee, languages, Ghent’s canals, and spontaneous adventures—these are the things 
                that keep me energized and curious.
              </p>
            </div>
          </div>
          
          {/* Quick Facts & Dog Picture */}
          <div className="bg-gray-900 rounded-2xl p-7 shadow-md border border-blue-500/20 hover:border-blue-500/50 transition-colors max-w-sm mx-auto">
            <h3 className="font-serif text-2xl font-semibold mb-6 text-white text-center">
              Cora at the beach
            </h3>

            {/* Dog Image */}
            <div className="overflow-hidden rounded-xl border border-gray-700">
              <img
                src="/images/cora.jpg"
                alt="Cora, my dog"
                className="w-full object-cover"
              />
            </div>
            <p className="text-gray-400 text-center mt-3">Cora, my loyal adventure buddy 🐾</p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PersonalSection;
