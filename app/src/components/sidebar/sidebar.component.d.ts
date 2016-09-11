import { OnInit } from '@angular/core';
import { Ng2ol3Map } from '../../models/@index';
export declare class Ng2ol3SidebarComponent implements OnInit {
    options: any;
    map: Ng2ol3Map;
    title: string;
    sidebarClosed: boolean;
    ngOnInit(): any;
    toggleSidebar(): any;
}
