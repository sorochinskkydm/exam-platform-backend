import { ApiProperty } from '@nestjs/swagger';
import {
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

@Table({ tableName: 'items', timestamps: false, underscored: true })
export class Items extends Model<Items> {
    @ApiProperty({ title: 'Идентификатор предмета', example: ExampleValues.UUID })
    @PrimaryKey
    @Column(DataType.STRING)
    id: string;

    @ApiProperty({ title: 'Название школьного предмета', example: 'Математика' })
    @Column(DataType.STRING)
    title: string;

    @HasOne(() => DemoTest)
    demoTest: DemoTest;
}
