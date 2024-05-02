import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class SideNavService {

  constructor() { }
  private sidenavStateSource = new BehaviorSubject<boolean>(false);
  sidenavState$ = this.sidenavStateSource.asObservable();

  toggleSidenav() {
    this.sidenavStateSource.next(!this.sidenavStateSource.value);
  }  

}
