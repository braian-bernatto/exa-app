import PlayerDetails from '@/components/PlayerDetails'
import { Card } from '@/types'
import { createClient } from '@/utils/supabaseServer'
import React from 'react'

export const revalidate = 0

const card: Card = {
  url: 'card-1.png',
  textColor: 'text-darkgold',
  footTextColor: 'text-gold'
}

const page = async ({ params }: { params: { id: number } }) => {
  const supabase = createClient()
  const { data, error } = await supabase
    .from('players')
    .select(
      '*, teams(id, name, image_url), positions(id, name), foot(id, name)'
    )
    .eq('id', params.id)

  if (error) {
    console.log(error)
  }

  // TO-DO: fix player json
  const formattedPlayer = data?.map(item => {
    const player = {
      ...item,
      team_image_url: '',
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
    if (player.image_url) {
      const { data: storage } = supabase.storage
        .from('players')
        .getPublicUrl(player.image_url)
      player.image_url = storage.publicUrl
    }
    // logo equipo
    if (player.teams?.image_url) {
      const { data: storage } = supabase.storage
        .from('teams')
        .getPublicUrl(player.teams.image_url)
      player.team_image_url = storage.publicUrl
    }
    return player
  })

  return (
    <PlayerDetails
      player={formattedPlayer ? formattedPlayer[0] : undefined}
      card={card}
    />
  )
}

export default page
