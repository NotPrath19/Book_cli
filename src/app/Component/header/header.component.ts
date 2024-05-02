import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { MatDrawer, MatSidenavModule } from '@angular/material/sidenav';
import { SideNavService } from 'src/app/Services/side-nav.service';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {  
  // constructor(private sidenavService: SideNavService) { } 
  // @Output() toggle = new EventEmitter();

}

