import { CreateUserDto } from './dto/create-user.dto';
import { Injectable } from '@nestjs/common';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  private users: User[] = [
    { id: 1, name: 'John' },
    { id: 2, name: 'John' },
    { id: 2, name: 'Ram' },
  ];

  findAll(name?: string): User[] {
    if (name) {
      return this.users.filter(
        (user) => user.name.toLowerCase() === name.toLowerCase(),
      );
    }
    return this.users;
  }

  findById(id: number): User {
    return this.users.find((user) => user.id === id);
  }

  createUser(user: CreateUserDto): User {
    const newUser = { id: Date.now(), ...user };
    this.users.push(newUser);
    return newUser;
  }
}
