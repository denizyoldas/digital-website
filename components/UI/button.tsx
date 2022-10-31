import React from 'react'
import cx from 'classnames'

interface Props {
  className?: string
  type?: 'submit' | 'reset' | 'button'
  children: React.ReactNode
  onClick?: () => void
}

const Button: React.FC<Props> = ({
  className,
  children,
  onClick,
  type = 'button'
}) => {
  return (
    <button
      className={cx(
        'py-4 px-5 md:py-6 md:px-10 bg-primary-900 text-base font-bold text-secondary-100 leading-[20px] hover:text-white hover:bg-primary-100 transition-colors duration-300',
        className
      )}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button
