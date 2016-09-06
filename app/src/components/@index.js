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
const core_1 = require('@angular/core');
const components_helper_service_1 = require('./utils/components-helper.service');
const dummy_module_1 = require('./dummy/dummy.module');
const map_module_1 = require('./map/map.module');
const container_module_1 = require('./container/container.module');
let Ng2ol3Module = class Ng2ol3Module {
};
Ng2ol3Module = __decorate([
    core_1.NgModule({
        exports: [
            dummy_module_1.Ng2ol3DummyModule,
            map_module_1.Ng2ol3MapModule,
            container_module_1.Ng2ol3ContainerModule
        ],
        providers: [
            { provide: components_helper_service_1.ComponentsHelper, useClass: components_helper_service_1.ComponentsHelper }
        ]
    }), 
    __metadata('design:paramtypes', [])
], Ng2ol3Module);
exports.Ng2ol3Module = Ng2ol3Module;
//# sourceMappingURL=@index.js.map