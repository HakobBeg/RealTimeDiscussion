import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from './Components/Authenthification/login/login.component';
import {RegisterComponent} from './Components/Authenthification/register/register.component';
import {AuthenthifyComponent} from './Components/Authenthification/authenthify/authenthify.component';
import {HomePageComponent} from './Components/home-page/home-page.component';
import {StartPageComponent} from './Components/start-page/start-page.component';


const routes: Routes = [
  {
    path: 'auth',
    component: AuthenthifyComponent,
    children: [
      {path: 'login', component: LoginComponent},
      {path: 'register', component: RegisterComponent},

    ]
  },

  {path: 'home', component: HomePageComponent},
  {path: '', component: StartPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
