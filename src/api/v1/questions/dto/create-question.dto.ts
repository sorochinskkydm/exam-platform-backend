import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';
import { ExampleValues } from 'src/enums/example-values.enum';

export class CreateQuestionDto {
    @ApiProperty({ title: 'Идентификатор демо-тестирования', example: ExampleValues.UUID })
    @IsString()
    demoTestId: string;

    @ApiProperty({ title: 'Тело вопроса', example: ExampleValues.QUESTION })
    @IsString()
    question: string;

    @ApiProperty({ title: 'Порядковый номер вопроса', example: 1 })
    @IsNumber()
    order: number;
}
