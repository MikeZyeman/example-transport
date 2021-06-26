import { HttpService, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable()
export class ConnectionsService {

  constructor(private http: HttpService) {
  }

  getConnections(from: string, to: string) {
    return this.http.get(`http://transport.opendata.ch/v1/connections?from=${from}&to=${to}`)
      .pipe(
        map((res) => {
          console.log(res.data)

          return res.data;
        })
      )
      .toPromise()
  }

}
