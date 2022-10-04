import { NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
export declare class LoggingInterceptor implements NestInterceptor {
    private stringify;
    intercept(context: ExecutionContext, next: CallHandler): Observable<any>;
}
