import PlayerDetails from '@/components/PlayerDetails'
import { Goleadores } from '@/constants'
import { Card } from '@/types'
import React from 'react'

const card: Card = {
  url: 'card-1.png',
  textColor: 'text-darkgold',
  footTextColor: 'text-gold'
}

const page = ({ params }: { params: { id: number } }) => {
  return <PlayerDetails player={Goleadores[params.id]} card={card} />
}

export default page
