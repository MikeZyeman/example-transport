import { Controller, Get, Query } from '@nestjs/common';
import { ConnectionsService } from './connections.service';


@Controller('connections')
export class ConnectionsController {

  constructor(private conService: ConnectionsService) {
  }


  @Get('')
  async getConnectionFromAndTo(@Query('from') from: string, @Query('to') to: string) {

    console.log(from, to);

    const result = await this.conService.getConnections(from, to)

    return result;

  }
}
