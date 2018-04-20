import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class NavigationService {

  constructor(private http: HttpClient) {
    http.get("")
  }
}
