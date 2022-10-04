import { ValidationPipe } from '@nestjs/common';
export declare const VALIDATION_PIPE_OPTIONS: {
    transform: boolean;
    validationError: {
        target: boolean;
    };
    exceptionFactory: (errors: any) => never;
};
export declare const validationPipe: ValidationPipe;
