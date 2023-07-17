import PlayerDetails from '@/components/PlayerDetails'
import { Card } from '@/types'
import { Goleadores, fixtures, player } from '@/constants'
import TablaGoleadores from '@/components/TablaGoleadores'
import TablaPosiciones from '@/components/TablaPosiciones'
import Fixture from '@/components/Fixture'
import PolarChart from '@/components/RadarChart'

export default function Home() {
  const card: Card = {
    url: 'card-1.png',
    textColor: 'text-darkgold',
    footTextColor: 'text-gold'
  }

  return (
    <main className='min-h-screen text-gray-700 w-full flex flex-col items-center gap-10 py-5'>
      <h1>Exa App</h1>
      <Fixture datos={fixtures[0]} />
      <TablaPosiciones />
      <TablaGoleadores players={Goleadores} />
      <PlayerDetails player={player} card={card} />
    </main>
  )
}
