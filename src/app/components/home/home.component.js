"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var angular2_highcharts_1 = require('angular2-highcharts');
var chart_line_component_1 = require('../chartLine/chart-line.component');
var chartBar_component_1 = require('../chartBar/chartBar.component');
var side_bar_component_1 = require('../sideBar/side-bar.component');
var compare_cy_py_component_1 = require("../compare-cy-py/compare-cy-py.component");
var HomeComponent = (function () {
    function HomeComponent() {
        // KPI default
        this.nameChartBar1 = 'Coupon Fare by Network';
        this.nameChartBar2 = 'Cabin and Booking Class breakdown';
        this.kpi = "$prorated_fare_amount";
        this.globalsFilters = [];
        this.drilldrown1 = ['$marketing_cabin_class', '$booking_class', '$booking_class'];
        this.drilldrown2 = ['$route_origin_continent_code', '$route_origin', '$coupon_origin', '$coupon_origin'];
        this.drilldrown3 = ['$coupon_departure_date'];
    }
    HomeComponent.prototype.updateKpi = function (kpi) {
        this.kpi = kpi;
    };
    HomeComponent.prototype.updateFilters = function (newFilter) {
        this.globalsFilters.push(newFilter);
    };
    HomeComponent.prototype.removeFilter = function (index, filter) {
        this.globalsFilters.splice(index, 1);
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'home',
            moduleId: module.id,
            templateUrl: './home.component.html',
            directives: [angular2_highcharts_1.CHART_DIRECTIVES, chartBar_component_1.ChartBarComponent, side_bar_component_1.SideBarComponent, chart_line_component_1.ChartLineComponent, compare_cy_py_component_1.CompareCyPyComponent],
            styleUrls: ['./home.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map