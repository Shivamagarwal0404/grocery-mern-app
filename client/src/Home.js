import React, { useEffect, useState } from "react";
import axios from "axios";

function Home() {
  const [groceries, setGroceries] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/groceries", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => setGroceries(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      {/* Navigation Bar */}
      <nav className="bg-white shadow-md">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-green-600 font-bold text-xl">GroceryManager</div>
          <ul className="hidden md:flex space-x-6 text-gray-700 font-semibold">
            <li><a href="#" className="hover:text-green-600">Home</a></li>
            <li><a href="#" className="hover:text-green-600">Products</a></li>
            <li><a href="#" className="hover:text-green-600">About</a></li>
            <li><a href="#" className="hover:text-green-600">Contact</a></li>
          </ul>
          <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded">
            Login
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-green-600 text-white py-16 text-center">
          <h1 className="text-4xl font-bold">🛒 Welcome to Grocery Manager</h1>
          <p className="mt-2 text-lg">Fresh groceries delivered to your door</p>
        </div>

        {/* Grocery List */}
        <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {groceries.length === 0 ? (
            <p className="text-gray-500 col-span-full text-center">
              No groceries found. Please add some from backend.
            </p>
          ) : (
            groceries.map((item) => (
              <div
                key={item._id}
                className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition"
              >
                <img
                  src={
                    item.imageUrl ||
                    "https://via.placeholder.com/150?text=No+Image"
                  }
                  alt={item.name}
                  className="w-full h-40 object-cover rounded"
                />
                <h2 className="mt-4 text-lg font-bold">{item.name}</h2>
                <p className="text-green-600 font-semibold">₹{item.price}</p>
                <button className="mt-3 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded w-full">
                  Add to Cart
                </button>
              </div>
            ))
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-300 py-6 mt-12">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p>© 2025 Grocery Manager. All rights reserved.</p>
          <p className="mt-2">
            Built with ❤️ using React and Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Home;
