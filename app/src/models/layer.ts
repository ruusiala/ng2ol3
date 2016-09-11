import {Ng2ol3LayerGroup} from './@index';

export class Ng2ol3Layer {

    name: string;
    layer: any;

    constructor(options: any) {
        this.name = options.name;
        this.layer = options.layer;
    }

    public getName(): string {
        return this.name;
    }

    public getLayer(): any {
        return this.layer;
    }
}