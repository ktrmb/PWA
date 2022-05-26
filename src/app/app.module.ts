import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';

import {MatToolbarModule} from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatSidenavModule} from "@angular/material/sidenav";
import { AppRoutingModule } from './app-routing.module';
import {MatListModule} from "@angular/material/list";
import { OverviewComponent } from './views/overview/overview.component';
import {MatTableModule} from "@angular/material/table";
import {DatePipe} from "@angular/common";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { UserCardsComponent } from './uiElements/user-cards/user-cards.component';
import {MatCardModule} from "@angular/material/card";
import { UserViewComponent } from './views/user-view/user-view.component';
import { NewUserComponent } from './views/new-user/new-user.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {HttpClientModule} from "@angular/common/http";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatSnackBarModule} from "@angular/material/snack-bar";



@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    OverviewComponent,
    UserCardsComponent,
    UserViewComponent,
    NewUserComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    AppRoutingModule,
    MatListModule,
    MatTableModule,
    MatCheckboxModule,
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatSnackBarModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
