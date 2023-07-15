import { Player } from '@/types'

export const Goleadores: Player[] = [
  {
    name: 'Braian Bernatto',
    club: 'timao.png',
    image: 'player-gray.png',
    country: 'py',
    position: 'DC',
    rating: 99,
    foot: 'ambidiestro',
    attributes: {
      rit: 85,
      tir: 75,
      pas: 88,
      reg: 91,
      def: 77,
      fís: 99
    },
    statistics: {
      yellowCards: 4,
      redCards: 2,
      goals: 20
    }
  },
  {
    name: 'Hugo Chavez',
    club: 'verdao.png',
    image: 'player-gray.png',
    country: 'ar',
    position: 'LI',
    rating: 79,
    foot: 'derecho',
    attributes: {
      rit: 85,
      tir: 75,
      pas: 88,
      reg: 91,
      def: 77,
      fís: 99
    },
    statistics: {
      yellowCards: 4,
      redCards: 2,
      goals: 10
    }
  },
  {
    name: 'Chaco Vividor',
    club: 'boca.png',
    image: 'player-gray.png',
    country: 'us',
    position: 'LD',
    rating: 67,
    foot: 'derecho',
    attributes: {
      rit: 85,
      tir: 75,
      pas: 88,
      reg: 91,
      def: 77,
      fís: 99
    },
    statistics: {
      yellowCards: 4,
      redCards: 2,
      goals: 8
    }
  },
  {
    name: 'Locura Caceres',
    club: 'gorilas.png',
    image: 'player-gray.png',
    country: 'br',
    position: 'DFC',
    rating: 84,
    foot: 'izquierdo',
    attributes: {
      rit: 85,
      tir: 75,
      pas: 88,
      reg: 91,
      def: 77,
      fís: 99
    },
    statistics: {
      yellowCards: 4,
      redCards: 2,
      goals: 15
    }
  }
]

export const player: Player = {
  name: 'Braian Bernatto',
  club: 'timao.png',
  image: 'player-gray.png',
  country: 'py',
  position: 'DC',
  rating: 99,
  foot: 'ambidiestro',
  attributes: {
    rit: 85,
    tir: 75,
    pas: 88,
    reg: 91,
    def: 77,
    fís: 99
  },
  statistics: {
    yellowCards: 4,
    redCards: 2,
    goals: 20
  }
}

export const attributes: { [key: string]: string } = {
  rit: 'ritmo',
  tir: 'tiro',
  pas: 'pase',
  reg: 'regate',
  def: 'defensa',
  fís: 'físico'
}

export const positions: { [key: string]: string } = {
  POR: 'Portero',
  CAD: 'Carrilero Derecho',
  LD: 'Lateral Derecho',
  DFC: 'Defensa Central',
  LTI: 'Lateral Izquierdo',
  CAI: 'Carrilero Izquierdo',
  MCD: 'Medio Centro Defensivo',
  MD: 'Medio Derecho',
  MC: 'Medio Centro',
  MI: 'Medio Izquierdo',
  MCO: 'Medio Centro Ofensivo',
  SDD: 'Segundo Delantero Derecho',
  MP: 'Media Punta',
  SDI: 'Segundo Delantero Izquierdo',
  ED: 'Extremo Derecho',
  DC: 'Delantero Centro',
  EI: 'Extremo Izquierdo'
}

export const positions2: { [key: string]: string } = {
  GK: 'Goalkeeper',
  LB: 'Left Back',
  CB: 'Center Back',
  RB: 'Right Back',
  SW: 'Sweeper',
  CM: 'Central Midfielder',
  LM: 'Left Midfielder',
  RM: 'Right Midfielder',
  AM: 'Attacking Midfielder',
  LW: 'Left Winger',
  RW: 'Right Winger',
  ST: 'Striker',
  LWB: 'Left Wing Back',
  RWB: 'Right Wing Back',
  DM: 'Defensive Midfielder',
  SS: 'Second Striker',
  FB: 'Full Back',
  CDM: 'Central Defensive Midfielder',
  CAM: 'Central Attacking Midfielder',
  CF: 'Center Forward',
  RS: 'Right Striker',
  LDM: 'Left Defensive Midfielder',
  RDM: 'Right Defensive Midfielder',
  LCM: 'Left Center Midfielder',
  RCM: 'Right Center Midfielder',
  LAM: 'Left Attacking Midfielder',
  RAM: 'Right Attacking Midfielder',
  LS: 'Left Winger',
  PDF: 'Pseudo Fullback'
}
