import { z } from 'zod';

export const userSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string().email(),
  role: z.enum(['admin', 'user']),
});

export const dashboardStatsSchema = z.object({
  totalUsers: z.number(),
  activeUsers: z.number(),
  revenue: z.number(),
  growth: z.number(),
});

export type User = z.infer<typeof userSchema>;
export type DashboardStats = z.infer<typeof dashboardStatsSchema>;
