import { HttpModule, Module } from '@nestjs/common';
import { ConnectionsController } from './connections.controller';
import { ConnectionsService } from './connections.service';


@Module({
  imports: [HttpModule],
  controllers: [ConnectionsController],
  providers: [ConnectionsService]
})
export class ConnectionsModule {}
