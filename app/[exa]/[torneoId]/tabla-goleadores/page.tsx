import TablaGoleadores from '@/app/[exa]/[torneoId]/tabla-goleadores/components/TablaGoleadores'
import { createClient } from '@/utils/supabaseServer'

export const revalidate = 0

export const metadata = {
  title: 'Exa Team | Tabla Goleadores'
}

const page = async ({
  params
}: {
  params: { exa: number; torneoId: string }
}) => {
  const supabase = createClient()
  const { data, error } = await supabase.rpc('get_torneo_players_stats', {
    torneo: params.torneoId
  })

  if (error) {
    console.log(error)
  }

  // TO-DO: fix player json
  const formattedPlayers = data
    ?.map(item => {
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
    .filter(player => player.statistics.goals > 0)

  return <TablaGoleadores players={formattedPlayers} />
}

export default page
