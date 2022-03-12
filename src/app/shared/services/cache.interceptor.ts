import { Injectable } from '@angular/core';
import { HttpEvent, HttpRequest, HttpResponse, HttpInterceptor, HttpHandler, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';

import { RequestCache } from './cache.service';
import { AuthService } from './auth-service';

@Injectable()
export class CachingInterceptor implements HttpInterceptor {
    constructor(private cache: RequestCache, private auth: AuthService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        // Disabling the cache here, to get fresh http request everytime.
        const httpRequest = req.clone({
            headers: new HttpHeaders({
                'Cache-Control': 'no-cache',
                'Pragma': 'no-cache',
                'Expires': '0',
                'Access-Control-Allow-Origin': '*'
            }).set('Authorization', `Bearer ` + this.auth.getToken())
        });
        return next.handle(httpRequest);
        // Enable this if you want to cache the http requests
        // const cachedResponse = this.cache.get(req);
        // return cachedResponse ? of(cachedResponse) : this.sendRequest(req, next, this.cache);
    }

    sendRequest(
        req: HttpRequest<any>,
        next: HttpHandler,
        cache: RequestCache): Observable<HttpEvent<any>> {
        return next.handle(req).pipe(
            tap(event => {
                if (event instanceof HttpResponse) {
                    cache.put(req, event);
                }
            })
        );
    }
}