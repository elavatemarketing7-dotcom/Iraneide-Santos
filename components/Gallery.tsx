
import React, { useState } from 'react';
import { X, Maximize2 } from 'lucide-react';

interface GalleryProps {
  images: string[];
  title: string;
}

const Gallery: React.FC<GalleryProps> = ({ images, title }) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="py-12">
      <h3 className="text-2xl font-bold text-center mb-8 serif">{title}</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 px-4">
        {images.map((img, idx) => (
          <div 
            key={idx} 
            className="aspect-square relative overflow-hidden rounded-xl bg-gray-200 cursor-pointer group"
            onClick={() => setSelectedImage(img)}
          >
            <img 
              src={img} 
              alt={`Resultado ${idx + 1}`} 
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all flex items-center justify-center">
              <Maximize2 size={24} className="text-white opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </div>
        ))}
      </div>

      <p className="text-center text-[10px] text-gray-400 mt-6 px-10 italic">
        * Resultados podem variar de pessoa para pessoa. Fotos autorizadas.
      </p>

      {/* Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 overflow-hidden"
          onClick={() => setSelectedImage(null)}
        >
          <button className="absolute top-6 right-6 text-white p-2 hover:bg-white/10 rounded-full">
            <X size={32} />
          </button>
          <img 
            src={selectedImage} 
            alt="Ampliada" 
            className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
          />
        </div>
      )}
    </div>
  );
};

export default Gallery;
