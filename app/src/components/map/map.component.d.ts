import { OnInit, EventEmitter, AfterViewInit } from '@angular/core';
import { Ng2ol3MapService } from '../../services/@index';
import { Ng2ol3Map } from '../../models/@index';
export declare class Ng2ol3MapComponent implements AfterViewInit, OnInit {
    private mapService;
    options: any;
    mapCreated: EventEmitter<{}>;
    map: Ng2ol3Map;
    view: ol.View;
    target: string;
    constructor(mapService: Ng2ol3MapService);
    ngOnInit(): any;
    ngAfterViewInit(): any;
}
