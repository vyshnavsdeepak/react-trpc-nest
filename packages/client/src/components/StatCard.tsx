interface StatCardProps {
  title: string;
  value: string | number;
  icon: string;
  trend?: {
    value: number;
    label: string;
  };
}

export function StatCard({ title, value, icon, trend }: StatCardProps) {
  return (
    <div className="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6">
      <div className="flex items-center">
        <div className="flex-shrink-0">
          <span className="text-2xl">{icon}</span>
        </div>
        <div className="ml-5 w-0 flex-1">
          <dl>
            <dt className="text-sm font-medium text-gray-500 truncate">{title}</dt>
            <dd className="flex items-baseline">
              <div className="text-2xl font-semibold text-gray-900">{value}</div>
              {trend && (
                <div className={`ml-2 flex items-baseline text-sm font-semibold ${
                  trend.value >= 0 ? 'text-green-600' : 'text-red-600'
                }`}>
                  {trend.value >= 0 ? '↗' : '↘'}
                  {Math.abs(trend.value)}%
                </div>
              )}
            </dd>
          </dl>
        </div>
      </div>
    </div>
  );
}
