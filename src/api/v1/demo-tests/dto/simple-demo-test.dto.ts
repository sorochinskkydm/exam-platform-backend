import { ApiProperty } from '@nestjs/swagger';
import { DemoTest } from '../models/demo-test.model';
import { IsNumber } from 'class-validator';

export class SimpleDemoTestDto {
    @ApiProperty({ title: 'Идентификатор теста' })
    id: string;

    @ApiProperty({ title: 'Название теста' })
    title: string;

    @ApiProperty({ title: 'Цвет теста (hex)', example: '#FFFFFF' })
    color: string;

    @ApiProperty({ title: 'Дата создания теста' })
    dateCreated: Date;

    @ApiProperty({ title: 'Количество вопросов в демо-тестировании', example: 30 })
    @IsNumber()
    questionsCount: number;
}
