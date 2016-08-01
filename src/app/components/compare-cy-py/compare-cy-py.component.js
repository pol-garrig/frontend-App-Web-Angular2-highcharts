/**
 * Component CompareCyPyComponent
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
var CompareCyPyService_1 = require("../../shared/services/src/CompareCyPyService");
var CompareCyPyComponent = (function () {
    function CompareCyPyComponent(_compareCyPyService, differs) {
        this._compareCyPyService = _compareCyPyService;
        this.differ = differs.find([]).create(null);
    }
    CompareCyPyComponent.prototype.ngOnChanges = function () {
        this.id = this.drilldrown[0];
        this.getData(this.id, this.kpi, this.filters);
    };
    CompareCyPyComponent.prototype.ngDoCheck = function () {
        var changes = this.differ.diff(this.filters);
        if (changes) {
            this.getData(this.id, this.kpi, this.filters);
        }
    };
    CompareCyPyComponent.prototype.getData = function (id, kpi, filters) {
        var _this = this;
        this._compareCyPyService.getData(id, kpi, filters).then(function (res) {
            return _this.extractData(res);
        }, function (error) { return _this.errorMessage = error; });
    };
    CompareCyPyComponent.prototype.extractData = function (res) {
        console.log(res);
        this.currentYear = res[0];
        this.pastYear = res[1];
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], CompareCyPyComponent.prototype, "drilldrown", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], CompareCyPyComponent.prototype, "kpi", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], CompareCyPyComponent.prototype, "filters", void 0);
    CompareCyPyComponent = __decorate([
        core_1.Component({
            selector: 'compare-cy-py',
            providers: [CompareCyPyService_1.CompareCyPyService],
            moduleId: module.id,
            templateUrl: './compare-cy-py.component.html',
            styleUrls: ['./compare-cy-py.component.css']
        }), 
        __metadata('design:paramtypes', [CompareCyPyService_1.CompareCyPyService, core_1.IterableDiffers])
    ], CompareCyPyComponent);
    return CompareCyPyComponent;
}());
exports.CompareCyPyComponent = CompareCyPyComponent;
;
//# sourceMappingURL=compare-cy-py.component.js.map