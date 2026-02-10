import { ArrowDown } from "lucide-react";
import Image from "next/image";
import profilePhoto from "@/assets/profile-photo..jpg";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-6 py-20 relative bg-black">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <Image 
            src={profilePhoto} 
            alt="Wout Decrop" 
            width={160}
            height={160}
            className="rounded-full mx-auto border-2 border-orange-500 shadow-2xl"
          />
        </div>

        <p className="text-orange-500 font-semibold tracking-widest uppercase text-sm mb-6">
          Marine Data Engineer
        </p>

        <h1 className="text-7xl font-bold text-white mb-2">
          Wout
        </h1>
        
        <h2 className="text-7xl font-bold bg-gradient-to-r from-orange-500 to-orange-400 bg-clip-text text-transparent mb-8">
          Decrop
        </h2>

        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
          Building AI models for plankton & vessel detection. Python, ML, & environmental research at VLIZ.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
