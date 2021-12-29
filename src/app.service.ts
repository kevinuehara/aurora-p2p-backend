import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  healthCheck(): string {
    const timeElapsed = Date.now();
    const today = new Date(timeElapsed);
    return today.toISOString();
  }
}
