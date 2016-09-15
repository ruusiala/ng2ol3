"use strict";
var router_1 = require('@angular/router');
var demo_map_1 = require('./demo/demo-map');
var _index_1 = require('./demo/@index');
var appRoutes = [
    {
        path: '',
        // redirectTo: '/demo-sidebar',
        component: demo_map_1.DemoMapComponent,
        pathMatch: 'full'
    }, {
        path: 'demo-map',
        component: demo_map_1.DemoMapComponent
    }, {
        path: 'demo-sidebar',
        component: _index_1.DemoSidebarComponent
    }, {
        path: 'demo-toolbar',
        component: _index_1.DemoToolbarComponent
    }, {
        path: 'demo-layertree',
        component: _index_1.DemoLayertreeComponent
    }
];
exports.appRoutingProviders = [];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map