/**
 * Created by Garrigos Fernando on 01/07/16.
 */
import {Component, Output, EventEmitter, Input, IterableDiffers} from '@angular/core';
import {CHART_DIRECTIVES} from 'angular2-highcharts';
import {ChartBarService} from '../../shared/services/src/DataChartbarService';
import {GetIdService} from "../../shared/services/src/GetIdService";

@Component({
    selector: 'bar-chart',
    directives: [CHART_DIRECTIVES],
    moduleId: module.id,
    providers: [ChartBarService, GetIdService],
    styleUrls: ['./chartBar.component.css'],
    templateUrl: './chartBar.component.html'
})

export class ChartBarComponent {

    private selected;
    private errorMessage:string;
    private id:string;
    private options:Object;
    private differ:any;
    @Input() drilldrown:string[];
    @Input() kpi:string;
    @Input() name:string;
    @Input() filters:string[];
    @Output() newFilter = new EventEmitter();

    constructor(private _chartBarService:ChartBarService, private _getIdService:GetIdService, differs:IterableDiffers) {
        this.differ = differs.find([]).create(null);
    }

    ngOnChanges() {
        this.id = this._getIdService.getId(this.drilldrown, this.filters);
        this.getDataBar(this.id, this.kpi, this.filters);
    }

    ngDoCheck() {
        var changes = this.differ.diff(this.filters);
        if (changes) {
            this.id = this._getIdService.getId(this.drilldrown, this.filters);
            this.getDataBar(this.id, this.kpi, this.filters);
        }
    }

    onSelect(e) {
        this.selected = e.context.name;
        var filter = this.id + '-' + this.selected;
        if (this.filters.indexOf(filter) < 1) {
            this.newFilter.emit(filter);
        }
    }

    private  getDataBar(id, kpi, filters) {
        this._chartBarService.getDataBar(id, kpi, filters).then(
            (res) => {
                return this.extractData(res);
            },
            error => this.errorMessage = <any> error
        );
    }

    private extractData(res) {

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
    }
}