import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.page.html',
  styleUrls: ['./searchbar.page.scss'],
})
export class SearchbarPage implements OnInit {

  albums: any[] = [];
  textoBuscar = '';

  constructor(private dataServide: DataService) { }

  ngOnInit() {
    this.dataServide.getAlbums()
    .subscribe(albums => {
      this.albums = albums;
    });
  }

  buscar( event ) {
    this.textoBuscar = event.detail.value;
  }

}
