"use strict";
const _index_1 = require('./@index');
class Ng2ol3Map extends ol.Map {
    constructor(options) {
        super(options);
        this.options = options;
        this.layers = [];
        this.layerGroups = [];
    }
    addLayersAndLayerGroups(optionLayers) {
        for (let i = 0; i < optionLayers.length; i++) {
            let element = optionLayers[i];
            this.handleLayerOrLayerGroup(element, null);
        }
    }
    handleLayerOrLayerGroup(element, layerGroup) {
        if (element.type == "layer") {
            let newLayer = new _index_1.Ng2ol3Layer(element);
            this.addLayer(element.layer);
            if (layerGroup !== null) {
                layerGroup.getChildren().push(newLayer);
            }
            else {
                this.layers.push(newLayer);
            }
        }
        else if (element.type == "layergroup") {
            let newLayerGroup = new _index_1.Ng2ol3LayerGroup(element);
            this.layerGroups.push(newLayerGroup);
            for (let i = 0; i < element.children.length; i++) {
                this.handleLayerOrLayerGroup(element.children[i], newLayerGroup);
            }
        }
    }
    getNg2ol3Layers() {
        return this.layers;
    }
    getNg2ol3LayerGroups() {
        return this.layerGroups;
    }
}
exports.Ng2ol3Map = Ng2ol3Map;
//# sourceMappingURL=map.js.map