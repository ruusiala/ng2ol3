import { OnInit, EventEmitter } from '@angular/core';
export declare class Ng2ol3LayertreeDetailsComponent implements OnInit {
    element: any;
    hovered: boolean;
    detailsHeight: string;
    elementClicked: EventEmitter<{}>;
    items: any[];
    constructor();
    ngOnInit(): any;
    onClick(item: any): void;
}
