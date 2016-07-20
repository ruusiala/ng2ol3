import {Component, Input, OnInit, OnDestroy, ElementRef, Renderer} from '@angular/core';
import {Ng2ol3Map} from '../classes/ng2ol3map';
import {Ng2ol3Config} from '../classes/ng2ol3config';

@Component({
    selector: 'ng2ol3-map',
    template: `
      <div id="map" styled-map></div>
    `,
    host: {
        class: 'ng2ol3-map'
    }
})

export class Ng2Ol3MapComponent implements OnInit, OnDestroy {
    @Input() map: Ng2ol3Map;
    @Input() config: Ng2ol3Config;

    constructor(public el: ElementRef, public renderer: Renderer) {

    }

    ngOnInit() {
        let mapElement = this.el.nativeElement.children[0];
        // Adjust the map size a header
        if (this.config.getAppHeader()) {
            let headerHeight = document.getElementsByClassName("header-content")[0].clientHeight;
            this.renderer.setElementStyle(mapElement, 'padding-top', `${headerHeight}px`);
        }
        // Adjust the map size a sidebar
        if (this.config.getAppSidebar()) {
            let sidebarWidth = document.getElementsByClassName("sidebar-content")[0].clientWidth;
            this.renderer.setElementStyle(mapElement, 'padding-left', `${sidebarWidth}px`);
        }
        this.map.updateSize();
    }

    ngOnDestroy() {

    }
}
