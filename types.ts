import { Database } from './types_db'

export type Profile = Database['public']['Tables']['profiles']['Row']
export type Countries = Database['public']['Tables']['countries']['Row']
export type Positions = Database['public']['Tables']['positions']['Row']
export type Teams = Database['public']['Tables']['teams']['Row']
export type Exas = Database['public']['Tables']['exas']['Row']
export type Torneos = Database['public']['Tables']['torneos']['Row']
export type Foot = Database['public']['Tables']['foot']['Row']
export type Players = Database['public']['Tables']['players']['Row']
export type Locations = Database['public']['Tables']['locations']['Row']
export type Fixtures = Database['public']['Tables']['fixtures']['Row']
export type FixtureDetails =
  Database['public']['Tables']['fixture_details']['Row']
export type Goals = Database['public']['Tables']['goals']['Row']
export type YellowCards = Database['public']['Tables']['yellow_cards']['Row']
export type RedCards = Database['public']['Tables']['red_cards']['Row']
export type Walkover = Database['public']['Tables']['walkover']['Row']

interface FixturePlayersExa {
  name: string
  goals?: number
  yellowCards?: number
  redCards?: number
}
export interface FixtureExa {
  fecha?: Date
  equipos: {
    horaInicio?: Date
    team1: {
      data: {
        name: string
        logo: string
      }
      players?: FixturePlayersExa[]
      goals?: number
      walkover?: boolean
    }
    team2: {
      data: {
        name: string
        logo: string
      }
      players?: FixturePlayersExa[]
      goals?: number
      walkover?: boolean
    }
  }[]
}
export interface TeamExa {
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
export type PlayerExa = Players & {
  public_image_url: string
  team_public_image_url: string
  teams: { id: number; name: string; image_url: string | null } | null
  positions: { id: string; name: string | null } | null
  foot: { id: number; name: string } | null
  attributes: {
    rit: number | null
    tir: number | null
    pas: number | null
    reg: number | null
    def: number | null
    fis: number | null
  }
  statistics?: {
    goals: number | null
    yellowCards: number | null
    redCards: number | null
  }
}

export interface Card {
  url: string
  textColor: string
  footTextColor: string
}