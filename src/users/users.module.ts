import { Module } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { EmailModule } from '../email/email.module';
import { EmailService } from '../email/email.service';

@Module({
  imports: [EmailModule],
  controllers: [UsersController],
  providers: [UsersService, PrismaService, EmailService],
})
export class UsersModule {}
