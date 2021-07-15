import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from 'src/app/components/home/home.component';
import { AdminComponent } from './components/admin/admin.component';
import { BoardAdminComponent } from './components/board-admin/board-admin.component';
import { BoardModeratorComponent } from './components/board-moderator/board-moderator.component';
import { BoardProfileComponent } from './components/board-profile/board-profile.component';
import { BoardUserComponent } from './components/board-user/board-user.component';
import { CommentComponent } from './components/comment/comment.component';
import { CreateComponent } from './components/create/create.component';
import { Home1Component } from './components/home1/home1.component';
import { LoginComponent } from './components/login/login.component';
import { MonumentComponent } from './components/monument/monument.component';
import { ReclamationComponent } from './components/reclamation/reclamation.component';
import { RegisterComponent } from './components/register/register.component';
import { UpdateComponent } from './components/update/update.component';

const routes: Routes = [
  {
    path: '', component: Home1Component
  },
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'monument/:id', component: MonumentComponent
  },
  {
    path: 'admin', component: AdminComponent
  },
  {
    path: 'create', component: CreateComponent
  },
  {
    path: 'update/:id', component: UpdateComponent
  },
  {
    path: 'comment/:id', component: CommentComponent
  },
   {
    path: 'reclamation', component: ReclamationComponent
  },
  { path: 'home1', component: Home1Component },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: BoardProfileComponent},
  { path: 'user', component: BoardUserComponent },
  { path: 'mod', component: BoardModeratorComponent },
  { path: 'admin', component: BoardAdminComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
