import { OnInit } from '@angular/core';
import { Ng2ol3Map, Ng2ol3LayerGroup, Ng2ol3Layer } from '../../models/@index';
export declare class Ng2ol3LayertreeComponent implements OnInit {
    map: Ng2ol3Map;
    layerGroups: Ng2ol3LayerGroup[];
    layers: Ng2ol3Layer[];
    ngOnInit(): any;
}
