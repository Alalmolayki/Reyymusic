import React from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

const playlists = [
  {
    id: 1,
    title: "Today's Top Hits",
    image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=800&auto=format&fit=crop&q=60",
    songs: "50 şarkı",
    duration: "2 sa 45 dk"
  },
  {
    id: 2,
    title: "Türkçe Pop",
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&auto=format&fit=crop&q=60",
    songs: "40 şarkı",
    duration: "2 sa 15 dk"
  },
  {
    id: 3,
    title: "Chill Vibes",
    image: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=800&auto=format&fit=crop&q=60",
    songs: "35 şarkı",
    duration: "1 sa 55 dk"
  },
  {
    id: 4,
    title: "Rock Classics",
    image: "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?w=800&auto=format&fit=crop&q=60",
    songs: "45 şarkı",
    duration: "2 sa 30 dk"
  }
];

export default function FeaturedPlaylists() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold mb-8">Öne Çıkan Listeler</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {playlists.map((playlist) => (
          <motion.div
            key={playlist.id}
            whileHover={{ scale: 1.05 }}
            className="bg-gradient-to-br from-purple-900/50 to-indigo-900/50 rounded-xl overflow-hidden backdrop-blur-sm"
          >
            <div className="relative group">
              <img
                src={playlist.image}
                alt={playlist.title}
                className="w-full aspect-square object-cover"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <button className="bg-purple-600 hover:bg-purple-700 text-white p-4 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform">
                  <Play className="h-6 w-6" />
                </button>
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-semibold mb-1">{playlist.title}</h3>
              <p className="text-sm text-gray-400">{playlist.songs} • {playlist.duration}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}