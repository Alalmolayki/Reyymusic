import React, { useState } from 'react';
import { Play, Pause, SkipBack, SkipForward, Volume2 } from 'lucide-react';

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-indigo-950 to-purple-900 text-white py-4 px-4 border-t border-purple-800">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between">
          {/* Song Info */}
          <div className="flex items-center space-x-4">
            <img
              src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
              alt="Album cover"
              className="w-12 h-12 rounded-md object-cover"
            />
            <div>
              <h3 className="font-medium">Midnight Serenade</h3>
              <p className="text-sm text-purple-400">Luna Eclipse</p>
            </div>
          </div>

          {/* Player Controls */}
          <div className="flex items-center space-x-6">
            <button className="hover:text-purple-400 transition-colors">
              <SkipBack className="h-5 w-5" />
            </button>
            <button
              className="p-2 rounded-full bg-purple-500 hover:bg-purple-400 transition-colors"
              onClick={() => setIsPlaying(!isPlaying)}
            >
              {isPlaying ? (
                <Pause className="h-6 w-6" />
              ) : (
                <Play className="h-6 w-6" />
              )}
            </button>
            <button className="hover:text-purple-400 transition-colors">
              <SkipForward className="h-5 w-5" />
            </button>
          </div>

          {/* Volume Control */}
          <div className="hidden md:flex items-center space-x-2">
            <Volume2 className="h-5 w-5" />
            <input
              type="range"
              min="0"
              max="100"
              className="w-24 h-1 bg-purple-800 rounded-lg appearance-none cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
}