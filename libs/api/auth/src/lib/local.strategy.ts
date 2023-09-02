import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { User } from '@ehc/common/entities';

@Injectable()
class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({ usernameField: 'alias' });
  }

  async validate(alias: string, password: string): Promise<User> {
    const user = await this.authService.validateUser(alias, password);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}

export { LocalStrategy };
