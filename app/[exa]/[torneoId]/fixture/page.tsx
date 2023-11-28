import { createClient } from '@/utils/supabaseServer'
import React from 'react'
import FixtureClient from './components/FixtureClient'

export const revalidate = 0

export const metadata = {
  title: 'Exa Team | Fixture'
}
export default async function FixturePage({
  params
}: {
  params: { exa: number; torneoId: string }
}) {
  const supabase = createClient()

  // get all fixtures
  const { data: fixtures, error: fixtureError } = await supabase
    .rpc('get_fixtures_by_torneo', { torneo: params.torneoId, fase_nro: 1 })
    .order('fixture_order', { ascending: true })

  if (fixtureError) {
    console.log(fixtureError)
  }

  // get all fases
  const { data: fases, error: fasesError } = await supabase
    .from('torneo_fase')
    .select('fase_nro')
    .eq('torneo_id', params.torneoId)

  if (fasesError) {
    console.log(fasesError)
  }

  if (fixtures?.length === 0)
    return <p className='animate animate-bounce'>No hay datos cargados...</p>

  return <FixtureClient fases={fases} fixtures={fixtures || undefined} />
}
