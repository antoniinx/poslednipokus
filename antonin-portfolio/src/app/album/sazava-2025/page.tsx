'use client';

import Header from '../../../components/Header';
import ColorBar from '../../../components/ColorBar';
import Link from 'next/link';

export default function Sazava2025() {
  return (
    <div className="max-w-6xl mx-auto px-5">
      <Header />
      <ColorBar activeColor="orange" />
      
      <div className="mt-25">
        <h2 className="text-3xl font-bold mb-8">sázava 2025</h2>
        
        <div className="max-w-2xl">
          <div className="bg-orange-50 border border-orange-200 rounded-lg p-8 text-center">
            <div className="text-6xl mb-4">📸</div>
            <h3 className="text-2xl font-bold text-orange-800 mb-4">
              Album zatím není hotové
            </h3>
            <p className="text-orange-700 text-lg mb-6">
              Fotky ze Sázavy se ještě zpracovávají. Album bude brzy k dispozici.
            </p>
            <div className="text-orange-600">
              Zkuste to prosím později.
            </div>
          </div>
        </div>
        
        <div className="mt-8">
          <Link href="/" className="text-orange-500 hover:underline">
            ← Zpět na hlavní stránku
          </Link>
        </div>
      </div>
    </div>
  );
} 