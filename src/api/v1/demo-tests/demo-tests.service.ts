import { Injectable } from '@nestjs/common';
import { CreateDemoTestDto } from './dto/create-demo-test.dto';
import { InjectModel } from '@nestjs/sequelize';
import { DemoTest } from './models/demo-test.model';
import { Items } from '../items/models/items.model';
import { EntityNotFoundException } from 'src/Errors/entity-not-found';
import { FindAllDemoTestsDto } from './dto/find-all-demo-tests.dto';
import { Op } from 'sequelize';
import Helper from 'src/utils/helper';
import { DemoTestsQuestions } from '../questions/models/question.model';
import { SimpleDemoTestDto } from './dto/simple-demo-test.dto';

@Injectable()
export class DemoTestsService {
    constructor(
        @InjectModel(DemoTest)
        private readonly demoTestRepo: typeof DemoTest,
    ) {}
    async create(dto: CreateDemoTestDto) {
        const demoTest = await this.demoTestRepo.create({
            id: Helper.getUUIDV4(),
            ...dto,
        });

        return demoTest;
    }

    async findAll(dto: FindAllDemoTestsDto) {
        const searchText = dto.search ? { [Op.iLike]: `%${dto.search}%` } : undefined;
        const demoTests = await this.demoTestRepo.findAll({
            where: {
                type: dto.type,
                itemId: dto.itemId,
                title: searchText,
            },
            include: [
                {
                    model: DemoTestsQuestions,
                    as: 'questions',
                },
            ],
            attributes: ['id', 'color', 'title', 'dateCreated'],
        });

        const simple = demoTests.map(
            (demoTest): SimpleDemoTestDto => ({
                id: demoTest.id,
                title: demoTest.title,
                color: demoTest.color,
                dateCreated: demoTest.dateCreated,
                questionsCount: demoTest.questions.length,
            }),
        );

        return simple;
    }

    async findOne(demoTestId: string) {
        const demoTest = await this.demoTestRepo.findByPk(demoTestId, {
            include: [
                {
                    model: Items,
                    as: 'item',
                },
            ],
        });

        if (!demoTest) {
            throw new EntityNotFoundException('demoTest', demoTestId);
        }

        return demoTest;
    }
}
