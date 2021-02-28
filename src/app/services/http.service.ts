import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class HttpService {
    constructor(private httpClient: HttpClient) {
    }

    post(url: string): void {
        this.httpClient.post(url, null).subscribe(
            () => console.log('Posted Message'),
            () => console.log('Message failed to send')
        );
    }
}
