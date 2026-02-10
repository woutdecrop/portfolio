import { Github, Linkedin, Twitter, Mail } from "lucide-react";

interface SocialLink {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  href: string;
}

const socialLinks: SocialLink[] = [
  { icon: Mail, label: "Email", href: "mailto:woutdec@hotmail.com" },
  { icon: Github, label: "GitHub", href: "https://github.com/woutdecrop" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/in/woutdecrop" },
];

const FooterSection = () => {
  return (
    <footer id="contact" className="bg-black border-t border-orange-500/20 text-white py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-orange-500 font-medium tracking-widest uppercase text-sm mb-4">
            Get in Touch
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-semibold mb-6 text-white">
            Let's collaborate
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            I'm always interested in hearing about new research collaborations, 
            speaking opportunities, or just connecting with fellow scientists.
          </p>
        </div>
        
        <div className="flex justify-center gap-4 mb-16">
          {socialLinks.map((link, index) => {
            const Icon = link.icon;
            return (
              <a
                key={index}
                href={link.href}
                aria-label={link.label}
                className="w-12 h-12 rounded-full bg-orange-500/20 border border-orange-500/50 hover:bg-orange-500 hover:border-orange-500 text-orange-400 hover:text-white flex items-center justify-center transition-colors"
              >
                <Icon className="w-5 h-5" />
              </a>
            );
          })}
        </div>
        
        <div className="border-t border-orange-500/20 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Wout Decrop..
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
