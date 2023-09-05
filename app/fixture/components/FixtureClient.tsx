'use client'

import { useEffect, useState } from 'react'
import { Fixtures, Versus } from '@/types'
import { format, parseISO } from 'date-fns'
import { CalendarX2 } from 'lucide-react'
import Fixture from '@/components/Fixture'
import { createClient } from '@/utils/supabaseBrowser'

interface FixtureProps {
  fixtures: (Fixtures & { fixture_details: { date?: string }[] })[] | undefined
}

const FixtureClient = ({ fixtures }: FixtureProps) => {
  const [fecha, setFecha] = useState<string | undefined>(undefined)
  const [data, setData] = useState<Versus[] | []>([])

  const getVersus = async (fixture_id: number) => {
    const supabase = createClient()
    // get all versus
    const { data, error } = await supabase.rpc('get_fixture_details', {
      fixture: fixture_id
    })

    let dataWithPublicUrl

    console.log({ data })

    if (data && Array.isArray(data)) {
      dataWithPublicUrl = data.map(item => {
        let team = item
        if (item.team_1.image_url && item.team_1.image_url.length) {
          const { data: url } = supabase.storage
            .from('teams')
            .getPublicUrl(item.team_1.image_url)
          team = {
            ...team,
            team_1: {
              ...team.team_1,
              image_url: url.publicUrl
            }
          }
        }
        if (item.team_2.image_url && item.team_2.image_url.length) {
          const { data: url } = supabase.storage
            .from('teams')
            .getPublicUrl(item.team_2.image_url)
          team = {
            ...team,
            team_2: {
              ...team.team_2,
              image_url: url.publicUrl
            }
          }
        }
        return team
      })
    }

    setData(dataWithPublicUrl)

    if (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    if (fixtures) {
      getVersus(fixtures[0].id)
      const date = fixtures[0].fixture_details.length
        ? fixtures[0].fixture_details[0].date
        : undefined
      setFecha(date)
    }
  }, [])

  return (
    <div className='flex flex-col items-center'>
      <div className='grid grid-cols-2 place-items-center w-full'>
        <select
          defaultValue={fixtures ? fixtures[0].id : 'title'}
          className='select select-bordered select-sm max-w-xs capitalize text-gray-700'
          onChange={e => {
            setFecha(e.target.options[e.target.selectedIndex].dataset.date)
            e.target.value.length ? getVersus(+e.target.value) : setData([])
          }}>
          <option value='title' disabled>
            Fixtures
          </option>
          {fixtures &&
            fixtures.map(fixture => (
              <option
                key={fixture.id}
                className='capitalize'
                value={fixture.id}
                data-date={
                  fixture.fixture_details.length
                    ? fixture.fixture_details[0].date
                    : undefined
                }>
                {fixture.name}
              </option>
            ))}
        </select>

        <h2 className='rounded-md bg-white p-1 px-3 text-sm font-semibold text-gray-700'>
          {fecha ? (
            format(parseISO(fecha), 'dd/MM/yyyy')
          ) : (
            <CalendarX2 className='text-gray-500' />
          )}
        </h2>
      </div>

      <div className='flex flex-col gap-5 z-10 mt-10'>
        {data ? (
          data.map((data, idx) => <Fixture key={idx} versus={data} />)
        ) : (
          <p className='animate animate-bounce'>No hay datos cargados...</p>
        )}
      </div>
    </div>
  )
}

export default FixtureClient
