import React, { useEffect, useState, useRef } from 'react'

export default function Canvas (): JSX.Element {
  const [size, setSize] = useState([window.innerHeight, window.innerWidth])
  const canvasRef = useRef(null)

  useEffect(() => {
    window.addEventListener('resize', () =>
      setSize([window.innerHeight, window.innerWidth])
    )
  }, [])

  return <canvas ref={canvasRef} height={size[0]} width={size[1]} />
}
