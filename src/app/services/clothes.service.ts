import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { clothes } from '../../types/clothes';
import { map, Observable, shareReplay } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ClothesService {
  private http = inject(HttpClient);
  private apiUrl = environment.apiUrl;

  private clothes$: Observable<clothes[]>;

  constructor() {
    this.clothes$ = this.http
      .get<{ data: clothes[] }>(`${this.apiUrl}api/stores?populate=*`)
      .pipe(
        map((res) => res.data),
        shareReplay(1)
      );
  }

  getClothes(): Observable<clothes[]> {
    return this.clothes$;
  }
}
