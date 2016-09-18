import { Ng2ol3Map } from '../models/@index';
export declare class Ng2ol3MapService {
    maps: Ng2ol3Map[];
    constructor();
    /**
     * Retrieves all the maps
     */
    getMaps(): Ng2ol3Map[];
    /**
     * Returns a map object from the maps array
     */
    getMapById(id: string): Ng2ol3Map;
    /**
     * Adds a new map to the maps array
     */
    addMap(map: Ng2ol3Map): void;
}
