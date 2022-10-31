import React, { useState } from 'react'
import Button from './UI/button'
import Image from 'next/image'
import cx from 'classnames'
import { useRouter } from 'next/router'
import Logo from '../assets/logo.png'

const MENU: any = {
  '/': 'Home',
  '/about': 'About',
  '/services': 'Services',
  '/our-work': 'Our Work'
}

const Header = () => {
  const [active, setActive] = useState('/')
  const router = useRouter()

  const handleActive = (path: string) => {
    if (path === '/') {
      router.push('/')
    }
    setActive(path)
  }

  return (
    <header className="flex justify-between items-center py-6 sm:py-6 md:py-3 lg:py-2 xl:py-2 px-4 sm:px-5 md:px-8 lg:px-8 xl:px-8 bg-secondary-100 shadow-header">
      <div>
        <Image src={Logo} alt="digital agancy logo" width={84} height={27} />
      </div>
      <div className="hidden sm:hidden md:flex lg:flex items-center">
        <nav>
          <ul className="flex pr-16">
            {Object.keys(MENU).map(key => (
              <li
                key={key}
                className={cx(
                  'mr-4 cursor-pointer hover:text-primary-100 text-base font-normal leading-5 uppercase',
                  {
                    'border-b-4 border-b-primary-100': active === key
                  }
                )}
                onClick={() => handleActive(key)}
              >
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
