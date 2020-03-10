import { Component } from '@angular/core';
import { HeroService } from './hero.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular 수업';
  
  appButton() {
    console.log("app component.ts");
  }

  fruit: string[] = ["apple", "banana", "cherry", "mango"];
  colors = [{name:"red"}, {name:"blue"}, {name:"white"}];

  heroes;
  constructor( hero: HeroService ) {
    this.heroes = hero.Hero;
   }
  // haha: [{name:"string"}] = [{name:"red"}, {name:"blue"}, {name:"white"}];
}
