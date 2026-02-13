import { ExternalLink } from "lucide-react";

interface Publication {
  title: string;
  journal: string;
  year: number;
  authors: string;
  link: string;
  featured?: boolean;
}

const publications: Publication[] = [
  {
    title: "Automated image classification workflow for phytoplankton monitoring",
    journal: "Frontiers in Marine Science",
    year: 2025,
    authors: "Decrop W, Lagaisse R, Mortelmans J, Muñiz C, Heredia I, Calatrava A, Deneudt K",
    link: "https://doi.org/10.3389/fmars.2025.1699781",
    featured: true,
  },
  {
  title: "Advancing long-term phytoplankton biodiversity assessment in the North Sea using an imaging approach",
  journal: "Scientific Data (Nature)",
  year: 2025,
  authors: "Lagaisse R, Dillen N, Bakeev D, Decrop W, Focke P, Mortelmans J, Muyle J, Deneudt K",
  link: "https://doi.org/10.1038/s41597-025-06278-w",
  featured: true,
  },
  {
    title: "Transfer Learning for Distance Classification of Marine Vessels Using Underwater Sound",
    journal: "IEEE Journal of Selected Topics in Applied Earth Observations and Remote Sensing",
    year: 2025,
    authors: "Decrop W, Deneudt K, Parcerisas C, Schall E, Debusschere E",
    link: "https://doi.org/10.1109/JSTARS.2025.3593779",
    featured: true,
  },
  {
    title: "Best practices for AI-based image analysis applications in plankton research",
    journal: "Ecological Informatics",
    year: 2025,
    authors: "iMagine Project Consortium, including Decrop W",
    link: "https://www.sciencedirect.com/science/article/pii/S1574954125003152",
  },
];
const PublicationsSection = () => {
  return (
    <section id="publications" className="py-24 px-6 bg-black">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-orange-500 font-medium tracking-widest uppercase text-sm mb-4">
            Research
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-white">
            Selected Publications
          </h2>
        </div>
        
        <div className="space-y-6">
          {publications.map((pub, index) => (
            <a
              key={index}
              href={pub.link}
              className="group block bg-gray-900 rounded-xl p-6 md:p-8 shadow-soft border border-orange-500/20 hover:border-orange-500/50 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-orange-500 font-medium text-sm">{pub.journal}</span>
                    <span className="text-gray-500 text-sm">• {pub.year}</span>
                    {pub.featured && (
                      <span className="bg-orange-500/20 text-orange-400 text-xs font-medium px-2 py-1 rounded-full border border-orange-500/50">
                        Featured
                      </span>
                    )}
                  </div>
                  <h3 className="font-serif text-xl md:text-2xl font-medium text-white group-hover:text-orange-400 transition-colors mb-2">
                    {pub.title}
                  </h3>
                  <p className="text-gray-400 text-sm">
                    {pub.authors}
                  </p>
                </div>
                <ExternalLink className="w-5 h-5 text-gray-500 group-hover:text-orange-400 transition-colors shrink-0 mt-1" />
              </div>
            </a>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="https://www.researchgate.net/profile/Wout-Decrop"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-orange-500 font-medium hover:text-orange-400 transition-colors"
          >
            View all publications on ResearchGate
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default PublicationsSection;
