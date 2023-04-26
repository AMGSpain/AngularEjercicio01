import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroesComponent } from './Components/heroes/heroes.component';
import { ListComponent } from './Components/list/list.component';
import { LocalizacionComponent } from './Components/localizacion/localizacion.component';

@NgModule({
  declarations: [HeroesComponent,ListComponent,LocalizacionComponent],
  imports: [ CommonModule ],
  exports: [HeroesComponent,ListComponent,LocalizacionComponent],
})
export class HeroesModule {}
