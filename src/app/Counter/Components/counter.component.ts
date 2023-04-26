import { Component } from "@angular/core";

@Component({
  selector: 'app-counter',
  template: `
    <h3>Contardor = {{contador}}</h3>
    <button (click)="decreaseBy(1)">-1</button>
    <button (click)="resetContador()">Reset</button>
    <button (click)="increaseBy(1)">+1</button>
    `
})
export class CounterComponent{
 public contador: number = 10;

 increaseBy(value: number): void{
  this.contador +=1;
 }

 decreaseBy(value: number): void{
  this.contador -=1;
 }
 resetContador(): void{
  this.contador = 10;
 }


}


