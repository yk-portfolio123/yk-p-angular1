import { Component, OnInit  } from '@angular/core';
import { AuthService } from './service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  isCollapsed = false;
  isLoggedIn: boolean = false;

  constructor(private authService: AuthService, private router: Router) {}

  async ngOnInit() {
    this.isLoggedIn = await this.authService.isAuthenticated();
    if (this.isLoggedIn) {
      this.router.navigate(['/main']);
    }
  }
}
