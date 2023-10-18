import Navbar from '@/components/Navbar'

export const metadata = {
  title: 'Exa DMD'
}

export default function MainLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  )
}
