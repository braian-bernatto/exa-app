import PlayerDetails from '@/app/[exa]/[torneoId]/equipos/[equipoId]/components/PlayerDetails'
import { Card } from '@/types'
import { createClient } from '@/utils/supabaseServer'
import { Metadata, ResolvingMetadata } from 'next'
import React from 'react'

export const revalidate = 0

const card: Card = {
  url: 'card-1.png',
  textColor: 'text-darkgold',
  footTextColor: 'text-gold'
}

export async function generateMetadata(
  {
    params
  }: {
    params: { jugadorId: number }
  },
  parent: ResolvingMetadata
): Promise<Metadata> {
  // fetch data
  const supabase = createClient()
  const { data } = await supabase
    .from('players')
    .select('name')
    .eq('id', params.jugadorId)

  if (data)
    return {
      title: `Exa Team | ${data[0].name}`
    }

  return { title: 'Exa Team | Jugador' }
}

const jugadorPage = async ({
  params
}: {
  params: { exa: number; torneoId: string; equipoId: number; jugadorId: number }
}) => {
  const supabase = createClient()
  const { data, error } = await supabase
    .rpc('get_torneo_players_stats', {
      torneo: params.torneoId
    })
    .eq('player_id', params.jugadorId)

  if (error) {
    console.log(error)
  }

  // TO-DO: fix player json
  const formattedPlayer = data?.map(item => {
    const player = {
      ...item,
      attributes: {
        rit: item.rit,
        tir: item.tir,
        pas: item.pas,
        reg: item.reg,
        def: item.def,
        fis: item.fis
      },
      statistics: {
        goals: item.goals,
        yellowCards: item.yellow_cards,
        redCards: item.red_cards
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
    <PlayerDetails
      //@ts-ignore
      player={formattedPlayer ? formattedPlayer[0] : undefined}
      card={card}
    />
  )
}

export default jugadorPage
