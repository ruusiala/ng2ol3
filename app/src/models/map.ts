import { Ng2ol3Layer, Ng2ol3LayerGroup } from './@index';

export class Ng2ol3Map extends ol.Map {

    options: any;

    layers: Ng2ol3Layer[];
    layerGroups: Ng2ol3LayerGroup[];

    constructor(options: any) {
        super(options);
        this.options = options;
        this.layers = [];
        this.layerGroups = [];
    }

    public addLayersAndLayerGroups(optionLayers: any[]): any {
        for (let i = 0; i < optionLayers.length; i++) {
            let element = optionLayers[i];
            this.handleLayerOrLayerGroup(element, null);
        }
    }

    private handleLayerOrLayerGroup(element: any, layerGroup: Ng2ol3LayerGroup): any {
        if (element.type == "layer") {
            let newLayer = new Ng2ol3Layer(element);
            this.addLayer(element.layer);
            if (layerGroup !== null) {
                layerGroup.getChildren().push(newLayer);
            } else {
                this.layers.push(newLayer);
            }
        } else if (element.type == "layergroup") {
            let newLayerGroup = new Ng2ol3LayerGroup(element);
            this.layerGroups.push(newLayerGroup);
            for (let i = 0; i < element.children.length; i++) {
                this.handleLayerOrLayerGroup(element.children[i], newLayerGroup);
            }
        }
    }

    public getNg2ol3Layers(): Ng2ol3Layer[] {
        return this.layers;
    }

    public getNg2ol3LayerGroups(): Ng2ol3LayerGroup[] {
        return this.layerGroups;
    }


}