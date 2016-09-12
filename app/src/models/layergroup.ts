import {Ng2ol3Layer} from './@index';

export class Ng2ol3LayerGroup {

    name: string;
    children: any[];

    constructor(options: any) {
        this.name = options.name;
        this.children = [];
    }

    public getName(): string {
        return this.name;
    }

    public getChildren(): any[] {
        return this.children;
    }
}