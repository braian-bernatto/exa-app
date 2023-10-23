'use client'

import { useEffect, useState } from 'react'
import { GetFixturesByTorneo, Versus } from '@/types'
import { format, parseISO } from 'date-fns'
import { CalendarX2, MapPin, MapPinOff } from 'lucide-react'
import { createClient } from '@/utils/supabaseBrowser'
import { useRouter } from 'next/navigation'
import Fixture from './Fixture'

interface FixtureProps {
  fixtures: GetFixturesByTorneo | undefined
}

const FixtureClient = ({ fixtures }: FixtureProps) => {
  const [fecha, setFecha] = useState<string | undefined>(undefined)
  const [data, setData] = useState<Versus[] | []>([])
  const [location, setLocation] = useState<string | undefined>()
  const [selectValue, setSelectValue] = useState<string | undefined>()
  const supabase = createClient()
  const router = useRouter()

  const getVersus = async (fixture_id: string) => {
    // get all versus
    const { data, error } = await supabase.rpc('get_fixture_front', {
      fixture: fixture_id
    })

    let dataWithPublicUrl

    if (data) {
      if (Array.isArray(data)) {
        dataWithPublicUrl = data.map((item: any) => {
          let team = item

          team = {
            ...team,
            team_local: {
              ...team.team_local,
              players: team.team_local.players?.filter((player: any) => {
                if (
                  player.goals > 0 ||
                  player.yellow_cards > 0 ||
                  player.red_card
                )
                  return player
              })
            },
            team_visit: {
              ...team.team_visit,
              players: team.team_visit.players?.filter((player: any) => {
                if (
                  player.goals > 0 ||
                  player.yellow_cards > 0 ||
                  player.red_card
                )
                  return player
              })
            }
          }

          if (item.team_local.image_url && item.team_local.image_url.length) {
            const { data: url } = supabase.storage
              .from('teams')
              .getPublicUrl(item.team_local.image_url)
            team = {
              ...team,
              team_local: {
                ...team.team_local,
                image_url: url.publicUrl
              }
            }
          }
          if (item.team_visit.image_url && item.team_visit.image_url.length) {
            const { data: url } = supabase.storage
              .from('teams')
              .getPublicUrl(item.team_visit.image_url)
            team = {
              ...team,
              team_visit: {
                ...team.team_visit,
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
          table: 'fixture_teams'
        },
        payload => {
          if (fixtures) {
            getVersus(fixtures[0].fixture_id)
            setSelectValue(fixtures[0].fixture_id)
          }
        }
      )
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'fixture_players'
        },
        payload => {
          if (fixtures) {
            getVersus(fixtures[0].fixture_id)
            setSelectValue(fixtures[0].fixture_id)
          }
        }
      )
      .subscribe()

    return () => {
      supabase.removeChannel(channel)
    }
  }, [supabase, router])

  useEffect(() => {
    if (fixtures?.length) {
      getVersus(fixtures[0].fixture_id)
      setSelectValue(fixtures[0].fixture_id)
    }
  }, [])

  return (
    <div className='flex flex-col items-center'>
      <select
        defaultValue={selectValue ? selectValue : 'title'}
        className='select select-bordered select-sm max-w-xs capitalize text-gray-700'
        value={selectValue}
        onChange={e => {
          setSelectValue(e.target.value)
          setLocation(e.target.options[e.target.selectedIndex].dataset.location)
          setFecha(e.target.options[e.target.selectedIndex].dataset.date)
          e.target.value.length ? getVersus(e.target.value) : setData([])
        }}>
        <option value='title' disabled>
          Fixtures
        </option>
        {fixtures &&
          fixtures.map(fixture => (
            <option
              key={fixture.fixture_id}
              className='capitalize'
              value={fixture.fixture_id}>
              {fixture.name}
            </option>
          ))}
      </select>

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
