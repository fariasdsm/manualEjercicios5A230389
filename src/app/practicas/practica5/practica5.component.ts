import { Component } from '@angular/core';

@Component({
  selector: 'app-practica5',
  imports: [],
  templateUrl: './practica5.component.html',
  styleUrl: './practica5.component.css'
})
export class Practica5Component {
  operatingSystems = [{id: 'linux', name: 'Linux'}, {id: 'osx', name: 'MacOS'}, {id: 'windows', name: 'Windows'}];
 users = [{id: 0, name: 'Profe Marco'}, {id: 1, name: 'Profe Vite'}, {id: 2, name: 'Ing. Pepeyo'}, {id: 3, name: 'Al Farias'}, {id: 4, name: 'Jesus Artiaga'}];
}
