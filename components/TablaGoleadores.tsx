import { Card, PlayerExa } from '@/types'
import PlayerCard from './PlayerCard'
import Link from 'next/link'

interface Props {
  players: PlayerExa[] | undefined
}

const TablaGoleadores = ({ players }: Props) => {
  const cardGold: Card = {
    url: 'card-1.png',
    textColor: 'text-darkgold',
    footTextColor: 'text-gold'
  }

  const cardSilver: Card = {
    url: 'card-2.png',
    textColor: 'text-darkgold',
    footTextColor: 'text-gold'
  }

  // const playersOrderByGoals = players!.sort(
  //   (a, b) => b.statistics.goals - a.statistics.goals
  // )

  if (!players) return <div>No hay jugadores cargados...</div>

  return (
    <div className='flex flex-col gap-5'>
      {players.map((jugador, idx) => (
        <div key={idx} className='flex items-center justify-center'>
          <Link href={`/jugador/${jugador.id}`}>
            <div className='relative'>
              <div
                className={`rounded-full h-[50px] w-[50px] text-2xl font-semibold bg-white flex items-center justify-center shadow absolute -right-[4px] z-10 border-2 
              ${idx === 0 ? 'border-yellow-500' : 'border-gray-500'}`}>
                {jugador.statistics?.goals}
                <h2
                  className={`absolute -bottom-2 text-[12px] rounded bg-white p-0 leading-none px-1 border ${
                    idx === 0 ? 'border-yellow-500' : 'border-gray-500'
                  }`}>
                  Goles
                </h2>
              </div>
              <span
                className={`text-8xl opacity-50 font-black italic absolute right-[125px] top-[50%] translate-y-[-50%] ${
                  idx === 0 ? 'text-gold' : 'text-gray-300'
                }`}>
                {idx + 1}
              </span>
              <PlayerCard
                player={jugador}
                card={idx === 0 ? cardGold : cardSilver}
                small={true}
              />
            </div>
          </Link>
        </div>
      ))}
    </div>
  )
}

export default TablaGoleadores
