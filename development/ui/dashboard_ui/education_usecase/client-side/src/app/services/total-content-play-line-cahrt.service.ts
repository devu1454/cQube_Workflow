import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { KeycloakSecurityService } from '../keycloak-security.service';
import { AppServiceComponent } from '../app.service';

@Injectable({
  providedIn: 'root'
})
export class TotalContentPlayLineCahrtService {
  public baseUrl;
  
  constructor(public http: HttpClient, public keyCloakService: KeycloakSecurityService, public service: AppServiceComponent) {
    this.baseUrl = service.baseUrl;
  }

  getTotalCotentPlayLine() {
    this.service.logoutOnTokenExpire();
    return this.http.get(`${this.baseUrl}/diksha/totalContentPlayOverYears/stateData`);
  }

}
