/**
 * Component CompareCyPyComponent
 */

import {Component, Input, IterableDiffers} from '@angular/core';
import {CompareCyPyService} from "../../shared/services/src/CompareCyPyService";

@Component({
    selector: 'compare-cy-py',
    providers: [CompareCyPyService],
    moduleId: module.id,
    templateUrl: './compare-cy-py.component.html',
    styleUrls: ['./compare-cy-py.component.css']
})
export class CompareCyPyComponent {

    @Input() drilldrown:string[];
    @Input() kpi:string;
    @Input() filters:string[];
    private id:string;
    private errorMessage:string;
    private currentYear;
    private pastYear;
    private differ:any;


    constructor(private _compareCyPyService:CompareCyPyService, differs:IterableDiffers) {
        this.differ = differs.find([]).create(null);
    }

    ngOnChanges() {
        this.id = this.drilldrown[0];
        this.getData(this.id, this.kpi, this.filters);
    }

    ngDoCheck() {
        var changes = this.differ.diff(this.filters);

        if (changes) {
            this.getData(this.id, this.kpi, this.filters);
        }
    }

    private  getData(id, kpi, filters) {
        this._compareCyPyService.getData(id, kpi, filters).then(
            (res) => {
                return this.extractData(res);
            },
            error => this.errorMessage = <any> error
        );
    }

    private extractData(res) {
        console.log(res);
        this.currentYear = res[0];
        this.pastYear = res[1];

    }
}
;