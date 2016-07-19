/// <reference path="../../node_modules/@types/openlayers/index.d.ts" />

import {Component, Input, OnInit, ElementRef, Renderer} from '@angular/core';
import {TranslateService, TranslatePipe} from 'ng2-translate/ng2-translate';

import {Ng2ol3Map} from '../classes/ng2ol3map';
import {Ng2ol3Sidebar} from '../classes/ng2ol3sidebar';
import {Ng2ol3Config} from '../classes/ng2ol3config';

@Component({
    selector: 'ng2ol3-sidebar',
    template: `
      <div class="sidebar-content">{{'THIS_IS_A_SIDEBAR_COMPONENT' | translate }}</div>
    `,
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

    constructor(transl: TranslateService, public el: ElementRef, public renderer: Renderer) {
        this.translate = transl;
    }

    ngOnInit() {
        this.translate.use(this.config.getAppLang());
        this.sidebar = this.config.getAppSidebar() || null;
        // Set the sidebar height and top css parameters if there is a header
        if (this.config.getAppHeader()) {
            let currentHeight = document.getElementsByClassName("ng2ol3-sidebar")[0].clientHeight;
            let headerHeight = document.getElementsByClassName("header-content")[0].clientHeight;
            this.renderer.setElementStyle(this.el.nativeElement, 'top', `${headerHeight}px`);
            this.renderer.setElementStyle(this.el.nativeElement, 'height', (currentHeight - headerHeight) + "px");
        }
    }

}
