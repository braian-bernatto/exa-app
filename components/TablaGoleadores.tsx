import { Card, Player } from '@/types'
import PlayerCard from './PlayerCard'

interface Props {
  players: Player[]
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

  const playersOrderByGoals = players.sort(
    (a, b) => b.statistics.goals - a.statistics.goals
  )

  return (
    <div className='flex flex-col'>
      {playersOrderByGoals.map((jugador, idx) => (
        <div className='h-[180px] flex items-center justify-center'>
          <div className='scale-[40%] relative'>
            <div className='rounded-full h-[100px] w-[100px] text-5xl font-semibold bg-white flex items-center justify-center shadow absolute right-0 z-10 border'>
              {jugador.statistics.goals}
            </div>
            <PlayerCard
              player={jugador}
              card={idx === 0 ? cardGold : cardSilver}
              small={true}
            />
          </div>
        </div>
      ))}
    </div>
  )
}

export default TablaGoleadores
