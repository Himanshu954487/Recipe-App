import React, { useEffect, useState } from 'react'


const URL = "https://dummyjson.com/recipes/search"


function Search({ foodData, setfoodData }) {
    const [query, setQuery] = useState("")


    useEffect(() => {
        async function fetchfood() {
            const res = await fetch(`${URL}?q=${query}`)
            const data = await res.json();

            setfoodData(data.recipes)
        }
        fetchfood()


    }, [query])

   return (
        <div className="flex justify-center py-10 px-4">
            <div className="w-full max-w-md">
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search recipes..."
                    className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 shadow-md outline-none focus:border-amber-600 focus:ring-2 focus:ring-amber-600"
                />
            </div>
        </div>
    );
}

export default Search