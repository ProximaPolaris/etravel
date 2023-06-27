import { Controller, Get, Post, UseGuards, Request } from '@nestjs/common';
import { AppService } from './app.service';
import { LocalAuthGuard } from './api/auth/local-auth.guard';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { AuthenticatedGuard } from './api/auth/authenticated.guard';
import { AuthService } from './api/auth/auth.service';
import { JwtAuthGuard } from './api/auth/jwt-auth.guard';

@ApiTags('auth')
@Controller()
export class AppController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(JwtAuthGuard)
  @Get('protected')
  getHello(@Request() req): string {
    return req.user;
  }

  @ApiOperation({ summary: 'Login' })
  @UseGuards(LocalAuthGuard)
  @Post('login')
  login(@Request() req): any {
    return this.authService.login(req.user);
  }
}
