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
var Ng2ol3DummyComponent = (function () {
    function Ng2ol3DummyComponent() {
    }
    Ng2ol3DummyComponent.prototype.ngOnInit = function () {
        console.log("dummy component created");
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], Ng2ol3DummyComponent.prototype, "dummyProperty", void 0);
    Ng2ol3DummyComponent = __decorate([
        core_1.Component({
            selector: 'ng2ol3-dummy',
            template: "\n      <div>this is a dummy component called <b><i>{{dummyProperty}}</i></b></div>\n    ",
            host: {
                class: 'ng2ol3-dummy'
            }
        }), 
        __metadata('design:paramtypes', [])
    ], Ng2ol3DummyComponent);
    return Ng2ol3DummyComponent;
}());
exports.Ng2ol3DummyComponent = Ng2ol3DummyComponent;
//# sourceMappingURL=dummy.component.js.map