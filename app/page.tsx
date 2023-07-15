import PlayerDetails from '@/components/PlayerDetails'
import PlayerCard from '@/components/PlayerCard'
import { Card, Player } from '@/types'

export default function Home() {
  const player: Player = {
    name: 'Braian Bernatto',
    club: 'timao.png',
    image: 'player-gray.png',
    country: 'py',
    position: {
      corto: 'ST',
      largo: 'Delantero'
    },
    rating: 99,
    foot: 'ambidiestro',
    attributes: {
      rit: 85,
      tir: 75,
      pas: 88,
      reg: 91,
      def: 77,
      fís: 99
    }
  }

  const card: Card = {
    url: 'card-1.png',
    textColor: 'text-darkgold',
    footTextColor: 'text-gold'
  }

  return (
    <main className='min-h-screen text-gray-700 w-full flex flex-col items-center'>
      <h1>Exa App</h1>
      <PlayerCard player={player} card={card} />
      <PlayerDetails player={player} card={card} />
    </main>
  )
}
