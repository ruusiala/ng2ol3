/// <reference path="../../node_modules/@types/openlayers/index.d.ts" />

import {Component, Input, OnInit} from '@angular/core';
import {Ng2ol3Map} from '../classes/ng2ol3map';
import {Ng2ol3Sidebar} from '../classes/ng2ol3sidebar';
import {Ng2ol3Config} from '../classes/ng2ol3config';

@Component({
    selector: 'ng2ol3-sidebar',
    template: `
      <div>This is a sidebar component.</div>
    `,
    styleUrls: ['dist/css/components/ng2ol3-sidebar.component.css'],
    host: {
        class: 'ng2ol3-sidebar'
    }
})

export class Ng2ol3SidebarComponent {

    @Input() map: Ng2ol3Map;
    @Input() config: Ng2ol3Config;
    sidebar: Ng2ol3Sidebar;

    ngOnInit() {
        this.sidebar = this.config.getAppSidebar() || null;

    }


}
