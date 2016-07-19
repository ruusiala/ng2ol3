// The usual bootstrapping imports
import { bootstrap }    from '@angular/platform-browser-dynamic';
import {HTTP_PROVIDERS, Http} from '@angular/http';
import {TranslateService, TranslateLoader, TranslateStaticLoader} from 'ng2-translate/ng2-translate';

import {Ng2ol3Component} from './components/ng2ol3.component';

bootstrap(Ng2ol3Component, [
    HTTP_PROVIDERS, {
        provide: TranslateLoader,
        useFactory: (http: Http) => new TranslateStaticLoader(http, 'assets/i18n', '.json'),
        deps: [Http]
    },
    TranslateService
]);
