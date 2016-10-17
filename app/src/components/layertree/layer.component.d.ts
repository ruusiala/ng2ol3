import { OnInit } from '@angular/core';
import { Ng2ol3Layer } from '../../models/@index';
export declare class Ng2ol3LayerComponent implements OnInit {
    layer: Ng2ol3Layer;
    fontIcon: string;
    detailsVisible: boolean;
    detailsHeight: string;
    constructor();
    ngOnInit(): any;
    toggleVisibility(): any;
    showDetails(): void;
    hideDetails(): void;
    onDetailsElementClicked(obj: any): void;
}
