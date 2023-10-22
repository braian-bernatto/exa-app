import { createClient } from '@/utils/supabaseServer'
import React from 'react'
import FixtureClient from './components/FixtureClient'

export const revalidate = 0

export const metadata = {
  title: 'Exa Team | Fixture'
}

const page = async ({
  params
}: {
  params: { exa: number; torneoId: string }
}) => {
  const supabase = createClient()

  // get all fixtures
  const { data: fixtures, error: fixtureError } = await supabase.rpc(
    'get_fixtures_by_torneo',
    { torneo: params.torneoId }
  )

  if (fixtureError) {
    console.log(fixtureError)
  }

  if (fixtures?.length === 0)
    return <p className='animate animate-bounce'>No hay datos cargados...</p>

  return <FixtureClient fixtures={fixtures || undefined} />
}

export default page
