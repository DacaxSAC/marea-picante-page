import React from 'react';
import { ButtonProps } from '../../types';

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '',
  onClick 
}) => {
  const baseClasses = 'font-medium transition-all duration-200 cursor-pointer';
  
  const variantClasses = {
    primary: 'bg-[#061854] text-white hover:bg-[#061854]/90',
    secondary: 'bg-white text-[#061854] border border-[#48dfd6] hover:bg-[#48dfd6]/10',
    outline: 'bg-transparent text-[#061854] border border-[#061854] hover:bg-[#061854] hover:text-white',
    contact: 'bg-[#061854] text-white hover:bg-[#061854]/90 w-[163px] h-[54px] flex items-center justify-center font-david-libre font-bold text-[20px] leading-[20px] tracking-[0px] rounded-tl-[15px] rounded-tr-[4px] rounded-bl-[4px] rounded-br-[15px]',
    'contact-mobile': 'bg-[#061854] text-white hover:bg-[#061854]/90 w-[120px] h-[40px] flex items-center justify-center font-david-libre font-bold text-[16px] leading-[16px] tracking-[0px] rounded-tl-[12px] rounded-tr-[4px] rounded-bl-[4px] rounded-br-[12px]'
  };
  
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm rounded-lg',
    md: 'px-6 py-3 text-base rounded-[15px]',
    lg: 'px-8 py-4 text-lg rounded-[15px]'
  };
  
  // Para las variantes 'contact' y 'contact-mobile', usamos estilos específicos sin combinar con sizeClasses
  const isFixedVariant = variant === 'contact' || variant === 'contact-mobile';
  const classes = isFixedVariant
    ? `${baseClasses} ${variantClasses[variant]} ${className}`.trim()
    : `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`.trim();
  
  const styleProps =
    variant === 'contact'
      ? {
          padding: '17px 28px 17px 27px',
          fontFamily:
            '"David Libre", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", SimHei, Arial, Helvetica, sans-serif',
        }
      : variant === 'contact-mobile'
      ? {
          padding: '12px 22px 12px 21px',
          fontFamily:
            '"David Libre", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", SimHei, Arial, Helvetica, sans-serif',
        }
      : undefined;

  return (
    <button 
      className={classes} 
      onClick={onClick}
      style={styleProps}
    >
      {children}
    </button>
  );
};

export default Button;