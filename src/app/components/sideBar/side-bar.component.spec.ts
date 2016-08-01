/**
 * Test Component SideBar
 */
import {SideBarComponent} from "./side-bar.component";
import {Component} from "@angular/core";
@Component({
    selector: 'test-side-bar',
    template: '<sd-side-bar></sd-side-bar>',
    directives: [SideBarComponent]
})
class TestsideBarComponent {
}