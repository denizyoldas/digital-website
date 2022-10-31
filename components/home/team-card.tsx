import React from 'react'

interface Props {
  id: string
  image?: string
  name: string
  position: string
}

const TeamCard: React.FC<Props> = ({ id, image, name, position }) => {
  return (
    <div className="flex flex-col items-center rounded-[50px] border border-[#B8B8B8] md:py-16 md:px-24 hover:scale-110 transition-all duration-300 hover:shadow-lg">
      {image ? (
        <img src={image} alt={name} className="w-40 h-40 rounded-full" />
      ) : (
        <div className="w-40 md:w-48 h-40 md:h-48 rounded-full bg-secondary-500 mb-16"></div>
      )}
      <h3 className="text-xl font-bold mt-4">{name}</h3>
      <p className="text-base text-gray-500">{position}</p>
    </div>
  )
}

export default TeamCard
