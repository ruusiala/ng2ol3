// The usual bootstrapping imports
import { bootstrap }    from '@angular/platform-browser-dynamic';
import {HTTP_PROVIDERS} from '@angular/http';

import {Ng2ol3Component} from './components/ng2ol3.component';

bootstrap(Ng2ol3Component, [
  HTTP_PROVIDERS
]);
