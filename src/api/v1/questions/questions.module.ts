import { Module } from '@nestjs/common';
import { QuestionsService } from './questions.service';
import { QuestionsController } from './questions.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { DemoTestsQuestionsAnswers } from './models/answers.model';
import { DemoTestsQuestions } from './models/question.model';
import { DemoTest } from '../demo-tests/models/demo-test.model';

@Module({
    imports: [
        SequelizeModule.forFeature([DemoTest, DemoTestsQuestions, DemoTestsQuestionsAnswers]),
    ],
    controllers: [QuestionsController],
    providers: [QuestionsService],
})
export class QuestionsModule {}
