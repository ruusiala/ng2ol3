// The usual bootstrapping imports
import { bootstrap }    from '@angular/platform-browser-dynamic';
import {HTTP_PROVIDERS} from '@angular/http';

import {Ng2ol3ContainerComponent} from './components/ng2ol3-container.component';

bootstrap(Ng2ol3ContainerComponent, [
  HTTP_PROVIDERS
]);
