import { TablaPosiciones } from '@/types'
import Image from 'next/image'

interface TablaPosicionesProps {
  data: TablaPosiciones[] | null
}

const TablaPosiciones = ({ data }: TablaPosicionesProps) => {
  return (
    <div className='flex w-full justify-center pt-24'>
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
            {data &&
              data.map((team, idx) => (
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
                        team.diferencia < 0 ? 'text-pink-800' : 'text-teal-800'
                      }`}>
                      {team.diferencia}
                    </span>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default TablaPosiciones
