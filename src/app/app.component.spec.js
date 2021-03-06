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
var testing_1 = require("@angular/compiler/testing");
var core_1 = require("@angular/core");
var testing_2 = require("@angular/core/testing");
var dom_adapter_1 = require("@angular/platform-browser/src/dom/dom_adapter");
var app_component_1 = require("./app.component");
function main() {
    testing_2.describe('App component', function () {
        testing_2.it('should work', testing_2.inject([testing_1.TestComponentBuilder], function (tcb) {
            tcb.createAsync(app_component_1.AppComponent)
                .then(function (rootTC) {
                var aboutDOMEl = rootTC.debugElement.children[0].nativeElement;
                testing_2.expect(dom_adapter_1.getDOM().querySelectorAll(aboutDOMEl, 'h1')[0].textContent).toEqual('My First Angular 2 App');
            });
        }));
    });
}
exports.main = main;
var TestComponent = (function () {
    function TestComponent() {
    }
    TestComponent = __decorate([
        core_1.Component({
            selector: 'test-cmp',
            directives: [app_component_1.AppComponent],
            template: '<sd-app></sd-app>'
        }), 
        __metadata('design:paramtypes', [])
    ], TestComponent);
    return TestComponent;
}());
//# sourceMappingURL=app.component.spec.js.map