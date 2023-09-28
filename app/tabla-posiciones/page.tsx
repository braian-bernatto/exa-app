import TablaPosiciones from '@/app/tabla-posiciones/components/TablaPosiciones'
import { createClient } from '@/utils/supabaseServer'
import React from 'react'

const page = async () => {
  const supabase = createClient()

  const { data, error } = await supabase
    .rpc('get_tabla_posiciones', {
      p_torneo_id: 'bfb7c2f6-57f7-4b54-b412-26777fc9a090'
    })
    .order('puntos', {
      ascending: false
    })
    .order('diferencia', {
      ascending: false
    })
    .order('goles_favor', {
      ascending: false
    })
    .order('goles_contra', {
      ascending: true
    })

  let dataWithImage = data

  if (data) {
    dataWithImage = data.map(team => {
      const { data: url } = supabase.storage
        .from('teams')
        .getPublicUrl(team.team_image_url)

      return {
        ...team,
        team_image_url: url.publicUrl
      }
    })
  }

  if (error) {
    console.log(error)
  }

  return <TablaPosiciones data={dataWithImage} />
}

export default page
