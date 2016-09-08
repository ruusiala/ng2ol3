import {Component} from '@angular/core';

@Component({
    selector: 'demo-app',
    template: `
        <div class="demo">
            <div class="demo-header">
                <h1 class="title">ng2ol3 examples</h1>
                <nav>
                    <button routerLink="/demo-simple" routerLinkActive="active"
                        [routerLinkActiveOptions]="{ exact: true }">simple demo</button>
                    <button routerLink="/demo-sidebar" routerLinkActive="active"
                        [routerLinkActiveOptions]="{ exact: true }">sidebar demo</button>
                </nav>
            </div>
            <div class="demo-content">
                <router-outlet></router-outlet>
            </div>
        </div>
    `
})
export class AppComponent {

}