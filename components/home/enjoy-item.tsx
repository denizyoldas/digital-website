import React from 'react'

interface Props {
  id: string
  title: string
  description: string
}

const EnjoyItem: React.FC<Props> = ({ id, title, description }) => {
  return (
    <div className="flex gap-10">
      <div className="md:font-normal md:text-6xl">0{id}</div>
      <div>
        <h3 className="text-2xl font-bold">{title}</h3>
        <p className="text-base text-gray-500">{description}</p>
      </div>
    </div>
  )
}

export default EnjoyItem
