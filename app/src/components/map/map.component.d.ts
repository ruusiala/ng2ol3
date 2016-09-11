import { OnInit, EventEmitter, AfterViewInit } from '@angular/core';
import { Ng2ol3Map } from '../../models/@index';
export declare class Ng2ol3MapComponent implements AfterViewInit, OnInit {
    options: any;
    mapCreated: EventEmitter<{}>;
    map: Ng2ol3Map;
    view: ol.View;
    target: string;
    ngOnInit(): any;
    ngAfterViewInit(): any;
}
