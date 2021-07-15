import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
// Import your library
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';

import { HttpClientModule} from '@angular/common/http';
import { MonumentComponent } from './components/monument/monument.component';
import { AdminComponent } from './components/admin/admin.component';
import { CreateComponent } from './components/create/create.component';
import { UpdateComponent } from './components/update/update.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { CommentComponent } from './components/comment/comment.component';
import { ReclamationComponent } from './components/reclamation/reclamation.component';
import { Home1Component } from './components/home1/home1.component';
import { BoardUserComponent } from './components/board-user/board-user.component';
import { BoardModeratorComponent } from './components/board-moderator/board-moderator.component';
import { BoardAdminComponent } from './components/board-admin/board-admin.component';
import { BoardProfileComponent } from './components/board-profile/board-profile.component';
import { authInterceptorProviders } from './helpers/auth.interceptor';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    MonumentComponent,
    AdminComponent,
    CreateComponent,
    UpdateComponent,
    LoginComponent,
    RegisterComponent,
    CommentComponent,
    ReclamationComponent,
    Home1Component,
    BoardUserComponent,
    BoardModeratorComponent,
    BoardAdminComponent,
    BoardProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SlickCarouselModule,
    NgbModule,
    CarouselModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
