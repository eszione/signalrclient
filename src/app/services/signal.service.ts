import { Injectable } from '@angular/core';
import * as signalR from '@microsoft/signalr';

@Injectable({providedIn: 'root'})
export class SignalService {
    private hubConnection: signalR.HubConnection;

    startConnection(): void {
        this.hubConnection = new signalR.HubConnectionBuilder()
            .withUrl('https://localhost/SignalRServer/message')
            .build();

        this.hubConnection
            .start()
            .then(() => console.log('Connection started!'))
            .catch(err => console.log(`Error connecting: ${err}`));
    }

    messageListener(): void {
        this.hubConnection.on('message', message => {
            console.log(`Message from the server: ${message}`);
        });
    }
}
