import { Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Request } from 'express';
import { LocalAuthGuard } from './local-auth.guard';
import { User } from '@ehc/common/entities';
import { Public } from './public.guard';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Public()
  @Post('login')
  async login(@Req() req: Request) {
    return this.authService.login((req.user!) as User);
  }

  @Get('test')
  async test(@Req() req: Request) {
    return req.user;
  }
}
