"use client";

import { useState } from "react";
import { MdAdd, MdEdit, MdDelete, MdSearch } from "react-icons/md";

export default function Categories() {
  const [categories, setCategories] = useState<any[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">Categories</h1>
        <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
          <MdAdd className="w-5 h-5" />
          Add Category
        </button>
      </div>

      {/* Search Bar */}
      <div className="relative">
        <input
          type="text"
          placeholder="Search categories..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <MdSearch className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.length === 0 ? (
          <div className="col-span-full text-center py-12 text-gray-500">
            No categories found
          </div>
        ) : (
          categories.map((category) => (
            <div
              key={category.id}
              className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition"
            >
              <h3 className="text-lg font-semibold text-gray-900">
                {category.name}
              </h3>
              <p className="text-gray-600 text-sm mt-2">
                {category.description}
              </p>
              <div className="flex gap-2 mt-4">
                <button className="flex-1 text-blue-600 hover:text-blue-900 font-medium text-sm">
                  <MdEdit className="w-4 h-4 inline mr-1" /> Edit
                </button>
                <button className="flex-1 text-red-600 hover:text-red-900 font-medium text-sm">
                  <MdDelete className="w-4 h-4 inline mr-1" /> Delete
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
