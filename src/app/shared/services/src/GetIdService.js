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
 * Service get ID
 */
var core_1 = require('@angular/core');
var GetIdService = (function () {
    function GetIdService() {
    }
    GetIdService.prototype.getId = function (drilldown, filters) {
        var id = '';
        var filtersInDrilldown = [];
        if (filters.length > 0) {
            for (var i = 0; i < filters.length; i++) {
                var _filter = filters[i];
                var _arrayFilters = _filter.split("-");
                for (var j = 0; drilldown.length > j; j++) {
                    var _temp = drilldown[j];
                    if (_arrayFilters[0] === _temp) {
                        filtersInDrilldown.push(_arrayFilters[0]);
                    }
                }
            }
            // filter is the another chart
            if (filtersInDrilldown.length > 0) {
                // last filter
                var _temp = filtersInDrilldown[filtersInDrilldown.length - 1];
                for (var j = drilldown.length - 1; 0 <= j; j--) {
                    var _filter = drilldown[j];
                    if (_filter === _temp) {
                        id = drilldown[j + 1];
                    }
                }
            }
            else {
                id = drilldown[0];
            }
        }
        else {
            id = drilldown[0];
        }
        return id;
    };
    GetIdService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], GetIdService);
    return GetIdService;
}());
exports.GetIdService = GetIdService;
//# sourceMappingURL=GetIdService.js.map