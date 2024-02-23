import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  private isLoggedIn: boolean = false;

  authenticate(username: string): boolean {
    if (username === 'admin') {
      this.isLoggedIn = true;
      return true;
    }
    return false;
  }

  logout(): void {
    this.isLoggedIn = false;
  }

  isAdminLoggedIn(): boolean {
    return this.isLoggedIn;
  }
}
