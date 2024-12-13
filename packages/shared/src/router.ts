import { initTRPC } from '@trpc/server';
import { dashboardStatsSchema, userSchema } from './types';

export const t = initTRPC.create();

export const router = t.router;
export const publicProcedure = t.procedure;

export const appRouter = router({
  getUsers: publicProcedure.query(async () => {
    // Mock data for demonstration
    return [
      {
        id: '1',
        name: 'John Doe',
        email: 'john@example.com',
        role: 'admin',
      },
      {
        id: '2',
        name: 'Jane Smith',
        email: 'jane@example.com',
        role: 'user',
      },
    ] as const;
  }),

  getDashboardStats: publicProcedure.query(async () => {
    // Mock data for demonstration
    return {
      totalUsers: 1250,
      activeUsers: 850,
      revenue: 52400,
      growth: 12.5,
    } as const;
  }),

  createUser: publicProcedure
    .input(userSchema)
    .mutation(async ({ input }) => {
      // Mock implementation
      return {
        ...input,
        id: Math.random().toString(36).substring(7),
      };
    }),
});

export type AppRouter = typeof appRouter;
