"use client";

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {[
          { label: "Total Products", value: "0", color: "bg-blue-500" },
          { label: "Total Categories", value: "0", color: "bg-green-500" },
          { label: "Active Orders", value: "0", color: "bg-purple-500" },
          { label: "Low Stock Items", value: "0", color: "bg-red-500" },
        ].map((stat, idx) => (
          <div
            key={idx}
            className="bg-white rounded-lg shadow p-6 border-l-4 border-l-blue-500"
          >
            <p className="text-gray-600 text-sm font-medium">{stat.label}</p>
            <p className="text-3xl font-bold text-gray-900 mt-2">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Charts placeholder */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            Recent Products
          </h2>
          <div className="text-center text-gray-500 py-8">No data yet</div>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            Top Categories
          </h2>
          <div className="text-center text-gray-500 py-8">No data yet</div>
        </div>
      </div>
    </div>
  );
}
