import React from 'react';
import Footer from '../components/layout/Footer';

// Import images
import langostinosImg from '../assets/images/mhf5ra4l-yapapev.png';
import cebollaImg from '../assets/images/mhf5ra4l-7onkwl9.png';
import culantroImg from '../assets/images/mhf5ra4l-am2q81n.png';
import pescadoImg from '../assets/images/mhf5ra4p-0oqf3qy.png';
import pescado2Img from '../assets/images/mhf5ra4p-0t2vunt.png';
import localImg from '../assets/images/mhf5ra4p-qdanrq2.png';

const SobreNosotros: React.FC = () => {
  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Decorative Background Images */}
      <img 
        src={langostinosImg} 
        alt="" 
        className="absolute top-96 -left-20 opacity-20 w-96 h-96 rotate-45 hidden lg:block"
      />
      <img 
        src={cebollaImg} 
        alt="" 
        className="absolute top-24 right-0 opacity-20 w-96 h-96 hidden lg:block"
      />
      <img 
        src={culantroImg} 
        alt="" 
        className="absolute top-32 left-1/2 transform -translate-x-1/2 opacity-20 w-80 h-80 -rotate-45 hidden lg:block"
      />
      <img 
        src={pescadoImg} 
        alt="" 
        className="absolute top-96 right-0 opacity-20 w-96 h-96 rotate-12 hidden lg:block"
      />
      <img 
        src={pescado2Img} 
        alt="" 
        className="absolute bottom-96 -left-12 opacity-20 w-64 h-64 -rotate-45 hidden lg:block"
      />

      {/* Main Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="px-4 lg:px-48 py-16 lg:py-24">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
            {/* Text Content */}
            <div className="flex-1 max-w-lg">
              <h1 className="text-4xl lg:text-7xl font-bold text-[#061854] leading-tight mb-6">
                Sobre<br />
                nosotros
              </h1>
              <p className="text-[#061854] text-base lg:text-lg leading-relaxed">
                Contamos con más de 10 años de experiencia llevando el auténtico sabor 
                del mar a cada mesa. En Marea Picante rendimos homenaje a la cocina 
                peruana, fusionando tradición y creatividad para ofrecer una experiencia 
                fresca, llena de color y sabor.
                <br /><br />
                Cada plato refleja nuestra pasión por el detalle: pescados y mariscos 
                seleccionados, preparaciones al momento y ese toque picante que 
                despierta los sentidos.
                <br /><br />
                Creemos que comer bien es disfrutar, compartir y sentirse cerca del mar, 
                sin importar dónde estés.
              </p>
            </div>

            {/* Restaurant Image */}
            <div className="flex-1 max-w-2xl">
              <img 
                src={localImg} 
                alt="Interior del restaurante Marea Picante" 
                className="w-full h-auto rounded-[100px_40px] shadow-lg"
              />
            </div>
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="bg-[#061854]/5 px-4 lg:px-48 py-16 lg:py-20">
          {/* Section Header */}
          <div className="text-center mb-16 lg:mb-20">
            <h2 className="text-3xl lg:text-5xl font-bold text-[#061854] mb-6">
              Nuestra filosofía
            </h2>
            <p className="text-[#061854] text-base lg:text-lg max-w-4xl mx-auto">
              En Marea Picante cocinamos con propósito y pasión. Nuestra misión, 
              visión y valores reflejan el amor por el mar y la autenticidad de la 
              cocina peruana.
            </p>
          </div>

          {/* Quote Decorations */}
          <div className="flex justify-between items-center mb-8 lg:mb-12 px-4 lg:px-8">
            <div className="flex gap-1 lg:gap-2">
              <div className="w-4 h-8 lg:w-6 lg:h-10 bg-[#48dfd6] rounded-sm"></div>
              <div className="w-4 h-8 lg:w-6 lg:h-10 bg-[#48dfd6] rounded-sm"></div>
            </div>
            <div className="w-8 h-8 lg:w-12 lg:h-10 bg-[#48dfd6] rounded-sm"></div>
          </div>

          {/* Mission, Vision, Values */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Mission */}
            <div className="space-y-4">
              <h3 className="text-lg lg:text-xl font-bold text-[#061854]">
                Misión
              </h3>
              <p className="text-[#061854] text-base lg:text-lg leading-relaxed">
                Brindar una experiencia gastronómica que celebre los auténticos 
                sabores del mar peruano, combinando tradición y creatividad en cada 
                plato. Nos comprometemos a ofrecer ingredientes frescos, atención 
                cercana y un ambiente que invite a disfrutar del placer de la buena 
                mesa con un toque contemporáneo.
              </p>
            </div>

            {/* Vision */}
            <div className="space-y-4">
              <h3 className="text-lg lg:text-xl font-bold text-[#061854]">
                Visión
              </h3>
              <p className="text-[#061854] text-base lg:text-lg leading-relaxed">
                Ser reconocidos como una de las cevicherías más destacadas del país, 
                símbolo de calidad, innovación y respeto por la cocina peruana. 
                Queremos que Marea Picante sea un espacio donde cada visitante viva el 
                mar en su máxima expresión, desde el primer aroma hasta el último bocado.
              </p>
            </div>

            {/* Values */}
            <div className="space-y-4">
              <h3 className="text-lg lg:text-xl font-bold text-[#061854]">
                Valores
              </h3>
              <p className="text-[#061854] text-base lg:text-lg leading-relaxed">
                Pasión por la gastronomía, respeto por nuestros ingredientes y amor 
                por el servicio. Creemos en la honestidad culinaria, en el trabajo en 
                equipo y en mantener viva la tradición que nos inspira. Cada detalle, 
                desde la frescura del pescado hasta la sonrisa del servicio, refleja 
                nuestro compromiso.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default SobreNosotros;