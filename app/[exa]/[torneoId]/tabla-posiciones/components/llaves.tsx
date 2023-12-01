import Image from 'next/image'
import React from 'react'

export interface TeamLocal {
  id: number
  name: string
  image_url: string
}

export interface TeamVisit {
  id: number
  name: string
  image_url: string
}

interface LlavesProps {
  data: {
    fixture_id: string
    fixture_order: number
    fixture_name: string
    fixture_vuelta: boolean
    total_equipos: number
    equipos: {
      order: number
      team_local: TeamLocal
      team_visit: TeamVisit
    }[]
  }[]
}

const Llaves = ({ data }: LlavesProps) => {
  const octavos = data.filter(teams => teams.total_equipos === 16)
  const cuartos = data.filter(teams => teams.total_equipos === 8)
  const semis = data.filter(teams => teams.total_equipos === 4)
  const final = data.filter(teams => teams.total_equipos === 2)

  return (
    <div className='shadow-xl p-5 bg-white rounded m-auto h-auto'>
      <div
        className={`grid gap-2 ${
          octavos.length > 0
            ? 'grid-cols-7'
            : cuartos.length > 0
            ? 'grid-cols-5'
            : 'grid-cols-3'
        }`}>
        {octavos.length > 0 && (
          <div className='text-center flex flex-col gap-5'>
            <h2 className='text-muted-foreground text-xs px-2 rounded shadow'>
              <strong>8</strong>
              <sup>vos</sup>
            </h2>
            <div className='flex flex-col gap-8'>
              {octavos[0].equipos.slice(0, 4).map(teams => (
                <div
                  key={teams.order}
                  className='grid grid-cols-1 grid-rows-2 gap-3 place-items-center relative'>
                  <span className='absolute right-0 top-[50%] w-7 h-[90%] border-r rounded-r border-y border-pink-800 translate-y-[-50%]'></span>
                  <span className='w-12 h-12 bg-white shrink-0 border rounded shadow relative'>
                    <Image
                      src={teams.team_local.image_url!}
                      fill
                      className='object-contain'
                      alt='team logo'
                    />
                  </span>
                  <span className='w-12 h-12 bg-white shrink-0 border rounded shadow relative'>
                    <Image
                      src={teams.team_visit.image_url!}
                      fill
                      className='object-contain'
                      alt='team logo'
                    />
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {cuartos.length > 0 && (
          <div className='text-center flex flex-col gap-5 z-20'>
            <h2 className='text-muted-foreground text-xs px-2 rounded shadow'>
              <strong>4</strong>
              <sup>tos</sup>
            </h2>
            <div className='grid grid-cols-1 grid-rows-4 h-full gap-8'>
              {cuartos[0].equipos.slice(0, 2).map(teams => (
                <div
                  key={teams.order}
                  className='row-span-2 flex flex-col gap-3 relative'>
                  <span className='absolute right-0 top-[50%] w-7 h-[67%] border-r rounded-r border-y border-pink-800 translate-y-[-50%]'></span>
                  <div className='flex items-center justify-center h-full'>
                    <span className='w-12 h-12 bg-white shrink-0 border rounded shadow relative row-span-2'>
                      {cuartos && (
                        <Image
                          src={teams.team_local.image_url!}
                          fill
                          className='object-contain'
                          alt='team logo'
                        />
                      )}
                    </span>
                  </div>
                  <div className='flex items-center justify-center h-full'>
                    <span className='w-12 h-12 bg-white shrink-0 border rounded shadow relative row-span-2'>
                      {cuartos && (
                        <Image
                          src={teams.team_visit.image_url!}
                          fill
                          className='object-contain'
                          alt='team logo'
                        />
                      )}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className='text-center flex flex-col gap-5 z-20'>
          <h2 className='text-muted-foreground text-xs px-2 rounded shadow'>
            Semifinal
          </h2>
          <div className='grid grid-cols-1 grid-rows-2 h-full gap-8'>
            <div className='row-span-2 flex flex-col gap-3 relative'>
              <span className='absolute right-0 top-[50%] w-7 h-[58%] border-r rounded-r border-y border-pink-800 translate-y-[-50%]'></span>
              <div className='flex items-center justify-center h-full'>
                <span className='w-12 h-12 bg-white shrink-0 border rounded shadow relative row-span-2'>
                  {semis.length > 0 && (
                    <Image
                      src={semis[0].equipos[0].team_local.image_url!}
                      fill
                      className='object-contain'
                      alt='team logo'
                    />
                  )}
                </span>
              </div>
              <div className='flex items-center justify-center h-full'>
                <span className='w-12 h-12 bg-white shrink-0 border rounded shadow relative row-span-2'>
                  {semis.length > 0 && (
                    <Image
                      src={semis[0].equipos[0].team_visit.image_url!}
                      fill
                      className='object-contain'
                      alt='team logo'
                    />
                  )}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className='text-center flex flex-col gap-5 z-30'>
          <h2 className='text-muted-foreground text-xs px-2 rounded shadow font-semibold'>
            Final
          </h2>
          <div className='grid grid-cols-1 h-full gap-8'>
            <div className='flex flex-col gap-3'>
              <div className='flex items-center justify-center h-full gap-1 relative'>
                <span className='w-12 h-12 bg-white shrink-0 border rounded shadow relative'>
                  {final.length > 0 && (
                    <Image
                      src={final[0].equipos[0].team_local.image_url!}
                      fill
                      className='object-contain'
                      alt='team logo'
                    />
                  )}
                </span>
                <span className='w-12 h-12 bg-white shrink-0 border rounded shadow relative'>
                  {final.length > 0 && (
                    <Image
                      src={final[0].equipos[0].team_visit.image_url!}
                      fill
                      className='object-contain'
                      alt='team logo'
                    />
                  )}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className='text-center flex flex-col gap-5 z-20'>
          <h2 className='text-muted-foreground text-xs px-2 rounded shadow'>
            Semifinal
          </h2>
          <div className='grid grid-cols-1 grid-rows-2 h-full gap-8'>
            <div className='row-span-2 flex flex-col gap-3 relative'>
              <span className='absolute left-0 top-[50%] w-7 h-[58%] border-l rounded-l border-y border-pink-800 translate-y-[-50%]'></span>
              <div className='flex items-center justify-center h-full'>
                <span className='w-12 h-12 bg-white shrink-0 border rounded shadow row-span-2 relative'>
                  {semis.length > 0 && (
                    <Image
                      src={semis[0].equipos[1].team_local.image_url!}
                      fill
                      className='object-contain'
                      alt='team logo'
                    />
                  )}
                </span>
              </div>
              <div className='flex items-center justify-center h-full'>
                <span className='w-12 h-12 bg-white shrink-0 border rounded shadow row-span-2 relative'>
                  {semis && (
                    <Image
                      src={semis[0].equipos[1].team_visit.image_url!}
                      fill
                      className='object-contain'
                      alt='team logo'
                    />
                  )}
                </span>
              </div>
            </div>
          </div>
        </div>

        {cuartos.length > 0 && (
          <div className='text-center flex flex-col gap-5 z-20'>
            <h2 className='text-muted-foreground text-xs px-2 rounded shadow'>
              <strong>4</strong>
              <sup>tos</sup>
            </h2>
            <div className='grid grid-cols-1 grid-rows-4 h-full gap-8 w-full'>
              {cuartos[0].equipos.slice(-2).map(teams => (
                <div
                  key={teams.order}
                  className='row-span-2 flex flex-col gap-3 relative'>
                  <span className='absolute left-0 top-[50%] w-7 h-[67%] border-l rounded-l border-y border-pink-800 translate-y-[-50%]'></span>
                  <div className='flex items-center justify-center h-full'>
                    <span className='w-12 h-12 bg-white shrink-0 border rounded shadow row-span-2 relative'>
                      {cuartos && (
                        <Image
                          src={teams.team_local.image_url!}
                          fill
                          className='object-contain'
                          alt='team logo'
                        />
                      )}
                    </span>
                  </div>
                  <div className='flex items-center justify-center h-full'>
                    <span className='w-12 h-12 bg-white shrink-0 border rounded shadow row-span-2 relative'>
                      {cuartos && (
                        <Image
                          src={teams.team_visit.image_url!}
                          fill
                          className='object-contain'
                          alt='team logo'
                        />
                      )}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {octavos.length > 0 && (
          <div className='text-center flex flex-col gap-5'>
            <h2 className='text-muted-foreground text-xs px-2 rounded shadow'>
              <strong>8</strong>
              <sup>vos</sup>
            </h2>
            <div className='flex flex-col gap-8'>
              {octavos[0].equipos.slice(-4).map(teams => (
                <div
                  key={teams.order}
                  className='grid grid-cols-1 grid-rows-2 gap-3 place-items-center relative'>
                  <span className='absolute left-0 top-[50%] w-7 h-[90%] border-l rounded-l border-y border-pink-800 translate-y-[-50%]'></span>
                  <span className='w-12 h-12 bg-white shrink-0 border rounded shadow relative'>
                    <Image
                      src={teams.team_local.image_url!}
                      fill
                      className='object-contain'
                      alt='team logo'
                    />
                  </span>
                  <span className='w-12 h-12 bg-white shrink-0 border rounded shadow relative'>
                    <Image
                      src={teams.team_visit.image_url!}
                      fill
                      className='object-contain'
                      alt='team logo'
                    />
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Llaves
