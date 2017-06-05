import 'rxjs/add/operator/switchMap';

import { Component, Input, OnInit } from 'angular2/core';
import { ActivatedRoute, Params } from 'angular2/router';
import { Location } from 'angular2/common';

import {Hero} from './hero';
import {HeroService} from './hero.service';

@Component({
  selector: 'hero-detail',
  templateUrl: './app/hero-detail.component.html',
})

export class HeroDetailComponent implements OnInit {
	@Input()
	hero: Hero;

	constructor(
	  private heroService: HeroService,
	  private route: ActivatedRoute,
	  private location: Location
  ) {}

	ngOnInit(): void {
	  this.route.params
	    .switchMap((params: Params) => this.heroService.getHero(+params['id']))
	    .subscribe(hero => this.hero = hero);
  }

	goBack(): void {
	  this.location.back();
	}

}
