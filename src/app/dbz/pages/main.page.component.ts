import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: '../pages/main.page.component.html',
  styleUrls:['../pages/main.page.component.css']

})

export class MainPageComponent {

  public characters: Character[]=[{
    name:'Bmw',
    precio:50000
  },{
    name:'Mini',
    precio:35000
  },{
    name:'Fiat',
    precio:23000
  }];

  onNewCharacter(character:Character):void{
    this.characters.push(character);
    console.log('MainPage');
    console.log(character);
  }

  onDeleteCharacter(index:number){
    this.characters.splice(index);
  }
}
