"use strict";
const browser_1 = require('./utils/facade/browser');
(function (Ng2ol3Theme) {
    Ng2ol3Theme[Ng2ol3Theme["BS3"] = 1] = "BS3";
    Ng2ol3Theme[Ng2ol3Theme["BS4"] = 2] = "BS4";
})(exports.Ng2ol3Theme || (exports.Ng2ol3Theme = {}));
var Ng2ol3Theme = exports.Ng2ol3Theme;
class Ng2ol3Config {
    static get theme() {
        // hack as for now
        if (browser_1.window.__theme === 'bs4') {
            return Ng2ol3Theme.BS4;
        }
        return (this._theme || Ng2ol3Theme.BS3);
    }
    static set theme(v) {
        this._theme = v;
    }
}
exports.Ng2ol3Config = Ng2ol3Config;
//# sourceMappingURL=ng2ol3-config.js.map