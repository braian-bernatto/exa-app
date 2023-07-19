import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='w-full flex justify-center gap-5 py-1'>
      <div className='w-[90px] h-[90px] relative flex-none'>
        <Link href={'/'}>
          <Image
            src='/img/aso-dmd.png'
            fill
            alt='aso logo'
            className='object-contain'
          />
        </Link>
      </div>
      <nav className='text-xs'>
        <ul className='flex flex-wrap h-full items-center gap-2'>
          <Link
            href={'/fixture'}
            className='shadow rounded bg-white border px-2 uppercase font-semibold hover:scale-110 hover:shadow-md transition-all cursor-pointer relative'
          >
            <li>Fixture</li>
          </Link>
          <Link
            href={'/tabla-posiciones'}
            className='shadow rounded bg-white border px-2 uppercase font-semibold hover:scale-110 hover:shadow-md transition-all cursor-pointer relative'
          >
            <li>Tabla de Posiciones</li>
          </Link>
          <Link
            href={'/tabla-goleadores'}
            className='shadow rounded bg-white border px-2 uppercase font-semibold hover:scale-110 hover:shadow-md transition-all cursor-pointer relative'
          >
            <li>Tabla de Goleadores</li>
          </Link>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
