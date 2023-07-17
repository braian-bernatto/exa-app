import { teams } from '@/constants'
import Image from 'next/image'

const TablaPosiciones = () => {
  return (
    <div className='w-[350px] sm:w-auto'>
      <div className='overflow-x-auto rounded bg-white'>
        <table className='table table-xs table-pin-rows table-pin-cols table-zebra'>
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>EQUIPO</th>
              <td>PJ</td>
              <td>G</td>
              <td>E</td>
              <td>P</td>
              <td>GF</td>
              <td>GC</td>
              <td>DIF</td>
              <th>PTS</th>
            </tr>
          </thead>
          <tbody>
            {teams.map((team, idx) => (
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
                        src={`/img/${team.logo}`}
                        alt='Team Logo'
                      />
                    </div>
                    <div>
                      <div className='font-semibold uppercase ml-2'>
                        {team.name}
                      </div>
                    </div>
                  </div>
                </th>
                <td>
                  <span className='rounded-full border w-6 h-6 flex items-center justify-center p-3'>
                    {team.partidosJugados}
                  </span>
                </td>
                <td>
                  <span className='rounded-full border w-6 h-6 flex items-center justify-center p-3'>
                    {team.ganados}
                  </span>
                </td>
                <td>
                  <span className='rounded-full border w-6 h-6 flex items-center justify-center p-3'>
                    {team.empatados}
                  </span>
                </td>
                <td>
                  <span className='rounded-full border w-6 h-6 flex items-center justify-center p-3'>
                    {team.perdidos}
                  </span>
                </td>
                <td>
                  <span className='rounded-full border w-6 h-6 flex items-center justify-center p-3'>
                    {team.golesFavor}
                  </span>
                </td>
                <td>
                  <span className='rounded-full border w-6 h-6 flex items-center justify-center p-3'>
                    {team.golesContra}
                  </span>
                </td>
                <td>
                  <span className='rounded-full border w-6 h-6 flex items-center justify-center p-3'>
                    {team.diferencia}
                  </span>
                </td>
                <th>
                  <span className='rounded-full bg-white border w-6 h-6 flex items-center justify-center shadow p-4 font-semibold'>
                    {team.puntos}
                  </span>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default TablaPosiciones
