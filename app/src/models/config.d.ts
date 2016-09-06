import { Ng2ol3View } from './view';
export declare class Ng2ol3Config {
    appLang: string;
    appMapRenderer: string;
    appView: Ng2ol3View;
    appLayers: any[];
    constructor();
    getAppLang(): string;
    setAppLang(lang: string): void;
    getAppMapRenderer(): string;
    setAppMapRenderer(renderer: string): void;
    getAppView(): Ng2ol3View;
    setAppView(view: Ng2ol3View): void;
    getAppLayers(): any[];
    setAppLayers(layers: any[]): void;
}
