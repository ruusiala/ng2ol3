// The usual bootstrapping imports
import { bootstrap }    from '@angular/platform-browser-dynamic';
import {HTTP_PROVIDERS} from '@angular/http';

import {Ng2ol3ContainerComponent} from './ng2ol3-container.component';
// import {appRouterProviders} from './app.routes';

bootstrap(Ng2ol3ContainerComponent, [
  // appRouterProviders,
  HTTP_PROVIDERS
]);
