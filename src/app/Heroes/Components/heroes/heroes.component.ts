import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent {
  public name: string = "IronMan";
  public age: number = 45;

  //GETTER:
  get capitalizadName(): string{
    return this.name.toUpperCase();
  }

  getheroDescription(): string{
    return `${this.name}-${this.age}`;
  }

  changeHero(): void{
    //Todo:
    this.name = "Spiderman"
  }

  changeAge(): void{
    this.age = 15;
  }

  resetForm():void{
    this.name = "IronMan";
    this.age = 45;

    //Esto cambia el H1 de arriba:
    document.querySelector('h1')!.innerHTML = '<h1>Desde Angular 2</h1>';
    document.querySelectorAll('h2')!.forEach(element => {element.innerHTML = '<h2>Cambiar todos los</h2>'});
  }
}
