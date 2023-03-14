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

import { MinistreDto } from '../models/ministre-dto';


/**
 * Ministres API
 */
@Injectable({
  providedIn: 'root',
})
export class MinistresService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation updateMinistre
   */
  static readonly UpdateMinistrePath = '/gestion-diplome/v1/ministres/update/{id}';

  /**
   * Cette methode permet de modifier un ministre
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateMinistre()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateMinistre$Response(params: {
    id: number;
    body: MinistreDto
  },
  context?: HttpContext

): Observable<StrictHttpResponse<number>> {

    const rb = new RequestBuilder(this.rootUrl, MinistresService.UpdateMinistrePath, 'put');
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
   * Cette methode permet de modifier un ministre
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateMinistre$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateMinistre(params: {
    id: number;
    body: MinistreDto
  },
  context?: HttpContext

): Observable<number> {

    return this.updateMinistre$Response(params,context).pipe(
      map((r: StrictHttpResponse<number>) => r.body as number)
    );
  }

  /**
   * Path part for operation saveMinistre
   */
  static readonly SaveMinistrePath = '/gestion-diplome/v1/ministres/create';

  /**
   * Cette methode permet d'enregistrer ou de modifier un ministre
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `saveMinistre()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  saveMinistre$Response(params: {
    body: MinistreDto
  },
  context?: HttpContext

): Observable<StrictHttpResponse<number>> {

    const rb = new RequestBuilder(this.rootUrl, MinistresService.SaveMinistrePath, 'post');
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
   * Cette methode permet d'enregistrer ou de modifier un ministre
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `saveMinistre$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  saveMinistre(params: {
    body: MinistreDto
  },
  context?: HttpContext

): Observable<number> {

    return this.saveMinistre$Response(params,context).pipe(
      map((r: StrictHttpResponse<number>) => r.body as number)
    );
  }

  /**
   * Path part for operation findMinistreById
   */
  static readonly FindMinistreByIdPath = '/gestion-diplome/v1/ministres/{id}';

  /**
   * Cette methode permet de rechercher par son ID un ministre
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findMinistreById()` instead.
   *
   * This method doesn't expect any request body.
   */
  findMinistreById$Response(params: {
    id: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<MinistreDto>> {

    const rb = new RequestBuilder(this.rootUrl, MinistresService.FindMinistreByIdPath, 'get');
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
        return r as StrictHttpResponse<MinistreDto>;
      })
    );
  }

  /**
   * Cette methode permet de rechercher par son ID un ministre
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findMinistreById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findMinistreById(params: {
    id: number;
  },
  context?: HttpContext

): Observable<MinistreDto> {

    return this.findMinistreById$Response(params,context).pipe(
      map((r: StrictHttpResponse<MinistreDto>) => r.body as MinistreDto)
    );
  }

  /**
   * Path part for operation findAllMinistres
   */
  static readonly FindAllMinistresPath = '/gestion-diplome/v1/ministres/all';

  /**
   * Cette methode permet de sélectionner tous les Ministres
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findAllMinistres()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAllMinistres$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<MinistreDto>>> {

    const rb = new RequestBuilder(this.rootUrl, MinistresService.FindAllMinistresPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<MinistreDto>>;
      })
    );
  }

  /**
   * Cette methode permet de sélectionner tous les Ministres
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findAllMinistres$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAllMinistres(params?: {
  },
  context?: HttpContext

): Observable<Array<MinistreDto>> {

    return this.findAllMinistres$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<MinistreDto>>) => r.body as Array<MinistreDto>)
    );
  }

  /**
   * Path part for operation findAllMinistresByPage
   */
  static readonly FindAllMinistresByPagePath = '/gestion-diplome/v1/ministres/all/page';

  /**
   * Cette methode permet de sélectionner tous les Ministres
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findAllMinistresByPage()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAllMinistresByPage$Response(params?: {
    page?: number;
    size?: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<{
[key: string]: {
};
}>> {

    const rb = new RequestBuilder(this.rootUrl, MinistresService.FindAllMinistresByPagePath, 'get');
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
   * Cette methode permet de sélectionner tous les Ministres
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findAllMinistresByPage$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAllMinistresByPage(params?: {
    page?: number;
    size?: number;
  },
  context?: HttpContext

): Observable<{
[key: string]: {
};
}> {

    return this.findAllMinistresByPage$Response(params,context).pipe(
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
   * Path part for operation deleteMinistre
   */
  static readonly DeleteMinistrePath = '/gestion-diplome/v1/ministres/delete/{id}';

  /**
   * Cette methode permet de supprimer par son ID un ministre
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteMinistre()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteMinistre$Response(params: {
    id: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, MinistresService.DeleteMinistrePath, 'delete');
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
   * Cette methode permet de supprimer par son ID un ministre
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteMinistre$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteMinistre(params: {
    id: number;
  },
  context?: HttpContext

): Observable<void> {

    return this.deleteMinistre$Response(params,context).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
