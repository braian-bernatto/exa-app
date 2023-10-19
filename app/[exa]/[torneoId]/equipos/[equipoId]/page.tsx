import PlayerCard from '@/components/PlayerCard'
import { Card } from '@/types'
import { createClient } from '@/utils/supabaseServer'
import Link from 'next/link'
export const revalidate = 0

export const metadata = {
  title: 'Exa Team | Jugadores'
}

const card: Card = {
  url: 'card-4.png',
  textColor: 'text-gold',
  footTextColor: 'text-gold'
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
    return { ...data, image_url: imageData.publicUrl }
  })

  return (
    <main className='flex flex-wrap justify-center items-center py-5 gap-5'>
      {dataWithImage?.map(player => (
        <Link href={`/${player.id}`}>
          <article key={player.id} className='relative'>
            <PlayerCard player={player} card={card} small={true} />
          </article>
        </Link>
      ))}
    </main>
  )
}
