import {inject, Injectable} from '@angular/core';
import {songInfo} from "./song";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class SpotifyService {

  // curl -X POST "https://accounts.spotify.com/api/token" -H "Content-Type: application/x-www-form-urlencoded" -d "grant_type=client_credentials&client_id=a392836bf6ea4959bdb15ac96d1a7fed&client_secret=0329a529403441f7956e98d2edd34a78"
  // ToDo: Fetch accesstoken with OAuth2 authorization code flow and store in session storage

  spotifyAccessToken: String = 'BQBS-CeO-27C5qeDpPtfI5Nxd6mo2iWj6i1hta8LZkgQ618Mk16VTjm-jmUOQsRR8zkiWAUBoCbsidpzmuw_-qHoctzvxb2ZmDkm5Au217f_9B2z-0ALUerMOpcOC7Pit95S4Kzg5GQ';

  constructor(private httpClient: HttpClient) {
  }

  private http = inject(HttpClient);

  getSongSubscribe(searchTerm: String): Observable<any> {

    return this.http.get('https://api.spotify.com/v1/search', {
      headers: {
        'Authorization': 'Bearer ' + this.spotifyAccessToken
      },
      params: {
        q: '' + searchTerm,
        type: 'track',
        limit: 1
      }
    });

  }

}
