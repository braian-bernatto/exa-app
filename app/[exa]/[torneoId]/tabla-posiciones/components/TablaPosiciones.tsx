'use client'
import { createClient } from '@/utils/supabaseBrowser'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

interface TablaPosicionesProps {
  fases: { fase_nro: number }[] | null
}

const TablaPosiciones = ({ fases }: TablaPosicionesProps) => {
  const supabase = createClient()
  const params = usePathname()
  const [selectFase, setSelectFase] = useState<number | undefined>()
  const [tablaData, setTablaData] = useState<any[]>([])

  const getTablaData = async (fase: number) => {
    const { data, error } = await supabase
      .rpc('get_tabla_posiciones_by_fase', {
        p_torneo_id: params.split('/')[2],
        fase
      })
      .order('puntos', {
        ascending: false
      })
      .order('diferencia', {
        ascending: false
      })
      .order('goles_favor', {
        ascending: false
      })
      .order('goles_contra', {
        ascending: true
      })

    let dataWithImage = data

    if (data) {
      dataWithImage = data.map(team => {
        const { data: url } = supabase.storage
          .from('teams')
          .getPublicUrl(team.team_image_url)

        return {
          ...team,
          team_image_url: url.publicUrl
        }
      })

      setTablaData(dataWithImage)
    }

    if (error) {
      console.log(error)
    }

    console.log({ dataWithImage })
  }

  return (
    <div className='flex w-full justify-center gap-4 flex-wrap'>
      <div className='w-full flex justify-center'>
        <select
          defaultValue={selectFase ? selectFase : 'title'}
          className='select select-bordered select-sm capitalize text-gray-700 w-[170px]'
          value={selectFase}
          onChange={e => {
            setSelectFase(+e.target.value)
            getTablaData(+e.target.value)
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
      </div>

      {tablaData.length ? (
        <div className='overflow-x-auto rounded bg-white sm:w-auto w-[350px]'>
          <table className='table table-xs table-pin-rows table-pin-cols table-zebra'>
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>EQUIPO</th>
                <td>PTS</td>
                <td>PJ</td>
                <td>G</td>
                <td>E</td>
                <td>P</td>
                <td>GF</td>
                <td>GC</td>
                <td>DIF</td>
              </tr>
            </thead>
            <tbody>
              {tablaData &&
                tablaData.map((team, idx) => (
                  <tr key={idx}>
                    <th>
                      <h2 className='rounded bg-white w-6 h-6 flex items-center justify-center shadow'>
                        {idx + 1}
                      </h2>
                    </th>
                    <th>
                      <div className='flex items-center'>
                        <div className='w-[48px] h-[48px] relative flex-none'>
                          <Image
                            priority
                            fill
                            className='object-contain'
                            src={team.team_image_url}
                            alt='Team Logo'
                          />
                        </div>
                        <div>
                          <div className='font-semibold uppercase ml-2 text-[10px]'>
                            {team.team_name}
                          </div>
                        </div>
                      </div>
                    </th>
                    <td>
                      <span className='rounded-full bg-white border w-6 h-6 flex items-center justify-center shadow p-4 font-bold'>
                        {team.puntos}
                      </span>
                    </td>
                    <td>
                      <span
                        className={`rounded-full border w-6 h-6 flex items-center justify-center p-3`}>
                        {team.jugados}
                      </span>
                    </td>
                    <td>
                      <span
                        className={`rounded-full border w-6 h-6 flex items-center justify-center p-3`}>
                        {team.ganados}
                      </span>
                    </td>
                    <td>
                      <span
                        className={`rounded-full border w-6 h-6 flex items-center justify-center p-3`}>
                        {team.empatados}
                      </span>
                    </td>
                    <td>
                      <span
                        className={`rounded-full border w-6 h-6 flex items-center justify-center p-3`}>
                        {team.perdidos}
                      </span>
                    </td>
                    <td>
                      <span
                        className={`rounded-full border w-6 h-6 flex items-center justify-center p-3`}>
                        {team.goles_favor}
                      </span>
                    </td>
                    <td>
                      <span
                        className={`rounded-full border w-6 h-6 flex items-center justify-center p-3`}>
                        {team.goles_contra}
                      </span>
                    </td>
                    <td>
                      <span
                        className={`rounded-full border w-6 h-6 flex items-center justify-center p-3 font-semibold shadow ${
                          team.diferencia < 0
                            ? 'text-pink-800'
                            : 'text-teal-800'
                        }`}>
                        {team.diferencia}
                      </span>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className='animate animate-bounce'>No hay datos cargados...</p>
      )}
    </div>
  )
}

export default TablaPosiciones
