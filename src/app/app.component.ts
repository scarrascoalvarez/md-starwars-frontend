import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './services/authentication/authentication.service';
import { User } from './core/models/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  constructor(
    private authenticationService: AuthenticationService
  ) {}

  ngOnInit() {
    const user: User = JSON.parse(localStorage.getItem('user'));
    if (user) {
      this.authenticationService.setApplicationUser(user);
    }
  }

}
