import React, { useState, useMemo } from "react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import ProductList from "./components/ProductList.jsx";
import Footer from "./components/Footer.jsx";
import FilterSort from "./components/FilterSort.jsx";

// Mock product data
const productsData = [
   {
    id: 1,
    name: 'Eco Green Shirt',
    price: 30,
    category: 'Clothing',
    rating: 4.5,
    image: 'https://picsum.photos/seed/shirt/300/300',
  },
  {
    id: 2,
    name: 'Yoga Mat',
    price: 45,
    category: 'Fitness',
    rating: 4.2,
    image: 'https://picsum.photos/seed/yogamat/300/300',
  },
  {
    id: 3,
    name: 'Running Shoes',
    price: 80,
    category: 'Footwear',
    rating: 4.8,
    image: 'https://picsum.photos/seed/shoes/300/300',
  },
  {
    id: 4,
    name: 'Bluetooth Speaker',
    price: 60,
    category: 'Electronics',
    rating: 4.0,
    image: 'https://picsum.photos/seed/speaker/300/300',
  },
  {
    id: 5,
    name: 'Water Bottle',
    price: 20,
    category: 'Fitness',
    rating: 4.3,
    image: 'https://picsum.photos/seed/waterbottle/300/300',
  },
  {
    id: 6,
    name: 'Jeans Pant',
    price: 50,
    category: 'Clothing',
    rating: 4.1,
    image: 'https://picsum.photos/seed/jeans/300/300',
  },
  {
    id: 7,
    name: 'Smart Watch',
    price: 120,
    category: 'Electronics',
    rating: 4.6,
    image: 'https://picsum.photos/seed/smartwatch/300/300',
  },
  {
    id: 8,
    name: 'Leather Wallet',
    price: 25,
    category: 'Accessories',
    rating: 4.0,
    image: 'https://picsum.photos/seed/wallet/300/300',
  },
  {
    id: 9,
    name: 'Sunglasses',
    price: 35,
    category: 'Accessories',
    rating: 4.4,
    image: 'https://picsum.photos/seed/sunglasses/300/300',
  },
  {
    id: 10,
    name: 'Wireless Mouse',
    price: 22,
    category: 'Electronics',
    rating: 4.3,
    image: 'https://picsum.photos/seed/mouse/300/300',
  }
];

function App() {
  const [searchText, setSearchText] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortOption, setSortOption] = useState("");

  // Extract categories from products, add "All"
  const categories = useMemo(() => {
    const cats = productsData.map((p) => p.category);
    return ["All", ...new Set(cats)];
  }, []);

  // Filter and sort products based on state
  const filteredSortedProducts = useMemo(() => {
    let filtered = productsData;

    if (selectedCategory !== "All") {
      filtered = filtered.filter((p) => p.category === selectedCategory);
    }

    if (searchText.trim() !== "") {
      filtered = filtered.filter((p) =>
        p.name.toLowerCase().includes(searchText.toLowerCase())
      );
    }

    if (sortOption === "price-asc") {
      filtered = filtered.slice().sort((a, b) => a.price - b.price);
    } else if (sortOption === "price-desc") {
      filtered = filtered.slice().sort((a, b) => b.price - a.price);
    } else if (sortOption === "rating-desc") {
      filtered = filtered.slice().sort((a, b) => b.rating - a.rating);
    } else if (sortOption === "rating-asc") {
      filtered = filtered.slice().sort((a, b) => a.rating - b.rating);
    }

    return filtered;
  }, [searchText, selectedCategory, sortOption]);

  return (
    <div className="min-h-screen bg-gradient-to-tr from-blue-400 to-green-400 flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8">
        <Hero />
        <FilterSort
          categories={categories}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          searchText={searchText}
          setSearchText={setSearchText}
          sortOption={sortOption}
          setSortOption={setSortOption}
        />
        <ProductList products={filteredSortedProducts} />
      </main>
      <Footer />
    </div>
  );
}

export default App;

