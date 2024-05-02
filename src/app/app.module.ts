import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddbookComponent } from './Component/addbook/addbook.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {ReactiveFormsModule,FormControl,FormGroup} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {CommonModule} from '@angular/common';
import {HttpClientModule } from '@angular/common/http';
import {MatRadioModule} from '@angular/material/radio';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatButtonModule} from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ViewbookComponent } from './Component/viewbook/viewbook.component';
import {MatTableModule} from '@angular/material/table';
import { UpdateComponent } from './Component/update/update.component';
import { HeaderComponent } from './Component/header/header.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { FooterComponent } from './Component/footer/footer.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import { SideNavService } from './Services/side-nav.service';
import { CalendarComponent } from './Component/calendar/calendar.component';
import { SchedulerDirective } from './Directives/scheduler.directive';



@NgModule({
  declarations: [
    AppComponent,
    AddbookComponent,
    ViewbookComponent,
    UpdateComponent,
    HeaderComponent,
    FooterComponent,
    CalendarComponent,
    SchedulerDirective,
  ],
  exports:[],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    CommonModule,
    HttpClientModule,
    MatRadioModule,
    MatDatepickerModule,
    MatTableModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
   ],
  providers: [SideNavService,],
  bootstrap: [AppComponent]
})
export class AppModule { }
