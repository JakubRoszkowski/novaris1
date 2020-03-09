import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({providedIn: 'root'})
export class UserEditService {
  userDetails = new Subject();
  isEditing = new Subject<boolean>();
}
