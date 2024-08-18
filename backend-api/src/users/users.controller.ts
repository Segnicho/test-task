import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './user.model';

@Controller('api/v1')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('add-user')
  async addUser(@Body() user: User): Promise<User> {
    const newUser = await this.usersService.create(user);
    console.log(newUser);
    return newUser;
  }

  @Get('get-user/:id')
  async getUser(@Param('id') id: string): Promise<User> {
    return this.usersService.findOne(id);
  }
}
