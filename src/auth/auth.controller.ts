import { Body, Controller, Post, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  login(@Body('username') username: string): any {
    const isAuthenticated = this.authService.authenticate(username);
    if (isAuthenticated) {
      return { message: `User ${username} authenticated ! ` };
    } else {
      throw new UnauthorizedException('Authentication failed');
    }
  }

  @Post('logout')
  logout(): any {
    this.authService.logout();
    return { message: 'User Logged out !' };
  }
}
