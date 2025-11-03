import React from 'react';
import Button from '../ui/Button';
import tentaculosImg from '../../assets/images/mhf5ra4p-nq8bvey.png';
import pescadoImg from '../../assets/images/mhf5ra4p-79ohv8w.png';
import culantroImg from '../../assets/images/mhf5ra4p-mh4i94z.png';
import localImg from '../../assets/images/mhf5ra4p-q9c5g2p.png';
import limonImg from '../../assets/images/mhf5ra4p-0oqf3qy.png';
import pescado2Img from '../../assets/images/mhf5ra4p-gkdy2pt.png';
import culantro2Img from '../../assets/images/mhf5ra4p-7tgssbo.png';
import trioMarinoImg from '../../assets/images/mhf5ra4p-aly5l1e.png';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen bg-white overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0">
        {/* Circular Lines */}
        <div className="absolute -top-96 -left-96 w-[1052px] h-[1052px] border-4 border-[#48dfd6]/10 rounded-full"></div>
        <div className="absolute -top-80 -left-80 w-[1052px] h-[1052px] border-4 border-[#48dfd6]/10 rounded-full"></div>
        <div className="absolute -top-88 -left-96 w-[1052px] h-[1052px] border-4 border-[#48dfd6]/10 rounded-full"></div>
        
        {/* Background Images */}
        <img 
          src={tentaculosImg} 
          alt="" 
          className="absolute top-20 right-96 w-96 h-96 opacity-20 pointer-events-none"
        />
        <img 
          src={pescadoImg} 
          alt="" 
          className="absolute top-96 right-80 w-96 h-96 opacity-20 pointer-events-none"
        />
        <img 
          src={culantroImg} 
          alt="" 
          className="absolute top-60 right-20 w-80 h-80 opacity-20 transform rotate-[18deg] pointer-events-none"
        />
        <img 
          src={pescado2Img} 
          alt="" 
          className="absolute bottom-96 right-20 w-96 h-96 opacity-20 transform rotate-[31deg] pointer-events-none"
        />
        <img 
          src={culantro2Img} 
          alt="" 
          className="absolute bottom-80 right-80 w-48 h-48 opacity-20 transform rotate-[18deg] pointer-events-none"
        />
        <img 
          src={limonImg} 
          alt="" 
          className="absolute bottom-40 left-48 w-40 h-40 transform rotate-[93deg] pointer-events-none"
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="space-y-8">
            <h1 className="text-6xl lg:text-7xl font-bold text-[#061854] leading-tight">
              El sabor del mar en cada bocado
            </h1>
            
            <p className="text-lg text-[#061854] leading-relaxed max-w-md">
              Cada plato cuenta una historia de frescura, pasión y cocina peruana 
              elevada a su máxima expresión. Un espacio donde la tradición se renueva 
              en cada preparación, fusionando lo clásico y lo moderno.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="primary" size="lg">
                Carta
              </Button>
              <Button variant="secondary" size="lg">
                Contáctanos
              </Button>
            </div>

            {/* Social Media */}
            <div className="flex items-center gap-6 pt-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 border border-[#061854] rounded-full flex items-center justify-center hover:bg-[#061854] hover:text-white transition-colors cursor-pointer">
                  <span className="text-sm">f</span>
                </div>
                <div className="w-12 h-12 border border-[#061854] rounded-full flex items-center justify-center hover:bg-[#061854] hover:text-white transition-colors cursor-pointer">
                  <span className="text-sm">ig</span>
                </div>
              </div>
              <div className="w-44 h-1 bg-[#48dfd6]/20"></div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative">
            {/* Main Restaurant Image */}
            <div className="relative">
              <img 
                src={localImg} 
                alt="Marea Picante Restaurant" 
                className="w-full max-w-lg mx-auto rounded-[100px_40px] shadow-2xl"
              />
            </div>
            
            {/* Floating Food Image */}
            <div className="absolute -bottom-16 -right-8 transform rotate-[-16deg]">
              <img 
                src={trioMarinoImg} 
                alt="Trio Marino" 
                className="w-80 h-80 drop-shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;