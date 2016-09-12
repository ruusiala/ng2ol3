"use strict";
class Ng2ol3LayerGroup {
    constructor(options) {
        this.name = options.name;
        this.children = [];
        this.expanded = options.expanded || true;
    }
    getName() {
        return this.name;
    }
    getChildren() {
        return this.children;
    }
    getExpanded() {
        return this.expanded;
    }
    setExpanded(value) {
        this.expanded = value;
    }
}
exports.Ng2ol3LayerGroup = Ng2ol3LayerGroup;
//# sourceMappingURL=layergroup.js.map