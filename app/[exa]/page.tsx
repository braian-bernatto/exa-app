import { createClient } from '@/utils/supabaseServer'
import { Trophy } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
export const revalidate = 0

export const metadata = {
  title: 'Exa Team | Torneos'
}

export default async function Exapage({
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
    <>
      {dataWithImage &&
        dataWithImage.map(torneo => (
          <Link key={torneo.id} href={`${params.exa}/${torneo.id}`}>
            <div className='relative flex flex-col items-center justify-center hover:scale-110 transition w-[150px] h-[150px]'>
              {data && data[0].image_url ? (
                <span className='w-[100px] h-[100px] relative'>
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
              <h2 className='shadow text-sm px-2 text-center rounded border border-gold capitalize'>
                {torneo.name}
              </h2>
            </div>
          </Link>
        ))}
    </>
  )
}
