import { Component, OnInit } from '@angular/core';

import { Hero } from '../core/hero';
// import { HEROES } from '../core/mock-heroes';

import { HeroService } from '../core/hero.service';
import { MessageService } from '../core/message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  // hero: Hero = {
  //   id: 1,
  //   name: 'Windstorm'
  // };

  // heroes = HEROES;
  heroes: Hero[];
  // selectedHero: Hero;

  constructor(
    private heroService: HeroService,
    // private messageSevice: MessageService
  ) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  // onSelect(hero: Hero): void {
  //   this.selectedHero = hero;
  //   this.messageSevice.add(`HeroService: Seleected hero id = ${hero.id}`);
  // }

  // getHeroes(): void {
  //   this.heroes = this.heroService.getHeroes();
  // }
  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }
}
