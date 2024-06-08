import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsOptional, IsString } from 'class-validator';
import { ExampleValues } from 'src/enums/example-values.enum';

export class FindAllDemoTestsDto {
    @ApiProperty({ title: 'Тип теста', example: ExampleValues.TEST_TYPE })
    @IsString()
    type: string;

    @ApiProperty({
        title: 'Идентификатор предмета, к которому относится тест',
        example: ExampleValues.UUID,
    })
    @IsString()
    @IsOptional()
    itemId?: string;

    @ApiProperty({
        title: 'Поиск по названию',
        example: 'ОГЭ. География...',
    })
    @IsString()
    @IsOptional()
    search?: string;
}
