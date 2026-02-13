"use client";

import { useMode } from "@/components/ModeContext";
import Image from "next/image";

// Import covers directly
import peopleCover from "@/assets/people don’t suck  - Playlist Cover.jpg";
import woudtCover from "@/assets/woudt - Playlist Cover.jpg";
import housepartyCover from "@/assets/ERASMUS HOUSEPARTY - Playlist Cover.jpg";

export default function MusicSection() {
  const { mode } = useMode();
  if (mode !== "personal") return null; // only show in personal mode

  const playlists = [
    {
      name: "people don’t suck",
      url: "https://open.spotify.com/playlist/4zmGKNqQZEXWMLQTpsNBLY?si=211b8f837587474e",
      cover: peopleCover
    },
    {
      name: "woudt",
      url: "https://open.spotify.com/playlist/0of1bBD4SBe8Pq7l1gZNq7?si=1989f5d96bc945c1",
      cover: woudtCover
    },
    {
      name: "ERASMUS HOUSEPARTY",
      url: "https://open.spotify.com/playlist/7bjv8hsp34URRpQfa2MeCE?si=e231a020333141e3",
      cover: housepartyCover
    }
  ];

  return (
    <section id="music" className="py-20 px-6 bg-black text-white text-center">
      <h2 className="text-4xl font-bold mb-8">My Music 🎶</h2>
      <div className="flex flex-col md:flex-row justify-center gap-6">
        {playlists.map((pl) => (
          <a
            key={pl.name}
            href={pl.url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-900 hover:bg-gray-800 px-4 py-4 rounded-lg shadow-lg transition-colors duration-300 flex flex-col items-center gap-4"
          >
            <Image
              src={pl.cover}
              alt={`${pl.name} cover`}
              width={200}
              height={200}
              className="rounded-lg"
            />
            <span className="text-lg font-semibold">{pl.name}</span>
          </a>
        ))}
      </div>
    </section>
  );
}
