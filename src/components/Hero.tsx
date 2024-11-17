import React from 'react';
import { motion } from 'framer-motion';
import { Play, Heart } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative h-[80vh] overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=1600&auto=format&fit=crop&q=80"
          alt="Hero background"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Müziğin Yeni <span className="text-purple-400">Deneyimi</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Milyonlarca şarkı, podcast ve playlist'e anında erişin. 
            Premium kalitede müzik deneyimini keşfedin.
          </p>
          <div className="flex space-x-4">
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full flex items-center space-x-2 transition-colors">
              <Play className="h-5 w-5" />
              <span>Hemen Başla</span>
            </button>
            <button className="border border-white hover:border-purple-400 hover:text-purple-400 px-8 py-3 rounded-full flex items-center space-x-2 transition-colors">
              <Heart className="h-5 w-5" />
              <span>Favorilere Ekle</span>
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}