import React from 'react'
import cx from 'classnames'

interface Props {
  className?: string
  children: React.ReactNode
}

const Heading: React.FC<Props> = ({ className, children }) => {
  return (
    <div
      className={cx(
        'font-black text-[40px] sm:text-6xl md:text-6xl lg:text-7xl text-center leading-[52px] lg:leading-[110px] text-secondary-900 pb-10',
        className
      )}
    >
      {children}
    </div>
  )
}

export default Heading
