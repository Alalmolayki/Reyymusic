import React from 'react';
import { Instagram, Twitter, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-indigo-950 text-white py-12 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Hakkımızda</h3>
            <p className="text-purple-300 text-sm">
              Reyymusic, müzik tutkunları için tasarlanmış modern bir müzik platformudur.
              Keşfedin, dinleyin ve müziğin tadını çıkarın.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Hızlı Bağlantılar</h3>
            <ul className="space-y-2 text-purple-300 text-sm">
              <li><a href="/premium" className="hover:text-purple-400">Premium Üyelik</a></li>
              <li><a href="/gift" className="hover:text-purple-400">Hediye Kartı</a></li>
              <li><a href="/help" className="hover:text-purple-400">Yardım Merkezi</a></li>
              <li><a href="/download" className="hover:text-purple-400">Uygulamayı İndir</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Yasal</h3>
            <ul className="space-y-2 text-purple-300 text-sm">
              <li><a href="/privacy" className="hover:text-purple-400">Gizlilik Politikası</a></li>
              <li><a href="/terms" className="hover:text-purple-400">Kullanım Koşulları</a></li>
              <li><a href="/cookies" className="hover:text-purple-400">Çerez Politikası</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Bizi Takip Edin</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-purple-400 hover:text-purple-300 transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-purple-400 hover:text-purple-300 transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-purple-400 hover:text-purple-300 transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-purple-800 text-center text-sm text-purple-300">
          <p>&copy; {new Date().getFullYear()} Reyymusic. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  );
}