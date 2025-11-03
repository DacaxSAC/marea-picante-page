import React from 'react';
import Button from '../ui/Button';
import chefImg from '../../assets/images/mhf5ra4p-aly5l1e.png';

const Chefs: React.FC = () => {
  return (
    <section className="py-20 bg-[#48dfd6]/10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-5xl lg:text-6xl font-bold text-[#061854] leading-tight">
                Nuestros chefs
              </h2>
              
              <p className="text-lg text-[#061854] leading-relaxed">
                Nuestro equipo de chefs combina años de experiencia con una pasión 
                inquebrantable por la gastronomía peruana. Cada plato es una obra de arte 
                que refleja su dedicación y creatividad.
              </p>
            </div>

            {/* Chef Stats */}
            <div className="grid grid-cols-2 gap-8">
              <div className="space-y-2">
                <div className="text-3xl font-bold text-[#48dfd6]">15+</div>
                <div className="text-[#061854] font-medium">Años de experiencia</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-[#48dfd6]">50+</div>
                <div className="text-[#061854] font-medium">Platos únicos</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-[#48dfd6]">100%</div>
                <div className="text-[#061854] font-medium">Ingredientes frescos</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-[#48dfd6]">5★</div>
                <div className="text-[#061854] font-medium">Calificación promedio</div>
              </div>
            </div>

            {/* Action Button */}
            <div className="pt-4">
              <Button variant="primary" size="lg">
                Conoce al equipo
              </Button>
            </div>
          </div>

          {/* Right Side - Chef Image */}
          <div className="relative">
            {/* Background Circle */}
            <div className="absolute inset-0 bg-[#48dfd6] rounded-full transform scale-90"></div>
            
            {/* Chef Image */}
            <div className="relative z-10">
              <img 
                src={chefImg} 
                alt="Chef de Marea Picante" 
                className="w-full max-w-lg mx-auto rounded-full object-cover"
              />
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-8 -right-8 w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center">
              <span className="text-2xl">👨‍🍳</span>
            </div>
            <div className="absolute -bottom-8 -left-8 w-20 h-20 bg-[#061854] rounded-full shadow-lg flex items-center justify-center">
              <span className="text-white text-2xl">🔥</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Chefs;