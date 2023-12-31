'use client'

import PlayerCard from './PlayerCard'
import { Card, PlayerExa } from '@/types'
import Image from 'next/image'
import RadarChart from './RadarChart'
import Field from '../[jugadorId]/components/field'

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
      <Field player={player} />
      {player.attributes && <RadarChart attributes={player.attributes} />}
      <div className='flex flex-col gap-2'>
        {/* player statistics */}
        <div className='flex sm:border-l sm:flex-col border-t sm:border-t-0 flex-wrap gap-7 px-4 py-3 bg-white justify-center items-center relative'>
          {Object.entries(player.statistics!).map(([nombre, valor]) => (
            <div key={nombre} className='w-[40px] h-[40px] relative'>
              <Image
                src={`/img/${nombre}.png`}
                fill
                alt={`${nombre} image`}
                className='object-contain drop-shadow filter saturate-[70%]'
              />
              <div className='rounded-full bg-white shadow border w-[30px] h-[30px] flex justify-center items-center text-[16px] absolute -top-2 right-[-10px]'>
                <strong>{valor}</strong>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default PlayerDetails
