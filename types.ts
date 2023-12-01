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
export type TablaPosiciones = Database['public']['Functions']['get_tabla_posiciones_by_fase']['Returns'][0]
export type GetFixturesByTorneo = Database['public']['Functions']['get_fixtures_by_torneo']['Returns']
export type GetFixtureFront = Database['public']['Functions']['get_fixture_front']['Returns']
export type GetLlaves = Database['public']['Functions']['get_llaves']['Returns']

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
  team_image_url: string
  teams?: { id: number; name: string; image_url: string | null } | null
  position_name: string
  foot?: string
  attributes?: {
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



export interface Versus {
  fixture_id: number
  date: string
  location: string
  location_url: string
  cancha_nro: number
  team_local: TeamVersus
  team_visit: TeamVersus
}

export interface TeamVersus {
  id: number
  name: string
  image_url: string
  walkover_goals?: number
  goals?: number
  walkover: boolean
  players?: PlayerVersus[]
}

export interface PlayerVersus {
  id: number
  name: string
  goals: number
  yellow_cards: number
  red_card: boolean
  red_card_motive: string
}