import { Injectable } from '@nestjs/common';

@Injectable()
export class UtilityService {
  getServerThaiDate: any;
  getServerDate(): string {
    return new Date().toLocaleDateString();
  }
}
