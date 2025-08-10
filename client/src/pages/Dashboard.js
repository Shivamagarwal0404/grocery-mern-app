import React, { useEffect, useState } from "react";
import axios from "axios";

function Dashboard() {
  const [groceries, setGroceries] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const token = localStorage.getItem("token"); // Store token after login

  // Fetch groceries
  const fetchGroceries = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/groceries", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setGroceries(res.data);
    } catch (err) {
      console.error("Error fetching groceries", err);
    }
  };

  // Add grocery
  const addGrocery = async (e) => {
    e.preventDefault();
    if (!name || !price) return alert("Please fill all fields");

    try {
      await axios.post(
        "http://localhost:5000/api/groceries",
        { name, price },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setName("");
      setPrice("");
      fetchGroceries(); // refresh list
    } catch (err) {
      console.error("Error adding grocery", err);
    }
  };

  useEffect(() => {
    fetchGroceries();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-center mb-6">
        🛒 Grocery Manager — Dashboard
      </h1>

      {/* Add Form */}
      <form
        onSubmit={addGrocery}
        className="max-w-lg mx-auto bg-white p-4 rounded-lg shadow-md flex gap-4 mb-6"
      >
        <input
          type="text"
          placeholder="Grocery Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="flex-1 border border-gray-300 rounded px-3 py-2"
        />
        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="w-28 border border-gray-300 rounded px-3 py-2"
        />
        <button
          type="submit"
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          Add
        </button>
      </form>

      {/* Grocery List */}
      <div className="max-w-2xl mx-auto">
        {groceries.length === 0 ? (
          <p className="text-center text-gray-500">No groceries yet</p>
        ) : (
          <ul className="space-y-3">
            {groceries.map((item) => (
              <li
                key={item._id}
                className="flex justify-between items-center bg-white shadow p-4 rounded-lg"
              >
                <span className="font-medium">{item.name}</span>
                <span className="text-green-600 font-bold">₹{item.price}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Dashboard;
