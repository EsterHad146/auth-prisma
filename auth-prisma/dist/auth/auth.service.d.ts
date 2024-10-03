import { UsersService } from '../users/users.service';
import { Prisma } from '@prisma/client';
import { UserEntity } from '@/users/entities/user.entity';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private usersService;
    private readonly jwtService;
    constructor(usersService: UsersService, jwtService: JwtService);
    signin(body: Prisma.UserCreateInput): Promise<Omit<UserEntity, 'senha'> & Partial<{
        token: string;
    }> | any>;
}
