import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/cmp07-servicios/servicios/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private auth: AuthService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    if (['POST', 'PUT', 'PATCH', 'DELETE'].includes(request.method)) {
      if (this.auth.hasToken()) {
        const token = this.auth.getToken()!
        const headersConAuth = request.headers.append('Authorization', token)

        // new HttpHeaders({
        //   ...request.headers,
        //   'Authotization': token
        // })

        const reqConAuth =  request.clone({ headers: headersConAuth })
        return next.handle(reqConAuth)
      }
    }

    return next.handle(request);
  }
}
