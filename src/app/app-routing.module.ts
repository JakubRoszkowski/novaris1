import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './user-panel/user-list/user-list.component';
import { UserNewComponent } from './user-panel/user-new/user-new.component';


const routes: Routes = [
  {path: 'user-list', component: UserListComponent},
  {path: 'user-new', component: UserNewComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
