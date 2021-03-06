import { Component, OnInit } from '@angular/core';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user';
import { Router } from '@angular/router';

import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-ges-user',
  templateUrl: './ges-user.component.html',
  styleUrls: ['./ges-user.component.css']
})
export class GesUserComponent implements OnInit {

  public usersList = [];
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
      firstname: {
        title: 'First Name'
      },
      lastname: {
        title: 'Last Name'
      },
      email: {
        title: 'Email'
      },
      phone: {
        title: 'Phone Number'
      },
      role: {
        title: 'Rôle'
      },
      password: {
        title: 'Password'
      }
    }
  };

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getData();

  }

  getData() {
    this.userService.AllUser().subscribe((result) => {
      this.usersList = result.users;
      this.data = result.users;
    });
  }


  onDeleteConfirm(event) {
    console.log('Delete Event In Console');
    console.log(event);
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
      let data = event.data;
      this.userService.deleteUser(data._id).subscribe();
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
      let user = new User(data.firstname, data.lastname, data.phone, data.email, data.password, data.role, data.status);

      this.userService.registerUser(user).subscribe(
        (result) => {
          this.getData();
        },
        () => { }
      );
      console.log('u clicked here');
      console.log(user);

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
      let user = new User(data.firstname, data.lastname, data.phone, data.email, data.password);

      this.userService.updateUser(user).subscribe(
        (result) => {
          this.getData();
        },
        () => { }
      );
      console.log('u clicked here');
      console.log(user);

    } else {
      event.confirm.reject();
    }

  }

}
