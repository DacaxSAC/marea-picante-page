import React from 'react';
import { MenuItem } from '../../types';
import { MENU_ITEMS } from '../../constants';
import cevicheImg from '../../assets/images/mhf5ra4p-aly5l1e.png';
import arrozImg from '../../assets/images/mhf5ra4p-mpjjmfy.png';
import anticuchosImg from '../../assets/images/mhf5ra4p-aly5l1e.png';
import causaImg from '../../assets/images/mhf5ra4p-mpjjmfy.png';

interface MenuItemProps extends MenuItem {}

const MenuItemComponent: React.FC<MenuItemProps> = ({ image, title, description, price }) => {
  return (
    <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="relative mb-6">
        <img 
          src={image} 
          alt={title}
          className="w-full h-48 object-cover rounded-2xl"
        />
      </div>
      
      <div className="space-y-4">
        <h3 className="text-xl font-bold text-[#061854]">{title}</h3>
        <p className="text-[#061854]/70 text-sm leading-relaxed">{description}</p>
        <div className="flex justify-between items-center pt-2">
          <span className="text-2xl font-bold text-[#48dfd6]">{price}</span>
          <button className="bg-[#061854] text-white px-6 py-2 rounded-full hover:bg-[#061854]/90 transition-colors">
            Ordenar
          </button>
        </div>
      </div>
    </div>
  );
};

const Menu: React.FC = () => {
  const menuItems = [
    { ...MENU_ITEMS[0], image: cevicheImg },
    { ...MENU_ITEMS[1], image: arrozImg },
    { ...MENU_ITEMS[2], image: anticuchosImg },
    { ...MENU_ITEMS[3], image: causaImg }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl lg:text-6xl font-bold text-[#061854] mb-6">
            Nuestros sabores
          </h2>
          <p className="text-lg text-[#061854]/70 max-w-2xl mx-auto">
            Descubre nuestra selección de platos preparados con los ingredientes más frescos 
            y las técnicas tradicionales de la cocina peruana.
          </p>
        </div>

        {/* Menu Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {menuItems.map((item, index) => (
            <MenuItemComponent
              key={index}
              image={item.image}
              title={item.title}
              description={item.description}
              price={item.price}
            />
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <button className="bg-[#48dfd6] text-[#061854] px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#48dfd6]/90 transition-colors">
            Ver carta completa
          </button>
        </div>
      </div>
    </section>
  );
};

export default Menu;