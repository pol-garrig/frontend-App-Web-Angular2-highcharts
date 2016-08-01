/**
 * Service CompareCyPyService
 */
import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class CompareCyPyService {

    private _serverLink = 'http://localhost:4444/api';

    constructor(private http:Http) {
    }

    getData(id, kpi, filters) {
        let currentServerLink = this._serverLink + "/getDataLine/" + id + "/" + kpi + "/" + filters;

        return this.http.get(currentServerLink)
            .toPromise()
            .then((res) => {
                return this.extractDataPercentage(res);
            })
            .catch(this.handleError);
    }

    private handleError(error:any) {
        let errMsg = error.message || 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }

    private extractDataPercentage(res:Response) {

        if (res.status < 200 || res.status >= 300) {
            throw new Error('Bad response status: ' + res.status);
        }

        let body = res.json();

        let _couponFareCy = 0;
        let _couponFarePy = 0;
        let _couponFareCyPy = [];

        for (let index = body.length - 1; index >= 0; --index) {

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
    }

    private percentage(cy, py) {
        let res = 0;
        console.log('cy=0', cy)
        console.log('py=0', py)

        if (py === 0) {
            console.log('py=0')
            res = 100;
        }
        else if (cy === 0) {
            console.log('cy=0')

            res = 0;
        } else {
            console.log('pesle')

            res = (cy * 100 / py) - 100
        }
        return res;
    }
}