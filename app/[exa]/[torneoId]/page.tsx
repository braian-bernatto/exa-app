import { createClient } from '@/utils/supabaseServer'
import Image from 'next/image'
export const revalidate = 0

export const metadata = {
  title: 'Exa Team | Torneo'
}

export default async function torneoPage({
  params
}: {
  params: { exa: number; torneoId: number }
}) {
  const supabase = createClient()
  const { data, error } = await supabase
    .from('torneos')
    .select()
    .eq('id', params.torneoId)

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
    <main className='flex flex-col justify-center items-center'>
      {dataWithImage && (
        <Image
          src={dataWithImage[0].image_url}
          alt='Torneo logo'
          height={100}
          width={100}
        />
      )}
    </main>
  )
}
