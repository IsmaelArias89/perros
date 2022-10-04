import { ArgumentsHost } from '@nestjs/common';
import { BaseExceptionFilter } from '@nestjs/core';
export declare class ErrorFilter extends BaseExceptionFilter {
    private stringify;
    private readonly logger;
    catch(exception: any, host: ArgumentsHost): void;
    private httpStatuscodeToApiError;
    private ApiErrorcodeToHttpStatus;
}
