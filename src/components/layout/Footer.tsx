import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#061854] text-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#48dfd6] rounded-full flex items-center justify-center">
                <span className="text-[#061854] font-bold text-lg">M</span>
              </div>
              <span className="text-2xl font-bold">Marea Picante</span>
            </div>
            <p className="text-white/70 leading-relaxed">
              Sabores auténticos del mar peruano en cada bocado. Una experiencia 
              gastronómica que celebra la tradición y la innovación.
            </p>
            <div className="flex gap-4">
              <div className="w-10 h-10 border border-white/30 rounded-full flex items-center justify-center hover:bg-[#48dfd6] hover:border-[#48dfd6] transition-colors cursor-pointer">
                <span className="text-sm">f</span>
              </div>
              <div className="w-10 h-10 border border-white/30 rounded-full flex items-center justify-center hover:bg-[#48dfd6] hover:border-[#48dfd6] transition-colors cursor-pointer">
                <span className="text-sm">ig</span>
              </div>
              <div className="w-10 h-10 border border-white/30 rounded-full flex items-center justify-center hover:bg-[#48dfd6] hover:border-[#48dfd6] transition-colors cursor-pointer">
                <span className="text-sm">tw</span>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold">Navegación</h3>
            <ul className="space-y-3">
              <li><a href="#inicio" className="text-white/70 hover:text-[#48dfd6] transition-colors">Inicio</a></li>
              <li><a href="#nosotros" className="text-white/70 hover:text-[#48dfd6] transition-colors">Nosotros</a></li>
              <li><a href="#carta" className="text-white/70 hover:text-[#48dfd6] transition-colors">Carta</a></li>
              <li><a href="#chefs" className="text-white/70 hover:text-[#48dfd6] transition-colors">Chefs</a></li>
              <li><a href="#contacto" className="text-white/70 hover:text-[#48dfd6] transition-colors">Contacto</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold">Servicios</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-white/70 hover:text-[#48dfd6] transition-colors">Reservas</a></li>
              <li><a href="#" className="text-white/70 hover:text-[#48dfd6] transition-colors">Eventos privados</a></li>
              <li><a href="#" className="text-white/70 hover:text-[#48dfd6] transition-colors">Catering</a></li>
              <li><a href="#" className="text-white/70 hover:text-[#48dfd6] transition-colors">Delivery</a></li>
              <li><a href="#" className="text-white/70 hover:text-[#48dfd6] transition-colors">Take away</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold">Contacto</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-[#48dfd6] text-lg">📍</span>
                <div className="text-white/70">
                  Av. Larco 1234, Miraflores<br />
                  Lima, Perú
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-[#48dfd6] text-lg">📞</span>
                <div className="text-white/70">+51 1 234-5678</div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-[#48dfd6] text-lg">✉️</span>
                <div className="text-white/70">info@mareapicante.pe</div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#48dfd6] text-lg">🕒</span>
                <div className="text-white/70">
                  Lun - Dom: 12:00 PM - 11:00 PM
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-white/70 text-sm">
              © 2024 Marea Picante. Todos los derechos reservados.
            </div>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-white/70 hover:text-[#48dfd6] transition-colors">
                Política de privacidad
              </a>
              <a href="#" className="text-white/70 hover:text-[#48dfd6] transition-colors">
                Términos y condiciones
              </a>
              <a href="#" className="text-white/70 hover:text-[#48dfd6] transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;