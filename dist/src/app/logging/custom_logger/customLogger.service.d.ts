import { Logger } from '@nestjs/common';
export declare class CustomLogger extends Logger {
    constructor(context?: string);
    log(message: string, context?: string): void;
    warn(message: string, context?: string): void;
    error(message: string, trace: string, context?: string): void;
    debug(message: string, context?: string): void;
    private static getRequestId;
    private static getContextTrace;
}
