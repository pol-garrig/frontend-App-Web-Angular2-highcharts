/**
 * Component ButtonGroupComponent
 */

import {Component, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'button-group',
    moduleId: module.id,
    templateUrl: './button-group.component.html',
    styleUrls: ['./button-group.component.css']
})
export class ButtonGroupComponent {

    @Output() dataGrouping = new EventEmitter();

    private day = {};

    private quarter = {
        approximation: 'sum',
        enabled: true,
        forced: true,
        units: [['month', [3]]]
    };

    private month = {
        approximation: 'sum',
        enabled: true,
        forced: true,
        units: [['month', [1]]]
    };

    setDataGroupingPerDay(dataGrouping) {

        if (dataGrouping === 'quarter') {
            this.dataGrouping.emit(this.quarter);
        } else if (dataGrouping === 'month') {
            this.dataGrouping.emit(this.month);
        } else {
            // default per day
            this.dataGrouping.emit(this.day);
        }
    }
}