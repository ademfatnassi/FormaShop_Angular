import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';

import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  AddProduct(product: Product) {
    return this.http.post<any>('http://localhost:3000/product/add', product);
  }

  AllProduct() {
    return this.http.get<any>('http://localhost:3000/product/all');
  }

  deleteProduct(id) {
    return this.http.delete<any>('http://localhost:3000/product/delete/' + id);
  }

  updateProduct(product: Product) {
    return this.http.put<any>('http://localhost:3000/product/update/', product);
  }

  findProducts(id) {
    return this.http.get<any>('http://localhost:3000/product/find/' + id);
  }

  fetchProduct(id) {
    return this.http.get<any>('http://localhost:3000/product/one/' + id);
  }
}

