/**
 * Component ButtonGroupComponent
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
var ButtonGroupComponent = (function () {
    function ButtonGroupComponent() {
        this.dataGrouping = new core_1.EventEmitter();
        this.day = {};
        this.quarter = {
            approximation: 'sum',
            enabled: true,
            forced: true,
            units: [['month', [3]]]
        };
        this.month = {
            approximation: 'sum',
            enabled: true,
            forced: true,
            units: [['month', [1]]]
        };
    }
    ButtonGroupComponent.prototype.setDataGroupingPerDay = function (dataGrouping) {
        if (dataGrouping === 'quarter') {
            this.dataGrouping.emit(this.quarter);
        }
        else if (dataGrouping === 'month') {
            this.dataGrouping.emit(this.month);
        }
        else {
            // default per day
            this.dataGrouping.emit(this.day);
        }
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], ButtonGroupComponent.prototype, "dataGrouping", void 0);
    ButtonGroupComponent = __decorate([
        core_1.Component({
            selector: 'button-group',
            moduleId: module.id,
            templateUrl: './button-group.component.html',
            styleUrls: ['./button-group.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], ButtonGroupComponent);
    return ButtonGroupComponent;
}());
exports.ButtonGroupComponent = ButtonGroupComponent;
//# sourceMappingURL=button-group.component.js.map