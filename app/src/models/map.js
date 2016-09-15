"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var _index_1 = require('./@index');
var Ng2ol3Map = (function (_super) {
    __extends(Ng2ol3Map, _super);
    function Ng2ol3Map(options) {
        _super.call(this, options);
        this.options = options;
        this.layers = [];
        this.layerGroups = [];
    }
    Ng2ol3Map.prototype.addLayersAndLayerGroups = function (optionLayers) {
        for (var i = 0; i < optionLayers.length; i++) {
            var element = optionLayers[i];
            this.handleLayerOrLayerGroup(element, null);
        }
    };
    Ng2ol3Map.prototype.handleLayerOrLayerGroup = function (element, layerGroup) {
        if (element.type == "layer") {
            var newLayer = new _index_1.Ng2ol3Layer(element);
            this.addLayer(element.layer);
            if (layerGroup !== null) {
                layerGroup.getChildren().push(newLayer);
            }
            else {
                this.layers.push(newLayer);
            }
        }
        else if (element.type == "layergroup") {
            var newLayerGroup = new _index_1.Ng2ol3LayerGroup(element);
            this.layerGroups.push(newLayerGroup);
            for (var i = 0; i < element.children.length; i++) {
                this.handleLayerOrLayerGroup(element.children[i], newLayerGroup);
            }
        }
    };
    Ng2ol3Map.prototype.getNg2ol3Layers = function () {
        return this.layers;
    };
    Ng2ol3Map.prototype.getNg2ol3LayerGroups = function () {
        return this.layerGroups;
    };
    return Ng2ol3Map;
}(ol.Map));
exports.Ng2ol3Map = Ng2ol3Map;
//# sourceMappingURL=map.js.map