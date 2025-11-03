import React from 'react';
import Button from '../ui/Button';
import tentaculos2Img from '../../assets/images/mhf5ra4p-d5nst9j.png';
import culantro3Img from '../../assets/images/mhf5ra4p-iwlr5n9.png';
import langostinosImg from '../../assets/images/mhf5ra4p-7qmxm4q.png';
import alverjaImg from '../../assets/images/mhf5ra4p-rxcmfph.png';
import cebollaImg from '../../assets/images/mhf5ra4p-ns5siln.png';
import trioMarino2Img from '../../assets/images/mhf5ra4p-mpjjmfy.png';
import culantro4Img from '../../assets/images/mhf5ra4p-q54tmit.png';
import limon2Img from '../../assets/images/mhf5ra4p-wycbp3w.png';
import limon3Img from '../../assets/images/mhf5ra4p-m7d623y.png';

const About: React.FC = () => {
  return (
    <section className="relative py-20 bg-[#061854]/5 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0">
        <img 
          src={tentaculos2Img} 
          alt="" 
          className="absolute bottom-20 right-96 w-96 h-72 opacity-20 pointer-events-none"
        />
        <img 
          src={culantro3Img} 
          alt="" 
          className="absolute top-32 left-80 w-96 h-96 opacity-20 pointer-events-none"
        />
        <img 
          src={langostinosImg} 
          alt="" 
          className="absolute top-96 -left-5 w-80 h-80 opacity-20 transform rotate-[-52deg] pointer-events-none"
        />
        <img 
          src={alverjaImg} 
          alt="" 
          className="absolute top-60 right-96 w-80 h-80 opacity-20 transform rotate-[-37deg] pointer-events-none"
        />
        <img 
          src={cebollaImg} 
          alt="" 
          className="absolute top-96 -right-5 w-96 h-96 opacity-20 pointer-events-none"
        />
        <img 
          src={culantro4Img} 
          alt="" 
          className="absolute top-20 right-96 w-64 h-64 opacity-20 transform rotate-[67deg] pointer-events-none"
        />
        <img 
          src={limon2Img} 
          alt="" 
          className="absolute bottom-40 right-96 w-64 h-64 transform rotate-[48deg] pointer-events-none"
        />
        <img 
          src={limon3Img} 
          alt="" 
          className="absolute bottom-20 left-40 w-28 h-28 pointer-events-none"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Large Food Image */}
          <div className="relative">
            <img 
              src={trioMarino2Img} 
              alt="Trio Marino" 
              className="w-full max-w-2xl transform rotate-[-16deg] drop-shadow-2xl"
            />
          </div>

          {/* Right Side - Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-5xl lg:text-6xl font-bold text-[#061854] leading-tight">
                Esto es<br />
                Marea Picante
              </h2>
              
              <p className="text-lg text-[#061854] leading-relaxed">
                En Marea Picante celebramos la riqueza de la gastronomía peruana con una 
                propuesta que combina sabor, frescura y creatividad. Cada detalle, desde 
                el plato hasta la presentación, está pensado para ofrecer una 
                experiencia que despierte todos los sentidos.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="primary" size="lg">
                Carta
              </Button>
              <Button variant="secondary" size="lg">
                Ver galería
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;