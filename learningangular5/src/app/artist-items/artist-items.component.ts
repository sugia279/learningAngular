import { Component, OnInit, Input  } from '@angular/core';
import { Artist } from '../artist.model';

@Component({
  selector: 'app-artist-items',
  templateUrl: './artist-items.component.html'  
})
export class ArtistItemsComponent implements OnInit {
  @Input() artist!:Artist;
  constructor() {       
  }

  ngOnInit(): void {
  }

}