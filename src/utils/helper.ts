import { v4 as uuidv4 } from 'uuid';

export default class Helper {
    static getCurrentDateInMS(): bigint {
        return BigInt(new Date().getTime());
    }

    public static getUUIDV4(): string {
        return uuidv4();
    }
}
