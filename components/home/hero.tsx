import React from 'react'
import Button from '../UI/button'
import Heading from '../UI/heading'
// import IlistrationCircle from '../UI/ilistration-circle'
import TeaLover from '../../assets/tea-lover.svg'
import Image from 'next/image'

const Hero = () => {
  return (
    <section className="flex flex-col sm:flex-row py-16 md:py-[100px] gap-16 items-center justify-between">
      <div className="flex flex-col items-center md:items-start md:w-5/12 lg:w-5/12 xl:w-4/12">
        <Heading>
          We help to Create{' '}
          <span className="bg-primary-100 text-secondary-100">Brands</span> With
          Coffee
        </Heading>
        <Button type="button">See our work</Button>
      </div>
      {/* <IlistrationCircle /> */}
      <Image src={TeaLover} width={592} height={508} alt="tea lover" />
    </section>
  )
}

export default Hero
