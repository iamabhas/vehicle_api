import {
  Injectable,
  CanActivate,
  ExecutionContext,
  UnauthorizedException,
} from '@nestjs/common';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService) {}

  canActivate(context: ExecutionContext): boolean {
    if (!this.authService.isAdminLoggedIn()) {
      throw new UnauthorizedException('Admin not logged in!');
    }
    return true;
  }
}
