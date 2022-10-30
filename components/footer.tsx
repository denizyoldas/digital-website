import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-primary-900 text-secondary-100 flex flex-col md:flex-row md:justify-between gap-6 p-8 text-center">
      <div className="leading-5 font-normal text-sm">
        Copyright ©2020 Zebb Agency. All Right Reserved
      </div>
      <div className="flex items-center justify-between leading-5 font-normal text-sm">
        <Link href="cookie-policy">Cookie Policy</Link>
        <a>Privacy Policy</a>
      </div>
    </footer>
  )
}

export default Footer
