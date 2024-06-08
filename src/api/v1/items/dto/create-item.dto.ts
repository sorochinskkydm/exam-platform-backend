import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';
import { ExampleValues } from 'src/enums/example-values.enum';

export class CreateItemDto {
    @ApiProperty({ title: 'Название школьного предмета', example: ExampleValues.ITEM_NAME })
    @IsString()
    title: string;
}
