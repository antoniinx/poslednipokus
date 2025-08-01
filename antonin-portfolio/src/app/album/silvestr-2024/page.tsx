'use client';

import { useState } from 'react';
import Header from '../../../components/Header';
import ColorBar from '../../../components/ColorBar';
import PhotoGallery from '../../../components/PhotoGallery';
import Link from 'next/link';

// Seznam fotek ze Silvestra
const silvestrPhotos = [
  'PICT0112.JPG', 'PICT0111.JPG', 'PICT0110.JPG', 'PICT0100.JPG', 'PICT0098.JPG',
  'PICT0096.JPG', 'PICT0095.JPG', 'PICT0094.JPG', 'PICT0093.JPG', 'PICT0092.JPG',
  'PICT0089.JPG', 'PICT0088.JPG', 'PICT0087.JPG', 'PICT0083.JPG', 'PICT0082.JPG',
  'PICT0081.JPG', 'PICT0080.JPG', 'PICT0079.JPG', 'PICT0076.JPG', 'PICT0074.JPG',
  'PICT0072.JPG', 'PICT0070.JPG', 'PICT0069.JPG', 'PICT0066.JPG', 'PICT0062.JPG',
  'PICT0060.JPG', 'PICT0059.JPG', 'PICT0058.JPG', 'PICT0057.JPG', 'PICT0049.JPG',
  'PICT0025.JPG', 'IMG_6146.PNG', 'IMG_6141.PNG', 'IMG_6139.PNG', 'IMG_6127.PNG',
  'IMG_6126.JPG', 'IMG_6125.JPG', 'IMG_6124.JPG', 'IMG_6123.JPG', 'IMG_6120.JPG',
  'IMG_6119.JPG', 'IMG_6117.PNG', 'IMG_6116.PNG', 'IMG_6115.PNG', 'IMG_6112.JPG',
  'IMG_6111.PNG', 'IMG_6104.PNG', 'IMG_5014.png', 'HQSB9922.JPG'
];

export default function Silvestr2024() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'sedlcany') {
      setIsAuthenticated(true);
      setError('');
    } else {
      setError('Nesprávné heslo');
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="max-w-6xl mx-auto px-5">
        <Header />
        <ColorBar activeColor="blue" />
        
        <div className="mt-25">
          <h2 className="text-3xl font-bold mb-8">silvestr 2024</h2>
          
          <form onSubmit={handlePasswordSubmit} className="max-w-md">
            <div className="mb-4">
              <label htmlFor="password" className="block text-lg mb-2">
                Zadejte heslo:
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded text-lg"
                placeholder="Heslo"
                required
              />
            </div>
            
            {error && (
              <div className="text-red-500 mb-4">{error}</div>
            )}
            
            <button
              type="submit"
              className="bg-blue-500 text-white px-6 py-3 rounded text-lg hover:bg-blue-600 transition-colors"
            >
              Otevřít album
            </button>
          </form>
          
          <div className="mt-8">
            <Link href="/" className="text-blue-500 hover:underline">
              ← Zpět na hlavní stránku
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-5">
      <Header />
      <ColorBar activeColor="blue" />
      
      <div className="mt-25">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">silvestr 2024</h2>
          <button
            onClick={() => setIsAuthenticated(false)}
            className="text-blue-500 hover:underline"
          >
            Zpět
          </button>
        </div>
        
        <PhotoGallery photos={silvestrPhotos} albumName="silvestr-2024" />
        
        <div className="mt-8">
          <Link href="/" className="text-blue-500 hover:underline">
            ← Zpět na hlavní stránku
          </Link>
        </div>
      </div>
    </div>
  );
} 