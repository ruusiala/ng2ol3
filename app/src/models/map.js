"use strict";
const _index_1 = require('./@index');
class Ng2ol3Map extends ol.Map {
    constructor(options) {
        super(options);
        this.options = options;
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
                layerGroup.getLayers().push(newLayer);
            }
        }
        else if (element.type == "layergroup") {
            let newLayerGroup = new _index_1.Ng2ol3LayerGroup(element);
            for (let i = 0; i < element.children.length; i++) {
                this.handleLayerOrLayerGroup(element.children[i], newLayerGroup);
            }
        }
    }
}
exports.Ng2ol3Map = Ng2ol3Map;
//# sourceMappingURL=map.js.map