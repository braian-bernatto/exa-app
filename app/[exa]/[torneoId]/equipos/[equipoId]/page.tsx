import PlayerCard from '@/components/PlayerCard'
import { Card } from '@/types'
import { createClient } from '@/utils/supabaseServer'
import Link from 'next/link'
export const revalidate = 0

export const metadata = {
  title: 'Exa Team | Jugadores'
}

const card: Card = {
  url: 'card-1.png',
  textColor: 'text-darkgold',
  footTextColor: 'text-darkgold'
}

export default async function jugadoresPage({
  params
}: {
  params: { exa: number; torneoId: string; equipoId: number }
}) {
  const supabase = createClient()
  const { data, error } = await supabase
    .rpc('get_torneo_players_stats', {
      torneo: params.torneoId
    })
    .eq('team_id', params.equipoId)

  if (error) {
    console.log(error)
  }

  // TO-DO: fix player json
  const formattedPlayers = data?.map(item => {
    const player = {
      ...item,
      statistics: {
        goals: item.goals,
        yellowCards: item.yellow_cards,
        redCards: 0
      }
    }

    // foto jugador
    if (item.image_url) {
      const { data: storage } = supabase.storage
        .from('players')
        .getPublicUrl(item.image_url)
      player.image_url = storage.publicUrl
    }
    // logo equipo
    if (item.team_image_url) {
      const { data: storage } = supabase.storage
        .from('teams')
        .getPublicUrl(item.team_image_url)
      player.team_image_url = storage.publicUrl
    }

    return player
  })

  return (
    <main className='flex flex-wrap justify-center items-center py-5 gap-5'>
      {formattedPlayers?.map(player => (
        <Link
          key={player.player_id}
          href={`${params.equipoId}/${player.player_id}`}>
          <article className='relative'>
            <PlayerCard
              //@ts-ignore
              player={player}
              card={card}
              small={true}
              showTeam={false}
            />
          </article>
        </Link>
      ))}
    </main>
  )
}
