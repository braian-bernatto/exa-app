import { FixtureExa, TeamExa } from '@/types'

export const fixtures: FixtureExa[] = [
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
          players: [
            { name: 'braian bernatto', goals: 4, yellowCards: 1, redCards: 1 },
            { name: 'fernando locura', goals: 2, yellowCards: 2, redCards: 1 }
          ],
          goals: 5,
          walkover: undefined
        },
        team2: {
          data: {
            name: 'verdao',
            logo: 'verdao.png'
          },
          players: [
            { name: 'hugo chavez', goals: 2, yellowCards: 1 },
            { name: 'chaco vividor', goals: 4, yellowCards: 2, redCards: 1 },
            { name: 'fulano mengano', goals: 1, yellowCards: 1, redCards: 1 }
          ],
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
          players: [
            { name: 'braian bernatto', goals: 1 },
            { name: 'fernando locura', redCards: 1 },
            { name: 'fulano mengano', yellowCards: 2 },
            { name: 'braian bernatto', goals: 1 },
            { name: 'fernando locura', redCards: 1 },
            { name: 'fulano mengano', yellowCards: 2 },
            { name: 'braian bernatto', goals: 1 },
            { name: 'fernando locura', redCards: 1 },
            { name: 'fulano mengano', yellowCards: 2 },
            { name: 'braian bernatto', goals: 1 },
            { name: 'fernando locura', redCards: 1 },
            { name: 'fulano mengano', yellowCards: 2 }
          ],
          goals: 7,
          walkover: undefined
        },
        team2: {
          data: {
            name: 'boca',
            logo: 'boca.png'
          },
          players: [
            { name: 'hugo chavez', goals: 2, yellowCards: 1 },
            { name: 'fernando chaco', yellowCards: 2, redCards: 1 }
          ],
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

export const teams: TeamExa[] = [
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
    puntos: -120
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
    diferencia: -15,
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
    diferencia: -15,
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
    puntos: -120
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

export const attributes: { [key: string]: string } = {
  rit: 'ritmo',
  tir: 'tiro',
  pas: 'pase',
  reg: 'regate',
  def: 'defensa',
  fis: 'físico'
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
