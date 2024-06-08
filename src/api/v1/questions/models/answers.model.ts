import { ApiProperty } from '@nestjs/swagger';
import {
    BelongsTo,
    Column,
    DataType,
    Default,
    ForeignKey,
    HasOne,
    Model,
    PrimaryKey,
    Table,
} from 'sequelize-typescript';
import { DemoTest } from '../../demo-tests/models/demo-test.model';
import Helper from 'src/utils/helper';
import { ExampleValues } from 'src/enums/example-values.enum';
import { DataTypes } from 'sequelize';
import { IsBoolean, IsString } from 'class-validator';
import { DemoTestsQuestions } from './question.model';

@Table({ tableName: 'demo_tests_questions_answers', timestamps: false, underscored: true })
export class DemoTestsQuestionsAnswers extends Model<DemoTestsQuestionsAnswers> {
    @ApiProperty({ title: 'Идентификатор ответа', example: ExampleValues.UUID })
    @PrimaryKey
    @Column(DataType.STRING)
    id: string;

    @ApiProperty({ title: 'Идентификатор ', example: ExampleValues.UUID })
    @ForeignKey(() => DemoTestsQuestions)
    @Column(DataType.STRING)
    questionId: string;

    @BelongsTo(() => DemoTestsQuestions)
    question: DemoTestsQuestions;

    @ApiProperty({ title: 'Ответ на вопрос', example: ExampleValues.QUESTION_ANSWER })
    @Column(DataType.TEXT)
    text: string;

    @ApiProperty({ title: 'Флаг правильного ответа', example: true })
    @Column(DataType.BOOLEAN)
    isCorrect: boolean;
}
