'use client'
import { createClient } from '@/utils/supabaseBrowser'
import { Trophy } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const Navbar = async () => {
  const supabase = createClient()
  const pathname = usePathname()
  const exaId = +pathname.split('/')[1]
  const torneoId = pathname.split('/')[2]

  const { data, error } = await supabase.from('exas').select().eq('id', exaId)

  if (error) {
    console.log(error)
    return 'No existe Exa'
  }

  const dataWithImage = data?.map(data => {
    const { data: imageData } = supabase.storage
      .from('exas')
      .getPublicUrl(data.image_url!)
    return { ...data, image_url: imageData.publicUrl }
  })

  const routes = [
    {
      href: `/fixture`,
      label: 'Fixture',
      active: pathname.split('/')[3] === `/fixture`
    },
    {
      href: `/tabla-posiciones`,
      label: 'Posiciones',
      active: pathname.split('/')[3] === `/tabla-posiciones`
    },
    {
      href: `/tabla-goleadores`,
      label: 'Goleadores',
      active: pathname.split('/')[3] === `/tabla-goleadores`
    },
    {
      href: `/equipos`,
      label: 'Equipos',
      active: pathname.split('/')[3] === `/equipos`
    }
  ]

  return (
    <div className='fixed top-0 navbar bg-gradient-to-l from-slate-500 via-slate-300 to-slate-500 z-50'>
      <div className='navbar-start'>
        {torneoId && (
          <div className='dropdown sm:hidden'>
            <label tabIndex={0} className='btn btn-ghost btn-circle'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M4 6h16M4 12h16M4 18h7'
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className='menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 z-50'>
              {routes.map(route => (
                <li key={route.href}>
                  <Link href={`/${exaId}/${torneoId}${route.href}`}>
                    {route.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className='navbar-center'>
        <Link
          href={'/'}
          className='w-[50px] h-[50px] normal-case text-xl relative'>
          {dataWithImage.length > 0 ? (
            dataWithImage[0].image_url ? (
              <Image
                src={dataWithImage[0].image_url}
                fill
                alt='aso logo'
                className='object-contain'
              />
            ) : (
              data[0].name
            )
          ) : (
            <span className='w-12 h-12 border border-gold rounded-full bg-white p-2 flex items-center justify-center shadow-md'>
              <Trophy size={30} className='stroke-gold drop-shadow' />
            </span>
          )}
        </Link>
      </div>
      <div className='navbar-end'>
        {/* <button className='btn btn-ghost btn-circle'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-5 w-5'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
            />
          </svg>
        </button>
        <button className='btn btn-ghost btn-circle'>
          <div className='indicator'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9'
              />
            </svg>
            <span className='badge badge-xs badge-primary indicator-item'></span>
          </div>
        </button> */}
      </div>
    </div>
  )
}

export default Navbar
