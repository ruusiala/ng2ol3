import {Ng2ol3View} from './view';
// import {Ng2ol3Sidebar} from './ng2ol3sidebar';
// import {Ng2ol3Header} from './ng2ol3header';

export class Ng2ol3Config {

    appLang: string;
    // appHeader: Ng2ol3Header;
    appMapRenderer: string;
    appView: Ng2ol3View;
    appLayers: any[] = [];
    // appSidebar: Ng2ol3Sidebar;

    constructor() {

    }

    getAppLang(): string {
        return this.appLang;
    }

    setAppLang(lang: string): void {
        this.appLang = lang;
    }

    // getAppHeader(): Ng2ol3Header {
    //     return this.appHeader;
    // }

    // setAppHeader(header: Ng2ol3Header): void {
    //     this.appHeader = header;
    // }

    getAppMapRenderer(): string {
        return this.appMapRenderer;
    }

    setAppMapRenderer(renderer: string): void {
        this.appMapRenderer = renderer;
    }

    getAppView(): Ng2ol3View {
        return this.appView;
    }

    setAppView(view: Ng2ol3View): void {
        this.appView = view;
    }

    getAppLayers(): any[] {
        return this.appLayers;
    }

    setAppLayers(layers: any[]): void {
        this.appLayers = layers;
    }

    // getAppSidebar(): Ng2ol3Sidebar {
    //     return this.appSidebar;
    // }

    // setAppSidebar(sidebar: Ng2ol3Sidebar): void {
    //     this.appSidebar = sidebar;
    // }

}
