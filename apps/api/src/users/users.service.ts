import { Injectable } from '@nestjs/common';
import { UpdateUserDto } from './dto/update-user.dto.js';
import { PrismaService } from '../prisma/prisma.service.js';

@Injectable()
export class UsersService {
  constructor( private prisma: PrismaService) {}

  findOne(id: number) {
    let user = this.prisma.users.findUnique({
      where: { id: id },
      select: { id: true, name: true, nickname: true, email: true, photo: true, bio: true },
    });
    return user;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }
}
