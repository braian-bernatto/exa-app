'use client'

import { useEffect, useState } from 'react'
import { GetFixturesByTorneo, Versus } from '@/types'
import { createClient } from '@/utils/supabaseBrowser'
import { useRouter } from 'next/navigation'
import Fixture from './Fixture'

interface FixtureProps {
  fases: { fase_nro: number }[] | null
  fixtures: GetFixturesByTorneo | undefined
}

const FixtureClient = ({ fases, fixtures }: FixtureProps) => {
  const [data, setData] = useState<Versus[] | []>([])
  const [selectFase, setSelectFase] = useState<number | undefined>()
  const [selectFixture, setSelectFixture] = useState<string | undefined>()
  const [fixturesFiltered, setFixturesFiltered] =
    useState<GetFixturesByTorneo>()
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
            setSelectFixture(fixtures[0].fixture_id)
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
            setSelectFixture(fixtures[0].fixture_id)
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
      setFixturesFiltered(
        [...fixtures].filter(fix => fix.fase_nro === fixtures[0].fase_nro)
      )
      setSelectFase(fixtures[0].fase_nro)
      setSelectFixture(fixtures[0].fixture_id)
    }
  }, [])

  useEffect(() => {
    if (selectFixture) {
      getVersus(selectFixture)
    }
  }, [selectFixture])

  return (
    <div className='flex flex-col items-center'>
      <div className='flex w-full gap-5 flex-wrap justify-center'>
        <select
          defaultValue={selectFase ? selectFase : 'title'}
          className='select select-bordered select-sm capitalize text-gray-700 w-[170px]'
          value={selectFase}
          onChange={e => {
            setSelectFase(+e.target.value)
            setSelectFixture('title')
            setFixturesFiltered(
              [...fixtures!].filter(fix => fix.fase_nro === +e.target.value)
            )
            e.target.value.length ? getVersus(e.target.value) : setData([])
          }}>
          <option value='title' disabled>
            Fases
          </option>
          {fases &&
            fases.map(fase => (
              <option
                key={fase.fase_nro}
                className='capitalize'
                value={fase.fase_nro}>
                Fase {fase.fase_nro}
              </option>
            ))}
        </select>

        <select
          defaultValue={selectFixture ? selectFixture : 'title'}
          className='select select-bordered select-sm capitalize text-gray-700 w-[170px]'
          value={selectFixture}
          onChange={e => {
            setSelectFixture(e.target.value)
            e.target.value.length ? getVersus(e.target.value) : setData([])
          }}>
          <option value='title' disabled>
            Fixtures
          </option>
          {fixturesFiltered &&
            fixturesFiltered.map(fixture => (
              <option
                key={fixture.fixture_id}
                className='capitalize'
                value={fixture.fixture_id}>
                {fixture.name}{' '}
                {fixture.is_vuelta && (
                  <span className='text-xs lowercase'>(vuelta)</span>
                )}
              </option>
            ))}
        </select>
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
