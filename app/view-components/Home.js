import React, { useEffect } from 'react'
import Launch from '../partial-components/space-x/Launch'

const Home = () => {
  useEffect(() => {document.title = `Home Page`},[])

  return (
    <div className='view-home'>
      <h3 data-cy='next-launch'>Next Launch</h3>
      <Launch next={true} />
    </div>
  )
}

export default Home