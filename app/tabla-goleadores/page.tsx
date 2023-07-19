import TablaGoleadores from '@/components/TablaGoleadores'
import { Goleadores } from '@/constants'
import React from 'react'

const page = () => {
  return <TablaGoleadores players={Goleadores} />
}

export default page
