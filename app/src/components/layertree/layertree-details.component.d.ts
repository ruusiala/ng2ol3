import { OnInit, EventEmitter } from '@angular/core';
export declare class Ng2ol3LayertreeDetailsComponent implements OnInit {
    element: any;
    hovered: boolean;
    detailsHeight: string;
    elementClicked: EventEmitter<{}>;
    items: any[];
    bgOpacity: number;
    constructor();
    ngOnInit(): any;
    _calcRGBAColor(rgbArray: number[]): string;
    onClick(item: any): void;
}
