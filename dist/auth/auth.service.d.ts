import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../common/prisma.service';
import { RegisterDto, LoginDto } from './dto';
export declare class AuthService {
    private readonly prisma;
    private readonly jwtService;
    constructor(prisma: PrismaService, jwtService: JwtService);
    register(dto: RegisterDto): Promise<{
        access_token: string;
        user: {
            id: string;
            email: string;
            nombre: string;
            rol: import(".prisma/client").$Enums.Rol;
        };
    }>;
    login(dto: LoginDto): Promise<{
        access_token: string;
        user: {
            id: string;
            email: string;
            nombre: string;
            rol: import(".prisma/client").$Enums.Rol;
        };
    }>;
    private generateToken;
    validateUser(userId: string): Promise<{
        email: string;
        nombre: string;
        id: string;
        rol: import(".prisma/client").$Enums.Rol;
    }>;
}
