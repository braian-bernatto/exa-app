import TablaGoleadores from '@/components/TablaGoleadores'
import { createClient } from '@/utils/supabaseServer'

const page = async () => {
  const supabase = createClient()
  const { data, error } = await supabase
    .from('players')
    .select(
      '*, teams(id, name, image_url), positions(id, name), foot(id, name)'
    )
    .order('created_at', { ascending: true })

  if (error) {
    console.log(error)
  }

  // TO-DO: fix player json
  const formattedPlayers = data?.map(item => {
    const player = {
      ...item,
      public_image_url: '',
      team_public_image_url: '',
      attributes: {
        rit: item.rit,
        tir: item.tir,
        pas: item.pas,
        reg: item.reg,
        def: item.def,
        fis: item.fis
      },
      statistics: {
        goals: 0,
        yellowCards: 0,
        redCards: 0
      }
    }

    // foto jugador
    if (item.image_url) {
      const { data: storage } = supabase.storage
        .from('players')
        .getPublicUrl(item.image_url)
      player.public_image_url = storage.publicUrl
    }
    // logo equipo
    if (item.teams?.image_url) {
      const { data: storage } = supabase.storage
        .from('teams')
        .getPublicUrl(item.teams?.image_url)
      player.team_public_image_url = storage.publicUrl
    }

    return player
  })

  return <TablaGoleadores players={formattedPlayers} />
}

export default page
