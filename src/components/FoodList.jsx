import React from 'react'
import FoodItem from './FoodItem'

function FoodList({foodData, setfoodId}) {
  return (
    <div className='w-110 ml-8 flex flex-col'>
        {foodData.map((data) => <FoodItem setfoodId={setfoodId} key={data.id} data={data}/>)}
    </div>
  )
}

export default FoodList