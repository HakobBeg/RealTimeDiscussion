import {Injectable} from '@angular/core';
import {auth, User} from 'firebase';
import {AngularFireAuth} from '@angular/fire/auth';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: User;

  constructor(public  authFire: AngularFireAuth, public  router: Router) {
    this.authFire.authState.subscribe(user => {
      if (user) {
        this.user = user;
        localStorage.setItem('user', JSON.stringify(this.user));
      } else {
        localStorage.setItem('user', null);
      }
    });
  }

  async login(email: string, password: string) {

    const result = await this.authFire.auth.signInWithEmailAndPassword(email, password);
    this.router.navigate(['home']);
  }

  async register(email: string, password: string) {
    alert(email);
    const result = await this.authFire.auth.createUserWithEmailAndPassword(email, password);
    this.router.navigate(['home']);
  }

  async sendEmailVerification() {
    await this.authFire.auth.currentUser.sendEmailVerification();
  }

  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    return user !== null;
  }

  async loginWithGoogle() {
    await this.authFire.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }

  async logout() {
    await this.authFire.auth.signOut();
    localStorage.removeItem('user');
  }

  updateUser() {

    this.user.updateProfile({
      displayName: 'Hakob Beglaryan',
      photoURL: 'https://example.com/jane-q-user/profile.jpg'
    });
  }

}
