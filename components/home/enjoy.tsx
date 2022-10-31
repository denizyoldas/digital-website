import React from 'react'
import Heading from '../UI/heading'
import EnjoyItem from './enjoy-item'

const ENJOYLIST = [
  {
    id: '1',
    title: 'Digital Illustration',
    description:
      'But I must explain to you how all this mistaken idea of denouncing pleasure'
  },
  {
    id: '2',
    title: 'Website design & development',
    description:
      'But I must explain to you how all this mistaken idea of denouncing pleasure'
  }
]

const Enjoy = () => {
  return (
    <section className="py-16 md:py-[100px] flex md:flex-row items-center justify-between">
      <div className="md:w-6/12">
        <Heading>
          Things We{' '}
          <span className="relative">
            <span className="z-10">Enjoy</span>
            <span className="bg-primary-100 w-full h-7 absolute -bottom-1 left-0 -z-10"></span>
          </span>
        </Heading>
        <div>
          {ENJOYLIST.map(item => (
            <EnjoyItem {...item} key={item.id} />
          ))}
        </div>
      </div>
      <div className="md:w-5/12">
        {ENJOYLIST.map(item => (
          <EnjoyItem {...item} key={item.id} />
        ))}
      </div>
    </section>
  )
}

export default Enjoy
