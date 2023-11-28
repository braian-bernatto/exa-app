import { createClient } from '@/utils/supabaseServer'
import React from 'react'
import TablaPosiciones from './components/TablaPosiciones'

export const metadata = {
  title: 'Exa Team | Tabla Posiciones'
}

export const revalidate = 0

export default async function TablaPosicionesPage({
  params
}: {
  params: { exa: number; torneoId: string }
}) {
  const supabase = createClient()

  // get all fases
  const { data: fases, error: fasesError } = await supabase
    .from('torneo_fase')
    .select('fase_nro, fases(name)')
    .eq('torneo_id', params.torneoId)

  if (fasesError) {
    console.log(fasesError)
  }
  return <TablaPosiciones fases={fases} />
}
