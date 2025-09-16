// src/components/GameFilterCard.tsx
import React, { useState } from "react"

interface GameFilterProps {
  onFilterChange: (filters: {
    search: string
    platform: "All" | "PlayStation" | "Xbox" | "Nintendo Switch"
    sort: "Name" | "Lowest Price" | "Highest Price"
  }) => void
}

const GameFilterCard: React.FC<GameFilterProps> = ({ onFilterChange }) => {
  const [search, setSearch] = useState("")
  const [platformFilter, setPlatformFilter] = useState<"All" | "PlayStation" | "Xbox" | "Nintendo Switch">("All")
  const [sort, setSort] = useState<"Name" | "Lowest Price" | "Highest Price">("Name")

  const handleFilterChange = () => {
    onFilterChange({ search, platform: platformFilter, sort })
  }

  return (
    <div className="max-w-300 mx-auto p-6 bg-white shadow-lg rounded-xl mt-8">
      <input
        type="text"
        placeholder="Search games..."
        value={search}
        onChange={(e) => { setSearch(e.target.value); handleFilterChange() }}
        className="w-full p-3 border border-gray-300 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-teal-400"
      />

      <div className="flex flex-wrap justify-between mb-4">
        <div className="flex gap-2 mb-2 flex-wrap">
          <span className="font-semibold mr-2">Platform:</span>
          {["All", "PlayStation", "Xbox", "Nintendo Switch"].map(platform => (
            <button
              key={platform}
              onClick={() => { setPlatformFilter(platform as any); handleFilterChange() }}
              className={`px-4 py-2 rounded-md font-medium ${
                platformFilter === platform ? "bg-teal-400 text-white" : "bg-gray-100 text-gray-700"
              }`}
            >
              {platform}
            </button>
          ))}
        </div>

        <div className="flex gap-2 mb-2 flex-wrap">
          <span className="font-semibold mr-2">Sort by:</span>
          {["Name", "Lowest Price", "Highest Price"].map(option => (
            <button
              key={option}
              onClick={() => { setSort(option as any); handleFilterChange() }}
              className={`px-4 py-2 rounded-md font-medium ${
                sort === option ? "bg-teal-400 text-white" : "bg-gray-100 text-gray-700"
              }`}
            >
              {option}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default GameFilterCard
