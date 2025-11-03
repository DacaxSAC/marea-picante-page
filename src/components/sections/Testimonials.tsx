import React from 'react';
import { Testimonial } from '../../types';
import { TESTIMONIALS } from '../../constants';

interface TestimonialProps extends Testimonial {}

const TestimonialCard: React.FC<TestimonialProps> = ({ name, role, content, rating, avatar }) => {
  return (
    <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
      {/* Rating Stars */}
      <div className="flex gap-1 mb-6">
        {[...Array(5)].map((_, i) => (
          <span 
            key={i} 
            className={`text-2xl ${i < rating ? 'text-[#48dfd6]' : 'text-gray-300'}`}
          >
            ★
          </span>
        ))}
      </div>
      
      {/* Testimonial Content */}
      <p className="text-[#061854] text-lg leading-relaxed mb-8 italic">
        "{content}"
      </p>
      
      {/* Author Info */}
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 bg-[#48dfd6] rounded-full flex items-center justify-center">
          <span className="text-white font-bold text-lg">
            {avatar || name.charAt(0)}
          </span>
        </div>
        <div>
          <div className="font-bold text-[#061854]">{name}</div>
          <div className="text-[#061854]/70 text-sm">{role}</div>
        </div>
      </div>
    </div>
  );
};

const Testimonials: React.FC = () => {

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl lg:text-6xl font-bold text-[#061854] mb-6">
            La experiencia Marea Picante
          </h2>
          <p className="text-lg text-[#061854]/70 max-w-2xl mx-auto">
            Descubre lo que nuestros clientes dicen sobre su experiencia en nuestro restaurante. 
            Cada testimonio refleja nuestro compromiso con la excelencia.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {TESTIMONIALS.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              name={testimonial.name}
              role={testimonial.role}
              content={testimonial.content}
              rating={testimonial.rating}
            />
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-[#061854]/5 rounded-3xl p-12">
            <h3 className="text-3xl font-bold text-[#061854] mb-4">
              ¿Listo para vivir la experiencia?
            </h3>
            <p className="text-[#061854]/70 mb-8 max-w-md mx-auto">
              Reserva tu mesa y descubre por qué somos el destino favorito para los amantes de la buena cocina.
            </p>
            <button className="bg-[#48dfd6] text-[#061854] px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#48dfd6]/90 transition-colors">
              Hacer reserva
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;