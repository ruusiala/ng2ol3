"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var _index_1 = require('../../models/@index');
var Ng2ol3LayerComponent = (function () {
    function Ng2ol3LayerComponent() {
        this.detailsVisible = false;
        this.detailsHeight = '100%';
    }
    Ng2ol3LayerComponent.prototype.ngOnInit = function () {
        this.fontIcon = this.layer.getVisible() ? "ms-tiles" : "ms-tiles-o";
    };
    Ng2ol3LayerComponent.prototype.toggleVisibility = function () {
        this.layer.setVisible(!this.layer.getVisible());
        this.fontIcon = this.layer.getVisible() ? "ms-tiles" : "ms-tiles-o";
    };
    Ng2ol3LayerComponent.prototype.showDetails = function () {
        this.detailsVisible = true;
    };
    Ng2ol3LayerComponent.prototype.hideDetails = function () {
        this.detailsVisible = false;
    };
    Ng2ol3LayerComponent.prototype.onDetailsElementClicked = function (obj) {
        switch (obj.type) {
            case "visibility":
                this.toggleVisibility();
                break;
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', _index_1.Ng2ol3Layer)
    ], Ng2ol3LayerComponent.prototype, "layer", void 0);
    Ng2ol3LayerComponent = __decorate([
        core_1.Component({
            selector: 'ng2ol3-layer',
            template: "\n        <div>\n        \t<md-sidenav-layout (mouseover)=\"showDetails()\" (mouseout)=\"hideDetails()\">\n\t            <md-sidenav #end align=\"end\" opened=\"{{detailsVisible}}\" mode=\"over\">\n\t                <ng2ol3-layertree-details type=\"layer\" [element]=\"layer\" [class.detailsVisible]=\"detailsVisible\" [detailsHeight]=\"detailsHeight\" (elementClicked)=\"onDetailsElementClicked($event)\"></ng2ol3-layertree-details>\n\t            </md-sidenav>\n\t\t    \t<div class=\"element-header\">\n\t                <div class=\"element-content\">\n\t                    <div class=\"element-name\">{{layer.name}}</div>\n\t                </div>\n\t\t\t    </div>\n\t        </md-sidenav-layout>\n\t    </div>\n    ",
            host: {
                class: 'ng2ol3-layer'
            }
        }), 
        __metadata('design:paramtypes', [])
    ], Ng2ol3LayerComponent);
    return Ng2ol3LayerComponent;
}());
exports.Ng2ol3LayerComponent = Ng2ol3LayerComponent;
//# sourceMappingURL=layer.component.js.map