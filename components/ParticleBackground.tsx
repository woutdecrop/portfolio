"use client";

import { useEffect, useState, useMemo } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { type Container, type ISourceOptions } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";
import { useMode } from "@/components/ModeContext";

export default function ParticleBackground() {
    const [init, setInit] = useState(false);
    const { mode } = useMode();
    const particleColor = mode === "professional" ? "#f97316" : "#3b82f6";

    // this should be run only once per application lifetime
    useEffect(() => {
        initParticlesEngine(async (engine) => {
            // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
            // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
            // starting from v2 you can add only the features you need reducing the bundle size
            //await loadAll(engine);
            //await loadFull(engine);
            await loadSlim(engine);
            //await loadBasic(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const particlesLoaded = async (container?: Container): Promise<void> => {
        // console.log(container);
    };

    const options: ISourceOptions = useMemo(() => ({
        background: {
            color: {
                value: "transparent",
            },
        },
        fpsLimit: 120,
        interactivity: {
            events: {
                onClick: {
                    enable: false,
                },
                onHover: {
                    enable: true,
                    mode: "repulse",
                },
            },
            modes: {
                repulse: {
                    distance: 100,
                    duration: 0.4,
                },
            },
        },
        particles: {
            color: {
                value: particleColor, // Dynamic based on mode
            },
            links: {
                color: "#1f2937", // Slate gray link
                distance: 150,
                enable: true,
                opacity: 0.2, // Subtle links
                width: 1,
            },
            move: {
                direction: "top", // Drift upwards like bubbles/plankton
                enable: true,
                outModes: {
                    default: "out",
                },
                random: true,
                speed: 0.8,
                straight: false,
            },
            number: {
                density: {
                    enable: true,
                },
                value: 40, // Not too many to avoid clutter
            },
            opacity: {
                value: 0.3, // Subtle particles
            },
            shape: {
                type: "circle",
            },
            size: {
                value: { min: 1, max: 3 },
            },
        },
        detectRetina: true,
    }), [particleColor]);

    if (init) {
        return (
            <div className="fixed inset-0 z-0 pointer-events-none">
                <Particles
                    id="tsparticles"
                    particlesLoaded={particlesLoaded}
                    options={options}
                    className="h-full w-full"
                />
            </div>
        );
    }

    return <></>;
}
