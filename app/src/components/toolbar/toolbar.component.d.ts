import { OnInit, EventEmitter } from '@angular/core';
export declare class Ng2ol3ToolbarComponent implements OnInit {
    options: any;
    elementActivated: EventEmitter<{}>;
    myColor: string;
    elements: any[];
    constructor();
    ngOnInit(): any;
    activateElement(element: any): any;
}
