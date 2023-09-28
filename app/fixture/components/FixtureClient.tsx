'use client'

import { useEffect, useState } from 'react'
import { GetFixturesByTorneo, Versus } from '@/types'
import { format, parseISO } from 'date-fns'
import { CalendarX2, MapPin, MapPinOff } from 'lucide-react'
import Fixture from '@/app/fixture/components/Fixture'
import { createClient } from '@/utils/supabaseBrowser'
import { useRouter } from 'next/navigation'

interface FixtureProps {
  fixtures: GetFixturesByTorneo | undefined
}

const FixtureClient = ({ fixtures }: FixtureProps) => {
  const [fecha, setFecha] = useState<string | undefined>(undefined)
  const [data, setData] = useState<Versus[] | []>([])
  const [location, setLocation] = useState<string | undefined>()
  const [selectValue, setSelectValue] = useState<number | undefined>()
  const supabase = createClient()
  const router = useRouter()

  const getVersus = async (fixture_id: number) => {
    // get all versus
    const { data, error } = await supabase.rpc('get_fixture_details', {
      fixture: fixture_id
    })

    let dataWithPublicUrl

    if (data) {
      if (Array.isArray(data)) {
        dataWithPublicUrl = data.map((item: any) => {
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
        setData(dataWithPublicUrl)
      }
    } else {
      setData([])
    }

    if (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    const channel = supabase
      .channel('realtime')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'goals'
        },
        payload => {
          if (fixtures) {
            setSelectValue(
              fixtures[0].location_id ? fixtures[0].location_id : undefined
            )
            getVersus(fixtures[0].id)
            const date = fixtures[0].date ? fixtures[0].date : undefined
            setFecha(date)
            setLocation(fixtures[0].location)
            setSelectValue(fixtures[0].id)
          }
        }
      )
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'yellow_cards'
        },
        payload => {
          if (fixtures) {
            setSelectValue(
              fixtures[0].location_id ? fixtures[0].location_id : undefined
            )
            getVersus(fixtures[0].id)
            const date = fixtures[0].date ? fixtures[0].date : undefined
            setFecha(date)
            setLocation(fixtures[0].location)
            setSelectValue(fixtures[0].id)
          }
        }
      )
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'red_cards'
        },
        payload => {
          if (fixtures) {
            setSelectValue(
              fixtures[0].location_id ? fixtures[0].location_id : undefined
            )
            getVersus(fixtures[0].id)
            const date = fixtures[0].date ? fixtures[0].date : undefined
            setFecha(date)
            setLocation(fixtures[0].location)
            setSelectValue(fixtures[0].id)
          }
        }
      )
      .subscribe()

    return () => {
      supabase.removeChannel(channel)
    }
  }, [supabase, router])

  useEffect(() => {
    if (fixtures) {
      getVersus(fixtures[0].id)
      const date = fixtures[0].date ? fixtures[0].date : undefined
      setFecha(date)
      setLocation(fixtures[0].location)
      setSelectValue(fixtures[0].id)
    }
  }, [])

  return (
    <div className='flex flex-col items-center'>
      <div className={`grid sm:grid-cols-3 gap-2 place-items-center w-full`}>
        <select
          defaultValue={selectValue ? selectValue : 'title'}
          className='select select-bordered select-sm max-w-xs capitalize text-gray-700'
          value={selectValue}
          onChange={e => {
            setSelectValue(+e.target.value)
            setLocation(
              e.target.options[e.target.selectedIndex].dataset.location
            )
            setFecha(e.target.options[e.target.selectedIndex].dataset.date)
            e.target.value.length ? getVersus(+e.target.value) : setData([])
          }}>
          <option value='title' disabled>
            Fixtures
          </option>
          {fixtures &&
            fixtures.map(fixture => (
              <option
                key={fixture.fixture_id}
                className='capitalize'
                value={fixture.fixture_id}
                data-location={fixture.location ? fixture.location : undefined}
                data-date={fixture.date ? fixture.date : undefined}>
                {fixture.name}
              </option>
            ))}
        </select>

        <span className='flex items-center justify-center gap-2 bg-white rounded p-1 px-3 shadow'>
          {location ? <MapPin /> : <MapPinOff />}
          {location}
        </span>

        <h2 className='rounded-md bg-white p-1 px-3 text-sm font-semibold text-gray-700'>
          {fecha ? (
            format(parseISO(fecha), 'dd/MM/yyyy')
          ) : (
            <CalendarX2 className='text-gray-500' />
          )}
        </h2>
      </div>

      <div className='flex flex-col gap-5 z-10 mt-6'>
        {data.length ? (
          data.map((data, idx) => <Fixture key={idx} versus={data} />)
        ) : (
          <p className='animate animate-bounce'>No hay datos cargados...</p>
        )}
      </div>
    </div>
  )
}

export default FixtureClient
