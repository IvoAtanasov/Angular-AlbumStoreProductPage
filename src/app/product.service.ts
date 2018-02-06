import { Injectable } from '@angular/core';
import {Http} from '@angular/core';
import {Response} from '@angular/core';
import 'import rxjs/add/operator/map'

@Injectable()
export class ProductService {
 _albumUrl = "../assets/album.json"
  constructor() { }
  getAlbum(id: number){
    return this._http.get(_albumUrl).map((response
      =>response.json()));
  }
}
