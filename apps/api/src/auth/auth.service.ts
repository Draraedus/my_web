import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';
import { PasswordHasher } from '@nestjs/authentication';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService, private passwordHasher: PasswordHasher) {}

  async validateUser(email: string, pass: string): Promise<any> {
    const user = await this.prisma.users.findUnique({
      where: { email: email },
    });
    if (user && user.password_hash) {
      let isPasswordValid = await this.checkPassword(pass, user.password_hash);
      if (isPasswordValid) {
        const { password_hash, ...result } = user;
        return result;
      }
    }
    return null;
  }

  async checkPassword(password: string, hashedPassword: string): Promise<boolean> {
    return this.passwordHasher.verify(password, hashedPassword);
  }
}
