'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function TorneoLayout({
  children,
  params
}: {
  children: React.ReactNode
  params: { exa: number; torneoId: number }
}) {
  const pathname = usePathname()

  return (
    <div className='w-full flex flex-col items-center'>
      <div className='tabs pb-5 w-full flex justify-center'>
        <Link
          href={`/${params.exa}/${params.torneoId}/fixture`}
          className={`tab tab-bordered ${
            pathname.split('/')[3] === 'fixture' ? 'tab-active' : ''
          }`}>
          Fixture
        </Link>
        <Link
          href={`/${params.exa}/${params.torneoId}/tabla-posiciones`}
          className={`tab tab-bordered ${
            pathname.split('/')[3] === 'tabla-posiciones' ? 'tab-active' : ''
          }`}>
          Tabla Posiciones
        </Link>
        <Link
          href={`/${params.exa}/${params.torneoId}/tabla-goleadores`}
          className={`tab tab-bordered ${
            pathname.split('/')[3] === 'tabla-goleadores' ? 'tab-active' : ''
          }`}>
          Tabla Goleadores
        </Link>
        <Link
          href={`/${params.exa}/${params.torneoId}/equipos`}
          className={`tab tab-bordered ${
            pathname.split('/')[3] === 'equipos' ? 'tab-active' : ''
          }`}>
          Equipos
        </Link>
      </div>
      {children}
    </div>
  )
}
