import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {OverviewComponent} from "./views/overview/overview.component";
import {UserViewComponent} from "./views/user-view/user-view.component";
import {NewUserComponent} from "./views/new-user/new-user.component";

const routes: Routes = [
  { path: 'overview', component: OverviewComponent },
  { path: 'user/:id', component: UserViewComponent },
  { path: 'newUser', component: NewUserComponent },
  {path: '', redirectTo: '/overview', pathMatch: 'full'},
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
