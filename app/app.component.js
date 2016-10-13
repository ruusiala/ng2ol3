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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require('@angular/core');
var AppComponent = (function () {
    //this is how you use a window
    function AppComponent(window) {
        // window.open("https://github.com/fegyi001/ng2ol3");
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'demo-app',
            template: "\n    <div class=\"ribbon-box\">\n        <div class=\"ribbon-wrapper\">\n            <a href=\"https://github.com/fegyi001/ng2ol3\" target=\"_blank\" title=\"GitHub repository\">\n                <div class=\"ribbon\">\n                    <i class=\"fa fa-github\"></i>\n                </div>\n            </a>\n        </div>\n    </div>\n    <div class=\"demo\">\n        <div class=\"demo-header\">\n            <h1 class=\"title\">ng2ol3 components</h1>\n            <nav>\n           \t    <button md-raised-button routerLink=\"/demo-full\" routerLinkActive=\"active\"\n                    [routerLinkActiveOptions]=\"{ exact: true }\">full functionality</button>\n                <button md-raised-button color=\"primary\" routerLink=\"/demo-map\" routerLinkActive=\"active\"\n                    [routerLinkActiveOptions]=\"{ exact: true }\">map</button>\n                <button md-raised-button routerLink=\"/demo-sidebar\" routerLinkActive=\"active\"\n                    [routerLinkActiveOptions]=\"{ exact: true }\">sidebar</button>\n                <button md-raised-button routerLink=\"/demo-layertree\" routerLinkActive=\"active\"\n                    [routerLinkActiveOptions]=\"{ exact: true }\">layertree</button>\n                <button md-raised-button routerLink=\"/demo-measure\" routerLinkActive=\"active\"\n                    [routerLinkActiveOptions]=\"{ exact: true }\">measure</button>\n                <button md-raised-button routerLink=\"/demo-print\" routerLinkActive=\"active\"\n                    [routerLinkActiveOptions]=\"{ exact: true }\">print</button>\n            </nav>\n        </div>\n        <div class=\"demo-content\">\n            <router-outlet></router-outlet>\n        </div>\n    </div>\n   "
        }),
        __param(0, core_1.Inject(Window)), 
        __metadata('design:paramtypes', [Window])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map