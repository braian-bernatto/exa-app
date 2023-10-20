'use client'
import { PlayerExa } from '@/types'
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
} from 'chart.js'
import { Radar } from 'react-chartjs-2'

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
)

export const options = {
  responsive: true,
  scales: {
    r: {
      grid: {
        color: '#c9c9c9',
        display: true,
        lineWidth: 1
      },
      angleLines: {
        display: false
      },
      ticks: {
        display: true,
        backdropColor: 'transparent',
        stepSize: 20
      },
      legend: {
        display: false
      },
      min: 0,
      max: 100
    }
  },
  plugins: {
    legend: {
      display: false
    }
  }
}

interface Props {
  attributes: PlayerExa['attributes']
}

const RadarChart = ({ attributes }: Props) => {
  if (!attributes) return 'No se encontraron atributos'
  const data = {
    labels: ['Ritmo', 'Tiro', 'Pase', 'Regate', 'Defensa', 'Físico'],
    datasets: [
      {
        label: '',
        data: [
          attributes.rit,
          attributes.tir,
          attributes.pas,
          attributes.reg,
          attributes.def,
          attributes.fis
        ],
        backgroundColor: ['rgba(255, 99, 132, 0.2)'],
        borderColor: ['rgba(255, 99, 132, 1)'],
        borderWidth: 1
      }
    ]
  }
  return (
    <div className='w-[350px] h-[350px] drop-shadow-md'>
      <Radar data={data} options={options} />
    </div>
  )
}

export default RadarChart
