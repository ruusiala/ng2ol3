"use strict";
const router_1 = require('@angular/router');
const demo_simple_1 = require('./demo/demo-simple');
const demo_sidebar_1 = require('./demo/demo-sidebar');
const demo_toolbar_1 = require('./demo/demo-toolbar');
const demo_layertree_1 = require('./demo/demo-layertree');
const appRoutes = [
    {
        path: '',
        // redirectTo: '/demo-sidebar',
        component: demo_simple_1.DemoSimpleComponent,
        pathMatch: 'full'
    }, {
        path: 'demo-simple',
        component: demo_simple_1.DemoSimpleComponent
    }, {
        path: 'demo-sidebar',
        component: demo_sidebar_1.DemoSidebarComponent
    }, {
        path: 'demo-toolbar',
        component: demo_toolbar_1.DemoToolbarComponent
    }, {
        path: 'demo-layertree',
        component: demo_layertree_1.DemoLayertreeComponent
    }
];
exports.appRoutingProviders = [];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map