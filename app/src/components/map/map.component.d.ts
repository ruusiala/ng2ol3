import { OnInit, EventEmitter, AfterViewInit } from '@angular/core';
import { Ng2ol3MapService } from '../../services/@index';
import { Ng2ol3Map } from '../../models/@index';
export declare class Ng2ol3MapComponent implements AfterViewInit, OnInit {
    private mapService;
    options: any;
    mapCreated: EventEmitter<{}>;
    sidebarToggled: EventEmitter<{}>;
    map: Ng2ol3Map;
    view: ol.View;
    target: string;
    hasSidebar: boolean;
    zoomDuration: number;
    constructor(mapService: Ng2ol3MapService);
    ngOnInit(): any;
    ngAfterViewInit(): any;
    zoomIn(): void;
    zoomOut(): void;
    toggleSidebar(): void;
}
