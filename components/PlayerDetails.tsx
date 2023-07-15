'use client'

import React, { useState, Fragment } from 'react'
import PlayerCard from './PlayerCard'
import { Card, Player } from '@/types'
import { Transition } from '@headlessui/react'
import { attributes } from '@/constants'

interface PlayerProps {
  player: Player
  card: Card
}

const PlayerDetails = ({ player, card }: PlayerProps) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className='border border-red-900 w-full flex flex-col items-center'>
      <h1>{player.name}</h1>
      <button onClick={() => setIsOpen(!isOpen)}>Toggle me</button>
      <div className='relative flex items-center'>
        <PlayerCard player={player} card={card} />
        <Transition
          show={isOpen}
          enter='transition ease-in-out duration-300 transform'
          enterFrom='-translate-x-full'
          enterTo='translate-x-0'
          leave='transition ease-in-out duration-300 transform'
          leaveFrom='translate-x-0'
          leaveTo='-translate-x-full'
        >
          {' '}
          <div className='grid grid-cols-2 gap-3 border rounded shadow-md px-5 py-3 bg-white'>
            {Object.entries(player.attributes).map(([nombre, valor], idx) => (
              <div
                key={idx}
                className='p-2 rounded-full border shadow flex items-center gap-2'
              >
                <sup>{attributes[nombre]}</sup> <strong>{valor}</strong>
              </div>
            ))}
          </div>
        </Transition>
      </div>
    </div>
  )
}

export default PlayerDetails
