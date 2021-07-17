import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Artist } from './artist.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  query: string;
  selectedRows: boolean[];    
  artists: Artist[];  
  prevIndex: number;
  currentArtist: Artist;

  constructor(private http: HttpClient){
    this.query = "";   
    this.selectedRows =[];    
    this.artists = [];    
    this.prevIndex = -1;
    this.currentArtist = new Artist();
  }

  ngOnInit() : void{
    this.http.get<Artist[]>("../assets/data.json").subscribe(
      data=>{
        this.artists = data;
        for(let i of this.artists){
          this.selectedRows.push(false);             
        }
      }
    );
  }
// ? '#20B2AA' : '#FFFFFF'
  showArtist(item: Artist, index: number){        
    this.selectedRows[this.prevIndex] = false;
    this.selectedRows[index] = true;
    this.prevIndex = index;
    this.query = item.name;
    this.currentArtist = item;
  }
}
