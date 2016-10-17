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
var Ng2ol3LayertreeDetailsComponent = (function () {
    function Ng2ol3LayertreeDetailsComponent() {
        this.elementClicked = new core_1.EventEmitter();
        this.items = [];
    }
    Ng2ol3LayertreeDetailsComponent.prototype.ngOnInit = function () {
        this.items.push({ type: 'visibility', cols: 1, rows: 1, color: 'lightblue', fontSet: "fa", fontIcon: "fa-eye" });
        this.items.push({ type: 'opacity', cols: 1, rows: 1, color: 'lightgreen', fontSet: "ms", fontIcon: "ms-transparency" });
        if (this.element instanceof _index_1.Ng2ol3LayerGroup) {
            this.items.push({ type: 'expand', cols: 1, rows: 1, color: '#ADBDF1', fontSet: "fa", fontIcon: "fa-expand" });
        }
        else if (this.element instanceof _index_1.Ng2ol3Layer) {
            this.items.push({ type: 'style', cols: 1, rows: 1, color: 'lightpink', fontSet: "ms", fontIcon: "ms-style" });
        }
        this.items.push({ type: 'settings', cols: 1, rows: 1, color: '#DDBDF1', fontSet: "fa", fontIcon: "fa-cog" });
    };
    ;
    Ng2ol3LayertreeDetailsComponent.prototype.onClick = function (item) {
        var obj = {};
        obj.type = item.type;
        switch (obj.type) {
            case "expand":
                break;
            case "visibility":
                break;
            case "opacity":
                break;
            case "style":
                break;
            case "settings":
                break;
            default:
                break;
        }
        this.elementClicked.emit(obj);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], Ng2ol3LayertreeDetailsComponent.prototype, "element", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], Ng2ol3LayertreeDetailsComponent.prototype, "hovered", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], Ng2ol3LayertreeDetailsComponent.prototype, "detailsHeight", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], Ng2ol3LayertreeDetailsComponent.prototype, "elementClicked", void 0);
    Ng2ol3LayertreeDetailsComponent = __decorate([
        core_1.Component({
            selector: 'ng2ol3-layertree-details',
            template: "\n        <div [style.height]='detailsHeight'>\n        \t<md-grid-list cols=\"{{items.length}}\" rowHeight=\"{{detailsHeight}}\" gutterSize=\"0px\">\n            \t<md-grid-tile *ngFor=\"let item of items\" [colspan]=\"item.cols\" [rowspan]=\"item.rows\" [style.background]=\"item.color\" [style.color]=\"'#484848'\" class=\"pointer\" (click)=\"onClick(item)\">\n                \t<md-icon class=\"md-24\" fontSet=\"{{item.fontSet}}\" fontIcon=\"{{item.fontIcon}}\"></md-icon>\n  \t\t\t\t</md-grid-tile>\n            </md-grid-list>\n        </div>\n    ",
            host: {
                class: 'ng2ol3-layertree-details'
            }
        }), 
        __metadata('design:paramtypes', [])
    ], Ng2ol3LayertreeDetailsComponent);
    return Ng2ol3LayertreeDetailsComponent;
}());
exports.Ng2ol3LayertreeDetailsComponent = Ng2ol3LayertreeDetailsComponent;
//# sourceMappingURL=layertree-details.component.js.map