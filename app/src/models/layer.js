"use strict";
var Ng2ol3Layer = (function () {
    function Ng2ol3Layer(options) {
        this.name = options.name;
        this.layer = options.layer;
        var opacity = options.hasOwnProperty("opacity") ? options.opacity : 1.0;
        this.setOpacity(opacity);
        var visible = options.hasOwnProperty("visible") ? options.visible : true;
        this.setVisible(visible);
    }
    Ng2ol3Layer.prototype.getName = function () {
        return this.name;
    };
    Ng2ol3Layer.prototype.getLayer = function () {
        return this.layer;
    };
    Ng2ol3Layer.prototype.getOpacity = function () {
        return this.opacity;
    };
    Ng2ol3Layer.prototype.setOpacity = function (value) {
        this.opacity = value;
        this.layer.setOpacity(value);
    };
    Ng2ol3Layer.prototype.getVisible = function () {
        return this.visible;
    };
    Ng2ol3Layer.prototype.setVisible = function (value) {
        this.visible = value;
        this.layer.setVisible(value);
    };
    return Ng2ol3Layer;
}());
exports.Ng2ol3Layer = Ng2ol3Layer;
//# sourceMappingURL=layer.js.map