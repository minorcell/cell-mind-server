import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello() {
    return {
      message: '连接成功',
      time: new Date().toLocaleString(),
    }
  }
}
