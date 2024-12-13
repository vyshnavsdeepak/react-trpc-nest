import { createTRPCReact } from '@trpc/react-query';
import type { AppRouter } from '@react-trpc-nest/shared';

export const trpc = createTRPCReact<AppRouter>();
