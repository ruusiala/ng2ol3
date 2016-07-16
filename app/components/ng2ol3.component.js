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
const ng2ol3_container_component_1 = require('./ng2ol3-container.component');
let Ng2ol3Component = class Ng2ol3Component {
    constructor() {
        this.myTitle = "This is my first ng2ol3 map!";
        this.myCreateHeader = true;
    }
};
Ng2ol3Component = __decorate([
    core_1.Component({
        selector: 'ng2ol3',
        template: `
    <ng2ol3-container
      [title]="myTitle"
      [createHeader]="myCreateHeader">
    </ng2ol3-container>
  `,
        styleUrls: [''],
        directives: [ng2ol3_container_component_1.Ng2ol3ContainerComponent]
    }), 
    __metadata('design:paramtypes', [])
], Ng2ol3Component);
exports.Ng2ol3Component = Ng2ol3Component;
//# sourceMappingURL=ng2ol3.component.js.map