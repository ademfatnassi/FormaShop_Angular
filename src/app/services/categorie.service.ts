import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';

import { Categorie } from '../models/categorie';



@Injectable({
  providedIn: 'root'
})
export class CategorieService {

  constructor(private http: HttpClient) { }

  AddCategorie(categorie: Categorie) {
    return this.http.post<any>('http://localhost:3000/categorie/add', categorie);
  }

  AllCategorie() {
    return this.http.get<any>('http://localhost:3000/categorie/all');
  }

  deleteCategorie(id) {
    return this.http.delete<any>('http://localhost:3000/categorie/delete/' + id);
  }

  updateCategorie(categorie: Categorie) {
    return this.http.put<any>('http://localhost:3000/categorie/update/', categorie);
  }
}
