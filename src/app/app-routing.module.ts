import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddbookComponent } from './Component/addbook/addbook.component';
import { ViewbookComponent } from './Component/viewbook/viewbook.component';
import { UpdateComponent } from './Component/update/update.component';
import { CalendarComponent } from './Component/calendar/calendar.component';

const routes: Routes = [{
  path:'addbook',component:AddbookComponent
},{path:'viewbook',component:ViewbookComponent}
,{path:'update/:id',component:UpdateComponent},
{path:'calendar',component:CalendarComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
