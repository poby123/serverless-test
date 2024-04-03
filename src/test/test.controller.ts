import { Controller, Get } from '@nestjs/common';

@Controller('test')
export class TestController {
  @Get('2')
  public async test2() {
    return 'This is test2 message';
  }

  @Get()
  public async test() {
    return 'This is test message';
  }
}
