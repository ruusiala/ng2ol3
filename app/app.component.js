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
let AppComponent = class AppComponent {
};
AppComponent = __decorate([
    core_1.Component({
        selector: 'demo-app',
        template: `
        <div class="demo">
            <div class="demo-header">
                <h1 class="title">ng2ol3 examples</h1>
                <nav>
                    <button routerLink="/demo-simple" routerLinkActive="active"
                        [routerLinkActiveOptions]="{ exact: true }">simple demo</button>
                    <button routerLink="/demo-4326" routerLinkActive="active"
                        [routerLinkActiveOptions]="{ exact: true }">wgs84 demo</button>
                </nav>
            </div>
            <div>
                <router-outlet></router-outlet>
            </div>
        </div>
    `
    }), 
    __metadata('design:paramtypes', [])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map