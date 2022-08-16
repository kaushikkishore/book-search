import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHealth(): string {
    return 'Ok!';
  }

  getVersion(): string {
    return "1.0.0.0"
  }
}
