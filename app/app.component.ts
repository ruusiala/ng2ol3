import { Component, Inject } from '@angular/core';

@Component({
    selector: 'demo-app',
    template: `
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
            <h1 class="title">ng2ol3 components</h1>
            <nav>
           	    <button md-raised-button routerLink="/demo-full" routerLinkActive="active"
                    [routerLinkActiveOptions]="{ exact: true }">full functionality</button>
                <button md-raised-button color="primary" routerLink="/demo-map" routerLinkActive="active"
                    [routerLinkActiveOptions]="{ exact: true }">map</button>
                <button md-raised-button routerLink="/demo-sidebar" routerLinkActive="active"
                    [routerLinkActiveOptions]="{ exact: true }">sidebar</button>
                <button md-raised-button routerLink="/demo-layertree" routerLinkActive="active"
                    [routerLinkActiveOptions]="{ exact: true }">layertree</button>
                <button md-raised-button routerLink="/demo-measure" routerLinkActive="active"
                    [routerLinkActiveOptions]="{ exact: true }">measure</button>
            </nav>
        </div>
        <div class="demo-content">
            <router-outlet></router-outlet>
        </div>
    </div>
   `
})
export class AppComponent {
    //this is how you use a window
    constructor( @Inject(Window) window: Window) {
        // window.open("https://github.com/fegyi001/ng2ol3");
    }
}