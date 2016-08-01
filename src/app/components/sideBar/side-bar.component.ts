/**
 * Component SideBarComponent
 */

import {Component, EventEmitter, Output} from '@angular/core';
//import {ROUTER_DIRECTIVES} from '@angular/router';


@Component({
    selector: 'side-bar',
    moduleId: module.id,
    templateUrl: './side-bar.component.html',
    styleUrls: ['./side-bar.component.css'],
    //  directives: [ROUTER_DIRECTIVES]
})
export class SideBarComponent {

    @Output() kpi = new EventEmitter();

    setKpi(kpi:string) {
        this.kpi.emit(kpi);
    }

    /**
     * Test
     */
    goToQlik() {
        window.location.href="https://staging-qliksense.travel-intelligence.com/qs/hub/";
    }
}
