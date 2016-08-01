/**
 * Service ChartBarService
 */
import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Response} from '@angular/http';
import {Observable}     from 'rxjs/Observable';

@Injectable()
export class ChartBarService {

    private _serverLink = 'http://localhost:4444/api';

    constructor(private http:Http) {
    }

    getDataBar(name, kpi, filters) {
        let currentServerLink = this._serverLink + "/getDataBar/" + name + "/" + kpi + "/" + filters;

        return this.http.get(currentServerLink)
            .toPromise()
            .then((res) => {
                return this.extractData(res);
            })
            .catch(this.handleError);
    }

    private extractData(res:Response) {
        let _data = [];

        if (res.status < 200 || res.status >= 300) {
            throw new Error('Bad response status: ' + res.status);
        }
        let body = res.json();

        for (let index = 0; index < body.length; index++) {

            let _temp = {
                name: body[index]._id,
                y: body[index].kpi
            };
            _data.push(_temp);
        }
        return _data;
    }

    private handleError(error:any) {
        let errMsg = error.message || 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }
}