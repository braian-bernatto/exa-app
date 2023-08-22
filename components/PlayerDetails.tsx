'use client'

import PlayerCard from './PlayerCard'
import { Card, PlayerExa } from '@/types'
import Image from 'next/image'
import RadarChart from './RadarChart'

interface PlayerProps {
  player: PlayerExa | undefined
  card: Card
}

const PlayerDetails = ({ player, card }: PlayerProps) => {
  if (!player) return <p>No existe jugador</p>

  return (
    <div className='flex flex-wrap items-center justify-center gap-5'>
      <div className='w-[280px] h-[392px] flex items-center justify-center'>
        <div className='scale-[80%] relative'>
          <PlayerCard player={player} card={card} />
        </div>
      </div>
      <RadarChart attributes={player.attributes} />
      <div className='flex flex-col gap-2'>
        {/* player statistics */}
        <div className='flex flex-wrap gap-3 border rounded shadow px-5 py-3 bg-white justify-center items-center relative'>
          {Object.entries(player.statistics).map(([nombre, valor]) => (
            <div key={nombre} className='w-[50px] h-[50px] relative'>
              <Image
                src={`/img/${nombre}.png`}
                fill
                alt={`${nombre} image`}
                className='object-contain drop-shadow'
              />
              <div className='rounded-full bg-white shadow w-[30px] h-[30px] flex justify-center items-center text-[16px] absolute -top-2 -right-1'>
                <strong>{valor}</strong>
              </div>
            </div>
          ))}
        </div>
        {/* player attributes */}
        <div className='grid grid-cols-2 gap-3 border rounded shadow px-5 py-3 bg-white'>
          <h2 className='col-span-2 bg-slate-100 border font-semibold text-xs rounded shadow text-center uppercase'>
            {player.positions.name}
          </h2>
          {/* {Object.entries(player.attributes).map(([nombre, valor]) => (
            <div
              key={nombre}
              className='p-2 border-l-4 border-slate-400 shadow flex items-center gap-2'
            >
              <sup className='capitalize'>{attributes[nombre]}</sup>{' '}
              <strong>{valor}</strong>
            </div>
          ))} */}
          <h2 className='col-span-2 bg-slate-100 border font-semibold text-xs rounded shadow text-center uppercase'>
            {player.foot.name}
          </h2>
        </div>
      </div>
    </div>
  )
}

export default PlayerDetails
