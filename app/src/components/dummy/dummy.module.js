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
var common_1 = require('@angular/common');
var core_1 = require('@angular/core');
var dummy_component_1 = require('./dummy.component');
var Ng2ol3DummyModule = (function () {
    function Ng2ol3DummyModule() {
    }
    Ng2ol3DummyModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule],
            declarations: [dummy_component_1.Ng2ol3DummyComponent],
            exports: [dummy_component_1.Ng2ol3DummyComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], Ng2ol3DummyModule);
    return Ng2ol3DummyModule;
}());
exports.Ng2ol3DummyModule = Ng2ol3DummyModule;
//# sourceMappingURL=dummy.module.js.map