"use strict";
var Ng2ol3LayerGroup = (function () {
    function Ng2ol3LayerGroup(options) {
        this.name = options.name;
        this.children = [];
        this.expanded = options.expanded || true;
    }
    Ng2ol3LayerGroup.prototype.getName = function () {
        return this.name;
    };
    Ng2ol3LayerGroup.prototype.getChildren = function () {
        return this.children;
    };
    Ng2ol3LayerGroup.prototype.getExpanded = function () {
        return this.expanded;
    };
    Ng2ol3LayerGroup.prototype.setExpanded = function (value) {
        this.expanded = value;
    };
    return Ng2ol3LayerGroup;
}());
exports.Ng2ol3LayerGroup = Ng2ol3LayerGroup;
//# sourceMappingURL=layergroup.js.map