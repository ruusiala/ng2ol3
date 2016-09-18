import { Injectable } from '@angular/core';
import { Ng2ol3Map } from '../models/@index';

@Injectable()
export class Ng2ol3MapService {
    maps: Ng2ol3Map[];

    constructor() {
        this.maps = [];
    }

    /**
     * Retrieves all the maps
     */
    getMaps(): Ng2ol3Map[] {
        return this.maps;
    }

    /**
     * Returns a map object from the maps array
     */
    getMapById(id: string): Ng2ol3Map {
        let map: Ng2ol3Map = null;
        for (let i = 0; i < this.maps.length; i++) {
            if (this.maps[i].getTarget() === id) {
                map = this.maps[i];
                break;
            }
        }
        return map;
    }

    /**
     * Adds a new map to the maps array
     */
    addMap(map: Ng2ol3Map): void {
        this.maps.push(map);
    }
    
}