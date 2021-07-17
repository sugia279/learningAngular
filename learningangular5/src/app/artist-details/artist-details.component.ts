import { Component, OnInit, Input } from '@angular/core';
import { Artist } from '../artist.model';

@Component({
  selector: 'app-artist-details',
  templateUrl: './artist-details.component.html',
  styleUrls: ['./artist-details.component.css']
})
export class ArtistDetailsComponent implements OnInit {
  @Input() artist!:Artist;
  constructor() { }

  ngOnInit(): void {
  }

}
