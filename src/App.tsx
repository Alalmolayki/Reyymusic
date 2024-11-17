import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import FeaturedPlaylists from './components/FeaturedPlaylists';
import TrendingArtists from './components/TrendingArtists';
import NewReleases from './components/NewReleases';
import MusicPlayer from './components/MusicPlayer';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-b from-black via-indigo-950 to-black text-white">
        <Header />
        <main className="pt-16">
          <Hero />
          <FeaturedPlaylists />
          <TrendingArtists />
          <NewReleases />
        </main>
        <MusicPlayer />
        <Footer />
      </div>
    </Router>
  );
}

export default App;