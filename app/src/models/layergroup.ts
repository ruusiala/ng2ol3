import {Ng2ol3Layer} from './@index';

export class Ng2ol3LayerGroup {

    name: string;
    layers: Ng2ol3Layer[];

    constructor(options: any) {
        this.name = options.name;
        this.layers = [];
    }

    public getName(): string {
        return this.name;
    }

    public getLayers(): Ng2ol3Layer[] {
        return this.layers;
    }
}