'use client';
import React, { useState } from 'react';

const Button = ({ isActive }) => {
  const [active, setActive] = useState(isActive);
  let bgColor = active ? 'darkCyan' : 'DisableButton';
  // Manejar el clic en el botón cuando active es true
  const handleClick = () => {
    if (active) {
      // Coloca aquí la lógica que deseas ejecutar cuando se hace clic en el botón
      // Por ejemplo, puedes llamar a una función o realizar alguna acción.
      console.log('Botón clickeado');
    }
  };

  return (
    <div
      className={`w-[217px] h-[56px] bg-${bgColor} rounded-[6px] flex justify-center items-center transition-colors hover:bg-CyanWhite cursor-pointer ${
        active ? 'pointer-events-auto' : 'pointer-events-none'
      }`}
      onClick={handleClick}>
      <p className={`text-lightCream  font-fraunces text-[18px]`}>Button</p>
    </div>
  );
};

export default Button;
