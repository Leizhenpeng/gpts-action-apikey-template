import {
    CanActivate,
    ExecutionContext,
    HttpException,
    HttpStatus,
    Injectable,
} from '@nestjs/common';
import {Observable} from 'rxjs';
import {ConfigService} from '@nestjs/config';

@Injectable()
export class AuthGuard implements CanActivate {
    private apiKey: string;
    constructor(private configService: ConfigService) {
        this.apiKey = this.configService.get<string>('API_KEY') || '';
    }

    canActivate(
        context: ExecutionContext,
    ): boolean | Promise<boolean> | Observable<boolean> {
        const request = context.switchToHttp().getRequest();
        const authHeader = request.headers.authorization;

        if (authHeader && authHeader === `Bearer ${ this.apiKey }`) {
            return true;
        } else {
            throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
        }
    }
}
