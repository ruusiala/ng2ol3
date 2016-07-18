/// <reference path="../../node_modules/@types/openlayers/index.d.ts" />

import {Ng2ol3View} from './ng2ol3view';
import {Ng2ol3Sidebar} from './ng2ol3sidebar';

export class Ng2ol3Config {

    appTitle: string;
    appMapDomId: string;
    appMapRenderer: string;
    appView: Ng2ol3View;
    appLayers: any[] = [];
    appSidebar: Ng2ol3Sidebar;

    constructor() {

    }

    getAppTitle(): string {
        return this.appTitle
    }

    setAppTitle(title: string): void {
        this.appTitle = title;
    }

    getAppMapDomId(): string {
        return this.appMapDomId;
    }

    setAppMapDomId(domId: string): void {
        this.appMapDomId = domId;
    }

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

    getAppSidebar(): Ng2ol3Sidebar {
        return this.appSidebar;
    }

    setAppSidebar(sidebar: Ng2ol3Sidebar): void {
        this.appSidebar = sidebar;
    }

}
