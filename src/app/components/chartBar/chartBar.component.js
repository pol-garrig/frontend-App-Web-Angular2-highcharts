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
/**
 * Created by Garrigos Fernando on 01/07/16.
 */
var core_1 = require('@angular/core');
var angular2_highcharts_1 = require('angular2-highcharts');
var DataChartbarService_1 = require('../../shared/services/src/DataChartbarService');
var GetIdService_1 = require("../../shared/services/src/GetIdService");
var ChartBarComponent = (function () {
    function ChartBarComponent(_chartBarService, _getIdService, differs) {
        this._chartBarService = _chartBarService;
        this._getIdService = _getIdService;
        this.newFilter = new core_1.EventEmitter();
        this.differ = differs.find([]).create(null);
    }
    ChartBarComponent.prototype.ngOnChanges = function () {
        this.id = this._getIdService.getId(this.drilldrown, this.filters);
        this.getDataBar(this.id, this.kpi, this.filters);
    };
    ChartBarComponent.prototype.ngDoCheck = function () {
        var changes = this.differ.diff(this.filters);
        if (changes) {
            this.id = this._getIdService.getId(this.drilldrown, this.filters);
            this.getDataBar(this.id, this.kpi, this.filters);
        }
    };
    ChartBarComponent.prototype.onSelect = function (e) {
        this.selected = e.context.name;
        var filter = this.id + '-' + this.selected;
        if (this.filters.indexOf(filter) < 1) {
            this.newFilter.emit(filter);
        }
    };
    ChartBarComponent.prototype.getDataBar = function (id, kpi, filters) {
        var _this = this;
        this._chartBarService.getDataBar(id, kpi, filters).then(function (res) {
            return _this.extractData(res);
        }, function (error) { return _this.errorMessage = error; });
    };
    ChartBarComponent.prototype.extractData = function (res) {
        this.options = {
            chart: {
                type: 'bar',
                height: 350
            },
            title: {
                text: this.name
            },
            xAxis: {
                type: 'category',
            },
            yAxis: {
                title: {
                    text: this.kpi
                }
            },
            plotOptions: {
                series: {
                    borderWidth: 0,
                    dataLabels: {
                        enabled: true,
                        format: '{point.y:.2f}'
                    }
                }
            },
            tooltip: {
                headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
                pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}</b><br/>'
            },
            series: [{
                    name: this.id,
                    data: res,
                    allowPointSelect: true
                }]
        };
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], ChartBarComponent.prototype, "drilldrown", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], ChartBarComponent.prototype, "kpi", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], ChartBarComponent.prototype, "name", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], ChartBarComponent.prototype, "filters", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], ChartBarComponent.prototype, "newFilter", void 0);
    ChartBarComponent = __decorate([
        core_1.Component({
            selector: 'bar-chart',
            directives: [angular2_highcharts_1.CHART_DIRECTIVES],
            moduleId: module.id,
            providers: [DataChartbarService_1.ChartBarService, GetIdService_1.GetIdService],
            styleUrls: ['./chartBar.component.css'],
            templateUrl: './chartBar.component.html'
        }), 
        __metadata('design:paramtypes', [DataChartbarService_1.ChartBarService, GetIdService_1.GetIdService, core_1.IterableDiffers])
    ], ChartBarComponent);
    return ChartBarComponent;
}());
exports.ChartBarComponent = ChartBarComponent;
//# sourceMappingURL=chartBar.component.js.map