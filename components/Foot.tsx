import React from 'react'

interface FootProps {
  styles?: string
  width?: number | 30
  height?: number | 30
}

const Foot = ({ styles, width, height }: FootProps) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      viewBox='0 0 612 792'
      x='0'
      y='0'
      version='1.1'
      className={`drop-shadow ${styles}`}
    >
      <path
        fill='currentColor'
        stroke='currentColor'
        d='M244.774 38.165c-28.199 36.017-85.914 208.279-85.914 305.35 0 97.041 53.059 150.338 57.506 184.422 4.448 34.116-13.853 128.744 9.614 181.968 23.48 53.254 53.207 75.192 104.902 72.855 51.713-2.244 100.231-36.868 104.934-97.939 4.701-61.068-29.621-167.276-36.017-203.561-6.395-36.286 40.718-97.073 51.711-176.95 10.977-79.865-36.047-258.357-64.185-280.281C359.082 2.18 272.971 2.149 244.774 38.165zM978.494 451.621c2.517-19.313 32.527-49.427 32.527-104.324 0-54.906-32.646-152.352-48.596-172.715-15.959-20.346-64.656-20.346-80.614-7.971-15.925 12.384-42.515 113.353-36.306 158.536 6.201 45.19 32.866 79.581 29.232 100.097-3.617 20.517-23.031 80.598-20.363 115.133 2.66 34.543 30.104 54.102 59.362 55.389 29.248 1.313 46.046-11.088 59.336-41.209 13.291-30.098 2.915-83.615 5.422-102.936z'
      ></path>
    </svg>
  )
}

export default Foot
