import { createClient } from '@/utils/supabaseServer'
import React from 'react'
import FixtureClient from './components/FixtureClient'

const page = async () => {
  const supabase = createClient()

  // get all fixtures
  const { data: fixtures, error: fixtureError } = await supabase
    .from('fixtures')
    .select('*, fixture_details(date), locations(name)')
    .order('date', { foreignTable: 'fixture_details', ascending: true })

  if (fixtureError) {
    console.log(fixtureError)
  }

  return <FixtureClient fixtures={fixtures || undefined} />
}

export default page
