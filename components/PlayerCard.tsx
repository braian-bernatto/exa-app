'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import Foot from './Foot'
import { Card, PlayerExa } from '@/types'
import { attributes } from '@/constants'

interface CardProps {
  player: PlayerExa
  card: Card
  small?: boolean
}

const PlayerCard = ({ player, card, small = false }: CardProps) => {
  const [imageError, setImageError] = useState(false)
  const [logoError, setLogoError] = useState(false)

  const fallbackImage = '/img/player-gray.png'

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
      <div className='absolute top-[54px] right-[50px] w-[200px] h-[200px]'>
        <Image
          src={player.public_image_url}
          fill
          className='drop-shadow object-contain'
          alt='player photo'
        />
      </div>

      <div className='absolute top-[75px] left-[60px] flex flex-col items-center text-2xl h-[180px]'>
        <strong className='text-5xl'>{player.rating}</strong>
        <span>{player.position_id}</span>
        <span className='flex flex-col items-center gap-1'>
          <div className='h-[65px] w-[65px] relative'>
            <Image
              src={player.team_public_image_url}
              fill
              className='object-contain drop-shadow'
              alt='team logo'
            />
          </div>
          {player.country_iso2 && (
            <Image
              src={`/img/paises/${player.country_iso2}.svg`}
              width={50}
              height={50}
              className='object-contain drop-shadow'
              alt='country flag'
            />
          )}
        </span>
      </div>

      <div className='absolute top-[255px] flex flex-col items-center w-full px-[44px]'>
        <h1 className='w-full text-center text-[26px] font-semibold overflow-y-auto h-[44px] leading-[44px] uppercase'>
          {player.name}
        </h1>
        <span className='absolute top-[43px] w-[210px] border-t border-yellow-900'></span>

        <div className='flex items-center justify-between h-[105px] w-full text-2xl relative'>
          <span className='absolute top-[50%] w-[90px] border-t left-[50%] translate-x-[-50%] border-yellow-900 rotate-90'></span>
          {/* izquierda */}
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
          {/* derecha */}
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
          {(player.foot.name === 'izquierdo' ||
            player.foot.name === 'ambidiestro') && (
            <div className='relative flex items-center justify-center'>
              <span
                className={`text-[6px] absolute z-10 ${card.footTextColor}`}
              >
                L
              </span>
              <Foot width={28} height={28} />
            </div>
          )}
          {(player.foot.name === 'derecho' ||
            player.foot.name === 'ambidiestro') && (
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
      <div className='absolute top-[54px] left-[50%] translate-x-[-50%] drop-shadow w-[200px] h-[200px]'>
        <Image
          src={imageError ? fallbackImage : player.public_image_url}
          fill
          className='object-contain'
          alt={player.name}
          onError={() => setImageError(true)}
        />
      </div>

      <div className='absolute top-[75px] left-[60px] flex flex-col items-center text-2xl h-[180px]'>
        <span className='flex flex-col items-center gap-1'></span>
      </div>

      <div className='absolute top-[255px] flex flex-col items-center w-full px-[44px]'>
        <h1 className='w-full text-center text-[26px] font-semibold overflow-y-auto h-[44px] leading-[44px] uppercase'>
          {player.name}
        </h1>
        <span className='absolute top-[43px] w-[210px] border-t border-yellow-900'></span>

        <div className='flex items-center justify-center h-[135px] w-full text-2xl relative py-[5px]'>
          <div className='h-full w-full relative flex items-center justify-center'>
            {!logoError ? (
              <Image
                src={player.team_public_image_url}
                fill
                className='object-contain drop-shadow'
                alt='team logo'
                onError={() => setLogoError(true)}
              />
            ) : (
              <h2 className='w-full text-center text-3xl font-semibold'>
                {player.teams.name}
              </h2>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default PlayerCard
