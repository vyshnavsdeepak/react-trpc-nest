import { Module } from '@nestjs/common';
import { TrpcRouter } from './trpc/trpc.router';

@Module({
  imports: [],
  controllers: [],
  providers: [TrpcRouter],
})
export class AppModule {}
