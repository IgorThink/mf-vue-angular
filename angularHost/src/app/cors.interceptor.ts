import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, tap } from "rxjs";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor() {}

    intercept(
        req: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        const authReq = req.clone({
            headers: req.headers.set(
                'Sec-Fetch-Mode',
                'no-cors'
            ),
        });

        console.log(req)

        return next.handle(authReq).pipe(
            tap(
                (event) => {
                    if (event instanceof HttpResponse)
                        console.log('Server response');
                },
                (err) => {
                    if (err instanceof HttpErrorResponse) {
                        if (err.status == 401)
                            console.log('Unauthorized');
                    }
                }
            )
        );
    }
}