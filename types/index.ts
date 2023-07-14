export interface Player {
  name: string
  club: string
  image: string
  country: string
  position: {
    corto: string
    largo: string
  }
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
}

export interface Card {
  url: string
  textColor: string
  footTextColor: string
}
