import React from 'react';
import { motion } from 'framer-motion';
import { Play, Heart } from 'lucide-react';

const releases = [
  {
    id: 1,
    title: "Midnight Dreams",
    artist: "Luna Eclipse",
    image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=800&auto=format&fit=crop&q=60",
    duration: "3:45"
  },
  {
    id: 2,
    title: "Electric Soul",
    artist: "The Midnight",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&auto=format&fit=crop&q=60",
    duration: "4:20"
  },
  {
    id: 3,
    title: "Mountain High",
    artist: "Echo Valley",
    image: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=800&auto=format&fit=crop&q=60",
    duration: "3:55"
  }
];

export default function NewReleases() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold mb-8">Yeni Çıkanlar</h2>
      <div className="space-y-4">
        {releases.map((release) => (
          <motion.div
            key={release.id}
            whileHover={{ scale: 1.02 }}
            className="bg-gradient-to-r from-purple-900/30 to-indigo-900/30 rounded-xl p-4 backdrop-blur-sm"
          >
            <div className="flex items-center space-x-4">
              <img
                src={release.image}
                alt={release.title}
                className="w-16 h-16 rounded-lg object-cover"
              />
              <div className="flex-1">
                <h3 className="font-semibold">{release.title}</h3>
                <p className="text-purple-400 text-sm">{release.artist}</p>
              </div>
              <span className="text-gray-400 text-sm">{release.duration}</span>
              <div className="flex space-x-3">
                <button className="p-2 hover:bg-purple-600/20 rounded-full transition-colors">
                  <Play className="h-5 w-5" />
                </button>
                <button className="p-2 hover:bg-purple-600/20 rounded-full transition-colors">
                  <Heart className="h-5 w-5" />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}