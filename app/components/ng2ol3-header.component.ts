/// <reference path="../../node_modules/@types/openlayers/index.d.ts" />

import {Component, Input, OnInit} from '@angular/core';
import {Ng2ol3Config} from '../classes/ng2ol3config';
import {Ng2ol3Header} from '../classes/ng2ol3header';
import {Ng2Ol3Logo} from '../classes/ng2ol3logo';

@Component({
    selector: 'ng2ol3-header',
    template: `
      <div class="header-content">
        <span class="header-logo">
          <img *ngIf="logo !== null" src="{{logoSrc}}">
        </span>
        <span class="header-title" *ngIf="title !== null">{{title}}</span>
      </div>
    `,
    host: {
        class: 'ng2ol3-header'
    }
})

export class Ng2ol3HeaderComponent implements OnInit {
    @Input() config: Ng2ol3Config;
    header: Ng2ol3Header;
    title: string;
    logo: Ng2Ol3Logo;
    logoSrc: string;

    ngOnInit() {
        this.header = this.config.getAppHeader();
        this.title = this.header.getTitle();
        this.logo = this.header.getLogo();
        this.logoSrc = this.logo.getSrc();
    }

}
