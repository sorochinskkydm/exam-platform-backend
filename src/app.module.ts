import { Module } from '@nestjs/common';
import { SequelizeModule, SequelizeModuleOptions } from '@nestjs/sequelize';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { DemoTestsModule } from './api/v1/demo-tests/demo-tests.module';
import { ItemsModule } from './api/v1/items/items.module';
import { QuestionsModule } from './api/v1/questions/questions.module';

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
            envFilePath: ['.env', `.${process.env.NODE_ENV}.env`],
        }),
        SequelizeModule.forRootAsync({
            inject: [ConfigService],
            useFactory: (configService: ConfigService): SequelizeModuleOptions => ({
                dialect: 'postgres',
                host: configService.get<string>('DB_HOST'),
                port: configService.get<number>('DB_PORT'),
                username: configService.get<string>('DB_LOGIN'),
                password: configService.get<string>('DB_PASSWORD'),
                database: configService.get<string>('DB_NAME'),
                models: [__dirname + 'dist/**/*.model.js'],
                synchronize: false,
                autoLoadModels: true,
            }),
        }),
        ConfigModule,
        DemoTestsModule,
        ItemsModule,
        QuestionsModule,
    ],
    controllers: [],
    providers: [],
})
export class AppModule {}
