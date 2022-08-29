import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SlidesComponent } from './slides/slides.component';
import { SwiperModule } from 'swiper/angular';
import { CoverComponent } from './cover/cover.component';
import { ContentsComponent } from './contents/contents.component';


@NgModule({
  declarations: [
    AppComponent,
    SlidesComponent,
    CoverComponent,
    ContentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SwiperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
