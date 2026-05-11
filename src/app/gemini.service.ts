import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
    providedIn: 'root',
})
export class GeminiService {

    body: {};
    result: String;

    // ToDo: Fetch accesstoken with OAuth2 authorization code flow and store in session storage

    geminiAPIKey: String = 'XXX';

    constructor(private httpClient: HttpClient) {
        this.body = <Object>{};
        this.result = <String>'';
    }

    private http = inject(HttpClient);
    private response = '';

    chat(message: String): Observable<any> {

        this.body = {"contents": [{"parts": [{"text": "You are a personal music assistant and i want you to give me one music song (in the format artist and song title). Match this song best based on the following line of input: " + message}]}]};

        return this.http.post('https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent', this.body, {
            headers: {
                'x-goog-api-key': '' + this.geminiAPIKey
            }
        });
    }

}
