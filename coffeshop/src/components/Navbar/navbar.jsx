'use client';
import React, { useState } from 'react';
import Logo from '../../../public/assets/shared/desktop/logo.svg';
import burguer from '../../../public/assets/shared/mobile/icon-hamburger.svg';
import close from '../../../public/assets/shared/mobile/icon-close.svg';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const links = [
    {
      label: 'HOME',
      route: '/',
    },
    {
      label: 'ABOUT US',
      route: '/about_us',
    },
    {
      label: 'CREATE YOUR PLAN',
      route: '/create_your_plan',
    },
  ];
  return (
    <nav className="bg-lightCream py-4 fixed w-full">
      <div className="container mx-auto flex justify-between items-center">
        <Image
          src={Logo}
          className=" w-[163px] h-[18px] md:w-[236px] md:h-[26px]"
          alt="logo"
        />
        <div className=" font-barlow space-x-3  justify-between text-[12px] gap-[33px] hidden md:flex">
          {links.map(({ label, route }) => (
            <Link href={route} key={route}>
              <p className="text-Grey cursor-pointer hover:underline">
                {label}
              </p>
            </Link>
          ))}
        </div>
        <div className="mr-5 md:hidden">
          {!isOpen ? (
            <Image
              src={burguer}
              alt="BurguerButton"
              width={'16px'}
              height={'15px'}
              onClick={() => {
                setIsOpen(!isOpen);
              }}
              className="cursor-pointer"
            />
          ) : (
            <>
              <Image
                src={close}
                alt="closeButton"
                width={'16px'}
                height={'15px'}
                onClick={() => {
                  setIsOpen(!isOpen);
                }}
                className="cursor-pointer"
              />
              <div className="font-fraunces text-[24px] w-full h-full fixed  transform -translate-x-1/2 left-1/2 top-32 gap-[33px] flex flex-col  items-center">
                {links.map(({ label, route }) => (
                  <Link href={route} key={route}>
                    <p className="cursor-pointer hover:underline">
                      {label}
                    </p>
                  </Link>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
