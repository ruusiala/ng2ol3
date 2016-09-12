import { Ng2ol3Layer, Ng2ol3LayerGroup } from './@index';
export declare class Ng2ol3Map extends ol.Map {
    options: any;
    layers: Ng2ol3Layer[];
    layerGroups: Ng2ol3LayerGroup[];
    constructor(options: any);
    addLayersAndLayerGroups(optionLayers: any[]): any;
    private handleLayerOrLayerGroup(element, layerGroup);
    getNg2ol3Layers(): Ng2ol3Layer[];
    getNg2ol3LayerGroups(): Ng2ol3LayerGroup[];
}
