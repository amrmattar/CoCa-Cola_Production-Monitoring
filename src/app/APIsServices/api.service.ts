import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
// import "rxjs/Rx";
import { environment } from 'src/environments/environment.prod';
import {
  HttpErrorResponse,
  HttpHeaders,
  HttpClient,
  HttpParams,
} from '@angular/common/http';
import { DashboardFilter } from '../Shared/models/DashboardFilter';
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  //Constructor
  constructor(private http: HttpClient) {}

  getFactories() {
    return this.http.get(environment.sourceUrl + '/Navigation/Factories/');
  }
  getLinesFactories(factId) {
    return this.http.get(
      environment.sourceUrl + '/Navigation/LinesOfFactory/' + factId
    );
  }
  // getFunctionsFactories(factId) {
  //   return this.http.get(
  //     environment.sourceUrl + '/Navigation/FunctionsOfFactory/' + factId
  //   );
  // }
  getMachinesofLines(LineId) {
    return this.http.get(
      environment.sourceUrl + '/Navigation/MachinesOfLines/' + LineId
    );
  }
  // getMachinesList(factName,time,timeType) {
  //   return this.http.get(environment.sourceUrl + '/LineKPIs/GetAllMachines?Factory='+factName+'&Time='+time+'&TimeType='+timeType);
  // }

  getFactoryList() {
    return this.http.get<any[]>(environment.sourceUrl + '/factories');
  }

  putFactory(factory) {
    return this.http.put<any>(
      environment.sourceUrl + `/factories/${factory.id}`,
      factory,
      this.httpOptions
    );
  }

  getFunctionsList() {
    return this.http.get<any[]>(environment.sourceUrl + '/functions');
  }

  putFunction(func) {
    return this.http.put<any>(
      environment.sourceUrl + `/functions/${func.id}`,
      func,
      this.httpOptions
    );
  }

  getLineList() {
    return this.http.get<any[]>(environment.sourceUrl + '/lines');
  }

  putLine(line) {
    return this.http.put<any>(
      environment.sourceUrl + `/lines/${line.id}`,
      line,
      this.httpOptions
    );
  }

  getMachineList() {
    return this.http.get<any[]>(environment.sourceUrl + '/machines');
  }
  getMachineHistory() {
    return this.http.get<any[]>(
      environment.sourceUrl + '/LineKPIs/GetMachineHistory'
    );
  }
  getMachineTimeline() {
    return this.http.get<any[]>(
      environment.sourceUrl + '/LineKPIs/GetMachineTimeline'
    );
  }

  putMachine(machine) {
    return this.http.put<any>(
      environment.sourceUrl + `/machines/${machine.id}`,
      machine,
      this.httpOptions
    );
  }
  // getDashboardCharts(shiftNum) {
  //   console.log(shiftNum);
  //   var url = `/LineKPIs/GetLineKPIs/${shiftNum}?factory=Alex`;
  //   return this.http.get<any>(environment.sourceUrl + url, this.httpOptions);
  // }
  getTimeLine(filter: DashboardFilter) {
    var date = new Date();
    var hours = date.getHours();
    if (hours >= 8 && hours < 20) {
      date.setHours(8, 0, 0, 0);
    } else {
      if (hours < 24 && hours > 20) {
        date.setHours(20, 0, 0, 0);
      } else {
        date.setDate(date.getDate() - 1);
        date.setHours(20, 0, 0, 0);
      }
    }
    var datte = new Date(
      date.setHours(new Date(date).getHours() + 2)
      ).toISOString();
      var dat = datte.substring(0, datte.length - 1);
      console.log("hbjytvdcxeavzdfwesrdtfygh")
      if (filter.LineID != null) {
        var url = `/LineKPIs/GetTimeline?Factory=${filter.Factory}&LineID=${filter.LineID}`;
      } else {
        var url = `/LineKPIs/GetTimeline?Factory=${filter.Factory}`;
      }
      
      return this.http.get<any>(environment.sourceUrl + url, this.httpOptions);
    }
    /*--------------------------HttpErrorHandler----------------------- */
    errorHandler(error: HttpErrorResponse) {
      console.log(error);
      return Observable.throw(error.status || 'Server Error');
    }
    
    getDashboard(filter: DashboardFilter) {
      if (
        filter.LineID == null &&
        filter.startDate == null &&
        filter.endDate == null
      ) {
        if (filter.duration != null) {
          var url = `/LineKPIs/GetData?Factory=${filter.Factory}&timetype=${filter.TimeType}&Duration=${filter.duration}`;
        } else {
          var url = `/LineKPIs/GetData?Factory=${filter.Factory}&timetype=${filter.TimeType}`;
        }
      } else if (
        filter.startDate != null &&
        filter.endDate != null &&
        filter.LineID != null
      ) {
        console.log('working');
        var url = `/LineKPIs/GetData?Factory=${filter.Factory}&LineNum=${filter.LineID}&timetype=${filter.TimeType}&StartTime=${filter.startDate}&EndTime=${filter.endDate}`;
      } else if (
        filter.startDate != null &&
        filter.endDate != null &&
        filter.LineID == null
      ) {
        console.log('not working');
        var url = `/LineKPIs/GetData?Factory=${filter.Factory}&timetype=${filter.TimeType}&StartTime=${filter.startDate}&EndTime=${filter.endDate}`;
      } else if (
        filter.startDate == null &&
        filter.endDate == null &&
        filter.LineID != null
      ) {

        var url = `/LineKPIs/GetData?Factory=${filter.Factory}&LineNum=${filter.LineID}&timetype=${filter.TimeType}`;
      }
      console.log(filter);
      return this.http.get<any>(environment.sourceUrl + url, this.httpOptions);
    }
  /*--------------------------HttpErrorHandler----------------------- */
}
