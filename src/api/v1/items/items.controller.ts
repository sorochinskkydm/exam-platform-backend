import { Body, Controller, Get, Post } from '@nestjs/common';
import { ItemsService } from './items.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateItemDto } from './dto/create-item.dto';

@ApiTags('Школьные предметы')
@Controller({
    path: 'items',
    version: '1',
})
@Controller('items')
export class ItemsController {
    constructor(private readonly itemsService: ItemsService) {}

    @ApiOperation({ summary: 'Создание школьного предмета' })
    @Post('')
    async create(@Body() dto: CreateItemDto) {
        return this.itemsService.create(dto);
    }

    @ApiOperation({ summary: 'Получение школьных предметов' })
    @Get('')
    async findAll() {
        return this.itemsService.findAll();
    }
}
