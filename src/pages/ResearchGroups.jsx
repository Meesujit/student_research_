import React from 'react'
import DynamicInterChangeCard from '../components/DynamicInterChangeCard'
import ResearchCard from '../components/ResearchCard'

const ResearchGroups = () => {
  return (
    <div className='Research-group-container'>
      <div className="Research-group">
      <div className="Research-content">
        <h1>Research Group</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
      </div>
      <div className="Research-content-card">
        <DynamicInterChangeCard />
      </div>
      </div>
      <ResearchCard />
    </div>
  )
}

export default ResearchGroups