import { PlayerExa } from '@/types'
import Image from 'next/image'

interface FieldProps {
  player: PlayerExa
}
const Field = ({ player }: FieldProps) => {
  return (
    <div className='w-full flex justify-center items-center'>
      <div
        className={`h-[300px] w-[200px] relative block drop-shadow-md ${player.position_name} `}>
        <span
          className={`pulse ${player.position_name
            .replace(' ', '-')
            .toLowerCase()} z-50 w-full h-full`}></span>
        <span
          className='tooltip flex w-full h-full z-50'
          data-tip={player.position_name}></span>
        <Image
          fill
          className='object-cover'
          src='/img/soccer-field-svgrepo-com.svg'
          alt='soccer-field'
        />
      </div>
    </div>
  )
}

export default Field
