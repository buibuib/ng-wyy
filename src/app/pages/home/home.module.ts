import { ShareModule } from './../../share/share.module';
import { NgModule } from '@angular/core';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    ShareModule,
    HomeRoutingModule
  ], exports: [
    ShareModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
