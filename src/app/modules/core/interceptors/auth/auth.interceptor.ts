import { HttpEvent, HttpHandlerFn, HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { inject } from '@angular/core';
import { StorageService } from '../../services/storage/storage.service';

export const authInterceptor: HttpInterceptorFn = (req: HttpRequest<any>, next: HttpHandlerFn): Observable<HttpEvent<any>> => {
  const storageService = inject(StorageService);
  const token = storageService.getSessionItem('token');
  const modifiedReq = req.clone({
    setHeaders: {
      Authorization: `${token}`,
      'Content-Type': 'application/json',
    },
  });
  return next(modifiedReq);
};
