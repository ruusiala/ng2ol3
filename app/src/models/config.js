"use strict";
// import {Ng2ol3Sidebar} from './ng2ol3sidebar';
// import {Ng2ol3Header} from './ng2ol3header';
class Ng2ol3Config {
    // appSidebar: Ng2ol3Sidebar;
    constructor() {
        this.appLayers = [];
    }
    getAppLang() {
        return this.appLang;
    }
    setAppLang(lang) {
        this.appLang = lang;
    }
    // getAppHeader(): Ng2ol3Header {
    //     return this.appHeader;
    // }
    // setAppHeader(header: Ng2ol3Header): void {
    //     this.appHeader = header;
    // }
    getAppMapRenderer() {
        return this.appMapRenderer;
    }
    setAppMapRenderer(renderer) {
        this.appMapRenderer = renderer;
    }
    getAppView() {
        return this.appView;
    }
    setAppView(view) {
        this.appView = view;
    }
    getAppLayers() {
        return this.appLayers;
    }
    setAppLayers(layers) {
        this.appLayers = layers;
    }
}
exports.Ng2ol3Config = Ng2ol3Config;
//# sourceMappingURL=config.js.map