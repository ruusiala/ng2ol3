import {Component} from '@angular/core';

@Component({
    selector: 'demo-app',
    template: `
    <div>
    <div class="ribbon-box">
        <div class="ribbon-wrapper">
            <a href="https://github.com/fegyi001/ng2ol3" target="_blank" title="GitHub repository">
                <div class="ribbon">
                    <i class="fa fa-github"></i>
                </div>
            </a>
        </div>
    </div>
    <div class="demo">
        <div class="demo-header">
            <h1 class="title">ng2ol3 examples</h1>
            <nav>
                <button routerLink="/demo-simple" routerLinkActive="active"
                    [routerLinkActiveOptions]="{ exact: true }">simple demo</button>
                <button routerLink="/demo-sidebar" routerLinkActive="active"
                    [routerLinkActiveOptions]="{ exact: true }">sidebar</button>
                <button routerLink="/demo-toolbar" routerLinkActive="active"
                    [routerLinkActiveOptions]="{ exact: true }">toolbar</button>
                <button routerLink="/demo-layertree" routerLinkActive="active"
                    [routerLinkActiveOptions]="{ exact: true }">layertree</button>
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