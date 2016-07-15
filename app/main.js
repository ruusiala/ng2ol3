"use strict";
// The usual bootstrapping imports
const platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
const http_1 = require('@angular/http');
const ng2ol3_container_component_1 = require('./ng2ol3-container.component');
// import {appRouterProviders} from './app.routes';
platform_browser_dynamic_1.bootstrap(ng2ol3_container_component_1.Ng2ol3ContainerComponent, [
    // appRouterProviders,
    http_1.HTTP_PROVIDERS
]);
//# sourceMappingURL=main.js.map