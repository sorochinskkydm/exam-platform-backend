import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Items } from './models/items.model';
import { CreateItemDto } from './dto/create-item.dto';
import Helper from 'src/utils/helper';

@Injectable()
export class ItemsService {
    constructor(
        @InjectModel(Items)
        private readonly itemsRepo: typeof Items,
    ) {}

    async create(dto: CreateItemDto) {
        const item = await this.itemsRepo.create({
            id: Helper.getUUIDV4(),
            ...dto,
        });

        return dto;
    }

    async findAll() {
        const items = await this.itemsRepo.findAll();

        return items;
    }
}
