import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/user.service';
import { UserEditService } from 'src/app/shared/user-edit-service';
import { MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  isEditing = false;
  check = null;
  userList = [];
  constructor(private userService: UserService,
              private userEditService: UserEditService,
              public matDialog: MatDialog) { }

  ngOnInit() {
    this.userService.getUsers().subscribe(users => {
      for (const user of users['_embedded']['user']) {
        this.userList.push(user);
      }
    }, error => {
      console.log(error);
    });
    this.userEditService.isEditing.subscribe(status => {
      this.isEditing = status;
    },
      error => {
        console.log(error);
    });
  }

  onEditUser(user) {
    this.isEditing = true;
    setTimeout(() => this.userEditService.userDetails.next(user), 0);
    this.check = user;
  }

  onSort(arg: string) {
    this.userList.sort((a, b) => {
      if (arg === 'id') {
        if (a._links.self.href.slice(27) > b._links.self.href.slice(27)) {
          return 1;
      }
        if (a._links.self.href.slice(27) < b._links.self.href.slice(27)) {
      return -1;
      }
        return 0;
    }
      if (a[arg] > b[arg]) {
        return 1;
    }
      if (a[arg] < b[arg]) {
    return -1;
    }
      return 0;
  });
  }
}
