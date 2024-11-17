import React from 'react';
import { motion } from 'framer-motion';

const artists = [
  {
    id: 1,
    name: "Luna Eclipse",
    genre: "Pop, R&B",
    image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=800&auto=format&fit=crop&q=60",
    followers: "2.5M"
  },
  {
    id: 2,
    name: "The Midnight",
    genre: "Synthwave",
    image: "https://images.unsplash.com/photo-1520785643438-5bf77931f493?w=800&auto=format&fit=crop&q=60",
    followers: "1.8M"
  },
  {
    id: 3,
    name: "Echo Valley",
    genre: "Alternative Rock",
    image: "https://images.unsplash.com/photo-1549213783-8284d0336c4f?w=800&auto=format&fit=crop&q=60",
    followers: "1.2M"
  }
];

export default function TrendingArtists() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold mb-8">Trend Sanatçılar</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {artists.map((artist) => (
          <motion.div
            key={artist.id}
            whileHover={{ y: -10 }}
            className="bg-gradient-to-br from-purple-900/30 to-indigo-900/30 rounded-xl p-6 backdrop-blur-sm"
          >
            <div className="flex items-center space-x-4">
              <img
                src={artist.image}
                alt={artist.name}
                className="w-20 h-20 rounded-full object-cover"
              />
              <div>
                <h3 className="font-semibold text-lg">{artist.name}</h3>
                <p className="text-purple-400 text-sm">{artist.genre}</p>
                <p className="text-gray-400 text-sm mt-1">{artist.followers} takipçi</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}