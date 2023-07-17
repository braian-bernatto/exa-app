import { Card, Player } from '@/types'
import Image from 'next/image'
import React from 'react'
import Foot from './Foot'

interface CardProps {
  player: Player
  card: Card
  small?: boolean
}

const PlayerCard = ({ player, card, small = false }: CardProps) => {
  return !small ? (
    <div className={`relative sm:scale-100 w-[350px] ${card.textColor}`}>
      <Image
        src={`/img/${card.url}`}
        width={350}
        height={350}
        alt='player card'
        className='drop-shadow-lg'
        priority
      />
      <Image
        src={`/img/${player.image}`}
        width={200}
        height={200}
        className='absolute top-[54px] right-[50px] drop-shadow'
        alt='player photo'
      />

      <div className='absolute top-[75px] left-[60px] flex flex-col items-center text-2xl h-[180px]'>
        <strong className='text-5xl'>{player.rating}</strong>
        <span>{player.position}</span>
        <span className='flex flex-col items-center gap-1'>
          <div className='h-[65px] w-[65px] relative'>
            <Image
              src={`/img/${player.team}`}
              fill
              className='object-contain drop-shadow'
              alt='team logo'
            />
          </div>
          <Image
            src={`/img/paises/${player.country}.svg`}
            width={50}
            height={50}
            className='object-contain drop-shadow'
            alt='country flag'
          />
        </span>
      </div>

      <div className='absolute top-[255px] flex flex-col items-center w-full px-[44px]'>
        <h1 className='w-full text-center text-[26px] font-semibold overflow-y-auto h-[44px] leading-[44px] uppercase'>
          {player.name}
        </h1>
        <span className='absolute top-[43px] w-[210px] border-t border-yellow-900'></span>

        <div className='flex items-center justify-between h-[105px] w-full text-2xl relative'>
          <span className='absolute top-[50%] w-[90px] border-t left-[50%] translate-x-[-50%] border-yellow-900 rotate-90'></span>
          <div className='w-full'>
            {Object.entries(player.attributes).map(([nombre, valor], idx) => {
              if (idx < 3)
                return (
                  <div
                    key={nombre}
                    className='grid grid-cols-2 w-full place-items-start'
                  >
                    <strong className='place-self-end mr-2'>{valor}</strong>{' '}
                    <span className=''>{nombre.toUpperCase()}</span>
                  </div>
                )
            })}
          </div>
          <div className='w-full'>
            {Object.entries(player.attributes).map(([nombre, valor], idx) => {
              if (idx > 2)
                return (
                  <div
                    key={nombre}
                    className='grid grid-cols-2 w-full place-items-end'
                  >
                    <strong className='mr-2'>{valor}</strong>
                    <span className='place-self-start'>
                      {nombre.toUpperCase()}
                    </span>
                  </div>
                )
            })}
          </div>
        </div>

        <div className={`flex`}>
          {(player.foot === 'izquierdo' || player.foot === 'ambidiestro') && (
            <div className='relative flex items-center justify-center'>
              <span
                className={`text-[6px] absolute z-10 ${card.footTextColor}`}
              >
                L
              </span>
              <Foot width={28} height={28} />
            </div>
          )}
          {(player.foot === 'derecho' || player.foot === 'ambidiestro') && (
            <div className='relative flex items-center justify-center'>
              <span
                className={`text-[6px] absolute z-10 ${card.footTextColor}`}
              >
                R
              </span>
              <Foot styles='-scale-x-100' width={28} height={28} />
            </div>
          )}
        </div>
      </div>
    </div>
  ) : (
    <div className={`relative sm:scale-100 w-[350px] ${card.textColor}`}>
      <Image
        src={`/img/${card.url}`}
        width={350}
        height={350}
        alt='player card'
        className='drop-shadow-lg'
        priority
      />
      <Image
        src={`/img/${player.image}`}
        width={200}
        height={200}
        className='absolute top-[54px] left-[50%] translate-x-[-50%] drop-shadow'
        alt='player photo'
      />

      <div className='absolute top-[75px] left-[60px] flex flex-col items-center text-2xl h-[180px]'>
        <span className='flex flex-col items-center gap-1'></span>
      </div>

      <div className='absolute top-[255px] flex flex-col items-center w-full px-[44px]'>
        <h1 className='w-full text-center text-[26px] font-semibold overflow-y-auto h-[44px] leading-[44px] uppercase'>
          {player.name}
        </h1>
        <span className='absolute top-[43px] w-[210px] border-t border-yellow-900'></span>

        <div className='flex items-center justify-center h-[135px] w-full text-2xl relative py-[5px]'>
          <div className='h-full w-full relative'>
            <Image
              src={`/img/${player.team}`}
              fill
              className='object-contain drop-shadow'
              alt='team logo'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default PlayerCard
