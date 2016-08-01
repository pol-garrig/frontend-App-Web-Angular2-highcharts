import {bootstrap} from "@angular/platform-browser-dynamic";
import {AppComponent} from "./app.component";
import {ROUTER_PROVIDERS} from '@angular/router-deprecated';
import {enableProdMode} from "@angular/core";
import {HTTP_PROVIDERS, Http} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';

if ('<%= ENV %>' === 'prod') {
    enableProdMode();
}

bootstrap(AppComponent, [
    ROUTER_PROVIDERS,
    HTTP_PROVIDERS
]);