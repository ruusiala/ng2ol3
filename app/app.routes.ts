import {provideRouter, RouterConfig} from '@angular/router';
import {Ng2ol3ContainerComponent} from './ng2ol3-container.component';

const routes: RouterConfig = [
  {
    path: '',
    redirectTo: '/container',
    pathMatch: 'full'
  },
  {
    path: 'container',
    component: Ng2ol3ContainerComponent
  }
];

export const appRouterProviders = [
  provideRouter(routes)
];
