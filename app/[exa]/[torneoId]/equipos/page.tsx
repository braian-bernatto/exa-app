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
      .getPublicUrl(data.teams.image_url)
    return { ...data, teams: { ...data.teams, image_url: imageData.publicUrl } }
  })

  return (
    <main className='flex flex-wrap justify-center items-center py-5 gap-5 max-w-4xl'>
      {dataWithImage?.map(team => (
        <Link href={`equipos/${team.team_id}`}>
          <div
            key={team.team_id}
            className='relative flex flex-col items-center hover:scale-110 transition rounded bg-white shadow p-2 w-[100px] h-[100px] gap-2 overflow-hidden'>
            <span className='w-[50px] h-[50px] relative'>
              <Image
                src={team.teams.image_url}
                alt='Team logo'
                fill
                className='object-contain'
              />
            </span>
            <h2 className='shadow text-sm px-2 text-center capitalize w-full overflow-clip h-5'>
              {team.teams.name}
            </h2>
          </div>
        </Link>
      ))}
    </main>
  )
}
