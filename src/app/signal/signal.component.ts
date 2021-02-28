import { Component, OnInit } from '@angular/core';

import { SignalService } from '../services/signal.service';

@Component({
  selector: 'app-signal',
  templateUrl: './signal.component.html',
  styleUrls: ['./signal.component.scss']
})
export class SignalComponent implements OnInit {
  constructor(
    private signalService: SignalService
  ) { }

  ngOnInit(): void {
    this.signalService.startConnection();
    this.signalService.messageListener();
  }
}
