import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersRepository } from './repositories/users.repository';
export declare class UsersService {
    private readonly repository;
    constructor(repository: UsersRepository);
    create(createUserDto: CreateUserDto): Promise<import("./entities/user.entity").UserEntity>;
    findUnique(email: string): Promise<import("./entities/user.entity").UserEntity>;
    findOne(id: number): Promise<import("./entities/user.entity").UserEntity>;
    update(id: number, updateUserDto: UpdateUserDto): Promise<import("./entities/user.entity").UserEntity>;
    remove(id: number): Promise<import("./entities/user.entity").UserEntity>;
}
