import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from './services/http.service';
import { SignalService } from './services/signal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'SignalRClient';

  constructor(
    private router: Router,
    private signalService: SignalService,
    private httpService: HttpService) {
      this.signalService.startConnection();
      this.signalService.messageListener();
  }

  sendMessage(): void {
    this.httpService.post('https://localhost/signalrserver/api/message/send');
    // this.router.navigate(['signal']);
  }
}
