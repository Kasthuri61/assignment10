import React from 'react';

function FilterSort({
  categories,
  selectedCategory,
  setSelectedCategory,
  searchQuery,
  setSearchQuery,
  sortOption,
  setSortOption,
}) {
  return (
    <section
      className="bg-white/90 rounded-xl shadow-lg p-6 max-w-4xl mx-auto my-8 grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-6 border border-gray-300"
      aria-label="Search, filter and sort products"
    >
      {/* Search Input */}
      <input
        type="text"
        placeholder="Search products..."
        className="w-full rounded-md border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent shadow-sm"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      {/* Category Dropdown */}
      <select
        aria-label="Filter by category"
        className="w-full rounded-md border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
      >
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>

      {/* Sort Dropdown */}
      <select
        aria-label="Sort products"
        className="w-full rounded-md border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent"
        value={sortOption}
        onChange={(e) => setSortOption(e.target.value)}
      >
        <option value="">Sort by</option>
        <option value="price-asc">Price - Low to High</option>
        <option value="price-desc">Price - High to Low</option>
        <option value="rating-desc">Rating - High to Low</option>
        <option value="rating-asc">Rating - Low to High</option>
      </select>
    </section>
  );
}

export default FilterSort;