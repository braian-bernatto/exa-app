import { Card, Player } from '@/types'
import Image from 'next/image'
import React from 'react'
import Foot from './Foot'

interface CardProps {
  player: Player
  card: Card
}

const PlayerCard = ({ player, card }: CardProps) => {
  return (
    <div
      className={`relative transition-all sm:scale-100 flex justify-center ${card.textColor}`}
    >
      <Image
        src={`/img/${card.url}`}
        width={350}
        height={350}
        alt='player card'
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
        <span>{player.position.corto}</span>
        <span className='flex flex-col items-center gap-1'>
          <div className='h-[65px] w-[65px] relative'>
            <Image
              src={`/img/${player.club}`}
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
      <div className='absolute top-[255px] flex flex-col items-center w-full px-[48px] flex-wrap'>
        <h1 className='w-full text-center text-3xl font-semibold overflow-y-auto h-[45px]'>
          {player.name}
        </h1>
        <span className='absolute top-[43px] w-[210px] border-t border-yellow-900'></span>
        <span className='absolute top-[100px] w-[95px] border-t border-yellow-900 rotate-90'></span>
        <div className='flex items-center justify-between h-[110px] top-0 w-full text-2xl'>
          <div className='w-full'>
            {Object.entries(player.attributes).map(([nombre, valor], idx) => {
              if (idx < 3)
                return (
                  <div
                    key={nombre}
                    className='grid grid-cols-2 w-full place-items-start'
                  >
                    <strong className='place-self-end mr-2'>{valor}</strong>{' '}
                    <span className='ml-2'>{nombre.toUpperCase()}</span>
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
                    className='grid grid-cols-2 w-full place-items-start'
                  >
                    <strong className='place-self-end mr-2'>{valor}</strong>{' '}
                    <span className='ml-2'>{nombre.toUpperCase()}</span>
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
  )
}

export default PlayerCard
