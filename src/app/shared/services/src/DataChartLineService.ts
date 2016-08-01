/**
 * Service BarService
 */
import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Response} from '@angular/http';
import {Observable}     from 'rxjs/Observable';

@Injectable()
export class ChartLineService {

    private _serverLink = 'http://localhost:4444/api';

    constructor(private http:Http) {
    }

    getDataLine(id, kpi, filters) {
        let currentServerLink = this._serverLink + "/getDataLine/" + id + "/" + kpi + "/" + filters;

        return this.http.get(currentServerLink)
            .toPromise()
            .then((res) => {
                return this.extractDataLine(res);
            })
            .catch(this.handleError);
    }

    DateFormatDataBase(milliseconds) {

        let _dateTemp = new Date(milliseconds);
        let _day = (_dateTemp.getDay() + 1).toString();
        let _month = (_dateTemp.getMonth() + 1).toString();
        let _year = _dateTemp.getFullYear().toString();

        if (_day.length < 2) {
            _day = '0' + _day;
        }

        if (_month.length < 2) {
            _month = '0' + _month;
        }

        let _dates = _year + '-' + _month + '-' + _day;

        return _dates;
    }

    private handleError(error:any) {
        let errMsg = error.message || 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }

    private extractDataLine(res:Response) {

        let _couponFarePerDaySortByYear = [];
        let _courrentYear = [];
        let _pastYear = [];

        if (res.status < 200 || res.status >= 300) {
            throw new Error('Bad response status: ' + res.status);
        }

        let body = res.json();
        let tmpCurrentYear = body[body.length - 1]._id.substr(0, 4);

        for (let index = body.length - 1; index >= 0; --index) {

            if ((body[index]._id !== 'undefined') || (body[index].kpi !== 'undefined')) {
                let _temp = [];

                let tmpPastYear = body[index]._id.substr(0, 4);

                if (tmpCurrentYear === tmpPastYear) {
                    _temp.push(new Date([body[index]._id][0]).getTime());
                    _temp.push([body[index].kpi][0]);
                    _courrentYear.push(_temp);
                } else {
                    let str = [body[index]._id][0];
                    let res = str.replace('2015', '2016');
                    _temp.push(new Date(res).getTime());
                    _temp.push([body[index].kpi][0]);
                    _pastYear.push(_temp);
                }
            } else {
                console.log('_id or kpi is undefined')
            }
        }
        // error 15 hihgcharts, perfomances
        _courrentYear.reverse();
        _pastYear.reverse();
        _couponFarePerDaySortByYear.push(_courrentYear);
        _couponFarePerDaySortByYear.push(_pastYear);
        //TODO  this.setCyAndPy(_courrentYear, _pastYear);
        return _couponFarePerDaySortByYear;
    }
}