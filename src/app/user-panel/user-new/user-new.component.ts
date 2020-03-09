import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-user-new',
  templateUrl: './user-new.component.html',
  styleUrls: ['./user-new.component.scss']
})
export class UserNewComponent implements OnInit {

  apiURL = 'http://localhost:8080/user';

  constructor(private http: HttpClient,
              private userService: UserService) {}

  user = new FormGroup({
    name: new FormControl(''),
    surname: new FormControl(''),
    address: new FormControl(''),
  });

  ngOnInit() {
  }

  onAddUser() {
    this.http.post(this.apiURL, this.user.value).subscribe(users => {
    }, error => {
      console.log(error);
    });
  }

}
