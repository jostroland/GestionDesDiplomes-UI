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

import { RoleDto } from '../models/role-dto';


/**
 * Roles API
 */
@Injectable({
  providedIn: 'root',
})
export class RolesService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation updateRole
   */
  static readonly UpdateRolePath = '/gestion-diplome/v1/roles/update/{id}';

  /**
   * Cette methode permet de modifier un role
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateRole()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateRole$Response(params: {
    id: number;
    body: RoleDto
  },
  context?: HttpContext

): Observable<StrictHttpResponse<number>> {

    const rb = new RequestBuilder(this.rootUrl, RolesService.UpdateRolePath, 'put');
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
        return (r as HttpResponse<any>).clone({ body: parseFloat(String((r as HttpResponse<any>).body)) }) as StrictHttpResponse<number>;
      })
    );
  }

  /**
   * Cette methode permet de modifier un role
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateRole$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateRole(params: {
    id: number;
    body: RoleDto
  },
  context?: HttpContext

): Observable<number> {

    return this.updateRole$Response(params,context).pipe(
      map((r: StrictHttpResponse<number>) => r.body as number)
    );
  }

  /**
   * Path part for operation saveRole
   */
  static readonly SaveRolePath = '/gestion-diplome/v1/roles/create';

  /**
   * Cette methode permet d'enregistrer ou de modifier un role
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `saveRole()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  saveRole$Response(params: {
    body: RoleDto
  },
  context?: HttpContext

): Observable<StrictHttpResponse<number>> {

    const rb = new RequestBuilder(this.rootUrl, RolesService.SaveRolePath, 'post');
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
        return (r as HttpResponse<any>).clone({ body: parseFloat(String((r as HttpResponse<any>).body)) }) as StrictHttpResponse<number>;
      })
    );
  }

  /**
   * Cette methode permet d'enregistrer ou de modifier un role
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `saveRole$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  saveRole(params: {
    body: RoleDto
  },
  context?: HttpContext

): Observable<number> {

    return this.saveRole$Response(params,context).pipe(
      map((r: StrictHttpResponse<number>) => r.body as number)
    );
  }

  /**
   * Path part for operation findRoleByRole
   */
  static readonly FindRoleByRolePath = '/gestion-diplome/v1/roles/byNom/{role}';

  /**
   * Cette methode permet de rechercher par son CODE un role
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findRoleByRole()` instead.
   *
   * This method doesn't expect any request body.
   */
  findRoleByRole$Response(params: {
    role: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<RoleDto>> {

    const rb = new RequestBuilder(this.rootUrl, RolesService.FindRoleByRolePath, 'get');
    if (params) {
      rb.path('role', params.role, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<RoleDto>;
      })
    );
  }

  /**
   * Cette methode permet de rechercher par son CODE un role
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findRoleByRole$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findRoleByRole(params: {
    role: string;
  },
  context?: HttpContext

): Observable<RoleDto> {

    return this.findRoleByRole$Response(params,context).pipe(
      map((r: StrictHttpResponse<RoleDto>) => r.body as RoleDto)
    );
  }

  /**
   * Path part for operation findRoleById
   */
  static readonly FindRoleByIdPath = '/gestion-diplome/v1/roles/byId/{id}';

  /**
   * Cette methode permet de rechercher par son ID un role
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findRoleById()` instead.
   *
   * This method doesn't expect any request body.
   */
  findRoleById$Response(params: {
    id: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<RoleDto>> {

    const rb = new RequestBuilder(this.rootUrl, RolesService.FindRoleByIdPath, 'get');
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
        return r as StrictHttpResponse<RoleDto>;
      })
    );
  }

  /**
   * Cette methode permet de rechercher par son ID un role
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findRoleById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findRoleById(params: {
    id: number;
  },
  context?: HttpContext

): Observable<RoleDto> {

    return this.findRoleById$Response(params,context).pipe(
      map((r: StrictHttpResponse<RoleDto>) => r.body as RoleDto)
    );
  }

  /**
   * Path part for operation findAllRoles
   */
  static readonly FindAllRolesPath = '/gestion-diplome/v1/roles/all';

  /**
   * Cette methode permet de sélectionner tous les roles
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findAllRoles()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAllRoles$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<RoleDto>>> {

    const rb = new RequestBuilder(this.rootUrl, RolesService.FindAllRolesPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<RoleDto>>;
      })
    );
  }

  /**
   * Cette methode permet de sélectionner tous les roles
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findAllRoles$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAllRoles(params?: {
  },
  context?: HttpContext

): Observable<Array<RoleDto>> {

    return this.findAllRoles$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<RoleDto>>) => r.body as Array<RoleDto>)
    );
  }

  /**
   * Path part for operation findAllRolesByPage
   */
  static readonly FindAllRolesByPagePath = '/gestion-diplome/v1/roles/all/page';

  /**
   * Cette methode permet de sélectionner tous les roles
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findAllRolesByPage()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAllRolesByPage$Response(params?: {
    page?: number;
    size?: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<{
[key: string]: {
};
}>> {

    const rb = new RequestBuilder(this.rootUrl, RolesService.FindAllRolesByPagePath, 'get');
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
   * Cette methode permet de sélectionner tous les roles
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findAllRolesByPage$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAllRolesByPage(params?: {
    page?: number;
    size?: number;
  },
  context?: HttpContext

): Observable<{
[key: string]: {
};
}> {

    return this.findAllRolesByPage$Response(params,context).pipe(
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
   * Path part for operation deleteRole
   */
  static readonly DeleteRolePath = '/gestion-diplome/v1/roles/delete/{id}';

  /**
   * Cette methode permet de supprimer par son ID un role
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteRole()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteRole$Response(params: {
    id: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, RolesService.DeleteRolePath, 'delete');
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
   * Cette methode permet de supprimer par son ID un role
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteRole$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteRole(params: {
    id: number;
  },
  context?: HttpContext

): Observable<void> {

    return this.deleteRole$Response(params,context).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
