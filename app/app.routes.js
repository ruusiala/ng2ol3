"use strict";
const router_1 = require('@angular/router');
const ng2ol3_container_component_1 = require('./ng2ol3-container.component');
const routes = [
    {
        path: '',
        redirectTo: '/container',
        pathMatch: 'full'
    },
    {
        path: 'container',
        component: ng2ol3_container_component_1.Ng2ol3ContainerComponent
    }
];
exports.appRouterProviders = [
    router_1.provideRouter(routes)
];
//# sourceMappingURL=app.routes.js.map