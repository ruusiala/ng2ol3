import {
    Component, Input, OnInit, 
    trigger,
    state,
    style,
    transition,
    animate
} from '@angular/core';

@Component({
    selector: 'ng2ol3-sidebar',
    template: `
      <div class="sidebar-content">
          <div class="close-button pointer" (click)="toggleSidebar()" [@sidebarClosed]="sidebarClosed" *ngIf="false">
              <i class="fa fa-angle-double-left"></i>
          </div>
          <div *ngIf="title != null">{{title}}</div>
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
    // @Input() map: ol.Map;
    title: string;
    
    sidebarClosed: boolean;

    public ngOnInit(): any {
        this.title = this.options.title || null;
        this.sidebarClosed = false;
    }

    public toggleSidebar(): any {
        this.sidebarClosed = !this.sidebarClosed;
        console.log(`sidebar will be closed: ${this.sidebarClosed}`);
    }



}