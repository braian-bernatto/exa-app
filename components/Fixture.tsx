'use client'

import { Fixture } from '@/types'
import dayjs from 'dayjs'
import Image from 'next/image'
import { useState, Fragment } from 'react'
import { Transition } from '@headlessui/react'

interface Props {
  datos: Fixture
}

const Fixture = ({ datos }: Props) => {
  const [isOpen, setIsOpen] = useState<number[]>([])

  const checkOpen = (id: number) => {
    if (isOpen.indexOf(id) !== -1) return true

    return false
  }

  const handleOpen = (id: number) => {
    let open = checkOpen(id)
    if (open) {
      let nuevoArray = isOpen.filter(item => item !== id)
      setIsOpen(nuevoArray)
    } else {
      setIsOpen([...isOpen, id])
    }
  }

  return (
    <div className='flex flex-col items-center'>
      <div className='grid grid-cols-3 place-items-center w-full'>
        <select
          defaultValue='title'
          className='select select-bordered select-sm max-w-xs'
        >
          <option value='title' disabled>
            Fecha
          </option>
          <option>Fecha 6</option>
          <option>Fecha 5</option>
          <option>Fecha 4</option>
          <option>Fecha 3</option>
          <option>Fecha 2</option>
          <option>Fecha 1</option>
        </select>

        <div className='w-[90px] h-[90px] relative flex-none'>
          <Image
            src='/img/aso-dmd.png'
            fill
            alt='aso logo'
            className='object-contain'
          />
        </div>

        <h2 className='rounded-md bg-white p-1 px-3 text-sm font-semibold'>
          22/07/2023
        </h2>
      </div>
      <div className='flex flex-col gap-2'>
        {datos.equipos.map((equipo, idx) => (
          <div
            key={idx}
            className='flex items-center w-[350px] sm:w-[500px] relative flex-wrap cursor-pointer'
            onClick={() => handleOpen(idx)}
          >
            <div className='z-10 flex justify-between items-center w-full relative'>
              <span className='absolute w-[90%] left-[50%] translate-x-[-50%] h-7 bg-white -z-10 shadow-lg rounded-full'></span>
              <Image
                src={`/img/${equipo.team1.data.logo}`}
                width={70}
                height={70}
                alt='Equipo Logo'
              />
              <h3 className='text-[10px] sm:text-sm text-center font-semibold px-1 uppercase w-[70px] sm:w-[150px] leading-none'>
                {equipo.team1.data.name}
              </h3>
              <span className='font-bold rounded-full border shadow-md h-[55px] w-[55px] p-2 flex items-center justify-center bg-white'>
                {equipo.team1.goals ? (
                  `${equipo.team1.goals}-${equipo.team2.goals}`
                ) : equipo.horaInicio ? (
                  dayjs(equipo.horaInicio).format('HH:mm')
                ) : (
                  <div className='w-[20px] h-[20px] rounded-full overflow-hidden flex items-center justify-center'>
                    <div className='bg-red-500 w-2 h-2 rounded-full animate-pulse'></div>
                  </div>
                )}
              </span>
              <h3 className='text-[10px] sm:text-sm text-center font-semibold px-1 uppercase w-[70px] sm:w-[150px] leading-none'>
                {equipo.team2.data.name}
              </h3>
              <Image
                src={`/img/${equipo.team2.data.logo}`}
                width={70}
                height={70}
                alt='Equipo Logo'
              />
            </div>
            {/* DATOS DEL PARTIDO */}
            <Transition
              show={checkOpen(idx)}
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0'
              enterTo='opacity-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100'
              leaveTo='opacity-0'
            >
              <div className='w-full h-[200px] relative -top-10 flex justify-center gap-2'>
                {/* box 1 */}
                <div className='bg-white w-[45%] h-full rounded-md pt-12 flex gap-2 px-3 overflow-y-auto items-start'>
                  <div className='flex gap-2 items-center'>
                    <h2 className='text-[9px] sm:text-[12px] rounded-full px-1 flex-none shadow'>
                      Braian Bernatto
                    </h2>
                    <div className='w-[20px] h-[20px] relative'>
                      <Image
                        src={`/img/goals.png`}
                        fill
                        alt={`image`}
                        className='object-contain drop-shadow'
                      />
                      <div className='rounded-full bg-white shadow w-[10px] h-[10px] sm:w-[15px] sm:h-[15px] flex justify-center items-center text-[6px] sm:text-[10px] absolute sm:-top-2 -right-1'>
                        <strong>2</strong>
                      </div>
                    </div>
                    <div className='w-[20px] h-[20px] relative'>
                      <Image
                        src={`/img/yellowCards.png`}
                        fill
                        alt={`image`}
                        className='object-contain drop-shadow'
                      />
                      <div className='rounded-full bg-white shadow w-[10px] h-[10px] sm:w-[15px] sm:h-[15px] flex justify-center items-center text-[6px] sm:text-[10px] absolute sm:-top-2 -right-1'>
                        <strong>2</strong>
                      </div>
                    </div>
                    <div className='w-[20px] h-[20px] relative'>
                      <Image
                        src={`/img/redCards.png`}
                        fill
                        alt={`image`}
                        className='object-contain drop-shadow'
                      />
                      <div className='rounded-full bg-white shadow w-[10px] h-[10px] sm:w-[15px] sm:h-[15px] flex justify-center items-center text-[6px] sm:text-[10px] absolute sm:-top-2 -right-1'>
                        <strong>1</strong>
                      </div>
                    </div>
                  </div>
                </div>
                {/* box 2 */}
                <div className='bg-white w-[45%] h-full rounded-md pt-12 flex gap-2 px-3 overflow-y-auto items-start'></div>
              </div>
            </Transition>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Fixture
