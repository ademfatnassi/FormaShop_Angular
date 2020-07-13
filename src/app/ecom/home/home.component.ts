import { Component, OnInit } from '@angular/core';
import { CategorieService } from 'src/app/services/categorie.service';
import { ProductService } from 'src/app/services/product.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public CategorieList = [];
  public ProductList = [];

  constructor(private categorieService: CategorieService, private productService: ProductService) { }

  ngOnInit() {
    this.categorieService.AllCategorie().subscribe((result) => {
      this.CategorieList = result.categories;
    });
    this.productService.AllProduct().subscribe((result) => {
      this.ProductList = result.products;
    });
  }

  // find products by category
  Categorie(categorie) {
    this.productService.findProducts(categorie._id).subscribe((result) => {
      this.ProductList = result.products;
    });
}

}
