interface FixturePlayers {
  name: string
  goals?: number
  yellowCards?: number
  redCards?: number
}
export interface Fixture {
  fecha?: Date
  equipos: {
    horaInicio?: Date
    team1: {
      data: {
        name: string
        logo: string
      }
      players?: FixturePlayers[]
      goals?: number
      walkover?: boolean
    }
    team2: {
      data: {
        name: string
        logo: string
      }
      players?: FixturePlayers[]
      goals?: number
      walkover?: boolean
    }
  }[]
}
export interface Team {
  name: string
  logo: string
  partidosJugados: number
  ganados: number
  empatados: number
  perdidos: number
  golesFavor: number
  golesContra: number
  diferencia: number
  puntos: number
}
export type Player = {
  name: string
  team: string
  image: string
  country: string
  position: string
  rating: number
  foot: 'izquierdo' | 'derecho' | 'ambidiestro'
  attributes: {
    rit: number
    tir: number
    pas: number
    reg: number
    def: number
    fís: number
  }
  statistics: {
    goals: number
    yellowCards: number
    redCards: number
  }
}

export interface Card {
  url: string
  textColor: string
  footTextColor: string
}
