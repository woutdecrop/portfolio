import React, { useRef } from 'react';
import Image from 'next/image';

const conferences = [
    {
        id: 1,
        type: 'video',
        src: '/conferences/VMSD.mp4',
        text: "VLIZ Marine Science Day: AI for vessel classification.",
        date: "Wednesday 6 March 2024",
        location: "Ostend, Belgium",
        rotation: '-rotate-3',
    },
    {
        id: 2,
        type: 'image',
        src: '/conferences/spain.jpg',
        text: "Webinar: FlowCam Phytoplankton Identification.",
        date: "June 2-6, 2025",
        location: "Palacio de la Magdalena, Santander, Spain",
        rotation: 'rotate-1',
    },
    {
        id: 3,
        type: 'video',
        src: '/conferences/ICUA.mp4',
        text: "ICUA 2024 in Bath: illegal vessel detection based on acoustic data.",
        date: "17-20 June 2024",
        location: "University of Bath, Bath, UK",
        rotation: '-rotate-2',
    },
    {
        id: 4,
        type: 'image',
        src: '/conferences/DCLDE_1.jpg',
        text: "Presenting at the DCLDE conference in Rotterdam!",
        date: "2-7 June 2024",
        location: "Rotterdam, The Netherlands",
        rotation: '-rotate-1',
    },
    {
        id: 5,
        type: 'image',
        src: '/conferences/DCLDE_2.jpg',
        text: "Showcasing a poster & speed talk on CNNs in marine science.",
        date: "2-7 June 2024",
        location: "Rotterdam, The Netherlands",
        rotation: 'rotate-2',
    },
];

export default function ConferencesSection() {
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const scrollLeft = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
        }
    };

    const scrollRight = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
        }
    };

    return (
        <section className="py-24 bg-black" id="conferences">
            <div className="container mx-auto px-4 md:px-8 max-w-6xl relative">
                <div className="flex justify-between items-end mb-12">
                    <div>
                        <p className="text-orange-500 font-medium tracking-widest uppercase text-sm mb-4">
                            Events
                        </p>
                        <h2 className="font-serif text-4xl md:text-5xl font-semibold text-white mb-4">
                            Conferences
                        </h2>
                        <p className="text-gray-400 text-lg max-w-2xl">
                            A glimpse into the events where I have shared our findings, connected with the community, and explored the future of marine science.
                        </p>
                    </div>
                    <div className="hidden md:flex gap-4">
                        <button
                            onClick={scrollLeft}
                            className="p-3 rounded-full bg-gray-900 border border-orange-500/20 text-white hover:border-orange-500/50 transition-colors"
                            aria-label="Scroll left"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
                        </button>
                        <button
                            onClick={scrollRight}
                            className="p-3 rounded-full bg-gray-900 border border-orange-500/20 text-white hover:border-orange-500/50 transition-colors"
                            aria-label="Scroll right"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
                        </button>
                    </div>
                </div>

                {/* Polaroids Container */}
                <div
                    ref={scrollContainerRef}
                    className="flex overflow-x-auto gap-8 pb-12 pt-8 px-8 -mx-4 snap-x snap-mandatory hide-scrollbar"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    {conferences.map((item) => (
                        <div
                            key={item.id}
                            className={`snap-center shrink-0 w-[300px] md:w-[350px] bg-white p-4 pb-8 shadow-xl border border-gray-200 rounded-sm transition-transform duration-300 hover:scale-105 hover:z-10 ${item.rotation} relative flex flex-col justify-between`}
                            style={{ minHeight: '450px' }}
                        >
                            <div>
                                <div className="relative w-full aspect-[4/3] bg-gray-100 overflow-hidden mb-4 rounded-sm border border-gray-100">
                                    {item.type === 'image' ? (
                                        <Image
                                            src={item.src}
                                            alt={item.text}
                                            fill
                                            className="object-cover"
                                            sizes="(max-width: 768px) 300px, 350px"
                                        />
                                    ) : (
                                        <video
                                            src={item.src}
                                            className="w-full h-full object-cover"
                                            autoPlay
                                            loop
                                            muted
                                            playsInline
                                        />
                                    )}
                                </div>
                                <p className="text-gray-800 font-medium text-center text-lg leading-relaxed px-2 font-serif italic mb-6">
                                    {item.text}
                                </p>
                            </div>
                            <div className="mt-auto pt-4 border-t border-gray-100/60 text-center flex flex-col items-center">
                                <span className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-1">{item.date}</span>
                                {item.location && <span className="text-[10px] uppercase tracking-wide text-gray-400">{item.location}</span>}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <style dangerouslySetInnerHTML={{
                __html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}} />
        </section>
    );
}
