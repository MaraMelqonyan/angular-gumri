import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpModule} from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent  } from './common/footer/footer.component';
import { BodyViewComponent } from './body-view/body-view.component';
import { TvViewComponent } from './tv-view/tv-view.component';
import { CardsComponent } from './cards/cards.component';
import {HoverDirective} from './hover.directive';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BodyViewComponent,
    TvViewComponent,
    CardsComponent,
    HoverDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
