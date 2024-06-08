import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { QuestionsService } from './questions.service';
import { CreateQuestionDto } from './dto/create-question.dto';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { DemoTestsQuestions } from './models/question.model';

@ApiTags('Вопросы')
@Controller({
    path: 'questions',
    version: '1',
})
export class QuestionsController {
    constructor(private readonly questionsService: QuestionsService) {}

    @ApiOperation({ summary: 'Создание вопроса для демо-тестирование' })
    @ApiOkResponse({ type: DemoTestsQuestions })
    @Post()
    create(@Body() dto: CreateQuestionDto) {
        return this.questionsService.create(dto);
    }

    @ApiOperation({ summary: 'Получение вопросов для демо-тестирования' })
    @ApiOkResponse({ type: DemoTestsQuestions })
    @Get(':demoTestId')
    findAll(@Param('demoTestId') demoTestId: string) {
        return this.questionsService.findAll(demoTestId);
    }
}
