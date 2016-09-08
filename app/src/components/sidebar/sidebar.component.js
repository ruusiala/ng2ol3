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
let Ng2ol3SidebarComponent = class Ng2ol3SidebarComponent {
    ngOnInit() {
        this.title = this.options.title || null;
    }
};
__decorate([
    core_1.Input(), 
    __metadata('design:type', Object)
], Ng2ol3SidebarComponent.prototype, "options", void 0);
Ng2ol3SidebarComponent = __decorate([
    core_1.Component({
        selector: 'ng2ol3-sidebar',
        template: `
      <div class="sidebar-content">
          <div *ngIf="title != null">{{title}}</div>
      </div>
    `,
        host: {
            class: 'ng2ol3-sidebar'
        }
    }), 
    __metadata('design:paramtypes', [])
], Ng2ol3SidebarComponent);
exports.Ng2ol3SidebarComponent = Ng2ol3SidebarComponent;
//# sourceMappingURL=sidebar.component.js.map