import { Injectable } from '@nestjs/common';
import { UsersService } from './../users/users.service';
import { User } from '../users/entities/user.entity';
import * as bcrypt from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';
import { Inject } from '@nestjs/common';

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    @Inject(JwtService) private jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.userService.findOneByEmail(email);

    if (user && bcrypt.compareSync(password, user.password)) {
      const { password, email, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: User) {
    const payload = { email: user.email, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
