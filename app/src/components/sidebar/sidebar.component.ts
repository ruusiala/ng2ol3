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
      <div class="sidebar-content">
          <div class="close-button pointer" 
                  (click)="toggleSidebar()" 
                  [@sidebarClosed]="sidebarClosed" 
                  *ngIf="false">
              <i class="fa fa-angle-double-left"></i>
          </div>
          <ng2ol3-toolbar 
                  *ngIf="hasToolbar"
                  [options]="options.toolbar">
          </ng2ol3-toolbar>
      </div>
    `,
    host: {
        class: 'ng2ol3-sidebar'
    },
    animations: [
        trigger('sidebarClosed', [
            state('true', style({
                transform: 'scale(1.0)'
            })),
            state('false', style({
                transform: 'scale(1.0)'
            })),
            transition('true => false', animate('100ms ease-in')),
            transition('false => true', animate('100ms ease-out'))
        ])
    ]
})
export class Ng2ol3SidebarComponent implements OnInit {

    @Input() options: any;
    @Input() map: Ng2ol3Map;
    
    sidebarClosed: boolean;
    hasToolbar: boolean;

    public ngOnInit(): any {
        this.sidebarClosed = false;
        this.hasToolbar = this.options.hasOwnProperty("toolbar");

        this.map.updateSize();
    }

    public toggleSidebar(): any {
        this.sidebarClosed = !this.sidebarClosed;
        console.log(`sidebar will be closed: ${this.sidebarClosed}`);
    }

}