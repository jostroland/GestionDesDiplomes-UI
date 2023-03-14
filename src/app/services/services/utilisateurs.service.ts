/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpContext } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { LightUtilisateurDto } from '../models/light-utilisateur-dto';
import { Utilisateur } from '../models/utilisateur';
import { UtilisateurDto } from '../models/utilisateur-dto';


/**
 * Utilisateurs API
 */
@Injectable({
  providedIn: 'root',
})
export class UtilisateursService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation updateUser
   */
  static readonly UpdateUserPath = '/gestion-diplome/v1/utilisateurs/update/{id}';

  /**
   * Cette methode permet d'enregistrer ou de modifier un utilisateur
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateUser()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateUser$Response(params: {
    id: number;
    body: LightUtilisateurDto
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Utilisateur>> {

    const rb = new RequestBuilder(this.rootUrl, UtilisateursService.UpdateUserPath, 'put');
    if (params) {
      rb.path('id', params.id, {});
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Utilisateur>;
      })
    );
  }

  /**
   * Cette methode permet d'enregistrer ou de modifier un utilisateur
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateUser$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateUser(params: {
    id: number;
    body: LightUtilisateurDto
  },
  context?: HttpContext

): Observable<Utilisateur> {

    return this.updateUser$Response(params,context).pipe(
      map((r: StrictHttpResponse<Utilisateur>) => r.body as Utilisateur)
    );
  }

  /**
   * Path part for operation saveUser
   */
  static readonly SaveUserPath = '/gestion-diplome/v1/utilisateurs/save';

  /**
   * Cette methode permet d'enregistrer ou de modifier un utilisateur
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `saveUser()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  saveUser$Response(params: {
    body: UtilisateurDto
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Utilisateur>> {

    const rb = new RequestBuilder(this.rootUrl, UtilisateursService.SaveUserPath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Utilisateur>;
      })
    );
  }

  /**
   * Cette methode permet d'enregistrer ou de modifier un utilisateur
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `saveUser$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  saveUser(params: {
    body: UtilisateurDto
  },
  context?: HttpContext

): Observable<Utilisateur> {

    return this.saveUser$Response(params,context).pipe(
      map((r: StrictHttpResponse<Utilisateur>) => r.body as Utilisateur)
    );
  }

  /**
   * Path part for operation createUser
   */
  static readonly CreateUserPath = '/gestion-diplome/v1/utilisateurs/create';

  /**
   * Cette methode permet d'enregistrer ou de modifier un utilisateur
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createUser()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  createUser$Response(params: {
    utilisateurDto: UtilisateurDto;
    body?: {
'file': Blob;
}
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Utilisateur>> {

    const rb = new RequestBuilder(this.rootUrl, UtilisateursService.CreateUserPath, 'post');
    if (params) {
      rb.query('utilisateurDto', params.utilisateurDto, {});
      rb.body(params.body, 'multipart/form-data');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Utilisateur>;
      })
    );
  }

  /**
   * Cette methode permet d'enregistrer ou de modifier un utilisateur
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createUser$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  createUser(params: {
    utilisateurDto: UtilisateurDto;
    body?: {
'file': Blob;
}
  },
  context?: HttpContext

): Observable<Utilisateur> {

    return this.createUser$Response(params,context).pipe(
      map((r: StrictHttpResponse<Utilisateur>) => r.body as Utilisateur)
    );
  }

  /**
   * Path part for operation getPhotoUser
   */
  static readonly GetPhotoUserPath = '/gestion-diplome/v1/utilisateurs/photo/{id}';

  /**
   * Cette methode permet d'obtenir la photo de l'utilisateur conntecté à partir de son ID un utilisateur
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getPhotoUser()` instead.
   *
   * This method doesn't expect any request body.
   */
  getPhotoUser$Response(params: {
    id: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<string>>> {

    const rb = new RequestBuilder(this.rootUrl, UtilisateursService.GetPhotoUserPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<string>>;
      })
    );
  }

  /**
   * Cette methode permet d'obtenir la photo de l'utilisateur conntecté à partir de son ID un utilisateur
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getPhotoUser$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getPhotoUser(params: {
    id: number;
  },
  context?: HttpContext

): Observable<Array<string>> {

    return this.getPhotoUser$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<string>>) => r.body as Array<string>)
    );
  }

  /**
   * Path part for operation desactiveUser
   */
  static readonly DesactiveUserPath = '/gestion-diplome/v1/utilisateurs/desactive/{id}';

  /**
   * Cette methode permet d'activer utilisateur
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `desactiveUser()` instead.
   *
   * This method doesn't expect any request body.
   */
  desactiveUser$Response(params: {
    id: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Utilisateur>> {

    const rb = new RequestBuilder(this.rootUrl, UtilisateursService.DesactiveUserPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Utilisateur>;
      })
    );
  }

  /**
   * Cette methode permet d'activer utilisateur
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `desactiveUser$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  desactiveUser(params: {
    id: number;
  },
  context?: HttpContext

): Observable<Utilisateur> {

    return this.desactiveUser$Response(params,context).pipe(
      map((r: StrictHttpResponse<Utilisateur>) => r.body as Utilisateur)
    );
  }

  /**
   * Path part for operation findUserByNom
   */
  static readonly FindUserByNomPath = '/gestion-diplome/v1/utilisateurs/byNom/{nom}';

  /**
   * Cette methode permet de rechercher par son CODE un utilisateur
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findUserByNom()` instead.
   *
   * This method doesn't expect any request body.
   */
  findUserByNom$Response(params: {
    nom: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<UtilisateurDto>> {

    const rb = new RequestBuilder(this.rootUrl, UtilisateursService.FindUserByNomPath, 'get');
    if (params) {
      rb.path('nom', params.nom, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<UtilisateurDto>;
      })
    );
  }

  /**
   * Cette methode permet de rechercher par son CODE un utilisateur
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findUserByNom$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findUserByNom(params: {
    nom: string;
  },
  context?: HttpContext

): Observable<UtilisateurDto> {

    return this.findUserByNom$Response(params,context).pipe(
      map((r: StrictHttpResponse<UtilisateurDto>) => r.body as UtilisateurDto)
    );
  }

  /**
   * Path part for operation findUserById
   */
  static readonly FindUserByIdPath = '/gestion-diplome/v1/utilisateurs/byId/{id}';

  /**
   * Cette methode permet de rechercher par son ID un utilisateur
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findUserById()` instead.
   *
   * This method doesn't expect any request body.
   */
  findUserById$Response(params: {
    id: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<UtilisateurDto>> {

    const rb = new RequestBuilder(this.rootUrl, UtilisateursService.FindUserByIdPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<UtilisateurDto>;
      })
    );
  }

  /**
   * Cette methode permet de rechercher par son ID un utilisateur
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findUserById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findUserById(params: {
    id: number;
  },
  context?: HttpContext

): Observable<UtilisateurDto> {

    return this.findUserById$Response(params,context).pipe(
      map((r: StrictHttpResponse<UtilisateurDto>) => r.body as UtilisateurDto)
    );
  }

  /**
   * Path part for operation findAllUsers
   */
  static readonly FindAllUsersPath = '/gestion-diplome/v1/utilisateurs/all';

  /**
   * Cette methode permet de sélectionner tous les utilisateurs
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findAllUsers()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAllUsers$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<UtilisateurDto>>> {

    const rb = new RequestBuilder(this.rootUrl, UtilisateursService.FindAllUsersPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<UtilisateurDto>>;
      })
    );
  }

  /**
   * Cette methode permet de sélectionner tous les utilisateurs
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findAllUsers$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAllUsers(params?: {
  },
  context?: HttpContext

): Observable<Array<UtilisateurDto>> {

    return this.findAllUsers$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<UtilisateurDto>>) => r.body as Array<UtilisateurDto>)
    );
  }

  /**
   * Path part for operation findAllUsersByPage
   */
  static readonly FindAllUsersByPagePath = '/gestion-diplome/v1/utilisateurs/all/page';

  /**
   * Cette methode permet de sélectionner tous les Diplomes
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findAllUsersByPage()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAllUsersByPage$Response(params?: {
    page?: number;
    size?: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<{
[key: string]: {
};
}>> {

    const rb = new RequestBuilder(this.rootUrl, UtilisateursService.FindAllUsersByPagePath, 'get');
    if (params) {
      rb.query('page', params.page, {});
      rb.query('size', params.size, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<{
        [key: string]: {
        };
        }>;
      })
    );
  }

  /**
   * Cette methode permet de sélectionner tous les Diplomes
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findAllUsersByPage$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAllUsersByPage(params?: {
    page?: number;
    size?: number;
  },
  context?: HttpContext

): Observable<{
[key: string]: {
};
}> {

    return this.findAllUsersByPage$Response(params,context).pipe(
      map((r: StrictHttpResponse<{
[key: string]: {
};
}>) => r.body as {
[key: string]: {
};
})
    );
  }

  /**
   * Path part for operation activeUser
   */
  static readonly ActiveUserPath = '/gestion-diplome/v1/utilisateurs/active/{id}';

  /**
   * Cette methode permet d'activer utilisateur
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `activeUser()` instead.
   *
   * This method doesn't expect any request body.
   */
  activeUser$Response(params: {
    id: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Utilisateur>> {

    const rb = new RequestBuilder(this.rootUrl, UtilisateursService.ActiveUserPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Utilisateur>;
      })
    );
  }

  /**
   * Cette methode permet d'activer utilisateur
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `activeUser$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  activeUser(params: {
    id: number;
  },
  context?: HttpContext

): Observable<Utilisateur> {

    return this.activeUser$Response(params,context).pipe(
      map((r: StrictHttpResponse<Utilisateur>) => r.body as Utilisateur)
    );
  }

  /**
   * Path part for operation deleteUser
   */
  static readonly DeleteUserPath = '/gestion-diplome/v1/utilisateurs/delete/{id}';

  /**
   * Cette methode permet de supprimer par son ID un utilisateur
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteUser()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteUser$Response(params: {
    id: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, UtilisateursService.DeleteUserPath, 'delete');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * Cette methode permet de supprimer par son ID un utilisateur
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteUser$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteUser(params: {
    id: number;
  },
  context?: HttpContext

): Observable<void> {

    return this.deleteUser$Response(params,context).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
