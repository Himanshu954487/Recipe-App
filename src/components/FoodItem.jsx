import React from "react";

function FoodItem({ data, setfoodId }) {
    function handleClick() {
        setfoodId(data.id)
    }

    return (
        <div className="mb-2 ml-2 flex flex-col items-center bg-white rounded-xl shadow-xl p-4 hover:shadow-xl transition-shadow duration-300">
            <img
                src={data.image}
                alt={data.name}
                className="w-55 h-48 object-cover rounded-lg"
            />

            <h2 className="mt-4 text-lg font-semibold text-gray-800 text-center">
                {data.name}
            </h2>

            <button
                onClick={handleClick}
                className="mt-4 bg-amber-500 hover:bg-amber-600 text-white font-medium px-4 py-2 rounded-lg transition-colors duration-300"
            >
                View Recipe
            </button>
        </div>
    );
}

export default FoodItem;