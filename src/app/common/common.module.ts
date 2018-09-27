import { NgModule } from '@angular/core';
// @ts-ignore
import { CommonModule } from './common.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
})
// @ts-ignore
export class CommonModule { }
