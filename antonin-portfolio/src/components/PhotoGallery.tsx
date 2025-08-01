'use client';

import { useState } from 'react';
import Image from 'next/image';

interface PhotoGalleryProps {
  photos: string[];
  albumName: string;
}

export default function PhotoGallery({ photos, albumName }: PhotoGalleryProps) {
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  const handlePhotoClick = (photo: string) => {
    const index = photos.indexOf(photo);
    setCurrentPhotoIndex(index);
    setSelectedPhoto(photo);
  };

  const closeModal = () => {
    setSelectedPhoto(null);
    setCurrentPhotoIndex(0);
  };

  const nextPhoto = () => {
    const nextIndex = (currentPhotoIndex + 1) % photos.length;
    setCurrentPhotoIndex(nextIndex);
    setSelectedPhoto(photos[nextIndex]);
  };

  const prevPhoto = () => {
    const prevIndex = currentPhotoIndex === 0 ? photos.length - 1 : currentPhotoIndex - 1;
    setCurrentPhotoIndex(prevIndex);
    setSelectedPhoto(photos[prevIndex]);
  };

  const downloadAlbum = () => {
    // Zde bude logika pro stahování celého alba
    alert('Funkce stahování bude implementována později');
  };

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {photos.map((photo, index) => (
          <div
            key={index}
            className="relative aspect-square cursor-pointer overflow-hidden rounded-lg hover:opacity-90 transition-opacity"
            onClick={() => handlePhotoClick(photo)}
          >
            <Image
              src={`/albums/${albumName}/${photo}`}
              alt={`Foto ${index + 1}`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
            />
          </div>
        ))}
      </div>

      {/* Modal pro zvětšenou fotku */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4"
          onClick={closeModal}
        >
          <div className="relative max-w-full max-h-full">
            {/* Tlačítko zavření */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white text-2xl hover:text-gray-300 z-10 bg-black bg-opacity-50 rounded-full w-10 h-10 flex items-center justify-center"
            >
              ✕
            </button>
            
            {/* Šipka vlevo */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevPhoto();
              }}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-3xl hover:text-gray-300 z-10 bg-black bg-opacity-50 rounded-full w-12 h-12 flex items-center justify-center"
            >
              ‹
            </button>
            
            {/* Šipka vpravo */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                nextPhoto();
              }}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-3xl hover:text-gray-300 z-10 bg-black bg-opacity-50 rounded-full w-12 h-12 flex items-center justify-center"
            >
              ›
            </button>
            
            {/* Fotka */}
            <Image
              src={`/albums/${albumName}/${selectedPhoto}`}
              alt="Zvětšená fotka"
              width={800}
              height={600}
              className="max-w-full max-h-full object-contain"
            />
            
            {/* Číslování */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white bg-black bg-opacity-50 px-4 py-2 rounded-full">
              {currentPhotoIndex + 1} / {photos.length}
            </div>
          </div>
        </div>
      )}

      <div className="mt-8 text-center">
        <button
          onClick={downloadAlbum}
          className="bg-green-500 text-white px-6 py-3 rounded text-lg hover:bg-green-600 transition-colors"
        >
          Stáhnout celé album ({photos.length} fotek)
        </button>
      </div>
    </>
  );
} 