import React from 'react'

const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <div className='w-full text-xs text-center py-5 relative'>
      <a
        href='https://braian-bernatto.github.io/portfolio/'
        target='_blank'
        className='font-bold hover:underline'
      >
        Bernatto Inc.
      </a>{' '}
      | Todos los derechos reservados &copy; {year}
    </div>
  )
}

export default Footer
