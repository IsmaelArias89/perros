import { ApiErrorDto } from './api.error.dto';
export declare const ApiErrors: {
    API_IN_MAINTENANCE: {
        code: number;
        message: string;
    };
    UNKNOWN_API_ERROR: IDomainError;
    UNAUTHORIZED_API_ERROR: IDomainError;
    INVALID_INPUT: IDomainError;
    UNKNOWN_RESPONSE_ERROR: IDomainError;
    ROUTE_NOT_FOUND: IDomainError;
    BAD_GATEWAY: IDomainError;
    FORBIDDEN_API_ERROR: IDomainError;
};
export declare const DomainErrors: {
    API_IN_MAINTENANCE: {
        code: number;
        message: string;
    };
    UNKNOWN_API_ERROR: IDomainError;
    UNAUTHORIZED_API_ERROR: IDomainError;
    INVALID_INPUT: IDomainError;
    UNKNOWN_RESPONSE_ERROR: IDomainError;
    ROUTE_NOT_FOUND: IDomainError;
    BAD_GATEWAY: IDomainError;
    FORBIDDEN_API_ERROR: IDomainError;
};
export interface IDomainError {
    code: number;
    message: string;
    extraInfo?: object;
}
export declare class DomainError extends Error {
    private readonly error;
    constructor(error: IDomainError);
    toApiError(): ApiErrorDto;
    static getError(errorCode: any): IDomainError;
}
