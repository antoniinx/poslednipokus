'use client';

import { useState } from 'react';
import Header from '../../../components/Header';
import ColorBar from '../../../components/ColorBar';
import PhotoGallery from '../../../components/PhotoGallery';
import Link from 'next/link';

// Seznam fotek z Itálie
const italiePhotos = [
  'PICT0347.JPG', 'PICT0346.JPG', 'PICT0345.JPG', 'PICT0344.JPG', 'PICT0343.JPG',
  'PICT0342.JPG', 'PICT0341.JPG', 'PICT0340.JPG', 'PICT0339.JPG', 'PICT0338.JPG',
  'PICT0337.JPG', 'PICT0336.JPG', 'PICT0335.JPG', 'PICT0334.JPG', 'PICT0333.JPG',
  'PICT0332.JPG', 'PICT0331.JPG', 'PICT0330.JPG', 'PICT0329.JPG', 'PICT0328.JPG',
  'PICT0327.JPG', 'PICT0326.JPG', 'PICT0325.JPG', 'PICT0324.JPG', 'PICT0323.JPG',
  'PICT0322.JPG', 'PICT0321.JPG', 'PICT0320.JPG', 'PICT0319.JPG', 'PICT0318.JPG',
  'PICT0317.JPG', 'PICT0316.JPG', 'PICT0315.JPG', 'PICT0314.JPG', 'PICT0313.JPG',
  'PICT0312.JPG', 'PICT0311.JPG', 'PICT0310.JPG', 'PICT0309.JPG', 'PICT0308.JPG',
  'PICT0307.JPG', 'PICT0306.JPG', 'PICT0305.JPG', 'PICT0304.JPG', 'PICT0303.JPG',
  'PICT0302.JPG', 'PICT0301.JPG', 'PICT0300.JPG', 'PICT0299.JPG', 'PICT0298.JPG',
  'PICT0297.JPG', 'PICT0296.JPG', 'PICT0295.JPG', 'PICT0294.JPG', 'PICT0293.JPG',
  'PICT0292.JPG', 'PICT0291.JPG', 'PICT0290.JPG', 'PICT0289.JPG', 'PICT0288.JPG',
  'PICT0287.JPG', 'PICT0286.JPG', 'PICT0285.JPG', 'PICT0284.JPG', 'PICT0283.JPG',
  'PICT0282.JPG', 'PICT0281.JPG', 'PICT0280.JPG', 'PICT0279.JPG', 'PICT0278.JPG',
  'PICT0277.JPG', 'PICT0276.JPG', 'PICT0275.JPG', 'PICT0274.JPG', 'PICT0273.JPG',
  'PICT0272.JPG', 'PICT0271.JPG', 'PICT0270.JPG', 'PICT0269.JPG', 'PICT0268.JPG',
  'PICT0267.JPG', 'PICT0266.JPG', 'PICT0265.JPG', 'PICT0264.JPG', 'PICT0263.JPG',
  'PICT0262.JPG', 'PICT0261.JPG', 'PICT0260.JPG', 'PICT0259.JPG', 'PICT0258.JPG',
  'PICT0257.JPG', 'PICT0256.JPG', 'PICT0255.JPG', 'PICT0254.JPG', 'PICT0253.JPG',
  'PICT0252.JPG', 'PICT0251.JPG', 'PICT0250.JPG', 'PICT0249.JPG', 'PICT0248.JPG'
];

export default function Italie2025() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'bulhar') {
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
        <ColorBar activeColor="yellow" />
        
        <div className="mt-25">
          <h2 className="text-3xl font-bold mb-8">itálie 2025</h2>
          
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
              className="bg-yellow-500 text-black px-6 py-3 rounded text-lg hover:bg-yellow-600 transition-colors"
            >
              Otevřít album
            </button>
          </form>
          
          <div className="mt-8">
            <Link href="/" className="text-yellow-500 hover:underline">
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
      <ColorBar activeColor="yellow" />
      
      <div className="mt-25">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">itálie 2025</h2>
          <button
            onClick={() => setIsAuthenticated(false)}
            className="text-yellow-500 hover:underline"
          >
            Zpět
          </button>
        </div>
        
        <PhotoGallery photos={italiePhotos} albumName="italie-2025" />
        
        <div className="mt-8">
          <Link href="/" className="text-yellow-500 hover:underline">
            ← Zpět na hlavní stránku
          </Link>
        </div>
      </div>
    </div>
  );
} 