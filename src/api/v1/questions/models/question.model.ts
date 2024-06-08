import { ApiProperty } from '@nestjs/swagger';
import {
    BelongsTo,
    Column,
    DataType,
    Default,
    ForeignKey,
    HasMany,
    HasOne,
    Model,
    PrimaryKey,
    Table,
} from 'sequelize-typescript';
import { DemoTest } from '../../demo-tests/models/demo-test.model';
import Helper from 'src/utils/helper';
import { ExampleValues } from 'src/enums/example-values.enum';
import { DataTypes } from 'sequelize';
import { IsString } from 'class-validator';
import { DemoTestsQuestionsAnswers } from './answers.model';

@Table({ tableName: 'demo_tests_questions', timestamps: false, underscored: true })
export class DemoTestsQuestions extends Model<DemoTestsQuestions> {
    @ApiProperty({ title: 'Идентификатор вопроса', example: ExampleValues.UUID })
    @PrimaryKey
    @Column(DataType.STRING)
    id: string;

    @ApiProperty({ title: 'Идентификатор демо-тестирования', example: ExampleValues.UUID })
    @ForeignKey(() => DemoTest)
    @Column(DataType.STRING)
    demoTestId: string;

    @BelongsTo(() => DemoTest)
    demoTest: DemoTest;

    @ApiProperty({ title: 'Тело вопроса', example: ExampleValues.QUESTION })
    @Column(DataType.TEXT)
    question: string;

    @ApiProperty({ title: 'Порядковый номер вопроса', example: 1 })
    @Column(DataType.INTEGER)
    order: number;

    @HasMany(() => DemoTestsQuestionsAnswers)
    answers: DemoTestsQuestionsAnswers[];
}
