import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  private user = 'admin';

  authenticate(username: string): boolean {
    return this.user === username;
  }
}
