import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';
import { ExampleValues } from 'src/enums/example-values.enum';

export class CreateDemoTestDto {
    @ApiProperty({ title: 'Название теста', example: ExampleValues.TEST_NAME })
    @IsString()
    title: string;

    @ApiProperty({ title: 'Описание теста', example: ExampleValues.TEST_DESCRIPTION })
    @IsString()
    description: string;

    @ApiProperty({ title: 'Инструкция для теста', example: 'Инструкция' })
    @IsString()
    instruction: string;

    @ApiProperty({ title: 'Время на прохождение теста (в минутах)', example: 120 })
    @IsNumber()
    timeToComplete: number;

    @ApiProperty({ title: 'Тип теста', example: ExampleValues.TEST_TYPE })
    @IsString()
    type: string;

    @ApiProperty({ title: 'Цвет теста (hex)', example: '#FFFFFF' })
    @IsString()
    color: string;

    @ApiProperty({
        title: 'Идентификатор предмета, к которому относится тест',
        example: ExampleValues.UUID,
    })
    @IsString()
    itemId: string;
}
