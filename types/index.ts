export interface Player {
  name: string
  club: string
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
    yellowCards: number
    redCards: number
    goals: number
  }
}

export interface Card {
  url: string
  textColor: string
  footTextColor: string
}
