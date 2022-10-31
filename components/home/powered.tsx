import React from 'react'
import Button from '../UI/button'
import Heading from '../UI/heading'
import IlistrationCircle from '../UI/ilistration-circle'
import PlayBtn from '../../assets/play-btn.svg'
import Image from 'next/image'
import GirlMeditation from '../../assets/girl-doing-meditation.svg'

const Powered = () => {
  return (
    <section className="flex flex-col items-center md:justify-between md:flex-row-reverse md:items-start md:text-left md:py-[100px]">
      <div className="md:w-6/12">
        <Heading>
          Powered by talented{' '}
          <span className="relative">
            <span className="z-10">people</span>
            <span className="bg-primary-100 w-full h-7 absolute -bottom-1 left-0 -z-10"></span>
          </span>
        </Heading>
        <p className="font-normal leading-5 text-center md:text-left pb-5 text-primary-900">
          But I must explain to you how all thismistaken idea of denouncing
          pleasure and praising pain was born and I will give you a complete
          account of the system.
        </p>
        <p className="font-normal leading-5 text-center md:text-left text-primary-900">
          I wrote to let them know ready to came back they kicked me of their
          team slack all of us are make company email.
        </p>
        <div className="md:flex md:pt-16 items-center gap-12">
          <Button>Learn more</Button>
          <div className="flex gap-6 items-center">
            <Image src={PlayBtn} alt="play button" width={68} height={68} />{' '}
            <span className="leading-5 font-bold text-lg">Watch videos</span>
          </div>
        </div>
      </div>
      {/* <IlistrationCircle /> */}
      <Image src={GirlMeditation} alt="powered by" width={592} height={508} />
    </section>
  )
}

export default Powered
