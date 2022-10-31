import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-primary-900 text-secondary-100 flex flex-col md:flex-row md:justify-between gap-6 p-8 text-center">
      <div className="leading-5 font-normal text-sm">
        Copyright {new Date().getFullYear()} Digital Agency. All Right Reserved
      </div>
      <div className="flex items-center gap-16 justify-between leading-5 font-normal text-sm">
        <Link href="cookie-policy" className="hover:bg-primary-100">
          Cookie Policy
        </Link>
        <Link href="privacy-policy" className="hover:bg-primary-100">
          Privacy Policy
        </Link>
      </div>
    </footer>
  )
}

export default Footer
