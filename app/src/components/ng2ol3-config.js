"use strict";
var browser_1 = require('./utils/facade/browser');
(function (Ng2ol3Theme) {
    Ng2ol3Theme[Ng2ol3Theme["BS3"] = 1] = "BS3";
    Ng2ol3Theme[Ng2ol3Theme["BS4"] = 2] = "BS4";
})(exports.Ng2ol3Theme || (exports.Ng2ol3Theme = {}));
var Ng2ol3Theme = exports.Ng2ol3Theme;
var Ng2ol3Config = (function () {
    function Ng2ol3Config() {
    }
    Object.defineProperty(Ng2ol3Config, "theme", {
        get: function () {
            // hack as for now
            if (browser_1.window.__theme === 'bs4') {
                return Ng2ol3Theme.BS4;
            }
            return (this._theme || Ng2ol3Theme.BS3);
        },
        set: function (v) {
            this._theme = v;
        },
        enumerable: true,
        configurable: true
    });
    return Ng2ol3Config;
}());
exports.Ng2ol3Config = Ng2ol3Config;
//# sourceMappingURL=ng2ol3-config.js.map