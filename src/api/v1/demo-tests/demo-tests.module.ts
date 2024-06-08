import { Module } from '@nestjs/common';
import { DemoTestsService } from './demo-tests.service';
import { DemoTestsController } from './demo-tests.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { DemoTest } from './models/demo-test.model';
import { Items } from '../items/models/items.model';
import { DemoTestsQuestions } from '../questions/models/question.model';

@Module({
    imports: [SequelizeModule.forFeature([DemoTest, Items, DemoTestsQuestions])],
    controllers: [DemoTestsController],
    providers: [DemoTestsService],
})
export class DemoTestsModule {}
