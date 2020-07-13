import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.css']
})
export class ProductInfoComponent implements OnInit {

  public Var: Product;

  constructor(private route: ActivatedRoute, private productservice: ProductService, private router: Router) { }

  ngOnInit() {

    let id = this.route.snapshot.paramMap.get('id');
    console.log(id);

    this.Var = new Product();

    this.productservice.fetchProduct(id).subscribe((result) => {
      console.log('Fetching data ... \navec succès! :) \n');

      this.Var = result.productFromDB;


    });
  }

}
