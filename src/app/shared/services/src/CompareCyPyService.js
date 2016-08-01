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
 * Service CompareCyPyService
 */
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
var CompareCyPyService = (function () {
    function CompareCyPyService(http) {
        this.http = http;
        this._serverLink = 'http://localhost:4444/api';
    }
    CompareCyPyService.prototype.getData = function (id, kpi, filters) {
        var _this = this;
        var currentServerLink = this._serverLink + "/getDataLine/" + id + "/" + kpi + "/" + filters;
        return this.http.get(currentServerLink)
            .toPromise()
            .then(function (res) {
            return _this.extractDataPercentage(res);
        })
            .catch(this.handleError);
    };
    CompareCyPyService.prototype.handleError = function (error) {
        var errMsg = error.message || 'Server error';
        console.error(errMsg); // log to console instead
        return Observable_1.Observable.throw(errMsg);
    };
    CompareCyPyService.prototype.extractDataPercentage = function (res) {
        if (res.status < 200 || res.status >= 300) {
            throw new Error('Bad response status: ' + res.status);
        }
        var body = res.json();
        var _couponFareCy = 0;
        var _couponFarePy = 0;
        var _couponFareCyPy = [];
        for (var index = body.length - 1; index >= 0; --index) {
            if (body[index]._id.includes('2016')) {
                _couponFareCy += body[index].kpi;
            }
            if (body[index]._id.includes('2015')) {
                _couponFarePy += body[index].kpi;
            }
        }
        _couponFareCyPy.push(_couponFareCy);
        _couponFareCyPy.push(this.percentage(_couponFareCy, _couponFarePy));
        return _couponFareCyPy;
    };
    CompareCyPyService.prototype.percentage = function (cy, py) {
        var res = 0;
        console.log('cy=0', cy);
        console.log('py=0', py);
        if (py === 0) {
            console.log('py=0');
            res = 100;
        }
        else if (cy === 0) {
            console.log('cy=0');
            res = 0;
        }
        else {
            console.log('pesle');
            res = (cy * 100 / py) - 100;
        }
        return res;
    };
    CompareCyPyService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], CompareCyPyService);
    return CompareCyPyService;
}());
exports.CompareCyPyService = CompareCyPyService;
//# sourceMappingURL=CompareCyPyService.js.map