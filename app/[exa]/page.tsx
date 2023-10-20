import { createClient } from '@/utils/supabaseServer'
import { Trophy } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
export const revalidate = 0

export const metadata = {
  title: 'Exa Team | Torneos'
}

export default async function Home({
  params
}: {
  params: { exa: number; torneoId: number }
}) {
  const supabase = createClient()
  const { data, error } = await supabase
    .from('torneos')
    .select()
    .eq('exa_id', params.exa)

  if (error) {
    console.log(error)
  }

  const dataWithImage = data?.map(data => {
    const { data: imageData } = supabase.storage
      .from('torneos')
      .getPublicUrl(data.image_url!)
    return { ...data, image_url: imageData.publicUrl }
  })

  return (
    <main className=''>
      {dataWithImage &&
        dataWithImage.map(torneo => (
          <Link key={torneo.id} href={`${params.exa}/${torneo.id}`}>
            <div className='relative flex flex-col items-center justify-center hover:scale-110 transition rounded bg-white shadow p-2 w-[150px] h-[150px]'>
              {data && data[0].image_url ? (
                <span className='w-[150px] h-[150px] relative'>
                  <Image
                    src={torneo.image_url}
                    alt='Torneo logo'
                    fill
                    className='object-contain'
                  />
                </span>
              ) : (
                <Trophy size={150} strokeWidth='1' className='stroke-gold' />
              )}
              <h2 className='rounded bg-white shadow px-2 text-center'>
                {torneo.name}
              </h2>
            </div>
          </Link>
        ))}
    </main>
  )
}
