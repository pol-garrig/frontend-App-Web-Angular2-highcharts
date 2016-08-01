import {Component} from '@angular/core';
import {CHART_DIRECTIVES} from 'angular2-highcharts';
import {ChartLineComponent} from '../chartLine/chart-line.component';
import {ChartBarComponent} from '../chartBar/chartBar.component';
import {SideBarComponent} from '../sideBar/side-bar.component';
import {CompareCyPyComponent} from "../compare-cy-py/compare-cy-py.component";


@Component({
    selector: 'home',
    moduleId: module.id,
    templateUrl: './home.component.html',
    directives: [CHART_DIRECTIVES, ChartBarComponent, SideBarComponent, ChartLineComponent, CompareCyPyComponent],
    styleUrls: ['./home.component.css']
})
export class HomeComponent {
    kpi:string;
    globalsFilters:string[];
    nameChartBar1:string;
    nameChartBar2:string;
    drilldrown1:string[];
    drilldrown2:string[];
    drilldrown3:string[];

    constructor() {
        // KPI default
        this.nameChartBar1 = 'Coupon Fare by Network';
        this.nameChartBar2 = 'Cabin and Booking Class breakdown';
        this.kpi = "$prorated_fare_amount";
        this.globalsFilters = [];
        this.drilldrown1 = ['$marketing_cabin_class', '$booking_class', '$booking_class'];
        this.drilldrown2 = ['$route_origin_continent_code', '$route_origin', '$coupon_origin', '$coupon_origin'];
        this.drilldrown3 = ['$coupon_departure_date'];
    }

    updateKpi(kpi:string) {
        this.kpi = kpi;
    }

    updateFilters(newFilter:string) {
        this.globalsFilters.push(newFilter);
    }

    removeFilter(index, filter) {
        this.globalsFilters.splice(index, 1);
    }
}