import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HeroComponent } from './hero/hero.component';

@NgModule({
  declarations: [HomeComponent, HeroComponent],
  imports: [SharedModule, HomeRoutingModule],
})
export class HomeModule {}
