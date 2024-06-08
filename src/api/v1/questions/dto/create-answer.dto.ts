import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNumber, IsString } from 'class-validator';
import { ExampleValues } from 'src/enums/example-values.enum';

export class CreateAnswerDto {
    @ApiProperty({ title: 'Идентификатор вопроса', example: ExampleValues.UUID })
    @IsString()
    questionId: string;

    @ApiProperty({ title: 'Ответ на вопрос', example: ExampleValues.QUESTION_ANSWER })
    @IsString()
    text: string;

    @ApiProperty({ title: 'Флаг правильного ответа', example: true })
    @IsBoolean()
    isCorrect: boolean;
}
