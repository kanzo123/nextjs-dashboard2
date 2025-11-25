export default function Page() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Reports</h1>
      <p className="text-gray-600 mb-6">
        Here you can view analytics and performance summaries.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Card 1 */}
        <div className="bg-white shadow rounded-lg p-4 hover:shadow-md transition">
          <h2 className="text-xl font-semibold text-indigo-600 mb-2">Sales Report</h2>
          <p className="text-gray-500">Monthly sales trends and revenue breakdown.</p>
        </div>

        {/* Card 2 */}
        <div className="bg-white shadow rounded-lg p-4 hover:shadow-md transition">
          <h2 className="text-xl font-semibold text-green-600 mb-2">Customer Insights</h2>
          <p className="text-gray-500">Engagement metrics and retention analysis.</p>
        </div>
      </div>
    </div>
  );

};