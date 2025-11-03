import React from 'react';
import { Download } from 'lucide-react';
import Button from '../components/ui/Button';

// Import images
import alverjaImg from '../assets/images/mhf82bf1-edwv800.png';
import cebollaImg from '../assets/images/mhf82bf1-o004qe8.png';
import pescadoImg from '../assets/images/mhf82bf1-mpfrcbv.png';
import pulpoImg from '../assets/images/mhf82bf1-v8ocfgp.png';
import culantroImg from '../assets/images/mhf82bf1-1jq53qs.png';
import langostinosImg from '../assets/images/mhf82bf1-3sy12ao.png';
import trioMarinoImg from '../assets/images/mhf82bf1-3ew18sx.png';
import limon1Img from '../assets/images/mhf82bf1-0sv5q3e.png';
import limon2Img from '../assets/images/mhf82bf1-d3elwry.png';
import limon3Img from '../assets/images/mhf82bf1-j7jp2c1.png';
import limon4Img from '../assets/images/mhf82bf1-p0ttxlz.png';
import limon5Img from '../assets/images/mhf82bf1-jotitm1.png';

interface MenuSection {
  title: string;
  items: Array<{
    name: string;
    personal: string;
    fuente?: string;
  }>;
}

const menuData: MenuSection[] = [
  {
    title: "CEVICHES",
    items: [
      { name: "Ceviche Simple", personal: "26.00", fuente: "55.00" },
      { name: "Ceviche Mixto", personal: "30.00", fuente: "60.00" },
      { name: "Ceviche de Mariscos", personal: "34.00", fuente: "68.00" },
      { name: "Ceviche de Langostinos", personal: "35.00", fuente: "70.00" },
      { name: "Ceviche de Cangrejos", personal: "35.00", fuente: "70.00" },
      { name: "Ceviche Salpreso", personal: "25.00", fuente: "55.00" },
      { name: "Maruchitas", personal: "17.00", fuente: "" },
      { name: "Leche de Tigre", personal: "17.00", fuente: "" },
    ]
  },
  {
    title: "CHICHARRONES",
    items: [
      { name: "Chicharrón de Pota", personal: "28.00", fuente: "58.00" },
      { name: "Chicharrón de Pescado", personal: "30.00", fuente: "60.00" },
      { name: "Chicharrón Mixto", personal: "34.00", fuente: "68.00" },
      { name: "Chicharrón de Langostinos", personal: "35.00", fuente: "70.00" },
      { name: "Chicharrón de Calamar", personal: "35.00", fuente: "70.00" },
      { name: "Jalea Mixta", personal: "40.00", fuente: "70.00" },
    ]
  },
  {
    title: "SUDADOS",
    items: [
      { name: "Tollo", personal: "28.00", fuente: "55.00" },
      { name: "Suco", personal: "30.00", fuente: "60.00" },
      { name: "Cabrilla", personal: "30.00", fuente: "60.00" },
      { name: "Chita", personal: "38.00", fuente: "70.00" },
      { name: "Tramboyo", personal: "38.00", fuente: "70.00" },
    ]
  },
  {
    title: "CHILCANOS",
    items: [
      { name: "Tollo", personal: "28.00", fuente: "" },
      { name: "Suco", personal: "30.00", fuente: "" },
      { name: "Cabrilla", personal: "30.00", fuente: "" },
      { name: "Chita", personal: "38.00", fuente: "" },
      { name: "Tramboyo", personal: "38.00", fuente: "" },
    ]
  },
  {
    title: "ARROCES",
    items: [
      { name: "Arroz con Mariscos", personal: "30.00", fuente: "60.00" },
      { name: "Arroz con Langostinos", personal: "34.00", fuente: "68.00" },
      { name: "Chaufa de Mariscos", personal: "30.00", fuente: "60.00" },
      { name: "Chaufa de Pescado", personal: "27.00", fuente: "58.00" },
      { name: "Chaufa de Langostinos", personal: "34.00", fuente: "68.00" },
    ]
  },
  {
    title: "PARIHUELAS",
    items: [
      { name: "Tollo", personal: "32.00", fuente: "60.00" },
      { name: "Suco", personal: "35.00", fuente: "65.00" },
      { name: "Cabrilla", personal: "35.00", fuente: "65.00" },
      { name: "Chita", personal: "40.00", fuente: "75.00" },
      { name: "Tramboyo", personal: "40.00", fuente: "75.00" },
    ]
  }
];

const combosData = [
  {
    name: "Trío Marino",
    description: "Cev. Mixto + Chich. Pescado + Arroz con Mariscos",
    personal: "35.00",
    fuente: "65.00"
  },
  {
    name: "Combo 1",
    description: "Cev. Mixto + Chich. Pescado",
    personal: "30.00",
    fuente: "60.00"
  },
  {
    name: "Combo 2",
    description: "Chich. Pescado + Arroz con Mariscos",
    personal: "30.00",
    fuente: "60.00"
  },
  {
    name: "Combo 3",
    description: "Cev. Mixto + Arroz con Mariscos",
    personal: "30.00",
    fuente: "60.00"
  }
];

const fritosData = [
  { name: "Suco Frito", personal: "30.00" },
  { name: "Cabrilla Frita", personal: "30.00" },
  { name: "Chita Frita", personal: "38.00" },
  { name: "Picante de Mariscos", personal: "34.00" },
  { name: "Picante de Langostinos", personal: "35.00" },
  { name: "Reventado de Cangrejos", personal: "35.00" },
  { name: "Pescado a lo Macho", personal: "42.00" },
  { name: "Chita al Ajo", personal: "45.00" },
];

const guarnicionesData = [
  { name: "Arroz", price: "5.00" },
  { name: "Yuca", price: "5.00" },
  { name: "Camote", price: "5.00" },
  { name: "Cancha", price: "5.00" },
  { name: "Chifles", price: "6.00" },
  { name: "Choclo", price: "5.00" },
  { name: "Yuca Frita", price: "7.00" },
];

const criollosData = [
  { name: "Lomo Saltado", price: "25.00" },
  { name: "Bistec", price: "25.00" },
  { name: "Chuleta", price: "25.00" },
  { name: "Churrasco", price: "25.00" },
  { name: "Pollo a la Plancha", price: "23.00" },
  { name: "Saltado de Pollo", price: "23.00" },
  { name: "Chicharrón de Pollo", price: "23.00" },
  { name: "Arroz Chaufa de Pollo", price: "23.00" },
  { name: "Arroz Chaufa de Res", price: "25.00" },
  { name: "Tallarín Saltado Criollo de Pollo", price: "25.00" },
  { name: "Tallarín Saltado Criollo de Res", price: "28.00" },
  { name: "Tallarín a la Huancaína c/Lomo Saltado", price: "28.00" },
];

const bebidasData = [
  { name: "Chicha Morada 1L", price: "10.00" },
  { name: "Maracuyá Clásica", price: "10.00" },
  { name: "Limonada Clásica", price: "15.00" },
  { name: "Maracuyá Frozen", price: "16.00" },
  { name: "Limonada Frozen", price: "16.00" },
  { name: "Agua Mineral", price: "3.00" },
  { name: "Gaseosa 1L", price: "10.00" },
  { name: "Pisco Trujillo", price: "8.00" },
  { name: "Cerveza 1L", price: "6.00" },
  { name: "Gaseosa 2L", price: "7.00" },
  { name: "Gaseosa 3L", price: "8.00" },
  { name: "Cerveza Pilsen", price: "7.00" },
];

const MenuSection: React.FC<{ section: MenuSection; showFuente?: boolean }> = ({ 
  section, 
  showFuente = true 
}) => (
  <div className="bg-white border-2 border-[#48dfd6] rounded-lg p-6 mb-8">
    <div className="text-center mb-6">
      <h2 className="text-3xl md:text-4xl font-bold text-[#48dfd6] uppercase">
        {section.title}
      </h2>
    </div>
    
    {showFuente && (
      <div className="flex justify-end gap-8 mb-4 text-[#48dfd6] font-bold text-lg uppercase">
        <span className="w-24 text-center">Personal</span>
        <span className="w-24 text-center">Fuente</span>
      </div>
    )}
    
    <div className="space-y-2">
      {section.items.map((item, index) => (
        <div key={index} className="flex justify-between items-center py-1 border-b border-[#061854]/20">
          <span className="text-[#061854] font-bold text-lg md:text-xl flex-1">
            {item.name}
          </span>
          <div className="flex gap-8">
            <span className="text-[#061854] text-lg md:text-xl w-24 text-center">
              {item.personal}
            </span>
            {showFuente && (
              <span className="text-[#061854] text-lg md:text-xl w-24 text-center">
                {item.fuente}
              </span>
            )}
          </div>
        </div>
      ))}
    </div>
  </div>
);

const Carta: React.FC = () => {
  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Background decorative images */}
      <img src={alverjaImg} alt="" className="absolute top-[800px] left-[400px] w-96 h-96 opacity-20 rotate-[-10deg] pointer-events-none hidden lg:block" />
      <img src={cebollaImg} alt="" className="absolute top-[200px] right-[100px] w-[500px] h-[500px] opacity-20 pointer-events-none hidden lg:block" />
      <img src={pescadoImg} alt="" className="absolute top-[900px] right-[150px] w-96 h-96 opacity-20 rotate-[31deg] pointer-events-none hidden lg:block" />
      <img src={pulpoImg} alt="" className="absolute top-[1200px] left-[-100px] w-[400px] h-[400px] opacity-20 pointer-events-none hidden lg:block" />
      <img src={culantroImg} alt="" className="absolute top-[1600px] left-[500px] w-72 h-72 opacity-20 rotate-[18deg] pointer-events-none hidden lg:block" />
      <img src={langostinosImg} alt="" className="absolute top-[300px] left-[-150px] w-[500px] h-[500px] opacity-20 rotate-[47deg] pointer-events-none hidden lg:block" />
      
      {/* Floating limes */}
      <img src={trioMarinoImg} alt="" className="absolute bottom-[400px] right-[200px] w-80 h-80 rotate-[-16deg] pointer-events-none hidden lg:block" />
      <img src={limon1Img} alt="" className="absolute bottom-[300px] right-[100px] w-28 h-28 rotate-[48deg] pointer-events-none hidden lg:block" />
      <img src={limon2Img} alt="" className="absolute bottom-[100px] right-[300px] w-12 h-12 pointer-events-none hidden lg:block" />
      <img src={limon3Img} alt="" className="absolute bottom-[80px] right-[200px] w-20 h-20 rotate-[93deg] pointer-events-none hidden lg:block" />
      <img src={limon4Img} alt="" className="absolute bottom-[200px] left-[600px] w-40 h-40 rotate-[-177deg] pointer-events-none hidden lg:block" />
      <img src={limon5Img} alt="" className="absolute bottom-[220px] left-[800px] w-24 h-24 rotate-[-87deg] pointer-events-none hidden lg:block" />



      {/* Download PDF Button */}
      <div className="relative z-10 flex justify-center mt-8 mb-8">
        <Button variant="primary" className="flex items-center gap-3">
          <Download className="w-6 h-6" />
          Descargar carta en PDF
        </Button>
      </div>

      {/* Menu Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="space-y-8">
            {menuData.slice(0, 4).map((section, index) => (
              <MenuSection 
                key={index} 
                section={section} 
                showFuente={section.title !== "CHILCANOS"} 
              />
            ))}
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {menuData.slice(4).map((section, index) => (
              <MenuSection key={index} section={section} />
            ))}

            {/* Combos Section */}
            <div className="bg-white border-2 border-[#48dfd6] rounded-lg p-6">
              <div className="text-center mb-6">
                <h2 className="text-3xl md:text-4xl font-bold text-[#48dfd6] uppercase">COMBOS</h2>
              </div>
              
              <div className="flex justify-end gap-8 mb-4 text-[#48dfd6] font-bold text-lg uppercase">
                <span className="w-24 text-center">Personal</span>
                <span className="w-24 text-center">Fuente</span>
              </div>
              
              <div className="space-y-4">
                {combosData.map((combo, index) => (
                  <div key={index} className="py-2 border-b border-[#061854]/20">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <h3 className="text-[#061854] font-bold text-lg md:text-xl">{combo.name}</h3>
                        <p className="text-[#061854] text-sm md:text-base">{combo.description}</p>
                      </div>
                      <div className="flex gap-8">
                        <div className="w-24 text-center">
                          <span className="text-[#061854] text-lg md:text-xl">{combo.personal}</span>
                          <div className="text-[#061854] text-xs uppercase">SOLES</div>
                        </div>
                        <div className="w-24 text-center">
                          <span className="text-[#061854] text-lg md:text-xl">{combo.fuente}</span>
                          <div className="text-[#061854] text-xs uppercase">SOLES</div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Fritos y Picantes Section */}
            <div className="bg-white border-2 border-[#48dfd6] rounded-lg p-6">
              <div className="text-center mb-6">
                <h2 className="text-3xl md:text-4xl font-bold text-[#48dfd6] uppercase">FRITOS Y PICANTES</h2>
              </div>
              
              <div className="space-y-2">
                {fritosData.map((item, index) => (
                  <div key={index} className="flex justify-between items-center py-1 border-b border-[#061854]/20">
                    <span className="text-[#061854] font-bold text-lg md:text-xl flex-1">{item.name}</span>
                    <span className="text-[#061854] text-lg md:text-xl">{item.personal}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {/* Guarniciones */}
          <div className="bg-white border-2 border-[#48dfd6] rounded-lg p-6">
            <div className="text-center mb-6">
              <h2 className="text-2xl md:text-3xl font-bold text-[#48dfd6] uppercase">GUARNICIONES</h2>
            </div>
            
            <div className="space-y-2">
              {guarnicionesData.map((item, index) => (
                <div key={index} className="flex justify-between items-center py-1 border-b border-[#061854]/20">
                  <span className="text-[#061854] font-bold text-lg">{item.name}</span>
                  <span className="text-[#061854] text-lg">{item.price}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Criollos */}
          <div className="bg-white border-2 border-[#48dfd6] rounded-lg p-6">
            <div className="text-center mb-6">
              <h2 className="text-2xl md:text-3xl font-bold text-[#48dfd6] uppercase">CRIOLLOS</h2>
            </div>
            
            <div className="space-y-2">
              {criollosData.map((item, index) => (
                <div key={index} className="flex justify-between items-center py-1 border-b border-[#061854]/20">
                  <span className="text-[#061854] font-bold text-lg">{item.name}</span>
                  <span className="text-[#061854] text-lg">{item.price}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Bebidas */}
          <div className="bg-white border-2 border-[#48dfd6] rounded-lg p-6">
            <div className="text-center mb-6">
              <h2 className="text-2xl md:text-3xl font-bold text-[#48dfd6] uppercase">BEBIDAS</h2>
            </div>
            
            <div className="space-y-2">
              {bebidasData.map((item, index) => (
                <div key={index} className="flex justify-between items-center py-1 border-b border-[#061854]/20">
                  <span className="text-[#061854] font-bold text-lg">{item.name}</span>
                  <span className="text-[#061854] text-lg">{item.price}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carta;