import { Injectable } from '@nestjs/common';
import { CreateQuestionDto } from './dto/create-question.dto';
import { InjectModel } from '@nestjs/sequelize';
import { DemoTestsQuestions } from './models/question.model';
import Helper from 'src/utils/helper';
import { DemoTest } from '../demo-tests/models/demo-test.model';
import { EntityNotFoundException } from 'src/Errors/entity-not-found';

@Injectable()
export class QuestionsService {
    constructor(
        @InjectModel(DemoTestsQuestions)
        private readonly questionsRepo: typeof DemoTestsQuestions,
        @InjectModel(DemoTest)
        private readonly demoTestRepo: typeof DemoTest,
    ) {}
    async create(dto: CreateQuestionDto) {
        const question = await this.questionsRepo.create({
            id: Helper.getUUIDV4(),
            ...dto,
        });

        return question;
    }

    async findAll(demoTestId: string) {
        const demoTest = await this.demoTestRepo.findByPk(demoTestId);

        if (!demoTest) {
            throw new EntityNotFoundException('demoTest', demoTestId);
        }

        const questions = await this.questionsRepo.findAll({
            where: {
                demoTestId,
            },
        });

        return questions;
    }
}
