export declare class ContextService {
    static KEYS: {
        REQUEST_ID: string;
        REQUEST_IP: string;
    };
    static middleware(req: any, _res: any, next: any): void;
    static set(key: string, value: any): void;
    static get(key: string): any;
}
