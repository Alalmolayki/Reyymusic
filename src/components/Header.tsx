import React from 'react';
import { Search, Menu, Headphones } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-gradient-to-r from-indigo-950 to-purple-900 text-white z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center space-x-2">
            <Headphones className="h-8 w-8 text-purple-400" />
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">
              Reyymusic
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="/" className="hover:text-purple-400 transition-colors">Ana Sayfa</a>
            <a href="/discover" className="hover:text-purple-400 transition-colors">Keşfet</a>
            <a href="/about" className="hover:text-purple-400 transition-colors">Hakkımızda</a>
            <a href="/contact" className="hover:text-purple-400 transition-colors">İletişim</a>
          </nav>

          {/* Search Bar */}
          <div className="hidden md:flex items-center">
            <div className="relative">
              <input
                type="text"
                placeholder="Müzik, sanatçı veya albüm ara..."
                className="w-64 px-4 py-1 rounded-full bg-purple-950/50 border border-purple-800 focus:outline-none focus:border-purple-400 text-sm"
              />
              <Search className="absolute right-3 top-1.5 h-4 w-4 text-purple-400" />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md hover:bg-purple-800/50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col space-y-4">
              <a href="/" className="hover:text-purple-400 transition-colors">Ana Sayfa</a>
              <a href="/discover" className="hover:text-purple-400 transition-colors">Keşfet</a>
              <a href="/about" className="hover:text-purple-400 transition-colors">Hakkımızda</a>
              <a href="/contact" className="hover:text-purple-400 transition-colors">İletişim</a>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Müzik, sanatçı veya albüm ara..."
                  className="w-full px-4 py-2 rounded-full bg-purple-950/50 border border-purple-800 focus:outline-none focus:border-purple-400"
                />
                <Search className="absolute right-3 top-2.5 h-5 w-5 text-purple-400" />
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}