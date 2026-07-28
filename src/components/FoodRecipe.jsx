import React, { useEffect, useState } from 'react'

function FoodRecipe({ foodId }) {
    const [food, setFood] = useState({})
    const URL = `https://dummyjson.com/recipes/${foodId}`

    useEffect(() => {
        async function fetchRecipe() {
            const res = await fetch(`${URL}`)
            const data = await res.json();
            console.log(data);
            
            setFood(data)
        }
        fetchRecipe()
    }, [foodId])

    return (
        <div>
            {foodId}
            {food.title}
            <img src={food.image} alt="No image" />
        
        </div>
    )
}

export default FoodRecipe