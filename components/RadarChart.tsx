'use client'
import { Player } from '@/types'
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
        backdropColor: 'transparent'
      },
      legend: {
        display: false
      }
    }
  },
  plugins: {
    legend: {
      display: false
    }
  }
}

interface Props {
  attributes: Player['attributes']
}

const RadarChart = ({ attributes }: Props) => {
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
          attributes.fís
        ],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)'
        ],
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
