import { Component, OnInit } from '@angular/core';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-ges-produit',
  templateUrl: './ges-produit.component.html',
  styleUrls: ['./ges-produit.component.css']
})
export class GesProduitComponent implements OnInit {

  public ProductList = [];
  data = [];

  settings = {
    mode: 'inline',
    edit: {
      confirmSave: true,
      editButtonContent: 'Edit',
      saveButtonContent: 'save',
      cancelButtonContent: 'cancel'
    },
    delete: {
      confirmDelete: true,
      deleteButtonContent: 'Delete',
      saveButtonContent: 'save',
      cancelButtonContent: 'cancel'
    },

    add: {
      addButtonContent: 'Add',
      createButtonContent: 'Create',
      cancelButtonContent: 'Cancel',
      confirmCreate: true
    },
    columns: {
      nom: { title: 'Nom' },
      prix: { title: 'Prix' },
      quantite: { title: 'Quantité' },
      description: { title: 'Description' },
      image: { title: 'Image Src' },
      categorie: { title: 'Categorie ID' }
    }
  };

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.productService.AllProduct().subscribe((result) => {
      this.ProductList = result.products;
      this.data = result.products;
    });
  }

  onDeleteConfirm(event) {
    console.log('Delete Event In Console');
    console.log(event);
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
      let data = event.data;
      this.productService.deleteProduct(data._id).subscribe();
    } else {
      event.confirm.reject();
    }
  }

  onCreateConfirm(event) {
    console.log('Create Event In Console');
    console.log(event);

    if (window.confirm('Are you sure you want to Add this user?')) {
      event.confirm.resolve();

      let data = event.newData;
      const product = new Product(data.nom, data.description, data.image, data.prix, data.quantite, data.categorie);

      this.productService.AddProduct(product).subscribe(
        (result) => {
          this.getData();
        },
        () => { }
      );
      console.log('u clicked here');

    } else {
      event.confirm.reject();
    }

  }

  onSaveConfirm(event) {
    console.log('Edit Event In Console');
    console.log(event);

    if (window.confirm('Are you sure you want to confirm this modification?')) {
      event.confirm.resolve();

      let data = event.newData;
      const product = new Product(data.nom, data.description, data.image, data.prix, data.quantite, data.categorie);

      this.productService.updateProduct(product).subscribe(
        (result) => {
          this.getData();
        },
        () => { }
      );
      console.log('u clicked here');

    } else {
      event.confirm.reject();
    }

  }

}
