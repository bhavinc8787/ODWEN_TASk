"use client";

import { useState } from "react";
import { MdAdd, MdEdit, MdDelete, MdSearch } from "react-icons/md";

export default function Products() {
  const [products, setProducts] = useState<any[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">Products</h1>
        <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
          <MdAdd className="w-5 h-5" />
          Add Product
        </button>
      </div>

      {/* Search Bar */}
      <div className="relative">
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <MdSearch className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
      </div>

      {/* Products Table */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-100 border-b border-gray-200">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                Product Name
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                Category
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                Price
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                Quantity
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {products.length === 0 ? (
              <tr>
                <td colSpan={5} className="px-6 py-8 text-center text-gray-500">
                  No products found
                </td>
              </tr>
            ) : (
              products.map((product) => (
                <tr key={product.id} className="border-b hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-900">
                    {product.name}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    {product.category}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900">
                    ${product.price}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900">
                    {product.quantity}
                  </td>
                  <td className="px-6 py-4 text-sm flex gap-2">
                    <button className="text-blue-600 hover:text-blue-900">
                      <MdEdit className="w-5 h-5" />
                    </button>
                    <button className="text-red-600 hover:text-red-900">
                      <MdDelete className="w-5 h-5" />
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
