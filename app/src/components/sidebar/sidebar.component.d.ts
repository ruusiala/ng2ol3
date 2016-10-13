import { OnInit } from '@angular/core';
import { Ng2ol3Map } from '../../models/@index';
export declare class Ng2ol3SidebarComponent implements OnInit {
    options: any;
    map: Ng2ol3Map;
    sidebarClosed: boolean;
    hasToolbar: boolean;
    hasLayertree: boolean;
    activeElement: any;
    ngOnInit(): any;
    toggleSidebar(): any;
    onElementActivated(element: any): any;
}
