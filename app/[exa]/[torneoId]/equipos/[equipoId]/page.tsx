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
  params: { exa: number; torneoId: number; equipoId: number }
}) {
  const supabase = createClient()
  const { data, error } = await supabase
    .from('players')
    .select('*, teams(id, name, image_url)')
    .eq('team_id', params.equipoId)

  if (error) {
    console.log(error)
  }

  const dataWithImage = data?.map(data => {
    const { data: imageData } = supabase.storage
      .from('players')
      .getPublicUrl(data.image_url!)
    data.image_url = imageData.publicUrl

    // logo equipo
    if (data.teams?.image_url) {
      const { data: storage } = supabase.storage
        .from('teams')
        .getPublicUrl(data.teams.image_url)
      data.team_image_url = storage.publicUrl
    }
    return data
  })

  return (
    <main className='flex flex-wrap justify-center items-center py-5 gap-5'>
      {dataWithImage?.map(player => (
        <Link href={`${player.id}`}>
          <article key={player.id} className='relative'>
            <PlayerCard
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
