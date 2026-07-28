import React from 'react'

function InnerContainer({children}) {
  return (
    <div className='flex flex-1 m-10'>{ children }</div>
  )
}

export default InnerContainer