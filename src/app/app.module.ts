import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { MenuComponent } from './components/menu/menu.component';
import { UserDasboardComponent } from './pages/user-dasboard/user-dasboard.component';
import { AdminDasboardComponent } from './admin/admin-dasboard/admin-dasboard.component';
import { AppRoutingModule } from './app-routing.module';
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from "@angular/common/http";
import {HttpInterceptorService} from "./services/http-interceptor/http-interceptor.service";
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { LightInfoComponent } from './components/light-info/light-info.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import {DatePipe} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { UserListComponent } from './pages/user/user-list/user-list.component';
import { UserNewComponent } from './pages/user/user-new/user-new.component';
import { UserProfilComponent } from './pages/user/user-profil/user-profil.component';
import { MinistreListComponent } from './pages/ministre/ministre-list/ministre-list.component';
import { MinistreNewComponent } from './pages/ministre/ministre-new/ministre-new.component';
import { RoleListComponent } from './pages/role/role-list/role-list.component';
import { RoleNewComponent } from './pages/role/role-new/role-new.component';
import { DiplomeNewComponent } from './pages/diplome/diplome-new/diplome-new.component';
import { DiplomeListComponent } from './pages/diplome/diplome-list/diplome-list.component';
import { AccessDeinedComponent } from './pages/access-deined/access-deined.component';
import { AdminMainPageComponent } from './admin/admin-main-page/admin-main-page.component';
import { ManageUsersComponent } from './admin/manage-users/manage-users.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { ConfirmRegisterComponent } from './pages/confirm-register/confirm-register.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import {NgxPaginationModule} from "ngx-pagination";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ToastrModule} from "ngx-toastr";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    MenuComponent,
    UserDasboardComponent,
    AdminDasboardComponent,
    BreadcrumbComponent,
    LightInfoComponent,
    MainPageComponent,
    UserListComponent,
    UserNewComponent,
    UserProfilComponent,
    MinistreListComponent,
    MinistreNewComponent,
    RoleListComponent,
    RoleNewComponent,
    DiplomeNewComponent,
    DiplomeListComponent,
    AccessDeinedComponent,
    AdminMainPageComponent,
    ManageUsersComponent,
    PageNotFoundComponent,
    ConfirmRegisterComponent,
    TopBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(
      {
        timeOut: 10000,
        positionClass: 'toast-bottom-right',
        preventDuplicates: true
      })
  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,
      useClass:HttpInterceptorService,
      multi:true
    },
    HttpClient,
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
