import {
  Injectable,
  CanActivate,
  ExecutionContext,
  UnauthorizedException,
} from '@nestjs/common';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    const user = request.headers['auth-user'];
    if (!user) {
      throw new UnauthorizedException('No user available !');
    }

    const isAuthenticated = user === 'admin';
    if (!isAuthenticated) {
      throw new UnauthorizedException('User not authenticated !');
    }

    return isAuthenticated;
  }
}
