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
 * Service ChartBarService
 */
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var Observable_1 = require('rxjs/Observable');
var ChartBarService = (function () {
    function ChartBarService(http) {
        this.http = http;
        this._serverLink = 'http://localhost:4444/api';
    }
    ChartBarService.prototype.getDataBar = function (name, kpi, filters) {
        var _this = this;
        var currentServerLink = this._serverLink + "/getDataBar/" + name + "/" + kpi + "/" + filters;
        return this.http.get(currentServerLink)
            .toPromise()
            .then(function (res) {
            return _this.extractData(res);
        })
            .catch(this.handleError);
    };
    ChartBarService.prototype.extractData = function (res) {
        var _data = [];
        if (res.status < 200 || res.status >= 300) {
            throw new Error('Bad response status: ' + res.status);
        }
        var body = res.json();
        for (var index = 0; index < body.length; index++) {
            var _temp = {
                name: body[index]._id,
                y: body[index].kpi
            };
            _data.push(_temp);
        }
        return _data;
    };
    ChartBarService.prototype.handleError = function (error) {
        var errMsg = error.message || 'Server error';
        console.error(errMsg); // log to console instead
        return Observable_1.Observable.throw(errMsg);
    };
    ChartBarService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], ChartBarService);
    return ChartBarService;
}());
exports.ChartBarService = ChartBarService;
//# sourceMappingURL=DataChartbarService.js.map