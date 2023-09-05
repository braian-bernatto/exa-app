import Fixture from '@/components/Fixture'
import { createClient } from '@/utils/supabaseServer'
import React from 'react'

const page = async () => {
  const supabase = createClient()
  const { data, error } = await supabase.rpc('get_fixture_details', {
    fixture: 31
  })

  let dataWithPublicUrl

  console.log(data)

  if (data) {
    dataWithPublicUrl = data.map(item => {
      let team = item
      if (item.team_1.image_url && item.team_1.image_url.length) {
        const { data: url } = supabase.storage
          .from('teams')
          .getPublicUrl(item.team_1.image_url)
        team = {
          ...team,
          team_1: {
            ...team.team_1,
            image_url: url.publicUrl
          }
        }
      }
      if (item.team_2.image_url && item.team_2.image_url.length) {
        const { data: url } = supabase.storage
          .from('teams')
          .getPublicUrl(item.team_2.image_url)
        team = {
          ...team,
          team_2: {
            ...team.team_2,
            image_url: url.publicUrl
          }
        }
      }
      return team
    })
  }

  console.log({ dataWithPublicUrl })

  if (error) {
    console.log(error)
  }

  return <Fixture versus={dataWithPublicUrl} />
}

export default page
