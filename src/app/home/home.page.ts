import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  personajes: any = []

  constructor(private http: HttpClient) {
    this.getPersonajes().subscribe(res => {
      console.log("respuesta = ", res)
      this.personajes = res
    })
  }

  getPersonajes() {
    return this.http
    .get('assets/files/starwars.json')
    .pipe(
      map((resp: any) => {
        return resp.data
      }) 
    )
  }

}
