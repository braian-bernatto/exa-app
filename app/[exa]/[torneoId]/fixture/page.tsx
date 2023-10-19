import { createClient } from '@/utils/supabaseServer'
import React from 'react'
import FixtureClient from './components/FixtureClient'

const page = async () => {
  const supabase = createClient()

  // get all fixtures
  const { data: fixtures, error: fixtureError } = await supabase.rpc(
    'get_fixtures_by_torneo',
    { torneo: 'bfb7c2f6-57f7-4b54-b412-26777fc9a090' }
  )

  if (fixtureError) {
    console.log(fixtureError)
  }

  return <FixtureClient fixtures={fixtures || undefined} />
}

export default page
