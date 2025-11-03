import React from 'react';
import Button from '../ui/Button';
import localExteriorImg from '../../assets/images/mhf5ra4p-q9c5g2p.png';

const Contact: React.FC = () => {
  return (
    <section className="py-20 bg-[#061854]/5">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Restaurant Image */}
          <div className="relative">
            <img 
              src={localExteriorImg} 
              alt="Marea Picante Restaurant" 
              className="w-full rounded-3xl shadow-2xl"
            />
            
            {/* Floating Info Cards */}
            <div className="absolute -bottom-8 -right-8 bg-white rounded-2xl p-6 shadow-xl">
              <div className="text-center">
                <div className="text-2xl font-bold text-[#48dfd6]">4.9</div>
                <div className="text-[#061854] text-sm">★★★★★</div>
                <div className="text-[#061854]/70 text-xs">Google Reviews</div>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Info */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-5xl lg:text-6xl font-bold text-[#061854] leading-tight">
                Visítanos
              </h2>
              
              <p className="text-lg text-[#061854] leading-relaxed">
                Te esperamos en nuestro acogedor local para que vivas una experiencia 
                gastronómica única. Ven y descubre por qué somos el lugar favorito de 
                los amantes de la buena cocina peruana.
              </p>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#48dfd6] rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xl">📍</span>
                </div>
                <div>
                  <div className="font-semibold text-[#061854]">Dirección</div>
                  <div className="text-[#061854]/70">Av. Larco 1234, Miraflores<br />Lima, Perú</div>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#48dfd6] rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xl">📞</span>
                </div>
                <div>
                  <div className="font-semibold text-[#061854]">Teléfono</div>
                  <div className="text-[#061854]/70">+51 1 234-5678</div>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#48dfd6] rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xl">🕒</span>
                </div>
                <div>
                  <div className="font-semibold text-[#061854]">Horarios</div>
                  <div className="text-[#061854]/70">
                    Lun - Dom: 12:00 PM - 11:00 PM<br />
                    Feriados: 12:00 PM - 10:00 PM
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button variant="primary" size="lg">
                Hacer reserva
              </Button>
              <Button variant="secondary" size="lg">
                Ver en mapa
              </Button>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-20">
          <div className="bg-white rounded-3xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-[#061854] mb-6 text-center">
              Encuéntranos fácilmente
            </h3>
            
            {/* Placeholder for Map */}
            <div className="bg-[#061854]/10 rounded-2xl h-96 flex items-center justify-center">
              <div className="text-center">
                <div className="text-4xl mb-4">🗺️</div>
                <div className="text-[#061854] font-semibold">Mapa interactivo</div>
                <div className="text-[#061854]/70 text-sm">Av. Larco 1234, Miraflores, Lima</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;