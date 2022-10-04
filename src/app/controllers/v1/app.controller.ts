import { Get, HttpStatus, Logger } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { ApiController, Log } from '../../decorators';
import { CustomLogger } from '../../logging';
import { SUCCESSFUL_RESPONSE } from '../constants';

@Log()
@ApiController()
@ApiTags('App')
export class AppController {
  private readonly logger: Logger = new CustomLogger(AppController.name);

  @Get('health')
  @ApiOperation({ summary: 'Lets you test the health of an API instance.' })
  @ApiOkResponse({
    description: SUCCESSFUL_RESPONSE,
    status: HttpStatus.OK,
  })
  async isHealth(): Promise<void> {
    this.logger.log('Status OK');
  }
}
