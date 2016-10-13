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
var Ng2ol3MeasureComponent = (function () {
    function Ng2ol3MeasureComponent() {
    }
    Ng2ol3MeasureComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', _index_1.Ng2ol3Map)
    ], Ng2ol3MeasureComponent.prototype, "map", void 0);
    Ng2ol3MeasureComponent = __decorate([
        core_1.Component({
            selector: 'ng2ol3-measure',
            template: "\n      <div>\n          Measure will be here\n      </div>\n    ",
            host: {
                class: 'ng2ol3-measure'
            },
            animations: []
        }), 
        __metadata('design:paramtypes', [])
    ], Ng2ol3MeasureComponent);
    return Ng2ol3MeasureComponent;
}());
exports.Ng2ol3MeasureComponent = Ng2ol3MeasureComponent;
//# sourceMappingURL=measure.component.js.map