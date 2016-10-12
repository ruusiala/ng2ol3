import {
    Component, Input, OnInit,
    trigger,
    state,
    style,
    transition,
    animate
} from '@angular/core';

import {Ng2ol3Map} from '../../models/@index';

@Component({
    selector: 'ng2ol3-sidebar',
    template: `
      <div class="sidebar-main">
          <ng2ol3-toolbar 
                  *ngIf="hasToolbar"
                  [options]="options.toolbar">
          </ng2ol3-toolbar>
          <div class="sidebar-content">
              <md-toolbar>
                <span>Toolbar is here</span>    
              </md-toolbar>
              <ng2ol3-layertree 
                      *ngIf="hasLayertree" 
                      [map]="map">
              </ng2ol3-layertree>
          </div>
      </div>
    `,
    host: {
        class: 'ng2ol3-sidebar'
    },
    animations: []
})
export class Ng2ol3SidebarComponent implements OnInit {

    @Input() options: any;
    @Input() map: Ng2ol3Map;

    sidebarClosed: boolean;
    hasToolbar: boolean;
    hasLayertree: boolean;

    public ngOnInit(): any {
        this.sidebarClosed = false;
        this.hasToolbar = this.options.hasOwnProperty("toolbar");
        this.hasLayertree = this.hasToolbar && this.options.toolbar.hasOwnProperty("layertree");

        this.map.updateSize();
    }

    public toggleSidebar(): any {
        this.sidebarClosed = !this.sidebarClosed;
        console.log(`sidebar will be closed: ${this.sidebarClosed}`);
    }

}