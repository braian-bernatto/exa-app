export default function MainLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <div className='text-gray-700 w-full flex flex-col items-center gap-10'>
      {children}
    </div>
  )
}
