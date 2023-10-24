import { createClient } from '@/utils/supabaseServer'
import Image from 'next/image'
import Link from 'next/link'
export const revalidate = 0

export const metadata = {
  title: 'Exa Team | Equipos'
}

export default async function equiposPage({
  params
}: {
  params: { exa: number; torneoId: number }
}) {
  const supabase = createClient()
  const { data, error } = await supabase
    .from('torneo_teams')
    .select('*, teams(id, name, image_url)')
    .eq('torneo_id', params.torneoId)

  if (error) {
    console.log(error)
  }

  const dataWithImage = data?.map(data => {
    const { data: imageData } = supabase.storage
      .from('teams')
      .getPublicUrl(data.teams?.image_url!)
    return { ...data, teams: { ...data.teams, image_url: imageData.publicUrl } }
  })

  return (
    <main className='flex flex-wrap justify-center items-center py-5 gap-5 max-w-2xl relative'>
      {dataWithImage?.map(team => (
        <Link key={team.team_id} href={`equipos/${team.team_id}`}>
          <div className='relative flex flex-col items-center hover:scale-110 transition p-2 max-w-[150px] h-[150px] overflow-hidden drop-shadow'>
            <span className='w-[90px] sm:w-[100px] h-[90px] sm:h-[100px] relative'>
              <Image
                src={team.teams.image_url}
                alt='Team logo'
                fill
                className='object-contain'
              />
            </span>
            <h2 className='text-xs px-2 py-1 text-center capitalize rounded border overflow-clip'>
              {team.teams.name}
            </h2>
          </div>
        </Link>
      ))}
    </main>
  )
}
