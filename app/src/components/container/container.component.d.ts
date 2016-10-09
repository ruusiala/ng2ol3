import { OnInit } from '@angular/core';
export declare class Ng2ol3ContainerComponent implements OnInit {
    config: any;
    map: ol.Map;
    isOpened: boolean;
    ngOnInit(): any;
    mapCreated(map: any): void;
    sidebarToggled(): void;
    updateMap(): void;
}
