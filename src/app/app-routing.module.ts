import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SearchresultComponent } from './searchresult/searchresult.component';

const routes: Routes = [
  {
    path: "",
    component: DashboardComponent
  },
  
  {
    path: "searchresult",
    component: SearchresultComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
