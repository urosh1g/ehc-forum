import { UsersService } from '@ehc/api/users';
import { User } from '@ehc/common/entities';
import { Inject, Injectable, forwardRef } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    @Inject(forwardRef(() => UsersService))
    private usersService: UsersService,
    private jwtService: JwtService
  ) {}

  async validateUser(alias: string, password: string): Promise<User | null> {
    try {
      const user = await this.usersService.fetchByAlias(alias);
      if (user.password == password) {
        return user;
      }
      return null;
    } catch (err: any) {
      throw err;
    }
  }

  async login(user: User) {
    const payload = { sub: user.id, alias: user.alias };
    const owner = await this.usersService.fetchById(user.id);
    return { access_token: this.jwtService.sign(payload), user: owner };
  }
}
