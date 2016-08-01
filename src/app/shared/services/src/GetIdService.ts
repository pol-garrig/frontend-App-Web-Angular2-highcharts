/**
 * Service get ID
 */
import {Injectable} from '@angular/core';

@Injectable()
export class GetIdService {

    getId(drilldown, filters) {

        let id = '';
        let filtersInDrilldown = [];
        if (filters.length > 0) {

            for (let i = 0; i < filters.length; i++) {
                let _filter = filters[i];
                let _arrayFilters = _filter.split("-");

                for (let j = 0; drilldown.length > j; j++) {
                    let _temp = drilldown[j];

                    if (_arrayFilters[0] === _temp) {
                        filtersInDrilldown.push(_arrayFilters[0]);
                    }
                }
            }
            // filter is the another chart
            if (filtersInDrilldown.length > 0) {

                // last filter
                let _temp = filtersInDrilldown[filtersInDrilldown.length - 1];
                for (let j = drilldown.length - 1; 0 <= j; j--) {

                    let _filter = drilldown[j];
                    if (_filter === _temp) {
                        id = drilldown[j + 1];
                    }
                }
            } else {
                id = drilldown[0];
            }
        } else {
            id = drilldown[0];
        }
        return id;
    }
}