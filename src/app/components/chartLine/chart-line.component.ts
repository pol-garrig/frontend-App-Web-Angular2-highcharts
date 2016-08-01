/**
 * Component ChartLineComponent
 */

import {Component, Output, EventEmitter, Input, IterableDiffers} from '@angular/core';
import {CHART_DIRECTIVES} from 'angular2-highcharts';
import {ChartLineService} from '../../shared/services/src/DataChartLineService';
import {ButtonGroupComponent} from "../buttonGroup/button-group.component";

@Component({
    selector: 'chart-line',
    directives: [CHART_DIRECTIVES, ButtonGroupComponent],
    moduleId: module.id,
    providers: [ChartLineService],
    templateUrl: './chart-line.component.html',
    styleUrls: ['./chart-line.component.css']
})
export class ChartLineComponent {

    private from:string;
    private to:string;
    private errorMessage:string;
    private options:Object;
    private id:string;
    private dataGrouping:Object;
    private differ:any;
    @Input() drilldrown:string[];
    @Input() kpi:string;
    @Input() filters:string[];
    @Output() newFilter = new EventEmitter();

    constructor(private _chartLineService:ChartLineService, differs:IterableDiffers) {
        this.differ = differs.find([]).create(null);
    }

    ngOnChanges() {
        this.id = this.drilldrown[0];
        this.getDataLine(this.id, this.kpi, this.filters);
    }

    ngDoCheck() {
        var changes = this.differ.diff(this.filters);

        if (changes) {
            this.getDataLine(this.id, this.kpi, this.filters);
        }
    }

    onSelection(e) {
        // button reset zoom
        if (!e.originalEvent.resetSelection) {
            let from = e.originalEvent.xAxis[0].min;
            let to = e.originalEvent.xAxis[0].max;

            this.from = this._chartLineService.DateFormatDataBase(from);
            this.to = this._chartLineService.DateFormatDataBase(to);
        } else {
            this.from = "";
            this.to = "";
        }

        var filter = this.id + '-_' + this.from + '_' + this.to;
        if (this.filters.indexOf(filter) < 1) {
            this.newFilter.emit(filter);
        }
    }

    updateDataGrouping(dataGrouping) {
        this.dataGrouping = dataGrouping;
        this.getDataLine(this.id, this.kpi, this.filters);
    }

    private  getDataLine(id, kpi, filters) {
        this._chartLineService.getDataLine(id, kpi, filters).then(
            (res) => {
                return this.extractData(res);
            },
            error => this.errorMessage = <any> error
        );
    }

    private extractData(res) {

        let allCouponFarePerDay = res;

        this.options = {

            chart: {
                zoomType: 'x',
                width: 1000,
                height: 300
            },
            title: {text: 'Coupon Fare current vs. previous year'}
            ,
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
            }
            ,
            xAxis: {
                type: 'datetime',
                dateTimeLabelFormats: { // don't display the dummy year
                    month: '%e. %b',
                    year: '%b'
                }
            }
            ,
            yAxis: {
                title: {
                    text: this.kpi
                }
            }
            ,
            tooltip: {
                dateTimeLabelFormats: {
                    day: '%b %e'
                }
            }
            ,
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
    }
}