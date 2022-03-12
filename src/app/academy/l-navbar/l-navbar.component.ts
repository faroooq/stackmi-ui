import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth-service';

@Component({
  selector: 'app-l-navbar',
  templateUrl: './l-navbar.component.html',
  styleUrls: ['./l-navbar.component.css']
})
export class LNavbarComponent implements OnInit {

  firstLetter: string;
  user: any;
  userDetails: any;

  constructor(public router: Router, public authService: AuthService) { }

  ngOnInit(): void {
    if (this.authService.isLoggedIn()) {
      this.userDetails = this.authService.getUserDetails();
      // console.log(this.userDetails)
    }
  }

  navigate(url) {
    this.router.navigateByUrl(url);
  }

  hostEvent() {
    this.router.navigateByUrl('host-event');
  }

  signIn() {
    this.router.navigateByUrl('login');
  }

  signUp() {
    this.router.navigateByUrl('signup');
  }

  signOut() {
    setTimeout(() => {
      this.authService.logout();
    }, 1000);
  }

}
