import { Module } from '@nestjs/common';
import { ItemsService } from './items.service';
import { ItemsController } from './items.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Items } from './models/items.model';

@Module({
    imports: [SequelizeModule.forFeature([Items])],
    controllers: [ItemsController],
    providers: [ItemsService],
})
export class ItemsModule {}
