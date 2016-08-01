/**
 * Test Component charBar
 */
import {ChartBarComponent} from "./chartBar.component";
import {Component} from "@angular/core";
@Component({
    selector: 'test-charBar',
    template: '<sd-charBar></sd-charBar>',
    directives: [ChartBarComponent]
})
class TestChartBarComponent {
}