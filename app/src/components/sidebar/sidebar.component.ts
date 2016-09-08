import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'ng2ol3-sidebar',
    template: `
      <div class="sidebar-content">
          <div *ngIf="title != null">{{title}}</div>
      </div>
    `,
    host: {
        class: 'ng2ol3-sidebar'
    }
})
export class Ng2ol3SidebarComponent implements OnInit {
    @Input() options: any;
    // @Input() map: ol.Map;
    title: string;

    public ngOnInit(): any {
        this.title = this.options.title || null;
    }

}