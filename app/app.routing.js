"use strict";
const router_1 = require('@angular/router');
const demo_simple_1 = require('./demo/demo-simple');
const demo_4326_1 = require('./demo/demo-4326');
const appRoutes = [
    {
        path: '',
        redirectTo: '/demo-simple',
        pathMatch: 'full'
    },
    {
        path: 'demo-simple',
        component: demo_simple_1.DemoSimpleComponent
    },
    {
        path: 'demo-4326',
        component: demo_4326_1.Demo4326Component
    }
];
exports.appRoutingProviders = [];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map