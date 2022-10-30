import React from 'react'
import Button from '../UI/button'
import Heading from '../UI/heading'
import IlistrationCircle from '../UI/ilistration-circle'

const Hero = () => {
  return (
    <section className="flex flex-col sm:flex-row py-16 gap-16 items-center justify-between">
      <div className="flex flex-col items-center">
        <Heading>
          We help to Create{' '}
          <span className="bg-primary-100 text-secondary-100">Brands</span> With
          Coffee
        </Heading>
        <Button type="button">See our work</Button>
      </div>
      <IlistrationCircle />
    </section>
  )
}

export default Hero
