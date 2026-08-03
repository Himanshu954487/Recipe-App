import React, { useEffect, useState } from 'react'

function FoodRecipe({ foodId }) {
    const [food, setFood] = useState({})
    const [isLoading, setIsLoading] = useState(true)

    const URL = `https://dummyjson.com/recipes/${foodId}`

    useEffect(() => {
        async function fetchRecipe() {
            const res = await fetch(URL)
            const data = await res.json()

            setFood(data)
            setIsLoading(false)
        }

        fetchRecipe()
    }, [foodId])

    return (
        <div className="min-h-screen bg-gray-100 py-10 px-4">

            {isLoading ? (
                <div className="flex justify-center items-center min-h-[70vh]">
                    <h1 className="text-2xl font-semibold text-gray-600">
                        Loading...
                    </h1>
                </div>
            ) : (
                <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">

                    {/* Image */}
                    <img
                        src={food.image}
                        alt={food.name}
                        className="w-full h-80 object-cover"
                    />

                    {/* Content */}
                    <div className="p-8">

                        {/* Recipe Name */}
                        <h1 className="text-4xl font-bold text-gray-800 mb-4">
                            {food.name}
                        </h1>

                        {/* Prep Time */}
                        <div className="inline-flex items-center bg-orange-100 text-orange-700 px-4 py-2 rounded-full font-medium mb-8">
                            ⏱️ Prep Time: {food.prepTimeMinutes} minutes
                        </div>

                        {/* Instructions */}
                        <div>
                            <h2 className="text-2xl font-bold text-gray-800 mb-5">
                                Instructions
                            </h2>

                            <ol className="space-y-4">
                                {food.instructions.map((step, index) => (
                                    <li
                                        key={index}
                                        className="flex gap-4 text-gray-600 leading-relaxed"
                                    >
                                        <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-orange-500 text-white rounded-full font-semibold">
                                            {index + 1}
                                        </span>

                                        <span className="pt-1">
                                            {step}
                                        </span>
                                    </li>
                                ))}
                            </ol>
                        </div>

                    </div>
                </div>
            )}
        </div>
    )
}

export default FoodRecipe