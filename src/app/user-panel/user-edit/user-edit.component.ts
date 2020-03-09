import { Component, OnInit } from '@angular/core';
import { UserEditService } from 'src/app/shared/user-edit-service';
import { FormControl, FormGroup } from '@angular/forms';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent implements OnInit {

  userDetails;

  userForm = new FormGroup({
    name: new FormControl(''),
    surname: new FormControl(''),
    address: new FormControl('')
  });

  constructor(private userEditService: UserEditService,
              private userService: UserService) { }

  ngOnInit() {
    this.userEditService.userDetails.subscribe(user => {
      this.userDetails = user;
      this.userForm.patchValue({
        name: this.userDetails.name,
        surname: this.userDetails.surname,
        address: this.userDetails.address
      });
    });
  }

  onUserEdit() {
    this.userDetails.name = this.userForm.value.name;
    this.userDetails.surname = this.userForm.value.surname;
    this.userDetails.address = this.userForm.value.address;
    const userID: string = this.userDetails._links.self.href.slice(27);

    this.userService.putUser(userID, this.userDetails).subscribe(user => {

      }, error => {
          console.log(error.status);
      });
    this.userEditService.isEditing.next(false);
  }

  onUserDelete() {
    const userID: string = this.userDetails._links.self.href.slice(27);
    this.userService.deleteUser(userID).subscribe(() => {
    });
    this.userEditService.isEditing.next(false);
  }
}
