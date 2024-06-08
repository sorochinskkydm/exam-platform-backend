import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
    HttpStatus,
    Query,
} from '@nestjs/common';
import { DemoTestsService } from './demo-tests.service';
import { CreateDemoTestDto } from './dto/create-demo-test.dto';
import { ApiOkResponse, ApiOperation, ApiProperty, ApiTags } from '@nestjs/swagger';
import { DemoTest } from './models/demo-test.model';
import { FindAllDemoTestsDto } from './dto/find-all-demo-tests.dto';

@ApiTags('Демо-тесты')
@Controller({
    path: 'tests',
    version: '1',
})
@Controller('demo-tests')
export class DemoTestsController {
    constructor(private readonly demoTestsService: DemoTestsService) {}

    @ApiOperation({ summary: 'Создание демо-тестирования' })
    @ApiOkResponse({ status: HttpStatus.OK, type: DemoTest })
    @Post()
    create(@Body() createDemoTestDto: CreateDemoTestDto) {
        return this.demoTestsService.create(createDemoTestDto);
    }

    @ApiOperation({ summary: 'Получение демо-тестирований' })
    @ApiOkResponse({ status: HttpStatus.OK, type: DemoTest })
    @Get()
    findAll(@Query() dto: FindAllDemoTestsDto) {
        return this.demoTestsService.findAll(dto);
    }

    @ApiOperation({ summary: 'Получить демо-тестирование по его идентификатору' })
    @ApiOkResponse({ status: HttpStatus.OK, type: DemoTest })
    @Get(':demoTestId')
    findOne(@Param('demoTestId') demoTestId: string) {
        return this.demoTestsService.findOne(demoTestId);
    }
}
