import { Pipe, PipeTransform } from '@angular/core';
import { Artist } from './artist.model';
@Pipe({
  name: 'searchArtists'
})
export class SearchArtistsPipe implements PipeTransform {

  transform(pipeData: Artist[], pipeModifier: string): any {
    return pipeData.filter(eachItem => {
      return (
        eachItem['name'].toLowerCase().includes(pipeModifier.toLowerCase()) ||
        eachItem['reknown'].toLowerCase().includes(pipeModifier.toLowerCase())
      );
    });
  }
}
