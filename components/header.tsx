import React from 'react'
import Button from './UI/button'
import Image from 'next/image'

const MENU: any = {
  '/': 'Home',
  '/about': 'About',
  '/services': 'Services',
  '/our-work': 'Our Work'
}

const Header = () => {
  return (
    <header className="flex justify-between items-center py-6 sm:py-6 md:py-3 lg:py-2 xl:py-2 px-4 sm:px-5 md:px-8 lg:px-8 xl:px-8 bg-secondary-100 shadow-header">
      <div>
        <Image
          src="/img/logo.png"
          alt="digital agancy logo"
          width={84}
          height={27}
        />
      </div>
      <div className="hidden sm:hidden md:flex lg:flex">
        <nav>
          <ul className="flex">
            {Object.keys(MENU).map(key => (
              <li key={key} className="mr-4">
                {MENU[key]}
              </li>
            ))}
          </ul>
        </nav>
        <Button type="button">Contact US</Button>
      </div>
      <div className="flex flex-col gap-3 sm:flex md:hidden lg:hidden">
        <span className="w-8 border-2 border-primary-100"></span>
        <span className="w-8 border-2 border-primary-100"></span>
      </div>
    </header>
  )
}

export default Header
