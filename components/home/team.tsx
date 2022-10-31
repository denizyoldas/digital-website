import React from 'react'
import Heading from '../UI/heading'
import TeamCard from './team-card'

const TEAMS = [
  {
    id: '1',
    name: 'John Doe',
    position: 'CEO'
  },
  {
    id: '1',
    name: 'John Doe',
    position: 'CEO'
  },
  {
    id: '1',
    name: 'John Doe',
    position: 'CEO'
  },
  {
    id: '1',
    name: 'John Doe',
    position: 'CEO'
  },
  {
    id: '1',
    name: 'John Doe',
    position: 'CEO'
  },
  {
    id: '1',
    name: 'John Doe',
    position: 'CEO'
  }
]

const Team = () => {
  return (
    <section className="flex flex-col py-16 md:py-[100px] gap-16 items-center justify-between">
      <Heading>
        <span className="relative">
          <span className="z-10">Meet the Team</span>
          <span className="bg-primary-100 w-full h-7 absolute -bottom-1 left-0 -z-10"></span>
        </span>
      </Heading>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-16 w-full">
        {TEAMS.map(item => (
          <TeamCard {...item} key={item.id} />
        ))}
      </div>
    </section>
  )
}

export default Team
