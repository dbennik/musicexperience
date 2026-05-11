import {Component, inject} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {SearchMusic} from "../search-music/search-music";
import {songInfo} from "../song";
import {SpotifyService} from "../spotify.service";
import {GeminiService} from "../gemini.service";
import {Observable, Observer} from "rxjs";

@Component({
  selector: 'app-home',
  imports: [
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatCardModule,
    SearchMusic
  ],
  templateUrl: 'home.html',
  styles: ``,
})
export class Home {
  musicPrompt = '';
  spotifyService: SpotifyService = inject(SpotifyService);
  geminiService: GeminiService = inject(GeminiService);
  song: songInfo;
  lookUp: String;
  songSubscribe: Observable<any>;

  constructor() {
    this.song = <songInfo>{};
    this.lookUp = <String>'';
    this.songSubscribe = new Observable<any>((observer: Observer<any>) => {});
  }

  public searchMusic(){
    if(this.musicPrompt) {
      this.geminiService.chat(this.musicPrompt).subscribe((result:any) => {
        this.lookUp = result.candidates[0].content.parts[0].text;
        this.spotifyService.getSongSubscribe(this.lookUp).subscribe((result:any) => {
          this.song.href = result.tracks.items[0].external_urls.spotify;
          this.song.artist = result.tracks.items[0].artists[0].name;
          this.song.album = result.tracks.items[0].album.name;
          this.song.title = result.tracks.items[0].name;
          this.song.albumUrl = result.tracks.items[0].album.images[0].url;
        });
      });
    }
  }

}
