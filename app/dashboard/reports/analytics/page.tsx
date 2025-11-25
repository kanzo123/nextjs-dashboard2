export default function AnalyticsPage() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Analytics</h1>
      <p className="text-gray-600 mb-6">
        Detailed insights and performance metrics for your reports.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Card 1 */}
        <div className="bg-white shadow rounded-lg p-4 hover:shadow-md transition">
          <h2 className="text-xl font-semibold text-indigo-600 mb-2">Traffic Overview</h2>
          <p className="text-gray-500">Track visits and user activity trends.</p>
        </div>

        {/* Card 2 */}
        <div className="bg-white shadow rounded-lg p-4 hover:shadow-md transition">
          <h2 className="text-xl font-semibold text-green-600 mb-2">Conversion Rates</h2>
          <p className="text-gray-500">Monitor how leads turn into customers.</p>
        </div>

        {/* Card 3 */}
        <div className="bg-white shadow rounded-lg p-4 hover:shadow-md transition">
          <h2 className="text-xl font-semibold text-purple-600 mb-2">Revenue Growth</h2>
          <p className="text-gray-500">Analyze monthly and yearly revenue changes.</p>
        </div>

        {/* Card 4 */}
        <div className="bg-white shadow rounded-lg p-4 hover:shadow-md transition">
          <h2 className="text-xl font-semibold text-red-600 mb-2">Error Logs</h2>
          <p className="text-gray-500">Identify issues impacting performance.</p>
        </div>
      </div>
    </div>
  );
}