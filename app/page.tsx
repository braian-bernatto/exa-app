import { createClient } from '@/utils/supabaseServer'
import Image from 'next/image'
import Link from 'next/link'
export const revalidate = 0

export default async function Home() {
  const supabase = createClient()
  const { data, error } = await supabase.from('exas').select()

  if (error) {
    console.log(error)
  }

  const dataWithImage = data?.map(data => {
    const { data: imageData } = supabase.storage
      .from('exas')
      .getPublicUrl(data.image_url!)
    return { ...data, image_url: imageData.publicUrl }
  })

  return (
    <main className='text-gray-700 w-full flex items-center justify-center gap-10 py-5'>
      {dataWithImage?.map(exa => (
        <Link href={`${exa.id}`}>
          <div
            key={exa.id}
            className='relative flex flex-col items-center hover:scale-110 transition'>
            <Image
              src={exa.image_url}
              alt='exa logo'
              height={100}
              width={100}
            />
            <h2 className='rounded bg-white shadow text-sm px-2'>{exa.name}</h2>
          </div>
        </Link>
      ))}
    </main>
  )
}
