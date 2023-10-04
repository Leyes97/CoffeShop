import React from 'react';
import Logo from '../../../public/assets/shared/desktop/logo.svg';
import Image from 'next/image';
const Navbar = () => {
  return (
    <nav className="bg-lightCream py-4">
      <div className="container mx-auto flex justify-between items-center">
        <Image src={Logo} className="text-darkCyan" />
        <div className=" font-barlow space-x-3 flex justify-between text-[12px] gap-[33px]">
          <p className="text-Grey cursor-pointer">HOME</p>
          <p className="text-Grey cursor-pointer">ABOUT US</p>
          <p className="text-Grey cursor-pointer">CREATE YOUR PLAN</p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
