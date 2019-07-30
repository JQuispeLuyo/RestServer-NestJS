import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Jose Quispe :D... deploy CropApi';
  }
}
