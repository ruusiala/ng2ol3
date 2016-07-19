/// <reference path="../../node_modules/@types/openlayers/index.d.ts" />

import {Component, Input, OnInit} from '@angular/core';
import {TranslateService, TranslatePipe} from 'ng2-translate/ng2-translate';

import {Ng2ol3Map} from '../classes/ng2ol3map';
import {Ng2ol3Sidebar} from '../classes/ng2ol3sidebar';
import {Ng2ol3Config} from '../classes/ng2ol3config';

@Component({
    selector: 'ng2ol3-sidebar',
    template: `
      <div>{{'THIS_IS_A_SIDEBAR_COMPONENT' | translate }}</div>
    `,
    styleUrls: ['dist/css/components/ng2ol3-sidebar.component.css'],
    host: {
        class: 'ng2ol3-sidebar'
    },
    pipes: [TranslatePipe]
})

export class Ng2ol3SidebarComponent implements OnInit {

    @Input() map: Ng2ol3Map;
    @Input() config: Ng2ol3Config;
    sidebar: Ng2ol3Sidebar;
    translate: TranslateService;

    constructor(transl: TranslateService) {
        this.translate = transl;
    }

    ngOnInit() {
        this.sidebar = this.config.getAppSidebar() || null;
        this.translate.use(this.config.getAppLang());
    }


}
