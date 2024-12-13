import { INestApplication, Injectable } from '@nestjs/common';
import * as trpcExpress from '@trpc/server/adapters/express';
import { appRouter } from '@react-trpc-nest/shared';

@Injectable()
export class TrpcRouter {
  constructor() {}

  async applyMiddleware(app: INestApplication) {
    app.use(
      '/trpc',
      trpcExpress.createExpressMiddleware({
        router: appRouter,
      })
    );
  }
}
