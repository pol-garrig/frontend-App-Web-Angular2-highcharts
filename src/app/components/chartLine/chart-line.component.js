/**
 * Component ChartLineComponent
 */
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
var DataChartLineService_1 = require('../../shared/services/src/DataChartLineService');
var button_group_component_1 = require("../buttonGroup/button-group.component");
var ChartLineComponent = (function () {
    function ChartLineComponent(_chartLineService, differs) {
        this._chartLineService = _chartLineService;
        this.newFilter = new core_1.EventEmitter();
        this.differ = differs.find([]).create(null);
    }
    ChartLineComponent.prototype.ngOnChanges = function () {
        this.id = this.drilldrown[0];
        this.getDataLine(this.id, this.kpi, this.filters);
    };
    ChartLineComponent.prototype.ngDoCheck = function () {
        var changes = this.differ.diff(this.filters);
        if (changes) {
            this.getDataLine(this.id, this.kpi, this.filters);
        }
    };
    ChartLineComponent.prototype.onSelection = function (e) {
        // button reset zoom
        if (!e.originalEvent.resetSelection) {
            var from = e.originalEvent.xAxis[0].min;
            var to = e.originalEvent.xAxis[0].max;
            this.from = this._chartLineService.DateFormatDataBase(from);
            this.to = this._chartLineService.DateFormatDataBase(to);
        }
        else {
            this.from = "";
            this.to = "";
        }
        var filter = this.id + '-_' + this.from + '_' + this.to;
        if (this.filters.indexOf(filter) < 1) {
            this.newFilter.emit(filter);
        }
    };
    ChartLineComponent.prototype.updateDataGrouping = function (dataGrouping) {
        this.dataGrouping = dataGrouping;
        this.getDataLine(this.id, this.kpi, this.filters);
    };
    ChartLineComponent.prototype.getDataLine = function (id, kpi, filters) {
        var _this = this;
        this._chartLineService.getDataLine(id, kpi, filters).then(function (res) {
            return _this.extractData(res);
        }, function (error) { return _this.errorMessage = error; });
    };
    ChartLineComponent.prototype.extractData = function (res) {
        var allCouponFarePerDay = res;
        this.options = {
            chart: {
                zoomType: 'x',
                width: 1000,
                height: 300
            },
            title: { text: 'Coupon Fare current vs. previous year' },
            legend: {
                enabled: true,
                align: 'right',
                borderColor: 'black',
                borderWidth: 1,
                layout: 'vertical',
                verticalAlign: 'top',
                y: 100
            },
            subtitle: {
                text: document.ontouchstart === undefined ?
                    'Click and drag in the plot area to zoom in' : 'Pinch the chart to zoom in'
            },
            xAxis: {
                type: 'datetime',
                dateTimeLabelFormats: {
                    month: '%e. %b',
                    year: '%b'
                }
            },
            yAxis: {
                title: {
                    text: this.kpi
                }
            },
            tooltip: {
                dateTimeLabelFormats: {
                    day: '%b %e'
                }
            },
            scrollbar: {
                enabled: true
            },
            series: [{
                    name: 'KPI CY',
                    data: allCouponFarePerDay[0],
                    //   color: '#000000',
                    tooltip: {
                        valueDecimals: 2
                    },
                    dataGrouping: this.dataGrouping,
                    allowPointSelect: true
                }, {
                    name: 'KPI PY',
                    data: allCouponFarePerDay[1],
                    color: '#005EB8',
                    tooltip: {
                        valueDecimals: 2
                    },
                    dataGrouping: this.dataGrouping,
                    allowPointSelect: true
                }
            ]
        };
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], ChartLineComponent.prototype, "drilldrown", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], ChartLineComponent.prototype, "kpi", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], ChartLineComponent.prototype, "filters", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], ChartLineComponent.prototype, "newFilter", void 0);
    ChartLineComponent = __decorate([
        core_1.Component({
            selector: 'chart-line',
            directives: [angular2_highcharts_1.CHART_DIRECTIVES, button_group_component_1.ButtonGroupComponent],
            moduleId: module.id,
            providers: [DataChartLineService_1.ChartLineService],
            templateUrl: './chart-line.component.html',
            styleUrls: ['./chart-line.component.css']
        }), 
        __metadata('design:paramtypes', [DataChartLineService_1.ChartLineService, core_1.IterableDiffers])
    ], ChartLineComponent);
    return ChartLineComponent;
}());
exports.ChartLineComponent = ChartLineComponent;
//# sourceMappingURL=chart-line.component.js.map