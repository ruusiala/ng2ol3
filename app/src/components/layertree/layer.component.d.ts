import { OnInit } from '@angular/core';
import { Ng2ol3Layer } from '../../models/@index';
export declare class Ng2ol3LayerComponent implements OnInit {
    layer: Ng2ol3Layer;
    detailsExpanded: boolean;
    constructor();
    ngOnInit(): any;
    toggleVisibility(): any;
    toggleDetailsExpanded(): any;
}
