import React from 'react';

const Galeria = () => {
  return (
    <div className="relative flex flex-col items-start bg-white pb-[90px] w-full min-h-screen overflow-hidden">
      {/* Decorative Background Images */}
      <div className="absolute top-[35px] left-[-248px] w-[2379px] h-[1462px] hidden lg:block">
        <img 
          src="/.figma/image/mhf9f1nd-r8zopye.png" 
          alt="Alverja decorativa"
          className="absolute top-[785px] left-[536px] opacity-20 w-[466px] h-[466px] rotate-[-10deg]"
        />
        <img 
          src="/.figma/image/mhf9f1nd-qoyvqc5.png" 
          alt="Cebolla decorativa"
          className="absolute top-[236px] left-[1590px] opacity-20 w-[789px] h-[789px]"
        />
        <img 
          src="/.figma/image/mhf9f1nd-vqgtxes.png" 
          alt="Pescado decorativo"
          className="absolute top-[624px] left-[1247px] opacity-20 w-[839px] h-[839px] rotate-[18deg]"
        />
        <img 
          src="/.figma/image/mhf9f1nd-ucl65os.png" 
          alt="Pulpo decorativo"
          className="absolute top-0 left-[563px] opacity-20 w-[515px] h-[515px]"
        />
        <img 
          src="/.figma/image/mhf9f1nd-2fdb596.png" 
          alt="Culantro decorativo"
          className="absolute top-[164px] left-[1151px] opacity-20 w-[546px] h-[546px] rotate-[18deg]"
        />
        <img 
          src="/.figma/image/mhf9f1nd-y9pj3ng.png" 
          alt="Langostinos decorativos"
          className="absolute top-[231px] left-0 opacity-20 w-[626px] h-[673px] rotate-[47deg]"
        />
      </div>

      {/* Main Gallery Section */}
      <div className="relative mt-[60px] mx-auto w-full max-w-[1456px] px-4 lg:px-0">
        <div className="relative w-full">
          {/* Gallery Container */}
          <div className="flex flex-col items-start justify-center rounded-[49px] shadow-[0px_0px_40px_0px_rgba(6,24,84,0.12)] bg-white/[0.12] backdrop-blur-sm p-8 lg:p-[74px] w-full overflow-hidden gap-6 lg:gap-[25px]">
            
            {/* First Row */}
            <div className="flex flex-col lg:flex-row items-center justify-between w-full gap-4 lg:gap-[25px]">
              <img 
                src="/.figma/image/mhf9f1nd-y6whbxw.png" 
                alt="Galería restaurante 1"
                className="rounded-[35px] w-full lg:w-[419px] h-[200px] lg:h-[252px] object-cover"
              />
              <img 
                src="/.figma/image/mhf9f1nd-usvmdzu.png" 
                alt="Galería restaurante 2"
                className="rounded-[35px] w-full lg:w-[419px] h-[200px] lg:h-[252px] object-cover"
              />
              <img 
                src="/.figma/image/mhf9f1nd-nynz4t7.png" 
                alt="Galería restaurante 3"
                className="rounded-[35px] w-full lg:w-[419px] h-[200px] lg:h-[252px] object-cover"
              />
            </div>

            {/* Second Row */}
            <div className="flex flex-col lg:flex-row items-center justify-center w-full gap-4 lg:gap-[25px]">
              <img 
                src="/.figma/image/mhf9f1nd-jl919gz.png" 
                alt="Galería restaurante 4"
                className="rounded-[35px] w-full lg:w-[419px] h-[200px] lg:h-[252px] object-cover"
              />
              <img 
                src="/.figma/image/mhf9f1nd-mvv3io5.png" 
                alt="Galería restaurante 5"
                className="rounded-[35px] w-full lg:w-[419px] h-[200px] lg:h-[252px] object-cover"
              />
              <img 
                src="/.figma/image/mhf9f1nd-56udxjw.png" 
                alt="Galería restaurante 6"
                className="rounded-[35px] w-full lg:w-[419px] h-[200px] lg:h-[252px] object-cover"
              />
            </div>

            {/* Third Row */}
            <div className="flex flex-col lg:flex-row items-center justify-between w-full gap-4 lg:gap-[25px]">
              <img 
                src="/.figma/image/mhf9f1nd-nynz4t7.png" 
                alt="Galería restaurante 7"
                className="rounded-[35px] w-full lg:w-[419px] h-[200px] lg:h-[252px] object-cover"
              />
              <img 
                src="/.figma/image/mhf9f1nd-6kwvnvw.png" 
                alt="Galería restaurante 8"
                className="rounded-[35px] w-full lg:w-[419px] h-[200px] lg:h-[252px] object-cover"
              />
              <img 
                src="/.figma/image/mhf9f1nd-mmx8t8k.png" 
                alt="Galería restaurante 9"
                className="rounded-[35px] w-full lg:w-[419px] h-[200px] lg:h-[252px] object-cover"
              />
            </div>
          </div>

          {/* Bottom Navigation Bar */}
          <div className="absolute bottom-[-36px] left-1/2 transform -translate-x-1/2 flex flex-wrap items-center justify-center gap-1 lg:gap-[10px] rounded-[40px_10px] bg-[#061854] p-2 lg:p-[10px] w-full max-w-[773px] min-h-[72px] overflow-hidden">
            <div className="inline-flex items-center justify-center gap-[10px] rounded-[60px_4px] bg-white/[0.16] px-3 lg:px-6 py-2 lg:py-3">
              <span className="text-white font-inter text-sm lg:text-xl font-semibold">La Proa</span>
            </div>
            <span className="text-white font-inter text-sm lg:text-[22px] px-2 lg:px-6 py-2 lg:py-3 text-center">El Salón del Sabor</span>
            <span className="text-white font-inter text-sm lg:text-[22px] px-2 lg:px-6 py-2 lg:py-3 text-center">La Tripulación</span>
            <span className="text-white font-inter text-sm lg:text-[22px] px-2 lg:px-6 py-2 lg:py-3 text-center">La Caleta</span>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <div className="flex items-start w-full mt-[91px] px-4 lg:px-[181px]">
        <div className="flex flex-col lg:flex-row items-start w-full gap-8 lg:gap-[229px]">
          {/* Left Column - Restaurant Info */}
          <div className="flex flex-col items-start">
            <img 
              src="/.figma/image/mhf9f1nd-ru3lc5q.png" 
              alt="Logo Marea Picante"
              className="w-[240px] h-[60px]"
            />
            <p className="mt-[17px] w-full max-w-[408px] text-[#444d6b] font-inter text-base leading-[29px]">
              En Marea Picante celebramos la auténtica cocina peruana con platos elaborados a base de frescura, 
              sabor y tradición. Cada visita es una experiencia que conecta el mar, la tierra y la pasión por lo nuestro.
            </p>
            <div className="flex flex-col items-start mt-[31px]">
              <p className="text-[#444d6b] font-inter text-[13px] font-bold uppercase tracking-[2.34px] leading-[39px]">
                HORARIO DE ATENCIÓN
              </p>
              <p className="mt-1 text-[#444d6b] font-inter text-base leading-[29px]">
                Todos los días<br />
                9:30 a.m. a 6:00 p.m.
              </p>
            </div>
          </div>

          {/* Right Columns - Navigation and Social */}
          <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-[166px]">
            {/* Navigation and Specialties */}
            <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-[101px]">
              <div className="flex flex-col items-start">
                <p className="text-[#444d6b] font-inter text-[13px] font-bold uppercase tracking-[2.34px] leading-[39px]">
                  NAVEGACIÓN
                </p>
                <div className="mt-3 text-[#444d6b] font-inter text-base leading-[39px]">
                  <p>Inicio</p>
                  <p>Carta</p>
                  <p>Galería</p>
                  <p>Sobre nosotros</p>
                </div>
              </div>
              <div className="flex flex-col items-start">
                <p className="text-[#444d6b] font-inter text-[13px] font-bold uppercase tracking-[2.34px] leading-[39px]">
                  ESPECIALIDADES
                </p>
                <div className="mt-3 text-[#444d6b] font-inter text-base leading-[39px]">
                  <p>Ceviches</p>
                  <p>Arroces</p>
                  <p>Parihuelas</p>
                  <p>Criolla</p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex flex-col items-start">
              <p className="text-[#444d6b] font-inter text-[13px] font-bold uppercase tracking-[2.34px] leading-[39px]">
                SÍGUENOS
              </p>
              <div className="flex items-center gap-4 mt-3">
                <div className="relative w-10 h-10">
                  <div className="absolute top-[1px] left-0 border border-[#061854] rounded-full w-10 h-[38px]"></div>
                  <span className="absolute top-0 left-[15px] w-[11px] h-[39px] text-[#061854] font-['Font_Awesome_5_Brands'] text-base leading-[39px]">
                    f
                  </span>
                </div>
                <div className="relative w-10 h-10">
                  <div className="absolute top-[1px] left-0 border border-[#061854] rounded-full w-10 h-[39px]"></div>
                  <span className="absolute top-0 left-[13px] w-[15px] h-10 text-[#061854] font-['Font_Awesome_5_Brands'] text-base leading-[39px]">
                    📷
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="flex flex-col lg:flex-row items-center justify-between w-full mt-[164px] px-4 lg:px-[181px] gap-4">
        <p className="text-[#444d6b] font-inter text-base leading-[29px]">
          © 2025 Marea Picante. Todos los Derechos Reservados.
        </p>
        <p className="text-[#444d6b] font-inter text-base leading-[29px]">
          Términos y Condiciones - Política de Privacidad
        </p>
      </div>
    </div>
  );
};

export default Galeria;