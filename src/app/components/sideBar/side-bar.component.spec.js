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
 * Test Component SideBar
 */
var side_bar_component_1 = require("./side-bar.component");
var core_1 = require("@angular/core");
var TestsideBarComponent = (function () {
    function TestsideBarComponent() {
    }
    TestsideBarComponent = __decorate([
        core_1.Component({
            selector: 'test-side-bar',
            template: '<sd-side-bar></sd-side-bar>',
            directives: [side_bar_component_1.SideBarComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], TestsideBarComponent);
    return TestsideBarComponent;
}());
//# sourceMappingURL=side-bar.component.spec.js.map