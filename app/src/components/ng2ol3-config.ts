import { window } from './utils/facade/browser';

export enum Ng2ol3Theme {BS3 = 1, BS4 = 2}

export class Ng2ol3Config {
  private static _theme:Ng2ol3Theme;

  public static get theme():Ng2ol3Theme {
    // hack as for now
    if (window.__theme === 'bs4') {
      return Ng2ol3Theme.BS4;
    }
    return (this._theme || Ng2ol3Theme.BS3);
  }

  public static set theme(v:Ng2ol3Theme) {
    this._theme = v;
  }
}
