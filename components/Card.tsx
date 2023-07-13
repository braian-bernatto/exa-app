import Image from 'next/image'
import React from 'react'

const Card = () => {
  return (
    <div className='border-2 border-pink-800 relative transition-all sm:scale-100 flex justify-center'>
      <Image src='/img/card-1.png' width={350} height={350} alt='player card' />
      <Image
        src='/img/player-gray.png'
        width={200}
        height={200}
        className='absolute top-[54px] right-[50px]'
        alt='player photo'
      />
      <div className='absolute top-[75px] left-[60px] flex flex-col items-center text-2xl h-[180px]'>
        <strong className='text-5xl'>199</strong>
        <span>DFC</span>
        <span className='flex flex-col items-center gap-1'>
          <div className='h-[65px] w-[65px] relative'>
            <Image
              src='/img/timao.png'
              fill
              className='object-contain'
              alt='team logo'
            />
          </div>
          <Image
            src='/img/paises/py.svg'
            width={50}
            height={50}
            className='object-contain'
            alt='country flag'
          />
        </span>
      </div>
      <div className='absolute top-[255px] flex flex-col items-center w-full px-[48px] flex-wrap'>
        <h1 className='w-full text-center text-3xl font-semibold overflow-y-auto h-[45px]'>
          Braian Bernatto
        </h1>
        <span className='absolute top-[43px] w-[210px] border-t border-yellow-900'></span>
        <span className='absolute top-[100px] w-[95px] border-t border-yellow-900 rotate-90'></span>
        <div className='flex items-center justify-between h-[110px] top-0 w-full text-2xl'>
          <div className='w-full'>
            <div className='grid grid-cols-2 w-full place-items-start'>
              <strong className='place-self-end mr-2'>89</strong>{' '}
              <span className='ml-2'>RIT</span>
            </div>
            <div className='grid grid-cols-2 w-full place-items-start'>
              <strong className='place-self-end mr-2'>74</strong>{' '}
              <span className='ml-2'>TIR</span>
            </div>
            <div className='grid grid-cols-2 w-full place-items-start'>
              <strong className='place-self-end mr-2'>150</strong>{' '}
              <span className='ml-2'>PAS</span>
            </div>
          </div>
          <div className='w-full'>
            <div className='grid grid-cols-2 w-full place-items-start'>
              <strong className='place-self-end mr-2'>91</strong>{' '}
              <span className='ml-2'>REG</span>
            </div>
            <div className='grid grid-cols-2 w-full place-items-start'>
              <strong className='place-self-end mr-2'>55</strong>{' '}
              <span className='ml-2'>DEF</span>
            </div>
            <div className='grid grid-cols-2 w-full place-items-start'>
              <strong className='place-self-end mr-2'>88</strong>{' '}
              <span className='ml-2'>FÍS</span>
            </div>
          </div>
        </div>
        {/* <span>derecho</span> */}
      </div>
    </div>
  )
}

export default Card
