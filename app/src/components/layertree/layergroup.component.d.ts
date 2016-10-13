import { OnInit } from '@angular/core';
import { Ng2ol3LayerGroup, Ng2ol3Layer } from '../../models/@index';
export declare class Ng2ol3LayergroupComponent implements OnInit {
    layerGroup: Ng2ol3LayerGroup;
    expanded: boolean;
    children: any[];
    nestedLayers: Ng2ol3Layer[];
    nestedLayerGroups: Ng2ol3LayerGroup[];
    fontIcon: string;
    constructor();
    ngOnInit(): any;
    /**Expands or closes the layergroup */
    toggleExpanded(): void;
}
