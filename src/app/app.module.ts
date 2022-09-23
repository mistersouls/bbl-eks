import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SlidesComponent } from './slides/slides.component';
import { SwiperModule } from 'swiper/angular';
import { CoverComponent } from './cover/cover.component';
import { ContentsComponent } from './contents/contents.component';
import { CloudNativeComponent } from './cloud-native/cloud-native.component';
import { DisMoiComponent } from './cloud-native/dis-moi/dis-moi.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NetworkComponent } from './network/network.component';
import { VpnComponent } from './vpn/vpn.component';
import { K8sComponent } from './k8s/k8s.component';


@NgModule({
  declarations: [
    AppComponent,
    SlidesComponent,
    CoverComponent,
    ContentsComponent,
    CloudNativeComponent,
    DisMoiComponent,
    NetworkComponent,
    VpnComponent,
    K8sComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SwiperModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
