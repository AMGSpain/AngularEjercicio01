import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DbzComponent } from './components/main.page.component';



@NgModule({
  declarations: [DbzComponent],
  imports: [CommonModule],
  exports: [CommonModule,DbzComponent],
})
export class DbzModule { }
