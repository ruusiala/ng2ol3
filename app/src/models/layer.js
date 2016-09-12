"use strict";
class Ng2ol3Layer {
    constructor(options) {
        this.name = options.name;
        this.layer = options.layer;
        let opacity = (typeof options.opacity !== "undefined") ? options.opacity : 1.0;
        this.setOpacity(opacity);
        let visible = (typeof options.visible !== "undefined") ? options.visible : true;
        this.setVisible(visible);
    }
    getName() {
        return this.name;
    }
    getLayer() {
        return this.layer;
    }
    getOpacity() {
        return this.opacity;
    }
    setOpacity(value) {
        this.opacity = value;
        this.layer.setOpacity(value);
    }
    getVisible() {
        return this.visible;
    }
    setVisible(value) {
        this.visible = value;
        this.layer.setVisible(value);
    }
}
exports.Ng2ol3Layer = Ng2ol3Layer;
//# sourceMappingURL=layer.js.map