import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Waldorf Parents Service API up and running!';
  }
}
