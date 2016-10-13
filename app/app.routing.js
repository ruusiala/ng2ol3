"use strict";
var router_1 = require('@angular/router');
var _index_1 = require('./demo/@index');
var appRoutes = [
    {
        path: '',
        redirectTo: '/demo-full',
        //component: DemoMapComponent,
        pathMatch: 'full'
    }, {
        path: 'demo-map',
        component: _index_1.DemoMapComponent
    }, {
        path: 'demo-sidebar',
        component: _index_1.DemoSidebarComponent
    }, {
        path: 'demo-layertree',
        component: _index_1.DemoLayertreeComponent
    }, {
        path: 'demo-measure',
        component: _index_1.DemoMeasureComponent
    }, {
        path: 'demo-full',
        component: _index_1.DemoFullComponent
    }
];
exports.appRoutingProviders = [];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map