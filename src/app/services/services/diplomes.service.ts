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

import { DiplomeDto } from '../models/diplome-dto';
import { LightDiplomeDto } from '../models/light-diplome-dto';


/**
 * Diplomes API
 */
@Injectable({
  providedIn: 'root',
})
export class DiplomesService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation updateDiplome
   */
  static readonly UpdateDiplomePath = '/gestion-diplome/v1/diplomes/update/{id}';

  /**
   * Cette methode permet de modifier un Diplome
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateDiplome()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateDiplome$Response(params: {
    id: number;
    body: LightDiplomeDto
  },
  context?: HttpContext

): Observable<StrictHttpResponse<number>> {

    const rb = new RequestBuilder(this.rootUrl, DiplomesService.UpdateDiplomePath, 'put');
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
   * Cette methode permet de modifier un Diplome
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateDiplome$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateDiplome(params: {
    id: number;
    body: LightDiplomeDto
  },
  context?: HttpContext

): Observable<number> {

    return this.updateDiplome$Response(params,context).pipe(
      map((r: StrictHttpResponse<number>) => r.body as number)
    );
  }

  /**
   * Path part for operation saveDiplome
   */
  static readonly SaveDiplomePath = '/gestion-diplome/v1/diplomes/create';

  /**
   * Cette methode permet d'enregistrer ou de modifier un Diplome
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `saveDiplome()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  saveDiplome$Response(params: {
    body: DiplomeDto
  },
  context?: HttpContext

): Observable<StrictHttpResponse<number>> {

    const rb = new RequestBuilder(this.rootUrl, DiplomesService.SaveDiplomePath, 'post');
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
   * Cette methode permet d'enregistrer ou de modifier un Diplome
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `saveDiplome$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  saveDiplome(params: {
    body: DiplomeDto
  },
  context?: HttpContext

): Observable<number> {

    return this.saveDiplome$Response(params,context).pipe(
      map((r: StrictHttpResponse<number>) => r.body as number)
    );
  }

  /**
   * Path part for operation findDiplomeById
   */
  static readonly FindDiplomeByIdPath = '/gestion-diplome/v1/diplomes/{id}';

  /**
   * Cette methode permet de rechercher par son ID un Diplome
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findDiplomeById()` instead.
   *
   * This method doesn't expect any request body.
   */
  findDiplomeById$Response(params: {
    id: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<DiplomeDto>> {

    const rb = new RequestBuilder(this.rootUrl, DiplomesService.FindDiplomeByIdPath, 'get');
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
        return r as StrictHttpResponse<DiplomeDto>;
      })
    );
  }

  /**
   * Cette methode permet de rechercher par son ID un Diplome
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findDiplomeById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findDiplomeById(params: {
    id: number;
  },
  context?: HttpContext

): Observable<DiplomeDto> {

    return this.findDiplomeById$Response(params,context).pipe(
      map((r: StrictHttpResponse<DiplomeDto>) => r.body as DiplomeDto)
    );
  }

  /**
   * Path part for operation importerModeleExcel
   */
  static readonly ImporterModeleExcelPath = '/gestion-diplome/v1/diplomes/impport/excel';

  /**
   * Cette methode permet d'importer les infomration de plusieurs Diplomes au format excel
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `importerModeleExcel()` instead.
   *
   * This method doesn't expect any request body.
   */
  importerModeleExcel$Response(params: {
    file: Blob;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<{
[key: string]: string;
}>> {

    const rb = new RequestBuilder(this.rootUrl, DiplomesService.ImporterModeleExcelPath, 'get');
    if (params) {
      rb.query('file', params.file, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<{
        [key: string]: string;
        }>;
      })
    );
  }

  /**
   * Cette methode permet d'importer les infomration de plusieurs Diplomes au format excel
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `importerModeleExcel$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  importerModeleExcel(params: {
    file: Blob;
  },
  context?: HttpContext

): Observable<{
[key: string]: string;
}> {

    return this.importerModeleExcel$Response(params,context).pipe(
      map((r: StrictHttpResponse<{
[key: string]: string;
}>) => r.body as {
[key: string]: string;
})
    );
  }

  /**
   * Path part for operation exportTempleExcel
   */
  static readonly ExportTempleExcelPath = '/gestion-diplome/v1/diplomes/exportTemplate/excel';

  /**
   * Cette methode permet d'exporter les infomration un temple au format excel
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `exportTempleExcel()` instead.
   *
   * This method doesn't expect any request body.
   */
  exportTempleExcel$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, DiplomesService.ExportTempleExcelPath, 'get');
    if (params) {
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
   * Cette methode permet d'exporter les infomration un temple au format excel
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `exportTempleExcel$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  exportTempleExcel(params?: {
  },
  context?: HttpContext

): Observable<void> {

    return this.exportTempleExcel$Response(params,context).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation exportToPdf
   */
  static readonly ExportToPdfPath = '/gestion-diplome/v1/diplomes/export/pdf/{numeroEnreg}';

  /**
   * Cette methode permet d'exporter un Diplome au format pdf en fonction de son numéro d'enregistreement
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `exportToPdf()` instead.
   *
   * This method doesn't expect any request body.
   */
  exportToPdf$Response(params: {
    numeroEnreg: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Blob>> {

    const rb = new RequestBuilder(this.rootUrl, DiplomesService.ExportToPdfPath, 'get');
    if (params) {
      rb.path('numeroEnreg', params.numeroEnreg, {});
    }

    return this.http.request(rb.build({
      responseType: 'blob',
      accept: 'application/pdf',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Blob>;
      })
    );
  }

  /**
   * Cette methode permet d'exporter un Diplome au format pdf en fonction de son numéro d'enregistreement
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `exportToPdf$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  exportToPdf(params: {
    numeroEnreg: string;
  },
  context?: HttpContext

): Observable<Blob> {

    return this.exportToPdf$Response(params,context).pipe(
      map((r: StrictHttpResponse<Blob>) => r.body as Blob)
    );
  }

  /**
   * Path part for operation exportToExcel
   */
  static readonly ExportToExcelPath = '/gestion-diplome/v1/diplomes/export/excel';

  /**
   * Cette methode permet d'exporter les infomration de plusieurs Diplomes au format excel
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `exportToExcel()` instead.
   *
   * This method doesn't expect any request body.
   */
  exportToExcel$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, DiplomesService.ExportToExcelPath, 'get');
    if (params) {
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
   * Cette methode permet d'exporter les infomration de plusieurs Diplomes au format excel
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `exportToExcel$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  exportToExcel(params?: {
  },
  context?: HttpContext

): Observable<void> {

    return this.exportToExcel$Response(params,context).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation findDiplomeByNumeroEnreg
   */
  static readonly FindDiplomeByNumeroEnregPath = '/gestion-diplome/v1/diplomes/by-numero/{numeroEnreg}';

  /**
   * Cette methode permet de rechercher par son ID un Diplome
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findDiplomeByNumeroEnreg()` instead.
   *
   * This method doesn't expect any request body.
   */
  findDiplomeByNumeroEnreg$Response(params: {
    numeroEnreg: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<DiplomeDto>> {

    const rb = new RequestBuilder(this.rootUrl, DiplomesService.FindDiplomeByNumeroEnregPath, 'get');
    if (params) {
      rb.path('numeroEnreg', params.numeroEnreg, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<DiplomeDto>;
      })
    );
  }

  /**
   * Cette methode permet de rechercher par son ID un Diplome
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findDiplomeByNumeroEnreg$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findDiplomeByNumeroEnreg(params: {
    numeroEnreg: string;
  },
  context?: HttpContext

): Observable<DiplomeDto> {

    return this.findDiplomeByNumeroEnreg$Response(params,context).pipe(
      map((r: StrictHttpResponse<DiplomeDto>) => r.body as DiplomeDto)
    );
  }

  /**
   * Path part for operation findAllDiplomes
   */
  static readonly FindAllDiplomesPath = '/gestion-diplome/v1/diplomes/all';

  /**
   * Cette methode permet de sélectionner tous les Diplomes
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findAllDiplomes()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAllDiplomes$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<DiplomeDto>>> {

    const rb = new RequestBuilder(this.rootUrl, DiplomesService.FindAllDiplomesPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<DiplomeDto>>;
      })
    );
  }

  /**
   * Cette methode permet de sélectionner tous les Diplomes
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findAllDiplomes$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAllDiplomes(params?: {
  },
  context?: HttpContext

): Observable<Array<DiplomeDto>> {

    return this.findAllDiplomes$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<DiplomeDto>>) => r.body as Array<DiplomeDto>)
    );
  }

  /**
   * Path part for operation findAllDiplomesByPage
   */
  static readonly FindAllDiplomesByPagePath = '/gestion-diplome/v1/diplomes/all/page';

  /**
   * Cette methode permet de sélectionner tous les Diplomes en les paginants
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findAllDiplomesByPage()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAllDiplomesByPage$Response(params?: {
    numeroEnreg?: string;
    beneficiaire?: string;
    page?: number;
    size?: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<{
[key: string]: {
};
}>> {

    const rb = new RequestBuilder(this.rootUrl, DiplomesService.FindAllDiplomesByPagePath, 'get');
    if (params) {
      rb.query('numeroEnreg', params.numeroEnreg, {});
      rb.query('beneficiaire', params.beneficiaire, {});
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
   * Cette methode permet de sélectionner tous les Diplomes en les paginants
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findAllDiplomesByPage$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAllDiplomesByPage(params?: {
    numeroEnreg?: string;
    beneficiaire?: string;
    page?: number;
    size?: number;
  },
  context?: HttpContext

): Observable<{
[key: string]: {
};
}> {

    return this.findAllDiplomesByPage$Response(params,context).pipe(
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
   * Path part for operation deleteDiplome
   */
  static readonly DeleteDiplomePath = '/gestion-diplome/v1/diplomes/delete/{id}';

  /**
   * Cette methode permet de supprimer par son ID un Diplome
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteDiplome()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteDiplome$Response(params: {
    id: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, DiplomesService.DeleteDiplomePath, 'delete');
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
   * Cette methode permet de supprimer par son ID un Diplome
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteDiplome$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteDiplome(params: {
    id: number;
  },
  context?: HttpContext

): Observable<void> {

    return this.deleteDiplome$Response(params,context).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
