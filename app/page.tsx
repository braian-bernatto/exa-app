import PlayerDetails from '@/components/PlayerDetails'
import PlayerCard from '@/components/PlayerCard'
import { Card } from '@/types'
import { Goleadores, player } from '@/constants'
import TablaGoleadores from '@/components/TablaGoleadores'

export default function Home() {
  const card: Card = {
    url: 'card-1.png',
    textColor: 'text-darkgold',
    footTextColor: 'text-gold'
  }

  return (
    <main className='min-h-screen text-gray-700 w-full flex flex-col items-center'>
      <h1>Exa App</h1>
      <TablaGoleadores players={Goleadores} />
      {/* <PlayerDetails player={player} card={card} /> */}
    </main>
  )
}
