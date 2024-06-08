import { HttpException, HttpStatus, Type } from '@nestjs/common';

export class EntityNotFoundException extends HttpException {
    messages;

    constructor(entity: Type | string, fieldValue: any, field = 'id') {
        const entityName = typeof entity === 'string' ? entity : entity.name;
        const response = `${entityName} with ${field} = '${fieldValue}' not found`;
        super(response, HttpStatus.UNPROCESSABLE_ENTITY);
        this.messages = response;
    }
}
