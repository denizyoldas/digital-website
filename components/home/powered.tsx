import React from 'react'
import Button from '../UI/button'
import Heading from '../UI/heading'
import IlistrationCircle from '../UI/ilistration-circle'

const Powered = () => {
  return (
    <section className="flex flex-col items-center">
      <div>
        <Heading>
          Powered by talented{' '}
          <span className="relative">
            <span className="z-10">people</span>
            <span className="bg-primary-100 w-full h-7 absolute -bottom-1 left-0 -z-10"></span>
          </span>
        </Heading>
        <p className="font-normal leading-5 text-center pb-5 text-primary-900">
          But I must explain to you how all thismistaken idea of denouncing
          pleasure and praising pain was born and I will give you a complete
          account of the system.
        </p>
        <p className="font-normal leading-5 text-center text-primary-900">
          I wrote to let them know ready to came back they kicked me of their
          team slack all of us are make company email.
        </p>
      </div>
      <div>
        <Button>Learn more</Button>
        <div>Watch videos</div>
      </div>
      <IlistrationCircle />
    </section>
  )
}

export default Powered
