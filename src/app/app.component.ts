import { Component } from '@angular/core';
import { AuthService } from './shared/services/auth-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'stackmi';

  constructor(public auth: AuthService) {
  }

  ngOnInit() {
    // this.oneSignalService.initOneSignal();
  }
}