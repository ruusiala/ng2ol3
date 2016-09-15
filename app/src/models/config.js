"use strict";
// import {Ng2ol3Sidebar} from './ng2ol3sidebar';
// import {Ng2ol3Header} from './ng2ol3header';
var Ng2ol3Config = (function () {
    // appSidebar: Ng2ol3Sidebar;
    function Ng2ol3Config() {
        this.appLayers = [];
    }
    Ng2ol3Config.prototype.getAppLang = function () {
        return this.appLang;
    };
    Ng2ol3Config.prototype.setAppLang = function (lang) {
        this.appLang = lang;
    };
    // getAppHeader(): Ng2ol3Header {
    //     return this.appHeader;
    // }
    // setAppHeader(header: Ng2ol3Header): void {
    //     this.appHeader = header;
    // }
    Ng2ol3Config.prototype.getAppMapRenderer = function () {
        return this.appMapRenderer;
    };
    Ng2ol3Config.prototype.setAppMapRenderer = function (renderer) {
        this.appMapRenderer = renderer;
    };
    Ng2ol3Config.prototype.getAppView = function () {
        return this.appView;
    };
    Ng2ol3Config.prototype.setAppView = function (view) {
        this.appView = view;
    };
    Ng2ol3Config.prototype.getAppLayers = function () {
        return this.appLayers;
    };
    Ng2ol3Config.prototype.setAppLayers = function (layers) {
        this.appLayers = layers;
    };
    return Ng2ol3Config;
}());
exports.Ng2ol3Config = Ng2ol3Config;
//# sourceMappingURL=config.js.map