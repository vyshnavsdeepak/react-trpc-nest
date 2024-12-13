import { trpc } from '../utils/trpc';
import { StatCard } from '../components/StatCard';

export function Dashboard() {
  const { data: stats, isLoading } = trpc.getDashboardStats.useQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!stats) {
    return <div>Error loading dashboard stats</div>;
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
      
      <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Total Users"
          value={stats.totalUsers.toLocaleString()}
          icon="👥"
        />
        <StatCard
          title="Active Users"
          value={stats.activeUsers.toLocaleString()}
          icon="✨"
          trend={{
            value: (stats.activeUsers / stats.totalUsers) * 100,
            label: 'Active rate',
          }}
        />
        <StatCard
          title="Revenue"
          value={`$${stats.revenue.toLocaleString()}`}
          icon="💰"
        />
        <StatCard
          title="Growth"
          value={`${stats.growth}%`}
          icon="📈"
          trend={{
            value: stats.growth,
            label: 'vs last month',
          }}
        />
      </div>
    </div>
  );
}
