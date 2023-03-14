import {Injectable, NgModule} from '@angular/core';
import {RouterModule, RouterStateSnapshot, Routes, TitleStrategy} from '@angular/router';
import {RegisterComponent} from "./pages/register/register.component";
import {LoginComponent} from "./pages/login/login.component";
import {UserProfilComponent} from "./pages/user/user-profil/user-profil.component";
import {MainPageComponent} from "./pages/main-page/main-page.component";
import {AdminDasboardComponent} from "./admin/admin-dasboard/admin-dasboard.component";
import {UserListComponent} from "./pages/user/user-list/user-list.component";
import {RoleListComponent} from "./pages/role/role-list/role-list.component";
import {UserNewComponent} from "./pages/user/user-new/user-new.component";
import {RoleNewComponent} from "./pages/role/role-new/role-new.component";
import {AccessDeinedComponent} from "./pages/access-deined/access-deined.component";
import {UserDasboardComponent} from "./pages/user-dasboard/user-dasboard.component";
import {DiplomeListComponent} from "./pages/diplome/diplome-list/diplome-list.component";
import {DiplomeNewComponent} from "./pages/diplome/diplome-new/diplome-new.component";
import {MinistreListComponent} from "./pages/ministre/ministre-list/ministre-list.component";
import {MinistreNewComponent} from "./pages/ministre/ministre-new/ministre-new.component";
import {PageNotFoundComponent} from "./pages/page-not-found/page-not-found.component";
import {Title} from "@angular/platform-browser";
import {TokenGuardService} from "./services/guard/token-guard/token-guard.service";
import {AdminGuardService} from "./services/guard/admin-guard/admin-guard.service";
import {ManageUsersComponent} from "./admin/manage-users/manage-users.component";


const routes: Routes = [
    {
      path: 'login',
      component: LoginComponent
    },
    {
      path: 'register',
      component: RegisterComponent
    },
    {
      path: 'access-denied',
      component: AccessDeinedComponent
    },
    {
      path: '',
      redirectTo: 'login',
      pathMatch: 'full'
    },
    {
      path: 'main',
      component: MainPageComponent,
      canActivate: [TokenGuardService],
      children: [
        {
          path: 'dashboard',
          title: 'Utilisateur Dashboard',
          component: UserDasboardComponent,
        },
        {
          path: 'user-list',
          title: 'Liste des utilisateurs',
          component: UserListComponent
        },
        {
          path: 'user-new',
          title: 'Creation d\'un nouvel utilisateur',
          component: UserNewComponent
        },
        {
          path: 'user-new/:id',
          component: UserNewComponent
        }
        ,
        {
          path: 'user-profile',
          title: 'Profil utilisateur',
          component: UserProfilComponent
        },
        {
          path: 'diplome-list',
          title: 'Liste des Diplomles',
          component: DiplomeListComponent
        },
        {
          path: 'diplome-new',
          component: DiplomeNewComponent
        },
        {
          path: 'diplome-new/:id',
          component: DiplomeNewComponent
        }
        ,
        {
          path: 'ministre-list',
          component: MinistreListComponent
        },
        {
          path: 'ministre-new',
          component: MinistreNewComponent
        },
        {
          path: 'ministre-new/:id',
          component: MinistreNewComponent
        },
        {
          path: 'dashboard',
          component: UserDasboardComponent
        },
        {
          path: '',
          redirectTo: 'dashboard',
          pathMatch: 'full'
        },
        { path: '**', component: PageNotFoundComponent }
      ]
    },
    {
      path: 'admin',
      component: MainPageComponent,
      canActivate: [AdminGuardService, TokenGuardService],
      children:
        [
          {
            path: 'dashboard',
            title: 'Admin Dashboard',
            component: AdminDasboardComponent
          },
          {
            path: 'role-list',
            title: 'Liste des Roles',
            component: RoleListComponent
          },
          {
            path: 'role-new',
            title: 'Creation de nouveau Roles',
            component: RoleNewComponent
          },
          {
            path: 'role-new/:id',
            title: 'Mise à jour des Roles existants',
            component: RoleNewComponent
          },
          {
            path: 'user-list',
            title: 'Liste des utilisateurs',
            component: ManageUsersComponent
          },
          {
            path: 'user-new',
            title: 'Creation d\'un nouvel utilisateur',
            component: UserNewComponent
          },
          {
            path: 'user-new/:id',
            title: 'Creation d\'un nouvel utilisateur',
            component: UserNewComponent
          },
          {
            path: '',
            redirectTo: 'dashboard',
            pathMatch: 'full'
          },
          { path: '**', component: PageNotFoundComponent }
        ]
    }
    ];


@Injectable({providedIn: 'root'})
export class TemplatePageTitleStrategy extends TitleStrategy {
  constructor(private readonly title: Title) {
    super();
  }

  override updateTitle(routerState: RouterStateSnapshot) {
    const title = this.buildTitle(routerState);
    if (title !== undefined) {
      this.title.setTitle(`Gestion des diplomes | ${title}`);
    }
  }
}
@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    {provide: TitleStrategy, useClass: TemplatePageTitleStrategy},
  ]
})
export class AppRoutingModule {
}
