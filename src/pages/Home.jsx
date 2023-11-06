import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
      <Link
      to="/stimulsoft"
      className='btn btn-success'
      >
        go to report generator
      </Link>
    </>
  )
}

export default Home
