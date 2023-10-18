import { createClient } from '@/utils/supabaseServer'
export const revalidate = 0

export default async function Home({ params }: { params: { exa: number } }) {
  const supabase = createClient()
  const { data, error } = await supabase
    .from('exas')
    .select()
    .eq('id', params.exa)

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
    <main className='min-h-screen text-gray-700 w-full flex flex-col items-center gap-10 py-5'></main>
  )
}
