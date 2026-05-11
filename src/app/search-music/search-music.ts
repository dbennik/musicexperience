import {Component, inject, input} from '@angular/core';
import {songInfo} from "../song";
import {FormsModule} from "@angular/forms";
import {MatCard, MatCardContent, MatCardHeader, MatCardSubtitle, MatCardTitle, MatCardActions, MatCardTitleGroup} from "@angular/material/card";
import {MatIcon} from "@angular/material/icon";
import {MatFabButton} from "@angular/material/button";

@Component({
  selector: 'app-search-music',
  imports: [
    FormsModule,
    MatCard,
    MatCardContent,
    MatCardHeader,
    MatCardTitleGroup,
    MatCardTitle,
    MatCardSubtitle,
    MatCardActions,
    MatIcon,
    MatFabButton
  ],
  templateUrl: 'search-music.html',
  styleUrls: ['search-music.css'],
})
export class SearchMusic {

  song = input.required<songInfo>();

  constructor() {
  }

}
