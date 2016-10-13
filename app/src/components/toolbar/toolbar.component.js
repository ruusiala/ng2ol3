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
var Ng2ol3ToolbarComponent = (function () {
    function Ng2ol3ToolbarComponent() {
        this.elementActivated = new core_1.EventEmitter();
        this.myColor = "primary";
        this.elements = [];
    }
    Ng2ol3ToolbarComponent.prototype.ngOnInit = function () {
        if (this.options.hasOwnProperty("layertree")) {
            this.elements.push({
                type: "layertree",
                title: "Layer manager",
                fontSet: "ms",
                fontIcon: "ms-layers",
                active: this.options.layertree.active || false,
                disabled: this.options.layertree.disabled || false
            });
        }
        this.elementActivated.emit(this.elements[0]);
    };
    Ng2ol3ToolbarComponent.prototype.activateElement = function (element) {
        this.elementActivated.emit(element);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], Ng2ol3ToolbarComponent.prototype, "options", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], Ng2ol3ToolbarComponent.prototype, "elementActivated", void 0);
    Ng2ol3ToolbarComponent = __decorate([
        core_1.Component({
            selector: 'ng2ol3-toolbar',
            template: "\n        <div class=\"toolbar-div\">\n            <md-toolbar [color]=\"myColor\">\n                <md-icon *ngFor=\"let element of elements\" fontSet=\"{{element.fontSet}}\" fontIcon=\"{{element.fontIcon}}\" class=\"pointer md-24\" (click)=\"activateElement(element)\"></md-icon>\n            </md-toolbar>\n        </div>\n    ",
            host: {
                class: 'ng2ol3-toolbar'
            }
        }), 
        __metadata('design:paramtypes', [])
    ], Ng2ol3ToolbarComponent);
    return Ng2ol3ToolbarComponent;
}());
exports.Ng2ol3ToolbarComponent = Ng2ol3ToolbarComponent;
//# sourceMappingURL=toolbar.component.js.map