import Spinner from '@/components/Spinner'
import { createClient } from '@/utils/supabaseServer'
import Image from 'next/image'
import Link from 'next/link'
export const revalidate = 0

export const metadata = {
  title: 'Exa Team | Exas'
}

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
    <main className='text-gray-700 w-full flex items-center justify-center gap-10'>
      {dataWithImage?.map(exa => (
        <Link key={exa.id} href={`${exa.id}`}>
          <div className='relative flex flex-col items-center justify-center hover:scale-110 transition rounded w-[150px] h-[150px]'>
            <span className='w-[100px] h-[100px] relative'>
              <Image
                src={exa.image_url}
                alt='Exa logo'
                fill
                className='object-contain'
              />
            </span>
            <h2 className='shadow text-sm px-2 text-center rounded border border-gold'>
              {exa.name}
            </h2>
          </div>
        </Link>
      ))}
    </main>
  )
}
