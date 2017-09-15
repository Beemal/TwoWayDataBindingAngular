import {Injectable} from '@angular/core';

import {Hero} from './hero';
import {HEROES} from './mock-heroes';


//Apply injectable function as Injectable() deorator
@Injectable()
export class HeroService{
        getHeroes(): Promise<Hero[]>{
            return Promise.resolve(HEROES);     
        };  //stub   

        getHeroesSlowly(): Promise<Hero[]> {
            return new Promise(resolve => {
              // Simulate server latency with 2 second delay
              setTimeout(() => resolve(this.getHeroes()), 2000);
            });
        }
        
}

// This is a service class, that can be shared by many components
// Service imports the mock hero data
// Service returns a Promise