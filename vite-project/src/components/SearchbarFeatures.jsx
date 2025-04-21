import React, { useState, useEffect } from 'react'

const SearchbarFeatures = ({ data }) => {
  const [search, setSearch] = useState('')
  const [filtered, setFiltered] = useState(data)

  useEffect(() => {
    const term = search.toLowerCase().trim();
  
    const result = data.filter(item => {
      const title = item.title?.toLowerCase() || "";
  
      // Check if the search term is "hot rolled" or "cold rolled"
      if (term.includes("hot rolled") && !term.includes("cold rolled")) {
        return title.includes("hot rolled") && !title.includes("cold rolled");
      }
  
      if (term.includes("cold rolled") && !term.includes("hot rolled")) {
        return title.includes("cold rolled");
      }
  
      // If it's just a general search term (neither hot nor cold rolled)
      return title.includes(term);
    });
  
    console.log("Filtered Data:", result); // Debug log to check if it's filtering correctly
    setFiltered(result);
  }, [search, data]);
  
  return (
    <div className="w-full p-4">
      {/* Input */}
      <input
        type="text"
        placeholder="Search by title, brand or category..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg mb-4"
      />

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.length ? filtered.map(item => (
          <div key={item.id} className="border rounded-lg shadow p-4 bg-white">
            <img src={item.image} alt={item.title} className="w-full h-40 object-cover rounded" />
            <h3 className="text-lg font-semibold mt-2">{item.title}</h3>
            <p className="text-sm text-gray-600">{item.brand}</p>
            <p className="text-sm">Thickness: {item.thickness}</p>
            <p className="text-sm">Width: {item.width}</p>
            <p className="text-sm">Length: {item.length}</p>
            <p className="text-sm text-green-600 font-medium">{item.delivery}</p>
            <button className="mt-3 bg-blue-600 text-white px-4 py-2 rounded">{item.buttonName}</button>
          </div>
        )) : (
          <p className="text-center text-gray-500 col-span-full">No matching products found.</p>
        )}
      </div>
    </div>
  )
}

export default SearchbarFeatures
