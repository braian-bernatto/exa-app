'use client'

import Image from 'next/image'
import { useState, Fragment, useEffect } from 'react'
import { Transition } from '@headlessui/react'
import { Versus } from '@/types'
import { format, isPast, parseISO } from 'date-fns'

interface FixtureProps {
  versus: Versus
}

const Fixture = ({ versus }: FixtureProps) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className='flex items-center w-[350px] sm:w-[500px] relative flex-wrap cursor-pointer'>
      <div
        className='z-10 flex justify-between items-center w-full relative'
        onClick={() => setIsOpen(!isOpen)}>
        <span className='absolute w-[90%] left-[50%] translate-x-[-50%] h-7 bg-white -z-10 shadow-lg rounded-full'></span>
        <div className='relative flex items-center justify-center'>
          <Image
            src={versus.team_1.image_url}
            width={70}
            height={70}
            alt={`Logo de ${versus.team_1.name}`}
          />
          {versus.team_1.walkover && (
            <p className='absolute rounded bg-white shadow-md px-1 text-pink-800 text-[15px] opacity-90 -rotate-12 border border-pink-800'>
              Walkover
            </p>
          )}
        </div>
        <h3 className='text-[10px] sm:text-sm text-center font-semibold px-1 uppercase w-[70px] sm:w-[150px] leading-none'>
          {versus.team_1.name}
        </h3>
        <span className='font-bold rounded-full border shadow-md h-[55px] w-[55px] p-2 flex items-center justify-center bg-white'>
          {isPast(new Date(versus.date)) ? (
            `${versus.team_1.goals ? versus.team_1.goals : 0}-${
              versus.team_2.goals ? versus.team_2.goals : 0
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
        <h3 className='text-[10px] sm:text-sm text-center font-semibold px-1 uppercase w-[70px] sm:w-[150px] leading-none'>
          {versus.team_2.name}
        </h3>
        <div className='relative flex items-center justify-center'>
          <Image
            src={versus.team_2.image_url}
            width={70}
            height={70}
            alt={`Logo de ${versus.team_2.name}`}
          />
          {versus.team_2.walkover && (
            <p className='absolute rounded bg-white shadow-md px-1 text-pink-800 text-[15px] opacity-90 rotate-12 border border-pink-800'>
              Walkover
            </p>
          )}
        </div>
      </div>
      {/* versus DEL PARTIDO */}
      <Transition
        show={isOpen}
        as={Fragment}
        enter='ease-out duration-300'
        enterFrom='opacity-0'
        enterTo='opacity-100'
        leave='ease-in duration-200'
        leaveFrom='opacity-100'
        leaveTo='opacity-0'>
        <div className='w-full h-[200px] relative -top-10 flex justify-center gap-2'>
          {/* box 1 */}
          <div className='bg-white w-[45%] h-full rounded-md pt-12 pb-5 gap-3 px-3 overflow-y-auto items-start flex flex-col'>
            {versus.team_1.players &&
              versus.team_1.players.map((player, idx) => (
                <div key={idx} className='flex gap-1 sm:gap-2 items-center'>
                  <h2 className='text-[9px] sm:text-[12px] rounded-full px-1 flex-none shadow capitalize'>
                    {player.name}
                  </h2>
                  {/* goals */}
                  {player.goals && (
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
                  {player.yellow_cards && (
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
                  {player.red_card !== null && (
                    <div
                      className='tooltip before:max-w-[150px] sm:before:max-w-[200px] before:flex before:flex-wrap before:items-center before:justify-center'
                      data-tip={player.red_card || 'sin observaciones'}>
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
          {/* box 2 */}
          <div className='bg-white w-[45%] h-full rounded-md pt-12 pb-5 gap-3 px-3 overflow-y-auto items-start flex flex-col'>
            {versus.team_2.players &&
              versus.team_2.players.map((player, idx) => (
                <div key={idx} className='flex gap-1 sm:gap-2 items-center'>
                  <h2 className='text-[9px] sm:text-[12px] rounded-full px-1 flex-none shadow capitalize'>
                    {player.name}
                  </h2>
                  {/* goals */}
                  {player.goals && (
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
                  {player.yellow_cards && (
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
                  {player.red_card !== null && (
                    <div
                      className='tooltip before:max-w-[150px] sm:before:max-w-[200px] before:flex before:flex-wrap before:items-center before:justify-center'
                      data-tip={player.red_card || 'sin observaciones'}>
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
      </Transition>
    </div>
  )
}

export default Fixture
