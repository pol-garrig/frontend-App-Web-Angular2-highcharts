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
 * Service BarService
 */
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var Observable_1 = require('rxjs/Observable');
var ChartLineService = (function () {
    function ChartLineService(http) {
        this.http = http;
        this._serverLink = 'http://localhost:4444/api';
    }
    ChartLineService.prototype.getDataLine = function (id, kpi, filters) {
        var _this = this;
        var currentServerLink = this._serverLink + "/getDataLine/" + id + "/" + kpi + "/" + filters;
        return this.http.get(currentServerLink)
            .toPromise()
            .then(function (res) {
            return _this.extractDataLine(res);
        })
            .catch(this.handleError);
    };
    ChartLineService.prototype.DateFormatDataBase = function (milliseconds) {
        var _dateTemp = new Date(milliseconds);
        var _day = (_dateTemp.getDay() + 1).toString();
        var _month = (_dateTemp.getMonth() + 1).toString();
        var _year = _dateTemp.getFullYear().toString();
        if (_day.length < 2) {
            _day = '0' + _day;
        }
        if (_month.length < 2) {
            _month = '0' + _month;
        }
        var _dates = _year + '-' + _month + '-' + _day;
        return _dates;
    };
    ChartLineService.prototype.handleError = function (error) {
        var errMsg = error.message || 'Server error';
        console.error(errMsg); // log to console instead
        return Observable_1.Observable.throw(errMsg);
    };
    ChartLineService.prototype.extractDataLine = function (res) {
        var _couponFarePerDaySortByYear = [];
        var _courrentYear = [];
        var _pastYear = [];
        if (res.status < 200 || res.status >= 300) {
            throw new Error('Bad response status: ' + res.status);
        }
        var body = res.json();
        var tmpCurrentYear = body[body.length - 1]._id.substr(0, 4);
        for (var index = body.length - 1; index >= 0; --index) {
            if ((body[index]._id !== 'undefined') || (body[index].kpi !== 'undefined')) {
                var _temp = [];
                var tmpPastYear = body[index]._id.substr(0, 4);
                if (tmpCurrentYear === tmpPastYear) {
                    _temp.push(new Date([body[index]._id][0]).getTime());
                    _temp.push([body[index].kpi][0]);
                    _courrentYear.push(_temp);
                }
                else {
                    var str = [body[index]._id][0];
                    var res_1 = str.replace('2015', '2016');
                    _temp.push(new Date(res_1).getTime());
                    _temp.push([body[index].kpi][0]);
                    _pastYear.push(_temp);
                }
            }
            else {
                console.log('_id or kpi is undefined');
            }
        }
        // error 15 hihgcharts, perfomances
        _courrentYear.reverse();
        _pastYear.reverse();
        _couponFarePerDaySortByYear.push(_courrentYear);
        _couponFarePerDaySortByYear.push(_pastYear);
        //TODO  this.setCyAndPy(_courrentYear, _pastYear);
        return _couponFarePerDaySortByYear;
    };
    ChartLineService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], ChartLineService);
    return ChartLineService;
}());
exports.ChartLineService = ChartLineService;
//# sourceMappingURL=DataChartLineService.js.map