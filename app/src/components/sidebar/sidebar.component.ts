import {
    Component, Input, OnInit,
    trigger,
    state,
    style,
    transition,
    animate
} from '@angular/core';

import { Ng2ol3Map } from '../../models/@index';

@Component({
    selector: 'ng2ol3-sidebar',
    template: `
      <div class="sidebar-outer">
          <ng2ol3-toolbar 
                  *ngIf="hasToolbar"
                  [options]="options.toolbar"
                  (elementActivated)="onElementActivated($event)">
          </ng2ol3-toolbar>
          <div class="sidebar-main">
          	  <div class="sidebar-title">
	              <md-toolbar>
	                <span>{{activeElement.title}}</span>    
	              </md-toolbar>
              </div>
              <div class="sidebar-content">
	              <ng2ol3-layertree 
	                  *ngIf="hasLayertree && activeElement.type=='layertree'" 
	                  [map]="map">
	              </ng2ol3-layertree>
	              <ng2ol3-measure
	              	  *ngIf="hasMeasure && activeElement.type=='measure'"
	                  [map]="map">
	              </ng2ol3-measure>
	              <ng2ol3-print 
	              	  *ngIf="hasPrint && activeElement.type=='print'"
	                  [map]="map"></ng2ol3-print>
              </div>	
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
    hasMeasure: boolean;
    hasPrint: boolean;

    activeElement: any;

    constructor() {
        this.activeElement = {type: 'any', title: 'Empty sidebar'};
    }

    public ngOnInit(): any {
        this.sidebarClosed = false;
        this.hasToolbar = this.options.hasOwnProperty("toolbar");
        this.hasLayertree = this.hasToolbar && this.options.toolbar.hasOwnProperty("layertree");
        this.hasMeasure = this.hasToolbar && this.options.toolbar.hasOwnProperty("measure");
        this.hasPrint = this.hasToolbar && this.options.toolbar.hasOwnProperty("print");
        this.map.updateSize();
    }

    public toggleSidebar(): any {
        this.sidebarClosed = !this.sidebarClosed;
    }

    public onElementActivated(element): any {
        this.activeElement = element;
    }

}