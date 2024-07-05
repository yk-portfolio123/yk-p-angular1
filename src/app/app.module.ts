import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PostService } from './service/post.service';
import { AuthService } from './service/auth.service';

import { AppComponent } from './app.component';
import { ConnectDBComponent } from './component/connect-db/connect-db.component';
import { LoginComponent } from './component/login/login.component';
import { MainComponent } from './component/main/main.component';
import { NavigationComponent } from './component/navigation/navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    ConnectDBComponent,
    LoginComponent,
    MainComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [PostService,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
