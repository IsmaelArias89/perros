import { TestingModule } from '@nestjs/testing';
import { INestApplication, NestModule, MiddlewareConsumer } from '@nestjs/common';
interface ITestsAppModule {
    mulesoftClientToUse?: any;
    gigyaClientToUse?: any;
    ipaaSClientToUse?: any;
}
export declare class TestModule implements NestModule {
    configure(consumer: MiddlewareConsumer): void;
}
export declare const testsAppModule: ({}?: ITestsAppModule) => Promise<[
    INestApplication,
    TestingModule
]>;
export {};
