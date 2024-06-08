import { ApiProperty } from '@nestjs/swagger';
import {
    BelongsTo,
    Column,
    DataType,
    Default,
    ForeignKey,
    HasMany,
    Model,
    PrimaryKey,
    Table,
} from 'sequelize-typescript';
import { Items } from '../../items/models/items.model';
import Helper from 'src/utils/helper';
import { ExampleValues } from 'src/enums/example-values.enum';
import { DemoTestsQuestions } from '../../questions/models/question.model';

@Table({ tableName: 'demo_tests', timestamps: false, underscored: true })
export class DemoTest extends Model<DemoTest> {
    @ApiProperty({ title: 'Идентификатор теста', example: ExampleValues.UUID })
    @PrimaryKey
    @Column(DataType.STRING)
    id: string;

    @ApiProperty({ title: 'Название теста', example: ExampleValues.TEST_NAME })
    @Column(DataType.STRING)
    title: string;

    @ApiProperty({ title: 'Описание теста', example: ExampleValues.TEST_DESCRIPTION })
    @Column(DataType.STRING)
    description: string;

    @ApiProperty({ title: 'Инструкция для теста', example: 'Инструкция' })
    @Column(DataType.STRING)
    instruction: string;

    @ApiProperty({ title: 'Время на прохождение теста (в минутах)', example: 120 })
    @Column(DataType.INTEGER)
    timeToComplete: number;

    @ApiProperty({ title: 'Тип теста', example: ExampleValues.TEST_TYPE })
    @Column(DataType.STRING)
    type: string;

    @ApiProperty({ title: 'Цвет теста (hex)', example: '#FFFFFF' })
    @Column(DataType.STRING)
    color: string;

    @ApiProperty({
        title: 'Идентификатор предмета, к которому относится тест',
        example: ExampleValues.UUID,
    })
    @Column(DataType.STRING)
    @ForeignKey(() => Items)
    itemId: string;

    @BelongsTo(() => Items)
    item: Items;

    @ApiProperty({ title: 'Дата создания теста' })
    @Default(new Date())
    @Column(DataType.DATE)
    dateCreated: Date;

    @HasMany(() => DemoTestsQuestions)
    questions: DemoTestsQuestions[];
}
