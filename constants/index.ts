import { Fixture, Player, Team } from '@/types'

export const fixtures: Fixture[] = [
  {
    fecha: new Date(),
    equipos: [
      {
        horaInicio: new Date(),
        team1: {
          data: {
            name: 'timao',
            logo: 'timao.png'
          },
          goals: 5,
          walkover: undefined
        },
        team2: {
          data: {
            name: 'verdao',
            logo: 'verdao.png'
          },
          goals: 2,
          walkover: undefined
        }
      },
      {
        horaInicio: new Date(),
        team1: {
          data: {
            name: 'gorilas',
            logo: 'gorilas.png'
          },
          goals: 7,
          walkover: undefined
        },
        team2: {
          data: {
            name: 'boca',
            logo: 'boca.png'
          },
          goals: 3,
          walkover: undefined
        }
      },
      {
        horaInicio: new Date(),
        team1: {
          data: {
            name: 'canallas 2015',
            logo: 'canallas-15.png'
          },
          goals: undefined,
          walkover: true
        },
        team2: {
          data: {
            name: 'canallas 2000',
            logo: 'canallas-2000.png'
          },
          goals: undefined,
          walkover: undefined
        }
      },
      {
        horaInicio: undefined,
        team1: {
          data: {
            name: 'inter',
            logo: 'inter.png'
          },
          goals: undefined,
          walkover: undefined
        },
        team2: {
          data: {
            name: 'usa',
            logo: 'usa.png'
          },
          goals: undefined,
          walkover: true
        }
      }
    ]
  }
]

export const teams: Team[] = [
  {
    name: 'timao',
    logo: 'timao.png',
    partidosJugados: 10,
    ganados: 5,
    empatados: 2,
    perdidos: 1,
    golesFavor: 20,
    golesContra: 12,
    diferencia: 15,
    puntos: 120
  },
  {
    name: 'verdao',
    logo: 'verdao.png',
    partidosJugados: 10,
    ganados: 5,
    empatados: 2,
    perdidos: 1,
    golesFavor: 20,
    golesContra: 12,
    diferencia: 15,
    puntos: 120
  },
  {
    name: 'boca',
    logo: 'boca.png',
    partidosJugados: 10,
    ganados: 5,
    empatados: 2,
    perdidos: 1,
    golesFavor: 20,
    golesContra: 12,
    diferencia: 15,
    puntos: 120
  },
  {
    name: 'gorilas',
    logo: 'gorilas.png',
    partidosJugados: 10,
    ganados: 5,
    empatados: 2,
    perdidos: 1,
    golesFavor: 20,
    golesContra: 12,
    diferencia: 15,
    puntos: 120
  },
  {
    name: 'canallas 2015',
    logo: 'canallas-15.png',
    partidosJugados: 10,
    ganados: 5,
    empatados: 2,
    perdidos: 1,
    golesFavor: 20,
    golesContra: 12,
    diferencia: 15,
    puntos: 120
  },
  {
    name: 'bayern',
    logo: 'bayern.png',
    partidosJugados: 10,
    ganados: 5,
    empatados: 2,
    perdidos: 1,
    golesFavor: 20,
    golesContra: 12,
    diferencia: 15,
    puntos: 120
  },
  {
    name: 'canallas 2000',
    logo: 'canallas-2000.png',
    partidosJugados: 10,
    ganados: 5,
    empatados: 2,
    perdidos: 1,
    golesFavor: 20,
    golesContra: 12,
    diferencia: 15,
    puntos: 120
  },
  {
    name: 'usa',
    logo: 'usa.png',
    partidosJugados: 10,
    ganados: 5,
    empatados: 2,
    perdidos: 1,
    golesFavor: 20,
    golesContra: 12,
    diferencia: 15,
    puntos: 120
  }
]

export const Goleadores: Player[] = [
  {
    name: 'Braian Bernatto',
    team: 'timao.png',
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
    team: 'verdao.png',
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
    team: 'boca.png',
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
    team: 'gorilas.png',
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
  team: 'timao.png',
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
    goals: 20,
    yellowCards: 4,
    redCards: 2
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
