import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Input()
  public CharacterList: Character[]=[{
    name:'Trunks',
    precio:0
  }];

  @Output()
  public onDeleteId: EventEmitter<number> = new EventEmitter();

  onDeleteCharacter(index:number):void{
    console.log({index})
    this.onDeleteId.emit(index);
  }
}
