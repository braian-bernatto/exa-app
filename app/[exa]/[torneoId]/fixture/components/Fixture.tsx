'use client'

import Image from 'next/image'
import { useState, Fragment } from 'react'
import { Transition } from '@headlessui/react'
import { Versus } from '@/types'
import { format, isPast, parseISO } from 'date-fns'
import { Calendar, CalendarX2, Clock3, MapPin, MapPinOff } from 'lucide-react'
import { es } from 'date-fns/locale'

interface FixtureProps {
  versus: Versus
}

const Fixture = ({ versus }: FixtureProps) => {
  const [isOpen, setIsOpen] = useState(false)

  console.log({ versus })

  return (
    <div className='flex items-center w-[350px] sm:w-[500px] relative flex-wrap cursor-pointer'>
      <div
        className='z-10 flex justify-between items-center w-full relative'
        onClick={() => setIsOpen(!isOpen)}>
        <span className='absolute w-[90%] left-[50%] translate-x-[-50%] h-7 bg-white -z-10 shadow-lg rounded-full border'></span>
        <div className='relative flex items-center justify-center'>
          <Image
            src={versus.team_local.image_url}
            width={70}
            height={70}
            alt={`Logo de ${versus.team_local.name}`}
          />
          {versus.team_local.walkover && (
            <p className='absolute rounded bg-white shadow-md px-1 text-pink-800 text-[15px] opacity-90 -rotate-12 border border-pink-800'>
              Walkover
            </p>
          )}
        </div>
        <h3 className='text-[8px] sm:text-sm text-center font-semibold px-1 uppercase w-[70px] sm:w-[150px] leading-none'>
          {versus.team_local.name}
        </h3>
        <span className='font-bold rounded-full border shadow-md h-[55px] w-[55px] p-2 flex items-center justify-center bg-white'>
          {isPast(new Date(versus.date)) ? (
            `${versus.team_local.goals ? versus.team_local.goals : 0}-${
              versus.team_visit.goals ? versus.team_visit.goals : 0
            }`
          ) : (
            <div className='flex relative'>
              {format(parseISO(versus.date), 'HH:mm')}
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='w-3 h-3 opacity-70 absolute bottom-[-10px] left-[50%] translate-x-[-50%]'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z'
                />
              </svg>
            </div>
          )}
        </span>
        <h3 className='text-[8px] sm:text-sm text-center font-semibold px-1 uppercase w-[70px] sm:w-[150px] leading-none'>
          {versus.team_visit.name}
        </h3>
        <div className='relative flex items-center justify-center'>
          <Image
            src={versus.team_visit.image_url}
            width={70}
            height={70}
            alt={`Logo de ${versus.team_visit.name}`}
          />
          {versus.team_visit.walkover && (
            <p className='absolute rounded bg-white shadow-md px-1 text-pink-800 text-[15px] opacity-90 rotate-12 border border-pink-800'>
              Walkover
            </p>
          )}
        </div>
      </div>
      {/* versus del partido */}
      <Transition
        show={isOpen}
        as={Fragment}
        enter='ease-out duration-300'
        enterFrom='opacity-0'
        enterTo='opacity-100'
        leave='ease-in duration-200'
        leaveFrom='opacity-100'
        leaveTo='opacity-0'>
        <div className='w-full relative flex flex-col items-center -top-10'>
          <div className='w-full h-[200px] relative flex justify-center gap-2'>
            {/* box 1 | local */}
            <div className='bg-white w-[45%] h-full rounded-md pt-12 pb-5 gap-3 px-3 overflow-y-auto items-start flex flex-col shadow'>
              {versus.team_local.players &&
                versus.team_local.players.map((player, idx) => (
                  <div key={idx} className='flex gap-1 sm:gap-2 items-center'>
                    <h2 className='text-[9px] sm:text-[12px] rounded-full px-1 flex-none shadow capitalize'>
                      {player.name}
                    </h2>
                    {/* goals */}
                    {player.goals > 0 && (
                      <div className='w-[15px] h-[15px] sm:w-[20px] sm:h-[20px] relative flex-none'>
                        <Image
                          src={`/img/goals.png`}
                          fill
                          alt={`image`}
                          className='object-contain drop-shadow'
                        />
                        <div className='rounded-full bg-white shadow w-[10px] h-[10px] sm:w-[15px] sm:h-[15px] flex justify-center items-center text-[6px] sm:text-[10px] absolute sm:-top-2 -right-1'>
                          <strong> {player.goals}</strong>
                        </div>
                      </div>
                    )}
                    {/* yellow cards */}
                    {player.yellow_cards > 0 && (
                      <div className='w-[15px] h-[15px] sm:w-[20px] sm:h-[20px] relative flex-none'>
                        <Image
                          src={`/img/yellowCards.png`}
                          fill
                          alt={`image`}
                          className='object-contain drop-shadow'
                        />
                        <div className='rounded-full bg-white shadow w-[10px] h-[10px] sm:w-[15px] sm:h-[15px] flex justify-center items-center text-[6px] sm:text-[10px] absolute sm:-top-2 -right-1'>
                          <strong> {player.yellow_cards}</strong>
                        </div>
                      </div>
                    )}
                    {/* red card */}
                    {player.red_card && (
                      <div
                        className='tooltip before:max-w-[150px] sm:before:max-w-[200px] before:flex before:flex-wrap before:items-center before:justify-center'
                        data-tip={
                          player.red_card_motive || 'sin observaciones'
                        }>
                        <div className='w-[15px] h-[15px] sm:w-[20px] sm:h-[20px] relative flex-none'>
                          <Image
                            src={`/img/redCards.png`}
                            fill
                            alt={`image`}
                            className='object-contain drop-shadow'
                          />
                        </div>
                      </div>
                    )}
                  </div>
                ))}
            </div>
            {/* box 2 | visitante */}
            <div className='bg-white w-[45%] h-full rounded-md pt-12 pb-5 gap-3 px-3 overflow-y-auto items-start flex flex-col shadow'>
              {versus.team_visit.players &&
                versus.team_visit.players.map((player, idx) => (
                  <div key={idx} className='flex gap-1 sm:gap-2 items-center'>
                    <h2 className='text-[9px] sm:text-[12px] rounded-full px-1 flex-none shadow capitalize'>
                      {player.name}
                    </h2>
                    {/* goals */}
                    {player.goals > 0 && (
                      <div className='w-[15px] h-[15px] sm:w-[20px] sm:h-[20px] relative flex-none'>
                        <Image
                          src={`/img/goals.png`}
                          fill
                          alt={`image`}
                          className='object-contain drop-shadow'
                        />
                        <div className='rounded-full bg-white shadow w-[10px] h-[10px] sm:w-[15px] sm:h-[15px] flex justify-center items-center text-[6px] sm:text-[10px] absolute sm:-top-2 -right-1'>
                          <strong> {player.goals}</strong>
                        </div>
                      </div>
                    )}
                    {/* yellow cards */}
                    {player.yellow_cards > 0 && (
                      <div className='w-[15px] h-[15px] sm:w-[20px] sm:h-[20px] relative flex-none'>
                        <Image
                          src={`/img/yellowCards.png`}
                          fill
                          alt={`image`}
                          className='object-contain drop-shadow'
                        />
                        <div className='rounded-full bg-white shadow w-[10px] h-[10px] sm:w-[15px] sm:h-[15px] flex justify-center items-center text-[6px] sm:text-[10px] absolute sm:-top-2 -right-1'>
                          <strong> {player.yellow_cards}</strong>
                        </div>
                      </div>
                    )}
                    {/* red card */}
                    {player.red_card && (
                      <div
                        className='tooltip before:max-w-[150px] sm:before:max-w-[200px] before:flex before:flex-wrap before:items-center before:justify-center'
                        data-tip={
                          player.red_card_motive || 'sin observaciones'
                        }>
                        <div className='w-[15px] h-[15px] sm:w-[20px] sm:h-[20px] relative flex-none'>
                          <Image
                            src={`/img/redCards.png`}
                            fill
                            alt={`image`}
                            className='object-contain drop-shadow'
                          />
                        </div>
                      </div>
                    )}
                  </div>
                ))}
            </div>
          </div>
          <div className='rounded flex justify-center items-center text-xs text-gray-700'>
            <div className='p-1 px-3 flex items-center gap-2'>
              {versus.date ? (
                <>
                  <div className='flex flex-col items-center gap-1 drop-shadow-sm'>
                    <Calendar size={15} />
                    {format(parseISO(versus.date), 'dd/MM/yy', { locale: es })}
                  </div>
                  <div className='flex flex-col items-center gap-1 drop-shadow-sm'>
                    <Clock3 size={15} />
                    {format(parseISO(versus.date), 'HH:mm', { locale: es })}
                  </div>
                </>
              ) : (
                <CalendarX2 size={15} className='text-gray-500' />
              )}
            </div>
            <span className='flex flex-col items-center justify-center gap-1 drop-shadow-sm px-3 capitalize'>
              {versus.location ? (
                <a
                  className={`flex flex-col gap-1 items-center transition ${
                    versus.location_url && 'hover:text-emerald-500'
                  }`}
                  target='_blank'
                  href={versus.location_url ? versus.location_url : '#'}>
                  <MapPin size={15} />
                  {versus.location}
                </a>
              ) : (
                <MapPinOff size={15} />
              )}
            </span>
          </div>
        </div>
      </Transition>
    </div>
  )
}

export default Fixture
