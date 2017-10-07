import { Component, OnInit } from '@angular/core';
 
import { Hero } from './hero';
import { HeroService } from './hero.service';
 
@Component({
  selector: 'my-heroes',
  template: `
    <h1>{{title}}</h1>
    <h2>My Heroes</h2>
    <ul class="heroes">
      <li *ngFor="let hero of heroes"
        [class.selected]="hero === selectedHero"
        (click)="onSelect(hero)">
        <span class="badge">{{hero.id}}</span> {{hero.name}}
      </li>
    </ul>
    <hero-detail [hero]="selectedHero"></hero-detail>
  `,
  styleUrls: ['./app.component.css']
})
export class HeroesComponent implements OnInit {
	
  heroes: Hero[];
  selectedHero: Hero;
 
  constructor(private heroService: HeroService) { }
 
  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  	//this.heroes = this.heroService.getHeroes();
  }
 
  ngOnInit(): void {
    this.getHeroes();
  }
 
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}