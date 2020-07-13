import { Component, OnInit } from '@angular/core';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

import { CategorieService } from 'src/app/services/categorie.service';
import { Categorie } from 'src/app/models/categorie';

@Component({
  selector: 'app-ges-categorie',
  templateUrl: './ges-categorie.component.html',
  styleUrls: ['./ges-categorie.component.css']
})
export class GesCategorieComponent implements OnInit {

  public CategorieList = [];
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
      _id: {
        title: 'ID'
      },
      nom: {
        title: 'Nom'
      }
    }
  };

  constructor(private categorieService: CategorieService) { }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.categorieService.AllCategorie().subscribe((result) => {
      this.CategorieList = result.categories;
      this.data = result.categories;
    });
  }

  onDeleteConfirm(event) {
    console.log('Delete Event In Console');
    console.log(event);
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
      let data = event.data;
      this.categorieService.deleteCategorie(data._id).subscribe();
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
      let categorie = new Categorie(data.nom);

      this.categorieService.AddCategorie(categorie).subscribe(
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
      let categorie = new Categorie(data.nom);

      this.categorieService.updateCategorie(categorie).subscribe(
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
