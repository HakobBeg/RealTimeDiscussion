import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../environments/environment';
import {LoginComponent} from './Components/Authenthification/login/login.component';
import {RegisterComponent} from './Components/Authenthification/register/register.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule, MatIconModule, MatInputModule, MatMenuModule, MatSelectModule, MatToolbarModule} from '@angular/material';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AuthenthifyComponent } from './Components/Authenthification/authenthify/authenthify.component';
import { HomePageComponent } from './Components/home-page/home-page.component';
import { StartPageComponent } from './Components/start-page/start-page.component';
import { ChatBoxComponent } from './Components/chat-box/chat-box.component';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import { MessageComponent } from './Components/message/message.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    AuthenthifyComponent,
    HomePageComponent,
    StartPageComponent,
    ChatBoxComponent,
    MessageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    BrowserAnimationsModule,
    MatCardModule,
    MatSelectModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    AngularFireAuthModule,
    FormsModule,
    MatMenuModule,
    MatToolbarModule,
    ReactiveFormsModule,
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
